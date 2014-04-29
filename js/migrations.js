// Declare variables for building the query, which is passed to migration-data.php through 'updateSelection'
var endYear = "";
var startYear = "";
var state = "";
var flow = "";
var flows = "";

// Take the flow type 'f' and state value 's' and return the correct table header
var generateHeadings = function(f, s) {
	if (f == "in") {
		return [
		"Source State",
		"Total # Returns Into " + stateNames[state].name,
		"Total # Exemptions Into " + stateNames[state].name,
		"Total AGI Into " + stateNames[state].name + " (thousands)"
		];
	} else if (f == "out") {
		return [
		"Destination State",
		"Total # Returns Out of " + stateNames[state].name,
		"Total # Exemptions Out of " + stateNames[state].name,
		"Total AGI Out of " + stateNames[state].name + " (thousands)"
		];
	} else {
		return [
		"Source State",
		"Net # Returns Into " + stateNames[state].name,
		"Net # Exemptions Into " + stateNames[state].name,
		"Net AGI Into " + stateNames[state].name + " (thousands)"
		];
	}
};

// Take the flow type 'f' and the JSON data 'd' per state and returns the correct data to display
var displayData = function(f, d) {
	var r = 0;
	var e = 0;
	var agi = 0;
	if (f != "net") {

		for (var i in d[f].r) {
			r += d[f].r[i];
			e += d[f].e[i];
			agi += d[f].agi[i];
		}
	} else {
		for (var j in d.in.r) {
			r += (d.in.r[j] - d.out.r[j]);
			e += (d.in.e[j] - d.out.e[j]);
			agi += (d.in.agi[j] - d.out.agi[j]);
		}
	}
	return [r, e, agi];
};

// Generate the table from data
var generateTable = function(q) {
	d3.json(q, function(error, data) {
		if (error) { return console.warn(error); }
		console.log(data);
		d3.select(".section").remove();

		// Bind out data to the table
		var dataTable = d3.select("#data-table");

		// Create our table header
		var dataHeader = dataTable.append("thead").attr("class", "section").append("tr");
		var headings = generateHeadings(flow, state);
		for (var heading in headings) {
			dataHeader.append("th").text(headings[heading]);
		}

		// var dataBody = dataTable.append("tbody").attr("class", "section")
		// 	.data(data[state])
		// .enter()
			
		// Continue here...
	});
};

// Update query variables and request new data when users change options, then generate new table
function updateSelection() {
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
	console.log(endYear + " " + startYear + " " + state + " " + flow);

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