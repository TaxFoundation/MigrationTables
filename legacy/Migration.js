var debugAlertCounter = 0;
var maxAlerts = 5;
var exemptionsOutTotal = new Array();
var returnsOutTotal = new Array();
var AGIOutTotal = new Array();
var exemptionsInTotal = new Array();
var returnsInTotal = new Array();
var AGIInTotal = new Array();
var netReturnsArray = new Array();
var netExemptionsArray = new Array();
var netAGIArray = new Array();
var stateIndexMap = new Array();
returnsOut = new Array();
exemptionsOut = new Array();
AGIOut = new Array();
returnsIn = new Array();
exemptionsIn = new Array();
AGIIn = new Array();

var stateNames = new Array();
	stateNames[1] = "Alabama";
	stateNames[2] = "Alaska";
	stateNames[4] = "Arizona";
	stateNames[5] = "Arkansas";
	stateNames[6] = "California";
	stateNames[8] = "Colorado";
	stateNames[9] = "Connecticut";
	stateNames[10] = "Delaware";
	stateNames[11] = "District of Columbia";
	stateNames[12] = "Florida";
	stateNames[13] = "Georgia";
	stateNames[15] = "Hawaii";
	stateNames[16] = "Idaho";
	stateNames[17] = "Illinois";
	stateNames[18] = "Indiana";
	stateNames[19] = "Iowa";
	stateNames[20] = "Kansas";
	stateNames[21] = "Kentucky";
	stateNames[22] = "Louisiana";
	stateNames[23] = "Maine";
	stateNames[24] = "Maryland";
	stateNames[25] = "Massachusetts";
	stateNames[26] = "Michigan";
	stateNames[27] = "Minnesota";
	stateNames[28] = "Mississippi";
	stateNames[29] = "Missouri";
	stateNames[30] = "Montana";
	stateNames[31] = "Nebraska";
	stateNames[32] = "Nevada";
	stateNames[33] = "New Hampshire";
	stateNames[34] = "New Jersey";
	stateNames[35] = "New Mexico";
	stateNames[36] = "New York";
	stateNames[37] = "North Carolina";
	stateNames[38] = "North Dakota";
	stateNames[39] = "Ohio";
	stateNames[40] = "Oklahoma";
	stateNames[41] = "Oregon";
	stateNames[42] = "Pennsylvania";
	stateNames[44] = "Rhode Island";
	stateNames[45] = "South Carolina";
	stateNames[46] = "South Dakota";
	stateNames[47] = "Tennessee";
	stateNames[48] = "Texas";
	stateNames[49] = "Utah";
	stateNames[50] = "Vermont";
	stateNames[51] = "Virginia";
	stateNames[53] = "Washington";
	stateNames[54] = "West Virginia";
	stateNames[55] = "Wisconsin";
	stateNames[56] = "Wyoming";
	stateNames[99] = "All States";

