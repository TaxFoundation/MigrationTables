// Create variables for building the query, which is passed to migration-data.php
var endYear = document.getElementById('end-year').value;
var startYear = document.getElementById('start-year').value;
var state = document.getElementById('state').value;
var flow = "net";
var flows = document.getElementsByName('flow');
for (var i = 0, length = flows.length; i < length; i++) {
    if (flows[i].checked) {
        flow = flows[i];
        break;
    }
}

// Build the query to get our JSON
var query = "migration-data.php?state="+state+"&endyear="+endYear+"&startyear="+startYear;


d3.json(query, function(error, data) {
	if (error) return console.warn(error);
});


// Update query variables and request new data when users change options
function updateSelection() {
	endYear = document.getElementById('end-year').value;
	startYear = document.getElementById('start-year').value;
	state = document.getElementById('state').value;
	console.log(endYear + " " + startYear + " " + state);

	query = "migration-data.php?state="+state+"&endyear="+endYear+"&startyear="+startYear;

	d3.json(query, function(error, data) {
		if (error) return console.warn(error);
		console.log(data);
	});
}