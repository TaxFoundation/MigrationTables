/*
Dynamically updating data table generator for IRS US population migration data.
Data source: [http://www.irs.gov/uac/SOI-Tax-Stats-Migration-Data]
Written for the Tax Foundation [taxfoundation.org] by Tom VanAntwerp [tomvanantwerp.com].
Utilizing the D3.js framework by Mike Bostock. [d3js.org]
Version 0.1.1
*/

// Declare variables for building the query, which is passed to migration-data.php through 'updateSelection'
var endYear = 2011;
var startYear = 2010;
var state = 1;
var flow = "net";
var flows = "";
var dollarFormat = d3.format("$,");

// Get the data
var query = "migration-data.php?state="+state+"&endyear="+endYear+"&startyear="+startYear;
generateTable(query, true);

// Take the flow type 'f' and state value 's' and return the correct table header
function generateHeadings(f, s) {
	if (f == "in") {
		return [
		"Source State",
		"Total # Returns Into " + stateNames[s].name,
		"Total # Exemptions Into " + stateNames[s].name,
		"Total AGI Into " + stateNames[s].name
		];
	} else if (f == "out") {
		return [
		"Destination State",
		"Total # Returns Out of " + stateNames[s].name,
		"Total # Exemptions Out of " + stateNames[s].name,
		"Total AGI Out of " + stateNames[s].name
		];
	} else {
		return [
		"Source State",
		"Net # Returns Into " + stateNames[s].name,
		"Net # Exemptions Into " + stateNames[s].name,
		"Net AGI Into " + stateNames[s].name
		];
	}
}

// Generate the menus for selecting years using the lowest starting year 's' and highest ending year 'e'
function generateMenus(s, e) {
	var form = d3.select("#data-menu");

	// Created the menu for selecting the ending year
	var end = form.insert("label", ":first-child").html("<strong>Ending Year</strong>").append("select") //Insert menu before state selection
		.attr("id", "end-year")
		.attr("onChange", "updateSelection();");
	var ends = end.selectAll("option")
		.data(d3.range(e,s,-1)) //Create year range from maximum ending year to the lowest starting year plus one
	.enter()
		.append("option")
		.attr("value", function(d){return d;})
		.text(function(d){return d;});

	// Create the menu for selecting the beginning year
	var start = form.insert("label", ":first-child").html("<strong>Starting Year</strong>").append("select") //Insert menu before ending year selection
		.attr("id", "start-year")
		.attr("onChange", "updateSelection();");
	var starts = start.selectAll("option")
		.data(d3.range(e-1,s-1,-1)) //Create year range from maximum ending year minus one to the lowest starting year
	.enter()
		.append("option")
		.attr("value", function(d){return d;})
		.text(function(d){return d;});
}

// Take the flow type 'f' and the JSON data 'd' per state and returns the correct data to display
function displayData(f, d) {
	// Declare scoped variables: 'n' for name, 'r' for returns, 'e' for exemptions, 'agi' for...well, AGI.
	var results = [];
	var n = "";
	var r = 0;
	var e = 0;
	var agi = 0;
	for (var entry in d) {
		// Set the name for each state row, and zero-out values from previous calculations
		n = stateNames[entry].name;
		r = 0;
		e = 0;
		agi = 0;
		if (f != "net") { //Calculate specific flows, designated by 'f'
			for (var i in d[entry][f].r) {
				r += parseInt(d[entry][f].r[i]);
				e += parseInt(d[entry][f].e[i]);
				agi += parseInt(d[entry][f].agi[i]);
			}
		} else { //Calculate net flows
			for (var j in d[entry].in.r) {
				r += d[entry].in.r[j] - d[entry].out.r[j];
				e += d[entry].in.e[j] - d[entry].out.e[j];
				agi += d[entry].in.agi[j] - d[entry].out.agi[j];
			}
		}
		results.push([n, r, e, agi*1000]); //Add each state row with name and values to results
	}
	return results;
}

// Generate the table from data
function generateTable(q, m) {
	d3.json(q, function(error, data) {
		if (error) { return console.warn(error); }
		if (m) {
			generateMenus(parseInt(data.minStartYear), parseInt(data.maxEndYear));
		}
		// Wipe away any old table data
		d3.selectAll("tr").remove();

		// Select the table
		var table = d3.select("#data-table");

		// Create our table header
		var thead = table.select("thead").append("tr");
		var th = thead.selectAll("th")
			.data(generateHeadings(flow, state))
		.enter()
			.append("th")
			.text(function(d){return d;});

		// Create our table body
		var migrations = displayData(flow, data[state]);
		var tbody = table.select("tbody");
		var tr = tbody.selectAll("tr")
			.data(migrations)
		.enter()
			.append("tr");
		var td = tr.selectAll("td")
			// We set the data as a new array 'f' so we can format the values without changing the raw data
			// By doing this, the 'migrations' variable is still available for calculations and results
			// appear as dollar values.
			.data(function(d){
				var f = [];
				f[0] = d[0];
				f[1] = d[1];
				f[2] = d[2];
				f[3] = dollarFormat(d[3]);
				return f;
			})
		.enter()
			.append("td")
			.text(function(d){return d;});

		// Add a row with totals at the bottom
		var totals = tbody.append("tr").attr("class", "totals");
		totals.append("td").text("Totals");
		var totalReturns = 0;
		var totalExemptions = 0;
		var totalAGI = 0;
		for (var rows in migrations) {
			totalReturns += migrations[rows][1];
			totalExemptions += migrations[rows][2];
			totalAGI += (migrations[rows][3]);
		}
		totals.append("td").text(totalReturns);
		totals.append("td").text(totalExemptions);
		totals.append("td").text(dollarFormat(totalAGI));

		d3.select("#csvDownload")
		.attr("href", encodeURI(createCSV(migrations,flow,state,startYear,endYear)))
		.attr("download", flow + "-migration-for-" + stateNames[state].name + "-" + startYear + "-" + endYear + ".csv");
	});
}

