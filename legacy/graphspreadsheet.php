<?php

$table = json_decode($_POST["tableJSON"]);

header("Content-type: text/csv");
header("Content-Disposition: attachment; filename=file.csv");
header("Pragma: no-cache");
header("Expires: 0");

echo '"To State",'.$_POST["toState"]."\n";
echo '"From State",'.$_POST["fromState"]."\n";
echo '"Showing",'.$_POST["mode"]."\n";
echo '"Dollars are",',$_POST["adjusted"]."\n";

for ($i = 0;$i<count($table);$i++) {
	for ($j = 0;$j<count($table[$i]);$j++) {
		echo '"'.$table[$i][$j].'",';	
	}
	echo "\n";
}

?>