var stateBurdenLinks = new Array();
	stateBurdenLinks[1] = 439;
	stateBurdenLinks[2] = 440;
	stateBurdenLinks[4] = 441;
	stateBurdenLinks[5] = 442;
	stateBurdenLinks[6] = 443;
	stateBurdenLinks[8] = 444;
	stateBurdenLinks[9] = 445;
	stateBurdenLinks[10] = 446;
	stateBurdenLinks[11] = 335;
	stateBurdenLinks[12] = 447;
	stateBurdenLinks[13] = 448;
	stateBurdenLinks[15] = 449;
	stateBurdenLinks[16] = 451;
	stateBurdenLinks[17] = 452;
	stateBurdenLinks[18] = 453;
	stateBurdenLinks[19] = 454;
	stateBurdenLinks[20] = 455;
	stateBurdenLinks[21] = 456;
	stateBurdenLinks[22] = 457;
	stateBurdenLinks[23] = 458;
	stateBurdenLinks[24] = 459;
	stateBurdenLinks[25] = 460;
	stateBurdenLinks[26] = 461;
	stateBurdenLinks[27] = 462;
	stateBurdenLinks[28] = 463;
	stateBurdenLinks[29] = 464;
	stateBurdenLinks[30] = 465;
	stateBurdenLinks[31] = 466;
	stateBurdenLinks[32] = 467;
	stateBurdenLinks[33] = 468;
	stateBurdenLinks[34] = 469;
	stateBurdenLinks[35] = 470;
	stateBurdenLinks[36] = 471;
	stateBurdenLinks[37] = 472;
	stateBurdenLinks[38] = 473;
	stateBurdenLinks[39] = 474;
	stateBurdenLinks[40] = 475;
	stateBurdenLinks[41] = 476;
	stateBurdenLinks[42] = 477;
	stateBurdenLinks[44] = 478;
	stateBurdenLinks[45] = 479;
	stateBurdenLinks[46] = 480;
	stateBurdenLinks[47] = 481;
	stateBurdenLinks[48] = 482;
	stateBurdenLinks[49] = 483;
	stateBurdenLinks[50] = 484;
	stateBurdenLinks[51] = 485;
	stateBurdenLinks[53] = 486;
	stateBurdenLinks[54] = 487;
	stateBurdenLinks[55] = 488;
	stateBurdenLinks[56] = 489;
	stateBurdenLinks[99] = 335;
	
	var statePageLinks = new Array();
	statePageLinks[1] = 10;
	statePageLinks[2] = 11;
	statePageLinks[4] = 13;
	statePageLinks[5] = 14;
	statePageLinks[6] = 15;
	statePageLinks[8] = 16;
	statePageLinks[9] = 17;
	statePageLinks[10] = 18;
	statePageLinks[11] = 19;
	statePageLinks[12] = 21;
	statePageLinks[13] = 22;
	statePageLinks[15] = 24;
	statePageLinks[16] = 25;
	statePageLinks[17] = 26;
	statePageLinks[18] = 27;
	statePageLinks[19] = 28;
	statePageLinks[20] = 29;
	statePageLinks[21] = 30;
	statePageLinks[22] = 31;
	statePageLinks[23] = 32;
	statePageLinks[24] = 34;
	statePageLinks[25] = 35;
	statePageLinks[26] = 36;
	statePageLinks[27] = 37;
	statePageLinks[28] = 38;
	statePageLinks[29] = 39;
	statePageLinks[30] = 40;
	statePageLinks[31] = 41;
	statePageLinks[32] = 42;
	statePageLinks[33] = 43;
	statePageLinks[34] = 44;
	statePageLinks[35] = 45;
	statePageLinks[36] = 46;
	statePageLinks[37] = 47;
	statePageLinks[38] = 48;
	statePageLinks[39] = 50;
	statePageLinks[40] = 51;
	statePageLinks[41] = 52;
	statePageLinks[42] = 54;
	statePageLinks[44] = 56;
	statePageLinks[45] = 57;
	statePageLinks[46] = 58;
	statePageLinks[47] = 59;
	statePageLinks[48] = 60;
	statePageLinks[49] = 61;
	statePageLinks[50] = 62;
	statePageLinks[51] = 64;
	statePageLinks[53] = 65;
	statePageLinks[54] = 66;
	statePageLinks[55] = 67;
	statePageLinks[56] = 68;
	statePageLinks[99] = 9;
	
	

var inflationParameters = new Array();
inflationParameters[1993] = 144.5;
inflationParameters[1994] = 148.2;
inflationParameters[1995] = 152.4;
inflationParameters[1996] = 156.9;
inflationParameters[1997] = 160.5;
inflationParameters[1998] = 163;
inflationParameters[1999] = 166.6;
inflationParameters[2000] = 172.2;
inflationParameters[2001] = 177.1;
inflationParameters[2002] = 179.9;
inflationParameters[2003] = 184;
inflationParameters[2004] = 188.9;
inflationParameters[2005] = 195.3;
inflationParameters[2006] = 201.6;
inflationParameters[2007] = 207.342;
inflationParameters[2008] = 215.33;
inflationParameters[2009] = 214.537;
inflationParameters[2010] = 218.056;
inflationParameters[2011] = 224.932;



for (year = 1994; year <= 2011; year++) {
    returnsOut[year] = new Array();
    exemptionsOut[year] = new Array();
    AGIOut[year] = new Array();
    returnsIn[year] = new Array();
    exemptionsIn[year] = new Array();
    AGIIn[year] = new Array();
}


ChangeSelector();

