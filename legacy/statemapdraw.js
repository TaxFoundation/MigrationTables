
var indexes = new Array();
var stateCoords = new Array();


indexes[0] = LookupStateIndex("washington")
stateCoords[indexes[0]] = "75,10,149,28,136,85,108,80,57,75,44,56,45,14,65,27,60,45,73,37";
indexes[1] = LookupStateIndex("oregon")
stateCoords[indexes[1]] = "44,56,57,75,108,80,136,85,141,97,126,117,118,166,74,154,14,138,13,120";
indexes[2] = LookupStateIndex("california")
stateCoords[indexes[2]] = "74,154,60,215,125,314,130,329,114,359,73,354,70,333,32,298,5,202,3,169,14,138";
indexes[3] = LookupStateIndex("idaho")
stateCoords[indexes[3]] = "149,28,136,85,141,97,126,117,118,166,163,176,206,184,214,133,187,128,177,102,168,104,175,83,159,51,162,31";
indexes[4] = LookupStateIndex("nevada")
stateCoords[indexes[4]] = "74,154,118,166,163,176,143,276,137,295,126,290,125,314,60,215";
indexes[5] = LookupStateIndex("utah")
stateCoords[indexes[5]] = "163,176,206,184,203,203,234,207,221,289,143,276";
indexes[6] = LookupStateIndex("arizona")
stateCoords[indexes[6]] = "143,276,137,295,126,290,125,314,130,329,114,359,172,396,205,402,221,289";
indexes[7] = LookupStateIndex("montana")
stateCoords[indexes[7]] = "162,31,159,51,175,83,168,104,177,102,187,128,214,133,215,123,316,135,317,115,322,53";
indexes[8] = LookupStateIndex("wyoming")
stateCoords[indexes[8]] = "215,123,316,135,312,175,308,216,234,207,203,203,206,184,214,133";
indexes[9] = LookupStateIndex("colorado")
stateCoords[indexes[9]] = "234,207,308,216,339,217,337,239,332,298,316,297,221,289";
indexes[10] = LookupStateIndex("newMexico")
stateCoords[indexes[10]] = "221,289,316,297,315,308,309,399,250,394,250,399,221,395,221,404,205,402";
indexes[11] = LookupStateIndex("northDakota")
stateCoords[indexes[11]] = "322,53,415,60,423,121,317,115";
indexes[12] = LookupStateIndex("southDakota")
stateCoords[indexes[12]] = "317,115,423,121,419,127,424,129,425,170,422,170,421,186,425,190,394,179,312,175";
indexes[13] = LookupStateIndex("nebraska")
stateCoords[indexes[13]] = "312,175,394,179,425,190,435,230,440,240,337,239,339,217,308,216";
indexes[14] = LookupStateIndex("kansas")
stateCoords[indexes[14]] = "337,239,440,240,449,244,444,252,452,258,452,302,332,298";
indexes[15] = LookupStateIndex("oklahoma")
stateCoords[indexes[15]] = "316,297,332,298,452,302,452,312,456,330,456,370,443,364,424,370,399,365,377,359,375,351,365,350,366,312,315,308";
indexes[16] = LookupStateIndex("texas")
stateCoords[indexes[16]] = "315,308,366,312,365,350,375,351,377,359,399,365,424,370,443,364,456,370,463,373,463,404,474,423,471,446,407,489,408,528,372,515,367,493,336,446,319,443,302,459,280,445,276,424,250,399,250,394,309,399";
indexes[17] = LookupStateIndex("minnesota")
stateCoords[indexes[17]] = "415,60,423,121,419,127,424,129,425,170,500,167,488,150,477,143,478,128,473,124,482,116,482,105,515,76,498,71,490,77,470,66,460,70,448,61,446,50,443,50,443,60";
indexes[18] = LookupStateIndex("iowa")
stateCoords[indexes[18]] = "425,170,422,170,421,186,425,190,435,230,494,227,500,233,508,219,505,211,518,203,518,196,511,188,502,180,500,167";
indexes[19] = LookupStateIndex("missouri")
stateCoords[indexes[19]] = "435,230,440,240,449,244,444,252,452,258,452,302,452,312,526,309,521,321,533,319,535,310,541,299,534,295,532,284,520,275,523,262,513,262,512,254,501,243,500,233,494,227";
indexes[20] = LookupStateIndex("arkansas")
stateCoords[indexes[20]] = "452,312,456,330,456,370,463,373,463,384,513,382,511,368,525,340,525,332,533,319,521,321,526,309";
indexes[21] = LookupStateIndex("louisiana")
stateCoords[indexes[21]] = "463,384,463,404,474,423,471,446,484,449,501,452,498,448,503,446,515,452,524,460,529,455,536,459,536,450,552,460,552,454,542,448,542,443,538,440,528,439,533,433,541,439,543,436,538,428,540,421,507,423,509,410,518,395,513,382";
indexes[22] = LookupStateIndex("wisconsin")
stateCoords[indexes[22]] = "482,105,503,98,502,105,510,105,513,110,543,116,547,120,547,127,550,127,550,131,546,141,547,144,560,126,554,143,554,151,550,169,553,179,553,185,511,188,502,180,500,167,488,150,477,143,478,128,473,124,482,116";
indexes[23] = LookupStateIndex("michigan")
stateCoords[indexes[23]] = "510,105,513,110,543,116,547,120,547,127,550,127,550,131,558,116,566,116,570,112,577,111,579,109,586,109,590,113,584,124,583,136,579,136,579,130,571,138,569,152,570,163,576,180,570,198,599,194,600,196,619,192,630,172,629,163,623,145,615,148,612,156,606,154,606,148,613,140,613,130,610,122,590,113,590,109,609,109,596,105,595,98,584,101,584,95,578,98,570,98,563,104,552,104,547,96,536,97,545,85,539,85,523,100,517,100";
indexes[24] = LookupStateIndex("illinois")
stateCoords[indexes[24]] = "511,188,518,196,518,203,505,211,508,219,500,233,501,243,512,254,513,262,523,262,520,275,532,284,534,295,541,299,544,293,552,295,550,288,557,287,557,281,558,271,564,260,560,253,563,243,558,200,553,185";
indexes[25] = LookupStateIndex("indiana")
stateCoords[indexes[25]] = "558,200,563,203,570,198,599,194,600,196,606,249,604,256,596,257,589,273,582,270,580,277,574,275,571,281,565,277,557,281,558,271,564,260,560,253,563,243";
indexes[26] = LookupStateIndex("ohio")
stateCoords[indexes[26]] = "600,196,619,192,635,199,640,195,647,195,662,182,666,206,664,210,664,230,653,238,652,248,646,245,642,260,636,253,623,257,620,254,616,254,612,249,606,249";
indexes[27] = LookupStateIndex("kentucky")
stateCoords[indexes[27]] = "535,310,541,299,544,293,552,295,550,288,557,287,557,281,565,277,571,281,574,275,580,277,582,270,589,273,596,257,604,256,606,249,612,249,616,254,620,254,623,257,636,253,642,260,642,266,654,276,630,298,559,303,559,308";
indexes[28] = LookupStateIndex("tennessee")
stateCoords[indexes[28]] = "535,310,559,308,559,303,630,298,662,293,658,304,643,308,642,313,631,319,628,321,627,326,623,326,623,332,603,334,560,337,525,340,525,332,533,319";
indexes[29] = LookupStateIndex("mississippi")
stateCoords[indexes[29]] = "525,340,560,337,562,340,560,403,564,432,554,431,543,436,538,428,540,421,507,423,509,410,518,395,513,382,511,368";
indexes[30] = LookupStateIndex("alabama")
stateCoords[indexes[30]] = "560,337,562,340,560,403,564,432,568,431,572,422,576,432,581,431,581,424,576,418,622,413,617,400,620,387,615,381,603,334";
indexes[31] = LookupStateIndex("georgia")
stateCoords[indexes[31]] = "603,334,615,381,620,387,617,400,622,413,624,419,670,416,671,420,674,420,673,411,682,411,687,383,678,372,675,364,648,339,640,335,643,328,623,332";
indexes[32] = LookupStateIndex("florida")
stateCoords[indexes[32]] = "581,431,581,424,576,418,622,413,624,419,670,416,671,420,674,420,673,411,682,411,686,429,699,446,702,455,722,487,719,515,709,518,698,507,694,507,667,471,669,450,665,446,659,445,642,429,635,430,620,440,612,429,592,428";
indexes[33] = LookupStateIndex("southCarolina")
stateCoords[indexes[33]] = "643,328,640,335,648,339,675,364,678,372,687,383,703,368,714,356,714,349,721,339,700,324,681,326,678,320,653,324";
indexes[34] = LookupStateIndex("northCarolina")
stateCoords[indexes[34]] = "662,293,752,277,754,283,746,289,747,291,752,290,752,295,755,296,755,291,759,291,756,302,738,301,747,306,743,312,753,311,737,321,729,331,730,337,721,339,700,324,681,326,678,320,653,324,643,328,623,332,623,326,627,326,628,321,631,319,642,313,643,308,658,304";
indexes[35] = LookupStateIndex("virginia")
stateCoords[indexes[35]] = "654,276,661,281,680,272,687,248,693,250,695,240,699,241,704,234,704,227,712,231,713,228,717,228,718,231,722,233,726,236,722,246,741,253,741,257,733,253,745,269,734,266,742,274,750,271,752,277,662,293,630,298";
indexes[36] = LookupStateIndex("virginiaEasternShore")
stateCoords[indexes[36]] = "750,248,756,246,749,266";
indexes[37] = LookupStateIndex("westVirginia")
stateCoords[indexes[37]] = "666,206,670,227,686,224,687,234,697,226,702,226,706,223,713,228,712,231,704,227,704,234,699,241,695,240,693,250,687,248,680,272,661,281,654,276,642,266,642,260,646,245,652,248,653,238,664,230,664,210";
indexes[38] = LookupStateIndex("maryland")
stateCoords[indexes[38]] = "686,224,741,213,749,238,758,237,756,246,750,248,741,241,742,236,738,223,739,216,730,225,739,247,722,246,726,236,729,232,725,230,722,233,718,231,717,228,713,228,706,223,702,226,697,226,687,234";
indexes[39] = LookupStateIndex("dc")
stateCoords[indexes[39]] = "726,236,729,232,725,230,722,233";
indexes[40] = LookupStateIndex("delaware")
stateCoords[indexes[40]] = "741,213,749,238,758,237,749,225,749,220,745,215,747,211,742,210";
indexes[41] = LookupStateIndex("pennsylvania")
stateCoords[indexes[41]] = "662,182,672,174,674,180,737,167,744,170,745,175,750,177,746,192,756,201,747,211,742,210,741,213,686,224,670,227,666,206";
indexes[42] = LookupStateIndex("newJersey")
stateCoords[indexes[42]] = "750,177,764,182,763,188,760,194,766,194,766,210,758,229,757,222,749,220,745,215,747,211,756,201,746,192";
indexes[43] = LookupStateIndex("newYork")
stateCoords[indexes[43]] = "672,174,674,180,737,167,744,170,745,175,750,177,764,182,763,188,785,180,793,172,783,178,773,181,766,186,767,181,765,179,769,176,767,174,765,160,765,145,761,129,758,127,753,101,731,106,716,126,719,129,719,140,710,147,689,149,680,153,684,162";
indexes[44] = LookupStateIndex("connecticut")
stateCoords[indexes[44]] = "765,160,789,154,792,163,792,167,781,172,777,175,767,181,765,179,769,176,767,174";
indexes[45] = LookupStateIndex("massachusetts")
stateCoords[indexes[45]] = "765,145,775,142,793,137,799,133,804,138,799,144,804,147,809,154,816,152,814,147,817,150,818,154,809,159,807,155,803,160,795,153,790,154,765,160";
indexes[46] = LookupStateIndex("rhodeIsland")
stateCoords[indexes[46]] = "789,154,795,153,797,164,792,167,792,163";
indexes[47] = LookupStateIndex("vermont")
stateCoords[indexes[47]] = "753,101,778,94,779,106,774,109,776,118,773,124,775,142,765,145,761,129,758,127";
indexes[48] = LookupStateIndex("newHampshire")
stateCoords[indexes[48]] = "778,94,779,106,774,109,776,118,773,124,775,142,793,137,799,133,799,128,795,123,783,87,778,89";
indexes[49] = LookupStateIndex("maine")
stateCoords[indexes[49]] = "783,87,792,72,788,64,791,60,790,56,796,38,799,38,800,41,804,41,809,36,818,40,827,67,831,67,834,75,838,74,841,82,821,97,819,92,816,105,807,110,799,128,795,123";
indexes[50] = LookupStateIndex("alaska")
stateCoords[indexes[50]] = "160,405,169,410,171,414,197,421,197,490,203,489,213,497,216,493,227,503,234,515,242,517,242,528,233,527,210,501,186,491,173,482,169,486,171,488,157,493,157,490,164,482,163,479,148,492,149,497,122,512,96,514,119,507,132,503,137,492,120,488,121,479,114,479,112,472,112,463,121,455,133,455,135,447,120,443,118,434,131,432,136,438,138,430,130,417";
indexes[51] = LookupStateIndex("hawaii_1")
stateCoords[indexes[51]] = "76,455,81,449,89,446,83,438,77,436,71,433,74,438,69,443,72,445";
indexes[52] = LookupStateIndex("hawaii_2")
stateCoords[indexes[52]] = "65,429,70,426,67,423,63,423,62,421,60,421,62,424,64,424";
indexes[53] = LookupStateIndex("hawaii_3")
stateCoords[indexes[53]] = "57,423,57,425,55,423";
indexes[54] = LookupStateIndex("hawaii_4")
stateCoords[indexes[54]] = "51,418,56,418,56,417,51,417";
indexes[55] = LookupStateIndex("hawaii_5")
stateCoords[indexes[55]] = "36,412,38,412,39,410,40,410,41,411,44,416,42,416,41,415,40,415";
indexes[56] = LookupStateIndex("hawaii_6")
stateCoords[indexes[56]] = "17,406,19,402,14,401,12,404";
indexes[57] = LookupStateIndex("hawaii_7")
stateCoords[indexes[57]] = "7,405,7,407,5,407,5,405";


