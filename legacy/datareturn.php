<?php

require_once('config.php');

$endyear = $_GET['endyear'];
$startyear = $_GET['startyear'];
$mode = $_GET['mode'];
$state= $_GET['state'];

if ($mode == 1) {
	$query = "SELECT `Return_Num`,`Exmpt_Num`,`Aggr_AGI`,`EndYear`,`State_Code_Origin`
		 	  FROM tfinteractive.migration
		 	  WHERE `State_Code_Dest` = '" .$state ."' AND `EndYear` <= " .$endyear. " AND `EndYear` > ".$startyear."
			  ORDER BY `EndYear`";
} else {
	$query = "SELECT `Return_Num`,`Exmpt_Num`,`Aggr_AGI`,`EndYear`,`State_Code_Dest`
		 	  FROM tfinteractive.migration
		 	  WHERE `State_Code_Origin` = '" .$state ."' AND `EndYear` <= " .$endyear. " AND `EndYear` > ".$startyear."
			  ORDER BY `EndYear`";
}

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
$result = $mysqli->query($query);
$mysqli->close();
$dataArray = array();
$returnArray = array();
$previousyear = 0;
while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
	if ($currentyear != $previousyear) {
		$dataArray = array();
	}
	if ($mode == 1) $altState = $row['State_Code_Origin'];
	else $altState = $row['State_Code_Dest'];
	$altState = intval($altState);
	$dataArray[$altState] = array();
	$dataArray[$altState][0] = $row['Return_Num'];
	$dataArray[$altState][1] = $row['Exmpt_Num'];
	$dataArray[$altState][2] = $row['Aggr_AGI'];
	$currentyear = $row['EndYear'];
	if ($currentyear != $previousyear) {
		$returnArray[$currentyear]=$dataArray;
		$currentyear = $previousyear;
	}
}

$returnString = json_encode($returnArray);
echo $returnString;


?>