function ChangeSelector(){
	//try {
    var mode = GetMode();
	var adjustForInflation = document.mainForm.inflationAdjustBox.checked;
	if (adjustForInflation === true) {
		document.mainForm.textInflationAdjust.value = 1;
	} else {
		document.mainForm.textInflationAdjust.value = 0;
	}
    function GetDataX(year, returnsColumn, exemptionsColumn, AGIcolumn, stateIndex){
		if (year > 2008) { //new method
			if (endYear > 2008 && year <= endYear) {
				try {
					returnsOut[year][stateIndex] = newDataOut[year][s][0]*1;
					exemptionsOut[year][stateIndex] = newDataOut[year][s][1]*1;
					AGIOut[year][stateIndex] = newDataOut[year][s][2]*1;
				} catch (ex) {
					alert("error assigning x data where s = " + s + "and year = " + year);
				}
			} else {
				returnsOut[year][stateIndex] = 0;
				exemptionsOut[year][stateIndex] = 0;
				AGIOut[year][stateIndex] = 0;
			}
		} else { //legacy
			returnsOut[year][stateIndex] = x_state_xml[i].getElementsByTagName(returnsColumn)[0].childNodes[0].nodeValue * 1;
			exemptionsOut[year][stateIndex] = x_state_xml[i].getElementsByTagName(exemptionsColumn)[0].childNodes[0].nodeValue * 1;
			AGIOut[year][stateIndex] = x_state_xml[i].getElementsByTagName(AGIcolumn)[0].childNodes[0].nodeValue * 1;
		}
		if (adjustForInflation == true) {
			AGIOut[year][stateIndex] = Math.round(AGIOut[year][stateIndex]/(inflationParameters[year-1]/inflationParameters[2011]));
		}
    };
    function GetDataY(year, returnsColumn, exemptionsColumn, AGIcolumn, stateIndex){
		if (year > 2008) { //new method
			if (endYear > 2008 && year <= endYear) {
				try {
					returnsIn[year][stateIndex] = newDataIn[year][s][0]*1;
					exemptionsIn[year][stateIndex] = newDataIn[year][s][1]*1;
					AGIIn[year][stateIndex] = newDataIn[year][s][2]*1;
				} catch (ex) {
					alert("error assigning y data where s = " + s + "and year = " + year);
				}
			} else {
				returnsOut[year][stateIndex] = 0;
				exemptionsOut[year][stateIndex] = 0;
				AGIOut[year][stateIndex] = 0;
			}
		} else {
			returnsIn[year][stateIndex] = y_state_xml[i].getElementsByTagName(returnsColumn)[0].childNodes[0].nodeValue * 1;
			exemptionsIn[year][stateIndex] = y_state_xml[i].getElementsByTagName(exemptionsColumn)[0].childNodes[0].nodeValue * 1;
			AGIIn[year][stateIndex] = y_state_xml[i].getElementsByTagName(AGIcolumn)[0].childNodes[0].nodeValue * 1;
		}
		if (adjustForInflation == true) {
			AGIIn[year][stateIndex] = Math.round(AGIIn[year][stateIndex]/(inflationParameters[year-1]/inflationParameters[2011]));
		}
    };
    function MapData(original, copy){
        returnsOutTotal[copy] = returnsOutTotal[original];
        returnsInTotal[copy] = returnsInTotal[original];
        netReturnsArray[copy] = netReturnsArray[original];
        exemptionsOutTotal[copy] = exemptionsOutTotal[original];
        exemptionsInTotal[copy] = exemptionsInTotal[original];
        netExemptionsArray[copy] = netReturnsArray[original];
        AGIOutTotal[copy] = AGIOutTotal[original];
        AGIInTotal[copy] = AGIInTotal[original];
        netAGIArray[copy] = netAGIArray[original];
    };
	
    var stateIndex = document.getElementById("StateSelector").value * 1;
	WriteValue("stateTaxName1",stateNames[stateIndex]);
	WriteValue("state1link1","<a href = 'http://www.taxfoundation.org/research/topic/" + statePageLinks[stateIndex] + ".html'>	General Information</a>");
	WriteValue("state1link2","<a href = 'http://www.taxfoundation.org/taxdata/show/" + stateBurdenLinks[stateIndex] + ".html'>Tax Burdens</a>");
    var startYear = document.getElementById("startingYearSelector").value;
    startYear = startYear * 1;
    var endYear = document.getElementById("endingYearSelector").value;
    endYear = endYear * 1;
	if ((endYear - startYear)<1) {
		if (startYear > 2010) {
			startYear = 2010;
		}
		if (endYear == 2011) {
			startYear == 2010;
			if (endYear == 2010) {
				startYear = 2009;
			}
		} else {
			endYear = startYear + 1;
		}
		document.getElementById("startingYearSelector").selectedIndex = startYear - 1993;
		document.getElementById("endingYearSelector").selectedIndex = endYear - 1994;
	}
    var stateXMLFileName = "Out/" + stateIndex + ".xml";
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
	
    xmlhttp.open("GET", stateXMLFileName, false);
    xmlhttp.send(null);
    x_xmlDoc = xmlhttp.responseXML;
    var x_state_xml = x_xmlDoc.getElementsByTagName("state");
    stateXMLFileName = "In/" + stateIndex + ".xml";
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", stateXMLFileName, false);
    xmlhttp.send(null);
    xmlDoc = xmlhttp.responseXML;
    var y_state_xml = xmlDoc.getElementsByTagName("state");
	
	var url = "datareturn.php?startyear=" + startYear + "&endyear=" + endYear + "&state=" + stateIndex + "&mode=1"; //mode 1 = in
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	   xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
	   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET", url, false);
	xmlhttp.send(null);
	xmlDoc = xmlhttp.responseText;
	try {var newDataIn = eval("(" + xmlDoc + ")");} catch (ex) {alert("Error writing x data");}
	
	var url = "datareturn.php?startyear=" + startYear + "&endyear=" + endYear + "&state=" + stateIndex + "&mode=2"; //mode 2 = out
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	   xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
	   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET", url, false);
	xmlhttp.send(null);
	xmlDoc = xmlhttp.responseText;
	try {var newDataOut = eval("(" + xmlDoc + ")");} catch (ex) {alert("Error writing y data");}
	
	
    
    for (i = 0; i < x_state_xml.length; i++) {
        s = x_state_xml[i].getElementsByTagName("b")[0].childNodes[0].nodeValue;
        s = s * 1;
        GetDataX(1994, "e", "f", "g", s);
        GetDataX(1995, "h", "i", "j", s);
        GetDataX(1996, "k", "l", "m", s);
        GetDataX(1997, "n", "o", "p", s);
        GetDataX(1998, "q", "r", "s", s);
        GetDataX(1999, "t", "u", "v", s);
        GetDataX(2000, "w", "x", "y", s);
        GetDataX(2001, "z", "aa", "ab", s);
        GetDataX(2002, "ac", "ad", "ae", s);
        GetDataX(2003, "af", "ag", "ah", s);
        GetDataX(2004, "ai", "aj", "ak", s);
        GetDataX(2005, "al", "am", "an", s);
        GetDataX(2006, "ao", "ap", "aq", s);
        GetDataX(2007, "ar", "as", "at", s);
		GetDataX(2008, "au", "av", "aw", s);
		for (var i_year = 2009; i_year<=2011;i_year++) {
			if (i_year >startYear && i_year <= endYear) {
				GetDataX(i_year,0,0,0,s);	
			}
		}
    }
    for (i = 0; i < y_state_xml.length; i++) {
        s = y_state_xml[i].getElementsByTagName("c")[0].childNodes[0].nodeValue;
        s = s * 1;
        GetDataY(1994, "e", "f", "g", s);
        GetDataY(1995, "h", "i", "j", s);
        GetDataY(1996, "k", "l", "m", s);
        GetDataY(1997, "n", "o", "p", s);
        GetDataY(1998, "q", "r", "s", s);
        GetDataY(1999, "t", "u", "v", s);
        GetDataY(2000, "w", "x", "y", s);
        GetDataY(2001, "z", "aa", "ab", s);
        GetDataY(2002, "ac", "ad", "ae", s);
        GetDataY(2003, "af", "ag", "ah", s);
        GetDataY(2004, "ai", "aj", "ak", s);
        GetDataY(2005, "al", "am", "an", s);
        GetDataY(2006, "ao", "ap", "aq", s);
        GetDataY(2007, "ar", "as", "at", s);
		GetDataY(2008, "au", "av", "aw", s);
		for (var i_year = 2009; i_year<=2011;i_year++) {
			if (i_year >startYear && i_year <= endYear) {
				GetDataY(i_year,0,0,0,s);	
			}
		}
    }
	//x_state_xml = x_xmlDoc.getElementsByTagName("state");
   for (i=0;i<x_state_xml.length;i++) {
        s = x_state_xml[i].getElementsByTagName("b")[0].childNodes[0].nodeValue;
        exemptionsOutput = 0;
        returnsOutput = 0;
        AGIOutput = 0;
        returnsOutTotal[s] = 0;
        exemptionsOutTotal[s] = 0;
        AGIOutTotal[s] = 0;
        for (year = startYear + 1; year <= endYear; year++) {
            returnsOutTotal[s] = returnsOutTotal[s] + returnsOut[year][s];
            exemptionsOutTotal[s] = exemptionsOutTotal[s] + exemptionsOut[year][s];
            AGIOutTotal[s] = AGIOutTotal[s] + AGIOut[year][s];
        }
    }
    
    for (i = 0; i < y_state_xml.length; i++) {
        s = y_state_xml[i].getElementsByTagName("c")[0].childNodes[0].nodeValue;
        exemptionsOutput = 0;
        returnsOutput = 0;
        AGIOutput = 0;
        returnsInTotal[s] = 0;
        exemptionsInTotal[s] = 0;
        AGIInTotal[s] = 0;
        for (year = startYear + 1; year <= endYear; year++) {
            exemptionsInTotal[s] = exemptionsInTotal[s] + exemptionsIn[year][s];
            returnsInTotal[s] = returnsInTotal[s] + returnsIn[year][s];
            AGIInTotal[s] = AGIInTotal[s] + AGIIn[year][s];
        }
        returnsOutputId = s + "ReturnsInflow";
        exemptionsOutputId = s + "ExemptionsInflow";
        AGIOutputId = s + "AGIInflow";
        /*if (stateIndex == s && stateIndex != 99) {
            returnsInTotal[s] = 0;
            returnsOutTotal[s] = 0;
            exemptionsInTotal[s] = 0;
            exemptionsOutTotal[s] = 0;
            AGIInTotal[s] = 0;
            AGIOutTotal[s] = 0;
        };*/
        netReturnsArray[s] = returnsInTotal[s] - returnsOutTotal[s];
        netExemptionsArray[s] = exemptionsInTotal[s] - exemptionsOutTotal[s];
        netAGIArray[s] = AGIInTotal[s] - AGIOutTotal[s];
        
        switch (mode) {
            case "netMigration":
                WriteValue(returnsOutputId, AddCommas(netReturnsArray[s]));
                WriteValue(exemptionsOutputId, AddCommas(netExemptionsArray[s]));
                WriteValue(AGIOutputId, AddDollarSign(netAGIArray[s]));
                break;
            case "emmigration":
                WriteValue(returnsOutputId, AddCommas(returnsOutTotal[s]));
                WriteValue(exemptionsOutputId, AddCommas(exemptionsOutTotal[s]));
                WriteValue(AGIOutputId, AddDollarSign(AGIOutTotal[s]));
                break;
            case "immigration":
                WriteValue(returnsOutputId, AddCommas(returnsInTotal[s]));
                WriteValue(exemptionsOutputId, AddCommas(exemptionsInTotal[s]));
                WriteValue(AGIOutputId, AddDollarSign(AGIInTotal[s]));
                break;
        }
    }
    for (i = 0; i < x_state_xml.length; i++) {
        stateIndexMap[i] = x_state_xml[i].getElementsByTagName("b")[0].childNodes[0].nodeValue;
    }
  //  MapData(51, 58);
  //  MapData(15, 59);
  //  MapData(15, 60);
  //  MapData(15, 61);
  //  MapData(15, 62);
  //  MapData(15, 63);
  //  MapData(15, 64);
	//} catch (ex) {
	//	alert(ex);	
	//}
};


