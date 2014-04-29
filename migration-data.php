<?php

require_once('config.php');

// Connect to database, see config.php for details
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

// Set default values used in queries
$endyear = 2011;
$startyear = 2010;
$state = 1;

// Discover the full range of years and reset defaults,
// allows for updating of range year-to-year with new data.
// The variables $startyear and $minStartYear are reduced by 1
// to reflect that each "year" of data is a change between years,
// so data ending in 2010 is changed from 2009 (the beginning).
// Beginning years are not recorded in the data, so the -1 fixes that.
$findYears = "SELECT `Year` FROM " . DB_DATABASE . "." . DB_TABLE . "
			WHERE `State` = '" . $state . "' AND `OtherState` = '" . $state . "'
			ORDER BY `Year`";
$findYearsResult = $mysqli->query($findYears);
$maxEndYear = 2011;
$minStartYear = 2010;
while ($row = $findYearsResult->fetch_array(MYSQLI_ASSOC)) {
	if ($row['Year'] > $endyear) { $endyear = $row['Year']; $maxEndYear = $row['Year']; }
	if ($row['Year'] < $startyear) { $startyear = $row['Year']; $minStartYear = $row['Year'];}
}
$startyear -= 1;
$minStartYear -= 1;

// Get user's query criteria
if (isset($_GET['endyear'])) {
	if ($_GET['endyear'] <= $endyear && $_GET['endyear'] > $startyear) {
		$endyear = mysqli_real_escape_string($mysqli,$_GET['endyear']);
	}
}
if (isset($_GET['startyear'])) {
	if ($_GET['startyear'] >= $startyear && $_GET['startyear'] < $endyear) {
		$startyear = mysqli_real_escape_string($mysqli,$_GET['startyear']);
	}
}
if (isset($_GET['state'])) {
	$state = mysqli_real_escape_string($mysqli,$_GET['state']);
}

// Two queries, one to pull inflows and one to pull outflows.
// Inflows to A from B == Outflows from B to A.
$queryInflow = "SELECT * FROM " . DB_DATABASE . "." . DB_TABLE . "
			WHERE `State` = '" . $state . "'
			AND `Year` > " . $startyear . " AND `Year` <= " . $endyear . "
			ORDER BY `id`";

$queryOutflow = "SELECT * FROM " . DB_DATABASE . "." . DB_TABLE . "
			WHERE `OtherState` = '" . $state . "'
			AND `Year` > " . $startyear . " AND `Year` <= " . $endyear . "
			ORDER BY `id`";

$inflowResult = $mysqli->query($queryInflow);
$outflowResult = $mysqli->query($queryOutflow);
$mysqli->close();

$output = array();
$output['maxEndYear'] = $maxEndYear;
$output['minStartYear'] = $minStartYear;

// Add query results to single array for output
// Variable names shortened to reduce data size
// 'in' = Inflows, 'out' = Outflows, 'r' = Returns, 'e' = Exemptions
while ($row = $inflowResult->fetch_array(MYSQLI_ASSOC)) {
	// Set Inflow Data
	$output[$state][$row['OtherState']]["in"]["r"][$row['Year']] = $row['InflowReturns'];
	$output[$state][$row['OtherState']]["in"]["e"][$row['Year']] = $row['InflowExemptions'];
	$output[$state][$row['OtherState']]["in"]["agi"][$row['Year']] = $row['InflowAGI'];
}
while ($row = $outflowResult->fetch_array(MYSQLI_ASSOC)) {
	// Set Outflow Data
	$output[$state][$row['State']]["out"]["r"][$row['Year']] = $row['InflowReturns'];
	$output[$state][$row['State']]["out"]["e"][$row['Year']] = $row['InflowExemptions'];
	$output[$state][$row['State']]["out"]["agi"][$row['Year']] = $row['InflowAGI'];
}

// Echo results as JSON for use in browser
echo json_encode($output);

?>