var col = new jsColor("#aaaaff");
var pen = new jsPen(col, 2);
var statePolygon = new Array();
var currentStateIndex;
for (i = 0; i <= 57; i++) {
    currentStateIndex = indexes[i];
    statePolygon[currentStateIndex] = ArrayOfPoints(stateCoords[currentStateIndex]);
}
var minValue = 0;
var maxValue = 0;
var stateColor = new Array();
var stateColorObjects = new Array();

function DrawMap(){
	var gr = new jsGraphics(document.getElementById("canvas"));
	s = stateIndexMap;
	mode = GetMode();
	switch (mode) {
		case "immigration":
		dataArray = exemptionsInTotal;
		break;
		case "emmigration":
		dataArray = exemptionsOutTotal;
		break;
		case "netMigration":
		dataArray = netExemptionsArray;
		break;
	}
	if (document.getElementById("canvas").style.display == "block") {
		gr.clear();
		function GetStateColor(s){
		
			var data = dataArray[s];
			var color = ColorMap(data, minValue, maxValue, mode);
			return color;
			
			
		};
		minValue = 0;
		maxValue = 0;
		for (i = 0; i <= 57; i++) {
		
			if (dataArray[s[i]] < minValue) {
				minValue = dataArray[s[i]];
			}
			if (dataArray[s[i]] > maxValue) {
				maxValue = dataArray[s[i]];
			}
			
		}
		var currentStateIndex;
		for (i = 0; i <= 57; i++) {
			currentStateIndex = indexes[i];
			stateColor[currentStateIndex] = GetStateColor(currentStateIndex);
			stateColorObjects[currentStateIndex] = new jsColor(stateColor[currentStateIndex]);
			gr.fillPolygon(stateColorObjects[currentStateIndex], statePolygon[currentStateIndex]);
			gr.drawPolygon(pen, statePolygon[currentStateIndex]);
		}
	}
	else {
		return false;
	}
};