function WriteValue(spanId, text){
    document.getElementById(spanId).innerHTML = text;
};


function DebugAlert(whatToAlert){
    if (debugAlertCounter < maxAlerts) {
        alert(whatToAlert);
        debugAlertCounter++;
    }
};

function AddCommas(number){
    var isNegative = false;
    if (number < 0) {
        number = 0 - number;
        isNegative = true;
    }
    var outputValue = number + "";
    var lengthOfOutput = outputValue.length;
    var counterVar = 0;
    var commaCounter = 0;
    var commaCount = 0;
    var currentChar = "";
    var result = "";
    for (counterVar = lengthOfOutput - 1; counterVar >= 0; counterVar--) {
        currentChar = outputValue.charAt(counterVar);
        result = currentChar + result;
        commaCounter++;
        if (commaCounter == 3 && counterVar != 0) {
            result = "," + result;
            commaCounter = 0;
            commaCount++;
        }
    }
    if (isNegative == true) {
        result = "-" + result;
    }
    return result;
};

function AddDollarSign(number){
    var result = number;
    if (result < 0) {
        result = 0 - result;
        result = AddCommas(result);
        return "-" + "$" + result;
    }
    else {
        result = result + "";
        result = AddCommas(result);
        return "$" + result;
    }
};

function GetMode(){
    var value;
    var mode;
    var radioBox = document.getElementsByName("inOutNet");
    for (i = 0; i <= 2; i++) {
        if (radioBox[i].checked == true) {
            value = i;
        }
    }
	var stateName = stateNames[document.getElementById("StateSelector").value];
    switch (value) {
		
        case 0:
            mode = "immigration";
			document.getElementById("toOrFrom").innerHTML = "To";
			document.getElementById("stateColumnHeader").innerHTML = "From State";
            document.getElementById("returnsColumnHeader").innerHTML = "Total # Returns Into " + stateName;
            document.getElementById("exemptionsColumnHeader").innerHTML = "Total # Exemptions Into " + stateName;
            document.getElementById("agiColumnHeader").innerHTML = "Total AGI Into " + stateName + " (thousands)";
            break;
        case 1:
            mode = "emmigration";
			document.getElementById("toOrFrom").innerHTML = "From";
			document.getElementById("stateColumnHeader").innerHTML = "To State";
            document.getElementById("returnsColumnHeader").innerHTML = "Total # Returns Out of " + stateName;
            document.getElementById("exemptionsColumnHeader").innerHTML = "Total # Exemptions Out of " + stateName;
            document.getElementById("agiColumnHeader").innerHTML = "Total AGI Out of " + stateName + " (thousands)";
            break;
        case 2:
            mode = "netMigration";
			document.getElementById("toOrFrom").innerHTML = "To";
			document.getElementById("stateColumnHeader").innerHTML = "From State";
            document.getElementById("returnsColumnHeader").innerHTML = "Net # Returns Into " + stateName;
            document.getElementById("exemptionsColumnHeader").innerHTML = "Net # Exemptions Into " + stateName;
            document.getElementById("agiColumnHeader").innerHTML = "Net AGI Into " + stateName + " (thousands)";
            break;
    }
    return mode;
};

