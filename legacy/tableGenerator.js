// JavaScript Document

function TableToJSON(tableID) {
	var returnObject = [];
	table = document.getElementById(tableID);
	for (var i = 0; i<table.rows.length;i++) {
		returnObject[i] = new Array;
		for (var j =0; j<table.rows[i].cells.length;j++) {
			if (table.rows[i].cells[j].textContent != null) {
				returnObject[i][j] = table.rows[i].cells[j].textContent;
			} else {
				returnObject[i][j] = table.rows[i].cells[j].innerText;
			}
		}
	}
	
	return returnObject;
}

function GraphTableButton() {
	try {
		document.graphSpreadsheet.tableJSON.value = JSON.stringify(TableToJSON("dataTable"));
		document.graphSpreadsheet.toState.value = states_arr[document.getElementById("state1select").value*1];
		document.graphSpreadsheet.fromState.value = states_arr[document.getElementById("state2select").value*1];
		if (document.getElementById("inflationBox").checked == true) {
			document.graphSpreadsheet.adjusted.value = "Real";
		} else {
			document.graphSpreadsheet.adjusted.value = "Nominal";	
		}
		
		
		
		var mode_val;
    	var radioBox = document.getElementsByName("modeRadio");
    	for (i = 0; i <= 2; i++) {
       		if (radioBox[i].checked == true) {
            	mode_val = i;
        	}
    	}
		mode_val = mode_val*1;
		
		switch (mode_val) {
		case 0:
		document.graphSpreadsheet.mode.value = "Returns"
		break;
		case 1:
		document.graphSpreadsheet.mode.value = "Exemptions"
		break;
		case 2:
		document.graphSpreadsheet.mode.value = "AGI"
		break;
		}
		document.graphSpreadsheet.submit();
	} catch (ex) {
		alert(ex);
	}
}

function TableButton() {
	try {	
		document.getElementById("tableStringInput").value = JSON.stringify(TableToJSON("mainTable"));
		document.getElementById("startYearInput").value = document.getElementById("startingYearSelector").value;
		document.getElementById("endYearInput").value = document.getElementById("endingYearSelector").value;
		document.getElementById("stateInput").value = states_arr[document.getElementById("StateSelector").value];
		
		if (document.getElementById("inflationAdjustBox").checked==true) {
			document.getElementById("inflationInput").value = "Real";
		} else {
			document.getElementById("inflationInput").value = "Nominal";
		}
		
    	var mode_val;
    	var radioBox = document.getElementsByName("inOutNet");
    	for (i = 0; i <= 2; i++) {
       		if (radioBox[i].checked == true) {
            	mode_val = i;
        	}
    	}
		mode_val = mode_val*1;
		
		switch (mode_val) {
		case 0:
		document.getElementById("modeInput").value = "Out"
		break;
		case 1:
		document.getElementById("modeInput").value = "In"
		break;
		case 2:
		document.getElementById("modeInput").value = "Net"
		break;
		}
		
		document.getElementById("table_post").submit();
	} catch (ex) {
		alert(ex);
	}
}

var states_arr = [];
states_arr[1]='Alabama';
states_arr[2]='Alaska';
states_arr[4]='Arizona';
states_arr[5]='Arkansas';
states_arr[6]='California';
states_arr[8]='Colorado';
states_arr[9]='Connecticut';
states_arr[10]='Delaware';
states_arr[11]='District of Columbia';
states_arr[12]='Florida';
states_arr[13]='Georgia';
states_arr[15]='Hawaii';
states_arr[16]='Idaho';
states_arr[17]='Illinois';
states_arr[18]='Indiana';
states_arr[19]='Iowa';
states_arr[20]='Kansas';
states_arr[21]='Kentucky';
states_arr[22]='Louisiana';
states_arr[23]='Maine';
states_arr[24]='Maryland';
states_arr[25]='Massachusetts';
states_arr[26]='Michigan';
states_arr[27]='Minnesota';
states_arr[28]='Mississippi';
states_arr[29]='Missouri';
states_arr[30]='Montana';
states_arr[31]='Nebraska';
states_arr[32]='Nevada';
states_arr[33]='New Hampshire';
states_arr[34]='New Jersey';
states_arr[35]='New Mexico';
states_arr[36]='New York';
states_arr[37]='North Carolina';
states_arr[38]='North Dakota';
states_arr[39]='Ohio';
states_arr[40]='Oklahoma';
states_arr[41]='Oregon';
states_arr[42]='Pennsylvania';
states_arr[44]='Rhode Island';
states_arr[45]='South Carolina';
states_arr[46]='South Dakota';
states_arr[47]='Tennessee';
states_arr[48]='Texas';
states_arr[49]='Utah';
states_arr[50]='Vermont';
states_arr[51]='Virginia';
states_arr[53]='Washington';
states_arr[54]='West Virginia';
states_arr[55]='Wisconsin';
states_arr[56]='Wyoming';
states_arr[99]='All States';