function LookupStateIndex(state){
    if (state == "alabama") 
        return 1;
    if (state == "alaska") 
        return 2;
    if (state == "arizona") 
        return 4;
    if (state == "arkansas") 
        return 5;
    if (state == "california") 
        return 6;
    if (state == "colorado") 
        return 8;
    if (state == "connecticut") 
        return 9;
    if (state == "delaware") 
        return 10;
    if (state == "dc") 
        return 11;
    if (state == "florida") 
        return 12;
    if (state == "georgia") 
        return 13;
    if (state == "hawaii_1") 
        return 15;
    if (state == "hawaii_2") 
        return 59;
    if (state == "hawaii_3") 
        return 60;
    if (state == "hawaii_4") 
        return 61;
    if (state == "hawaii_5") 
        return 62;
    if (state == "hawaii_6") 
        return 63;
    if (state == "hawaii_7") 
        return 64;
    if (state == "idaho") 
        return 16;
    if (state == "illinois") 
        return 17;
    if (state == "indiana") 
        return 18;
    if (state == "iowa") 
        return 19;
    if (state == "kansas") 
        return 20;
    if (state == "kentucky") 
        return 21;
    if (state == "louisiana") 
        return 22;
    if (state == "maine") 
        return 23;
    if (state == "maryland") 
        return 24;
    if (state == "massachusetts") 
        return 25;
    if (state == "michigan") 
        return 26;
    if (state == "minnesota") 
        return 27;
    if (state == "mississippi") 
        return 28;
    if (state == "missouri") 
        return 29;
    if (state == "montana") 
        return 30;
    if (state == "nebraska") 
        return 31;
    if (state == "nevada") 
        return 32;
    if (state == "newHampshire") 
        return 33;
    if (state == "newJersey") 
        return 34;
    if (state == "newMexico") 
        return 35;
    if (state == "newYork") 
        return 36;
    if (state == "northCarolina") 
        return 37;
    if (state == "northDakota") 
        return 38;
    if (state == "ohio") 
        return 39;
    if (state == "oklahoma") 
        return 40;
    if (state == "oregon") 
        return 41;
    if (state == "pennsylvania") 
        return 42;
    if (state == "rhodeIsland") 
        return 44;
    if (state == "southCarolina") 
        return 45;
    if (state == "southDakota") 
        return 46;
    if (state == "tennessee") 
        return 47;
    if (state == "texas") 
        return 48;
    if (state == "utah") 
        return 49;
    if (state == "vermont") 
        return 50;
    if (state == "virginia") 
        return 51;
    if (state == "virginiaEasternShore") 
        return 58;
    if (state == "washington") 
        return 53;
    if (state == "westVirginia") 
        return 54;
    if (state == "wisconsin") 
        return 55;
    if (state == "wyoming") 
        return 56;
};