function ShowHideMap(){
    if (document.getElementById("canvas").style.display == "none") {
        document.getElementById("canvas").style.display = "block";
		document.getElementById("updateMap").style.display="inline";
		document.getElementById("showHideMap").innerHTML = "Hide Map";
		DrawMap();
		return true;
    }
    if (document.getElementById("canvas").style.display == "block") {
        document.getElementById("canvas").style.display = "none";
		document.getElementById("updateMap").style.display="none";
		document.getElementById("showHideMap").innerHTML = "Show Map";
		return true;
    }
};

function GraphLinkRets(stateIndex) {
	
	document.mainForm.stateIDSubmit.value = stateIndex;
	document.mainForm.modeIDSubmit.value = 0;
};

function SubmitFormRets(stateIndex) {
	document.mainForm.stateIDSubmit.value = stateIndex;
	document.mainForm.modeIDSubmit.value =0;
	document.mainForm.submit();
};

function GraphLinkExem(stateIndex) {
	
	document.mainForm.stateIDSubmit.value = stateIndex;
	document.mainForm.modeIDSubmit.value = 1;
};

function SubmitFormExem(stateIndex) {
	document.mainForm.stateIDSubmit.value = stateIndex;
	document.mainForm.modeIDSubmit.value = 1;
	document.mainForm.submit();
};

function GraphLinkAGI(stateIndex) {
	
	document.mainForm.stateIDSubmit.value = stateIndex;
	document.mainForm.modeIDSubmit.value = 2;
};

function SubmitFormAGI(stateIndex) {
	document.mainForm.stateIDSubmit.value = stateIndex;
	document.mainForm.modeIDSubmit.value = 2;
	document.mainForm.submit();
};

function ChangeBackgroundImage(divID, url) {
	document.getElementById(divID).src = url;
};