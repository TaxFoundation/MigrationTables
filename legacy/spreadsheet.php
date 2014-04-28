<?php

$table = json_decode($_POST["tableString"]);

header("Content-type: text/csv");
header("Content-Disposition: attachment; filename=file.csv");
header("Pragma: no-cache");
header("Expires: 0");

echo '"Reference State",'.$_POST["state"]."\n";
echo '"Start Year",'.$_POST["startYear"]."\n";
echo '"End Year",'.$_POST["endYear"]."\n";
echo '"Mode",',$_POST["mode"]."\n";
echo '"Dollars are",',$_POST["inflation"]."\n";

for ($i = 0;$i<count($table);$i++) {
	for ($j = 0;$j<count($table[$i]);$j++) {
		echo '"'.$table[$i][$j].'",';	
	}
	echo "\n";
}

?>