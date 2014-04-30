// Declare variables for building the query, which is passed to migration-data.php through 'updateSelection'
var endYear = "";
var startYear = "";
var state = "";
var flow = "";
var flows = "";
var yearMenus = false;

// Get the data
var defaultQuery = "migration-data.php?state=AL&endyear=2011&startyear=2010";
var initialData = {};
d3.json(defaultQuery, function(error, d) {
	if (error) { return console.warn(error); }
	console.log(d);
	initialData = d;
});

// Take the flow type 'f' and state value 's' and return the correct table header
function generateHeadings(f, s) {
	if (f == "in") {
		return [
		"Source State",
		"Total # Returns Into " + stateNames[s].name,
		"Total # Exemptions Into " + stateNames[s].name,
		"Total AGI Into " + stateNames[s].name + " (thousands)"
		];
	} else if (f == "out") {
		return [
		"Destination State",
		"Total # Returns Out of " + stateNames[s].name,
		"Total # Exemptions Out of " + stateNames[s].name,
		"Total AGI Out of " + stateNames[s].name + " (thousands)"
		];
	} else {
		return [
		"Source State",
		"Net # Returns Into " + stateNames[s].name,
		"Net # Exemptions Into " + stateNames[s].name,
		"Net AGI Into " + stateNames[s].name + " (thousands)"
		];
	}
}

// Generate the menus for selecting years using the lowest starting year 's' and highest ending year 'e'
function generateMenus(s, e) {
	var form = d3.select("#data-menu");

	var end = form.insert("select", "#state")
		.attr("id", "end-year")
		.attr("onChange", "updateSelection();");
	var ends = end.selectAll("option")
		.data(d3.range(e,s,-1))
	.enter()
		.append("option")
		.attr("value", function(d){return d;})
		.text(function(d){return d;});

	var start = form.insert("select", "#end-year")
		.attr("id", "start-year")
		.attr("onChange", "updateSelection();");
	var starts = start.selectAll("option")
		.data(d3.range(e-1,s-1,-1))
	.enter()
		.append("option")
		.attr("value", function(d){return d;})
		.text(function(d){return d;});
}

// Take the flow type 'f' and the JSON data 'd' per state and returns the correct data to display
function displayData(f, d) {
	var results = [];
	var n = "";
	var r = 0;
	var e = 0;
	var agi = 0;
	for (var entry in d) {
		n = stateNames[entry].name;
		r = 0;
		e = 0;
		agi = 0;
		if (f != "net") {
			for (var i in d[entry][f].r) {
				r += parseInt(d[entry][f].r[i]);
				e += parseInt(d[entry][f].e[i]);
				agi += parseInt(d[entry][f].agi[i]);
			}
		} else {
			for (var j in d[entry].in.r) {
				r += d[entry].in.r[j] - d[entry].out.r[j];
				e += d[entry].in.e[j] - d[entry].out.e[j];
				agi += d[entry].in.agi[j] - d[entry].out.agi[j];
			}
		}
		results.push([n, r, e, agi]);
	}
	return results;
}

// Generate the table from data
function generateTable(q) {
	d3.json(q, function(error, data) {
		if (error) { return console.warn(error); }

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
		var tr = tbody.selectAll("tr").data(migrations).enter().append("tr");
		var td = tr.selectAll("td").data(function(d){return d;}).enter().append("td").text(function(d){return d;});
	});
}

// Update query variables and request new data when users change options, then generate new table
function updateSelection() {
	if (!yearMenus) {
		generateMenus(parseInt(initialData.minStartYear), parseInt(initialData.maxEndYear));
		yearMenus = true;
	}
	endYear = document.getElementById('end-year').value;
	startYear = document.getElementById('start-year').value;
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