// If someone chooses a start year after the end year, set the start year to 'endYear' -1.
// Takes menu 'm' and end year 'e'.
function fixStart(m, e) {
	for (var k = 0; k < m.options.length; k++) {
		if (m.options[k].value == e - 1) {
			m.options[k].selected = true;
		}
	}
}

// Update query variables and request new data when users change options, then generate new table
function updateSelection(yearMenus) {
	endYear = document.getElementById('end-year').value;
	startYear = document.getElementById('start-year').value;
	if (startYear >= endYear) {
		fixStart(document.getElementById('start-year'), endYear);
	}
	state = document.getElementById('state').value;
	flows = document.getElementsByName('flow');
	for (var i = 0, length = flows.length; i < length; i++) {
		if (flows[i].checked) {
			flow = flows[i].value;
			break;
		}
	}

	query = "migration-data.php?state="+state+"&endyear="+endYear+"&startyear="+startYear;

	generateTable(query);
}

// Convert data in array-of-arrays format to CSV format
function createCSV(data, f, s, y1, y2) {
	var content = "data:text/csv;charset=utf-8,";
	var title = capitalize(f) + " Migration for " + stateNames[s].name + " from " + y1 + " to " + y2 + ",,";
	var header = "Returns,Exemptions,AGI";
	var row = title + "\n" + header;
	content += row;

	for (var i = 0; i < data.length; i++) {
		row = data[i].join(",");
		content += "\n" + row;
	}

	content += "\nData Compiled by the Tax Foundation,,";

	return content;
}

function capitalize(s) {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

// Object containing the ANSI abbreviates and full names of the 50 US states plus DC.
// Indexed according to numeric ANSI codes, hence the non-sequential numbering
var stateNames = {
 1: {"ansi": "AL", "name": "Alabama"},
 2: {"ansi": "AK", "name": "Alaska"},
 4: {"ansi": "AZ", "name": "Arizona"},
 5: {"ansi": "AR", "name": "Arkansas"},
 6: {"ansi": "CA", "name": "California"},
 8: {"ansi": "CO", "name": "Colorado"},
 9: {"ansi": "CT", "name": "Connecticut"},
10: {"ansi": "DE", "name": "Delaware"},
11: {"ansi": "DC", "name": "District of Columbia"},
12: {"ansi": "FL", "name": "Florida"},
13: {"ansi": "GA", "name": "Georgia"},
15: {"ansi": "HI", "name": "Hawaii"},
16: {"ansi": "ID", "name": "Idaho"},
17: {"ansi": "IL", "name": "Illinois"},
18: {"ansi": "IN", "name": "Indiana"},
19: {"ansi": "IA", "name": "Iowa"},
20: {"ansi": "KS", "name": "Kansas"},
21: {"ansi": "KY", "name": "Kentucky"},
22: {"ansi": "LA", "name": "Louisiana"},
23: {"ansi": "ME", "name": "Maine"},
24: {"ansi": "MD", "name": "Maryland"},
25: {"ansi": "MA", "name": "Massachusetts"},
26: {"ansi": "MI", "name": "Michigan"},
27: {"ansi": "MN", "name": "Minnesota"},
28: {"ansi": "MS", "name": "Mississippi"},
29: {"ansi": "MO", "name": "Missouri"},
30: {"ansi": "MT", "name": "Montana"},
31: {"ansi": "NE", "name": "Nebraska"},
32: {"ansi": "NV", "name": "Nevada"},
33: {"ansi": "NH", "name": "New Hampshire"},
34: {"ansi": "NJ", "name": "New Jersey"},
35: {"ansi": "NM", "name": "New Mexico"},
36: {"ansi": "NY", "name": "New York"},
37: {"ansi": "NC", "name": "North Carolina"},
38: {"ansi": "ND", "name": "North Dakota"},
39: {"ansi": "OH", "name": "Ohio"},
40: {"ansi": "OK", "name": "Oklahoma"},
41: {"ansi": "OR", "name": "Oregon"},
42: {"ansi": "PA", "name": "Pennsylvania"},
44: {"ansi": "RI", "name": "Rhode Island"},
45: {"ansi": "SC", "name": "South Carolina"},
46: {"ansi": "SD", "name": "South Dakota"},
47: {"ansi": "TN", "name": "Tennessee"},
48: {"ansi": "TX", "name": "Texas"},
49: {"ansi": "UT", "name": "Utah"},
50: {"ansi": "VT", "name": "Vermont"},
51: {"ansi": "VA", "name": "Virginia"},
53: {"ansi": "WA", "name": "Washington"},
54: {"ansi": "WV", "name": "West Virginia"},
55: {"ansi": "WI", "name": "Wisconsin"},
56: {"ansi": "WY", "name": "Wyoming"}};