function d2h(d){
    return d.toString(16);
};
function h2d(h){
    return parseInt(h, 16);
};

function ColorMap(input, min, max, mode){
    switch (mode) {
        case "netMigration":
			var positive = Math.round((input/max)*255);
			if (positive < 0) positive = 0;
			var negative = Math.round(((0 - input)/(0 -min))*255);
			if (negative < 0) negative = 0;
			positive = d2h(positive);
			if (positive.length == "1") {
				positive = "0" + positive;
			}
			
			negative = d2h(negative);
			
			if (negative.length == "1") {
				negative = "0" + negative;
			}
            var resultString = "";
            resultString = resultString + negative + positive + "00";
            resultString = "#" + resultString;
            break;
		case "emmigration":
			var colorValue = Math.round(((input - min) / (max - min)) * 255);
          
            colorValue = d2h(colorValue);
            var resultString = "";
            resultString = resultString + colorValue + "00" + "00";
            if (resultString.length == "5") {
                resultString = "0" + resultString;
            }
            resultString = "#" + resultString;
			break;
		case "immigration":
		var colorValue = Math.round(((input - min) / (max - min)) * 255);
          
            colorValue = d2h(colorValue);
            var resultString = "";
            resultString = resultString + "00" + colorValue + "00";
            if (resultString.length == "5") {
                resultString = "0" + resultString;
            }
            resultString = "#" + resultString;
		
    }
    return resultString;
};


function ArrayOfPoints(pointsString){
    var l;
    var coords = new Array();
    var coordx = "";
    var coordy = "";
    var isX = true;
    var isY = false;
    var numCoords = 0;
    for (n = 0; n <= pointsString.length; n++) {
        l = pointsString.charAt(n);
        if (l != ",") {
            if (isX == true) {
                coordx = coordx + l;
            }
            if (isY == true) {
                coordy = coordy + l;
            }
        }
        if (l == "," || n == pointsString.length) {
            if (isY == true) {
                coordx = coordx * 1;
                coordy = coordy * 1;
                coords[numCoords] = new jsPoint(coordx, coordy);
                numCoords++;
                coordx = "";
                coordy = "";
            }
            isX = (isX == false);
            isY = (isY == false);
        }
    }
    return coords;
};
