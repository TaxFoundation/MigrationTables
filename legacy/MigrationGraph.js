// JavaScript Document

function DrawMap(inStateID, outStateID, mode, startYear, endYear, dataToDisplay, adjustForInflation) {
	function StateCompare(){
		function GetDataX(year, returnsColumn, exemptionsColumn, AGIcolumn, aln){
			if (year > 2008) { //new method
				
					try {
						returnsOutCompare[year] = newDataOut[year][aln][0]*1;
						exemptionsOutCompare[year] = newDataOut[year][aln][1]*1;
						AGIOutCompare[year] = newDataOut[year][aln][2]*1;
					} catch (ex) {
						alert("error assigning x data where aln = " + aln);
					}
			
			} else { //legacy data
				returnsOutCompare[year] = x[aln].getElementsByTagName(returnsColumn)[0].childNodes[0].nodeValue * 1;
				exemptionsOutCompare[year] = x[aln].getElementsByTagName(exemptionsColumn)[0].childNodes[0].nodeValue * 1;
				AGIOutCompare[year] = x[aln].getElementsByTagName(AGIcolumn)[0].childNodes[0].nodeValue * 1;
			}
			if (adjustForInflation == true) {
				var inflationAdjustParam = inflationParameters[year-1]/inflationParameters[2011];
				AGIOutCompare[year] = Math.round(AGIOutCompare[year]/inflationAdjustParam);
			}
		};
		function GetDataY(year, returnsColumn, exemptionsColumn, AGIcolumn, hln){
			if (year > 2008) { //new method
				
					try {
						returnsInCompare[year] = newDataIn[year][hln][0]*1;
						exemptionsInCompare[year] = newDataIn[year][hln][1]*1;
						AGIInCompare[year] = newDataIn[year][hln][2]*1;
					} catch (ex) {
						alert("error assigning x data where hln = " + hln);
					
				}
			} else {
				returnsInCompare[year] = y[hln].getElementsByTagName(returnsColumn)[0].childNodes[0].nodeValue * 1;
				exemptionsInCompare[year] = y[hln].getElementsByTagName(exemptionsColumn)[0].childNodes[0].nodeValue * 1;
				AGIInCompare[year] = y[hln].getElementsByTagName(AGIcolumn)[0].childNodes[0].nodeValue * 1;
			}
			if (adjustForInflation == true) {
				var inflationAdjustParam = inflationParameters[year-1]/inflationParameters[2011];
				AGIInCompare[year] = Math.round(AGIInCompare[year]/inflationAdjustParam);
			}
		};
		try {
			var homeStateIndex = inStateID;
			var homeStateXMLFilename = "In/" + homeStateIndex + ".xml";
			if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp = new XMLHttpRequest();
			}
			else {// code for IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.open("GET", homeStateXMLFilename, false);
			xmlhttp.send(null);
			xmlDoc = xmlhttp.responseXML;
			var x = xmlDoc.getElementsByTagName("state");
			var awayStateIndex = outStateID;
			var awayStateXMLFileName = "In/" + awayStateIndex + ".xml";
			if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp = new XMLHttpRequest();
			}
			else {// code for IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.open("GET", awayStateXMLFileName, false);
			xmlhttp.send(null);
			xmlDoc = xmlhttp.responseXML;
			var y = xmlDoc.getElementsByTagName("state");
			
			var url = "datareturn.php?startyear=" + startYear + "&endyear=3000" + "&state=" + awayStateIndex + "&mode=1"; //mode 1 = in
			if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
			   xmlhttp = new XMLHttpRequest();
			} else {// code for IE6, IE5
			   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.open("GET", url, false);
			xmlhttp.send(null);
			xmlDoc = xmlhttp.responseText;
			
			try {var newDataIn = eval("(" + xmlDoc + ")");} catch (ex) {alert("Error writing x data");}
			
			var url = "datareturn.php?startyear=" + startYear + "&endyear=3000" + "&state=" + homeStateIndex + "&mode=1"; //mode 2 = out
			if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
			   xmlhttp = new XMLHttpRequest();
			} else {// code for IE6, IE5
			   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.open("GET", url, false);
			xmlhttp.send(null);
			xmlDoc = xmlhttp.responseText;
			
			try {var newDataOut = eval("(" + xmlDoc + ")");} catch (ex) {alert("Error writing y data");}
			
			
			var ai = 0;
			for (i = 0; i < x.length; i++) {
				if (x[i].getElementsByTagName("c")[0].childNodes[0].nodeValue == awayStateIndex) {
					ai = i;
				}
			}
			var hi = 0;
			for (i = 0; i < y.length; i++) {
				if (y[i].getElementsByTagName("c")[0].childNodes[0].nodeValue == homeStateIndex) {
					hi = i;
				}
			}
			GetDataX(1994, "e", "f", "g", ai);
        	GetDataX(1995, "h", "i", "j", ai);
       	 	GetDataX(1996, "k", "l", "m", ai);
        	GetDataX(1997, "n", "o", "p", ai);
        	GetDataX(1998, "q", "r", "s", ai);
        	GetDataX(1999, "t", "u", "v", ai);
        	GetDataX(2000, "w", "x", "y", ai);
        	GetDataX(2001, "z", "aa", "ab", ai);
        	GetDataX(2002, "ac", "ad", "ae", ai);
        	GetDataX(2003, "af", "ag", "ah", ai);
        	GetDataX(2004, "ai", "aj", "ak", ai);
        	GetDataX(2005, "al", "am", "an", ai);
        	GetDataX(2006, "ao", "ap", "aq", ai);
        	GetDataX(2007, "ar", "as", "at", ai);
			GetDataX(2008, "au", "av", "aw", ai);
			GetDataX(2009,0,0,0,awayStateIndex);
			GetDataX(2010,0,0,0,awayStateIndex);
			GetDataX(2011,0,0,0,awayStateIndex);
			GetDataY(1994, "e", "f", "g", hi);
        	GetDataY(1995, "h", "i", "j", hi);
        	GetDataY(1996, "k", "l", "m", hi);
        	GetDataY(1997, "n", "o", "p", hi);
        	GetDataY(1998, "q", "r", "s", hi);
			GetDataY(1999, "t", "u", "v", hi);
			GetDataY(2000, "w", "x", "y", hi);
			GetDataY(2001, "z", "aa", "ab", hi);
			GetDataY(2002, "ac", "ad", "ae", hi);
			GetDataY(2003, "af", "ag", "ah", hi);
			GetDataY(2004, "ai", "aj", "ak", hi);
			GetDataY(2005, "al", "am", "an", hi);
			GetDataY(2006, "ao", "ap", "aq", hi);
			GetDataY(2007, "ar", "as", "at", hi);
			GetDataY(2008, "au", "av", "aw", hi);
			GetDataY(2009,0,0,0,homeStateIndex);
			GetDataY(2010,0,0,0,homeStateIndex);
			GetDataY(2011,0,0,0,homeStateIndex);
			var imOutputSpanID;
			var emOutputSpanID;
			var netOutputSpanID;
			var tableRowID;
			if ((endYear - startYear)<2) {
			if (startYear > 2009) {
				startYear = 2009
			}
			if (endYear == 2011) {
				startYear == 2009;
				if (endYear == 2009) {
					startYear = 2007;
				}
			} else {
				endYear = startYear + 2;
			}
			document.getElementById("startYearSelect").selectedIndex = startYear - 1993;
			document.getElementById("endYearSelect").selectedIndex = endYear - 1995;
			}
			WriteValue("startingYearTableEntry", startYear);
			WriteValue("endingYearTableEntry", endYear);
			for (year = 1994; year <= 2011; year++) {
				tableRowID = year + "Row";
				if (year > startYear && year <=endYear) {
					document.getElementById(tableRowID).style.fontWeight = "bold";
				} else {
					document.getElementById(tableRowID).style.fontWeight = "normal";
				}
			}
			var totalIn = 0;
			var totalOut = 0;
			var totalNet = 0;
			switch (dataToDisplay) {
			case 0:
				for (year = 1994; year <= 2011; year++) {
					imOutputSpanID = year + "Im";
					WriteValue(imOutputSpanID, AddCommas(returnsOutCompare[year]));
					emOutputSpanID = year + "Em";
					WriteValue(emOutputSpanID, AddCommas(returnsInCompare[year]));
					netOutputSpanID = year + "Net";
					WriteValue(netOutputSpanID, AddCommas(returnsOutCompare[year] - returnsInCompare[year]));
					WriteValue("dataSource","Tax Returns");
					WriteValue("agiNote"," ");
					if (year > startYear && year <=endYear) {
						totalOut = totalOut + returnsOutCompare[year];
						totalIn = totalIn + returnsInCompare[year];
						totalNet = totalNet + returnsOutCompare[year] - returnsInCompare[year];
					}
				}
				WriteValue("TotalIm", AddCommas(totalIn));
				WriteValue("TotalEm", AddCommas(totalOut));
				WriteValue("TotalNet", AddCommas(totalNet));
				break;
			case 1:
				for (year = 1994; year <= 2011; year++) {
					imOutputSpanID = year + "Im";
					WriteValue(imOutputSpanID, AddCommas(exemptionsOutCompare[year]));
					emOutputSpanID = year + "Em";
					WriteValue(emOutputSpanID, AddCommas(exemptionsInCompare[year]));
					netOutputSpanID = year + "Net";
					WriteValue(netOutputSpanID, AddCommas(exemptionsOutCompare[year] - exemptionsInCompare[year]));
					WriteValue("dataSource","Exemptions");
					WriteValue("agiNote"," ");
					if (year > startYear && year <=endYear) {
						totalOut = totalOut + exemptionsOutCompare[year];
						totalIn = totalIn + exemptionsInCompare[year];
						totalNet = totalNet + exemptionsOutCompare[year] - exemptionsInCompare[year];
					}
				}
				WriteValue("TotalIm", AddCommas(totalIn));
				WriteValue("TotalEm", AddCommas(totalOut));
				WriteValue("TotalNet", AddCommas(totalNet));
				break;
			case 2:
				for (year = 1994; year <= 2011; year++) {
					imOutputSpanID = year + "Im";
					WriteValue(imOutputSpanID, AddDollarSign(AGIOutCompare[year]));
					emOutputSpanID = year + "Em";
					WriteValue(emOutputSpanID, AddDollarSign(AGIInCompare[year]));
					netOutputSpanID = year + "Net";
					WriteValue(netOutputSpanID, AddDollarSign(AGIOutCompare[year] - AGIInCompare[year]));
					WriteValue("dataSource","AGI");
					WriteValue("agiNote","<br /><span style='font-size:10px'>(thousands of dollars)</span>");
					if (year > startYear && year <=endYear) {
						totalOut = totalOut + AGIOutCompare[year];
						totalIn = totalIn + AGIInCompare[year];
						totalNet = totalNet + AGIOutCompare[year] -AGIInCompare[year];
					}
				}
				WriteValue("TotalIm", AddDollarSign(totalIn));
				WriteValue("TotalEm", AddDollarSign(totalOut));
				WriteValue("TotalNet", AddDollarSign(totalNet));
				break;
			}
		} 
		catch (ex) {
			alert(ex);
		}
	}
	var yearTicks = new Array();
	for (year = startYear; year<endYear; year++) {
		//yearTicks[year-startYear] = [year+1, "'" + LastTwoDigits(year) + "-" + LastTwoDigits(year+1)];
		yearTicks[year-startYear] = [year+1, "'" + LastTwoDigits(year)];
	}
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
	for (year = 1994; year <= 2011; year++) {
		returnsOut[year] = new Array();
		exemptionsOut[year] = new Array();
		AGIOut[year] = new Array();
		returnsIn[year] = new Array();
		exemptionsIn[year] = new Array();
		AGIIn[year] = new Array();
	}
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
	
	var stateAbbrvs = new Array();
	stateAbbrvs[1] = "AL";
	stateAbbrvs[2] = "AK";
	stateAbbrvs[4] = "AZ";
	stateAbbrvs[5] = "AR";
	stateAbbrvs[6] = "CA";
	stateAbbrvs[8] = "CO";
	stateAbbrvs[9] = "CT";
	stateAbbrvs[10] = "DE";
	stateAbbrvs[11] = "DC";
	stateAbbrvs[12] = "FL";
	stateAbbrvs[13] = "GA";
	stateAbbrvs[15] = "HI";
	stateAbbrvs[16] = "ID";
	stateAbbrvs[17] = "IL";
	stateAbbrvs[18] = "IN";
	stateAbbrvs[19] = "IA";
	stateAbbrvs[20] = "KS";
	stateAbbrvs[21] = "KY";
	stateAbbrvs[22] = "LA";
	stateAbbrvs[23] = "ME";
	stateAbbrvs[24] = "MD";
	stateAbbrvs[25] = "MA";
	stateAbbrvs[26] = "MI";
	stateAbbrvs[27] = "MN";
	stateAbbrvs[28] = "MS";
	stateAbbrvs[29] = "MO";
	stateAbbrvs[30] = "MT";
	stateAbbrvs[31] = "NE";
	stateAbbrvs[32] = "NV";
	stateAbbrvs[33] = "NH";
	stateAbbrvs[34] = "NJ";
	stateAbbrvs[35] = "NM";
	stateAbbrvs[36] = "NY";
	stateAbbrvs[37] = "NC";
	stateAbbrvs[38] = "ND";
	stateAbbrvs[39] = "OH";
	stateAbbrvs[40] = "OK";
	stateAbbrvs[41] = "OR";
	stateAbbrvs[42] = "PA";
	stateAbbrvs[44] = "RI";
	stateAbbrvs[45] = "SC";
	stateAbbrvs[46] = "SD";
	stateAbbrvs[47] = "TN";
	stateAbbrvs[48] = "TX";
	stateAbbrvs[49] = "UT";
	stateAbbrvs[50] = "VT";
	stateAbbrvs[51] = "VA";
	stateAbbrvs[53] = "WA";
	stateAbbrvs[54] = "WV";
	stateAbbrvs[55] = "WI";
	stateAbbrvs[56] = "WY";
	stateAbbrvs[99] = "Elsewhere";
	
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
	
	var returnsOutCompare = new Array();
	var exemptionsOutCompare = new Array();
	var AGIOutCompare = new Array();
	var returnsInCompare = new Array();
	var exemptionsInCompare = new Array();
	var AGIInCompare = new Array();
	StateCompare();
	document.getElementById("outStateTitle").innerHTML = stateNames[outStateID];
	document.getElementById("inStateTitle").innerHTML = stateNames[inStateID];
	document.getElementById("stateAbrv1").innerHTML = stateAbbrvs[outStateID];
	document.getElementById("stateAbrv2").innerHTML = stateAbbrvs[inStateID];
	document.getElementById("stateAbrv3").innerHTML = stateAbbrvs[inStateID];
	document.getElementById("stateAbrv4").innerHTML = stateAbbrvs[outStateID];
	document.getElementById("imStateCheckBox1").innerHTML = stateNames[inStateID];
	document.getElementById("emStateCheckBox1").innerHTML = stateNames[outStateID];
	document.getElementById("imStateCheckBox2").innerHTML = stateNames[inStateID];
	document.getElementById("emStateCheckBox2").innerHTML = stateNames[outStateID];
	WriteValue("stateTaxName1",stateNames[inStateID]);
	WriteValue("state1link1","<a href = 'http://www.taxfoundation.org/research/topic/" + statePageLinks[inStateID] + ".html'>General Information</a>");
	WriteValue("state1link2","<a href = 'http://www.taxfoundation.org/taxdata/show/" + stateBurdenLinks[inStateID] + ".html'>Tax Burdens</a>");
	WriteValue("stateTaxName2",stateNames[outStateID]);
	WriteValue("state2link1","<a href = 'http://www.taxfoundation.org/research/topic/" + statePageLinks[outStateID] + ".html'>General Information</a>");
	WriteValue("state2link2","<a href = 'http://www.taxfoundation.org/taxdata/show/" + stateBurdenLinks[outStateID] + ".html'>Tax Burdens</a>");
	
	var legend1Text = stateNames[outStateID] + " to " + stateNames[inStateID];
	var legend2Text = stateNames[inStateID] + " to " + stateNames[outStateID];
	var legend3Text = "Net Migration";
	
	document.getElementById("legendIm").innerHTML = legend1Text;
	document.getElementById("legendEm").innerHTML = legend2Text;
	document.getElementById("legendNet").innerHTML = legend3Text;
	
	var showIn = true;
	var showOut = true;
	var showNet = true;
	
	try {
	
		if (document.getElementById("imCheckbox").checked == false) {
			showOut = false;
		}
		if (document.getElementById("emCheckbox").checked == false) {
			showIn = false;
		}
		if (document.getElementById("netCheckbox").checked == false) {
			showNet = false;
		}
		
		
		$(function(){
			switch (dataToDisplay) {
			case 0:
			var d1 = new Array();
			if (showIn == true) {
				for (var year = startYear+1; year <= endYear; year++) {
					d1.push([year, returnsOutCompare[year]]);
				}
			}
			var d2 = new Array();
			if (showOut == true) {
				for (var year = startYear+1; year <= endYear; year++) {
					d2.push([year, returnsInCompare[year]]);
				}
			}
			var d3 = new Array();
			if (showNet == true) {
				for (var year = startYear+1; year <= endYear; year++) {
					d3.push([year, returnsOutCompare[year] - returnsInCompare[year]]);
				}
			}
			var d4 = new Array();
			for (var year = startYear+1; year <= endYear; year++) {
				d4.push([year,0]);
			}
			break;
			case 1:
			var d1 = new Array();
			if (showIn == true) {
			for (var year = startYear+1; year <= endYear; year++) {
				d1.push([year, exemptionsOutCompare[year]]);
			}
			}
			var d2 = new Array();
			if (showOut == true) {
			for (var year = startYear+1; year <= endYear; year++) {
				d2.push([year, exemptionsInCompare[year]]);
			}
			}
			var d3 = new Array();
			if (showNet == true) {
			for (var year = startYear+1; year <= endYear; year++) {
				d3.push([year, exemptionsOutCompare[year] - exemptionsInCompare[year]]);
			}
			}
			var d4 = new Array();
			for (var year = startYear+1; year <= endYear; year++) {
				d4.push([year,0]);
			}
			break;
			case 2:
			var d1 = new Array();
			if (showIn == true) {
			for (var year = startYear+1; year <= endYear; year++) {
				d1.push([year, AGIOutCompare[year]]);
			}
			}
			var d2 = new Array();
			if (showOut == true) {
			for (var year = startYear+1; year <= endYear; year++) {
				d2.push([year, AGIInCompare[year]]);
			}
			}
			var d3 = new Array();
			if (showNet == true) {
			for (var year = startYear+1; year <= endYear; year++) {
				d3.push([year, AGIOutCompare[year] - AGIInCompare[year]]);
			}
			}
			var d4 = new Array();
			for (var year = startYear+1; year <= endYear; year++) {
				d4.push([year,0]);
			}
			break;
			}
			var series1Object =  {
									label: legend1Text,
									data: d1,
									color: "#009000"
									};
			var series2Object = {
									label: legend2Text,
									data: d2,
									color: "#900000"
									};
			var series3Object = {
									label: legend3Text,
									data: d3,
									color: "#000090"
									};
			var series4Object = {
									label: " ",
									data: d4,
									color: "#000000"
									};
									
			var graphOptionsObject = {
						xaxis: {
							tickSize: 1,
							ticks: yearTicks
								},
						yaxis: {
									tickFormatter: function (val, axis) {
										if (dataToDisplay == 2) {
											return AddDollarSign(val);
										} else {
											return AddCommas(val);
										}
									}
								},
						legend: {
						  show: false
						 }
						};
					
				
									
			$.plot($("#placeholder"), [series1Object, series2Object, series3Object, series4Object], graphOptionsObject);
		});
	} 
		catch (ex) {
	} 
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

function ChangeOption() {
		var __inStateID = document.getElementById("state1select").value;
		var __outStateID = document.getElementById("state2select").value;
		var __mode = _mode;
		var __startYear = document.getElementById("startYearSelect").value * 1;
		var __endYear = document.getElementById("endYearSelect").value * 1;
		var __dataToDisplay = GetRadioValue("modeRadio");
		var __adjustForInflation = document.getElementById("inflationBox").checked;
		DrawMap(__inStateID, __outStateID, __mode, __startYear, __endYear, __dataToDisplay, __adjustForInflation);
};

function GetRadioValue(radioName) {
	var radios = new Array();
	radios = document.getElementsByName(radioName);
	for (i=0;i<radios.length;i++) {
		if (radios[i].checked == true) {
			return radios[i].value * 1;
		}
	}
};

function LastTwoDigits(year) {
	year = year + "";
	var length = year.length;
	var currentChar;
	var returnString = "";
	for (i=length-2;i<length;i++) {
		currentChar = year.charAt(i);
		returnString = returnString + currentChar;
	}
	return returnString;
};

function ChangeBackgroundImage(divID, url) {
	document.getElementById(divID).src = url;
};


