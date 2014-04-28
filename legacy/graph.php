<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Graph</title>
<link rel="stylesheet" type="text/css" href="bushtaxcuts.css" />

<!--[if IE]><script language="javascript" type="text/javascript" src="excanvas.min.js"></script><![endif]-->
    <script language="javascript" type="text/javascript" src="jquery.js"></script>
    <script language="javascript" type="text/javascript" src="jquery.flot.min.js"></script>
    <!--[if lte IE 7]>
	<script type="text/javascript" src="json3.min.js"></script>
<![endif]-->
    <script language="javascript" type="text/javascript" src="MigrationGraph.js"></script>
    <script language="javascript" type="text/javascript" src="tableGenerator.js"></script>
    
<script language="javascript" type="text/javascript">
	var _isIE = false;
</script>



<!--[if lte IE 8]><script language="javascript" type="text/javascript">
	_isIE = true;
</script><![endif]-->

<?php

$inStateID = $_POST["stateSelector"];
$outStateID = $_POST["stateIDSubmit"];
$mode = $_POST["inOutNet"];
$startYear = $_POST["startingYearSelector"];
$endYear = $_POST["endingYearSelector"];
$data = $_POST["modeIDSubmit"];
$textInflationAdjust = $_POST["textInflationAdjust"];

?>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-10513207-3']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>
<body style="margin:0;background-color:#757575">

<div style="background:url(../images/photolayer.jpg) 50% 0 no-repeat; padding:0; margin:0; min-height:400px;">
<div style="background:url(../images/transparent-pattern.gif) 50% 0 repeat-y; padding:0; margin:0; min-height:400px;">

<?php
$a = 1;
$c = 1;
$d = 3;
include('../images/tabs.php');
?>

<div style="background-color:#FFF;width:1024px;margin-left:auto;margin-right:auto">
<div id="contentArea" style="margin-left:auto;margin-right:auto;width:900px;position:relative;top:20px;">
  <div style="font-size:18px;text-align:center;">
  <b>Migration between <span id="inStateTitle"></span>&nbsp;and <span id="outStateTitle"></span></b>  <br /><span style="font-size:12px"><a href="./">Back to multi-state data</a></span></div>
  <br/>
  <table>
    <tr>
      <td align="center" style="width:900px;"><table style="border-color:black; border-style:solid;">
          <tr>
            <td colspan="2"><table>
                <tr>
                  <td align="center"><b>Movement of <span id="dataSource"></span>&nbsp;Between States<span id="agiNote"></span></b></td>
                </tr>
                <tr>
                  <td><div id="placeholder" style="width:600px;height:300px;"> </div></td>
                </tr>
              </table></td>
            <td width="148" align="left" valign='top'><table cellpadding = "2" cellspacing = "2" style="font-size:9px;">
                <tr>
                  <td><br /></td>
                </tr>
                <tr>
                  <td><br /></td>
                </tr>
                <tr>
                  <td bgcolor="#009000">&nbsp; &nbsp; </td>
                  <td><span id="legendIm"></span></td>
                </tr>
                <tr>
                  <td bgcolor="#900000"></td>
                  <td><span id="legendEm"></span></td>
                </tr>
                <tr>
                  <td bgcolor="#000090"></td>
                  <td><span id="legendNet"></span></td>
                </tr>
                <tr><td><br /></td></tr><tr><td><br /></td></tr>
                <tr>
                <td colspan="2"><a href="http://www.taxfoundation.org/support"><img src = "donate-bar-vertical.jpg" /></a></td></tr>
              </table></td>
          </tr>
          <tr>
          	<td width="19"></td>
            <td width="587" align="center" style="color:#404040"> Year </td>
          </tr>
          <tr>
            <td><br/></td>
          </tr>
          <tr>
          	<td width></td>
            <td colspan="2">
            <table>
                <tr>
                  <td width="450" ><table id="dataTable" cellspacing="0">
                      <tr>
                        <td width="112"><b>Year </b></td>
                        <td width="112" class="inColumn"><div align="left"><b><span id="stateAbrv1"></span> to <span id="stateAbrv2"></span></b></div></td>
                        <td width="113" class="outColumn"><div align="left"><b><span id="stateAbrv3"></span> to <span id="stateAbrv4"></span></b></div></td>
                        <td width="113" class="netColumn"><div align="left"><b>Net Migration </b></div></td>
                      </tr>
                      <tr id = "1994Row" >
                        <td> 1993-94 </td>
                        <td class="inColumn" ><div align="right"><span id="1994Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="1994Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="1994Net"></span></div></td>
                      </tr>
                      <tr id = "1995Row">
                        <td> 1994-95 </td>
                        <td class="inColumn"><div align="right"><span id="1995Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="1995Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="1995Net"></span></div></td>
                      </tr>
                      <tr id = "1996Row">
                        <td> 1995-96 </td>
                        <td class="inColumn"><div align="right"><span id="1996Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="1996Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="1996Net"></span></div></td>
                      </tr>
                      <tr id = "1997Row">
                        <td> 1996-97 </td>
                        <td class="inColumn"><div align="right"><span id="1997Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="1997Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="1997Net"></span></div></td>
                      </tr>
                      <tr id = "1998Row">
                        <td> 1997-98 </td>
                        <td class="inColumn"><div align="right"><span id="1998Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="1998Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="1998Net"></span></div></td>
                      </tr>
                      <tr id = "1999Row">
                        <td> 1998-99 </td>
                        <td class="inColumn"><div align="right"><span id="1999Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="1999Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="1999Net"></span></div></td>
                      </tr>
                      <tr id = "2000Row">
                        <td> 1999-00 </td>
                        <td class="inColumn"><div align="right"><span id="2000Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="2000Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="2000Net"></span></div></td>
                      </tr>
                      <tr id = "2001Row">
                        <td> 2000-01 </td>
                        <td class="inColumn"><div align="right"><span id="2001Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="2001Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="2001Net"></span></div></td>
                      </tr>
                      <tr id = "2002Row">
                        <td> 2001-02 </td>
                        <td class="inColumn"><div align="right"><span id="2002Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="2002Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="2002Net"></span></div></td>
                      </tr>
                      <tr id = "2003Row">
                        <td> 2002-03 </td>
                        <td class="inColumn"><div align="right"><span id="2003Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="2003Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="2003Net"></span></div></td>
                      </tr>
                      <tr id = "2004Row">
                        <td> 2003-04 </td>
                        <td class="inColumn"><div align="right"><span id="2004Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="2004Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="2004Net"></span></div></td>
                      </tr>
                      <tr id = "2005Row">
                        <td> 2004-05 </td>
                        <td class="inColumn"><div align="right"><span id="2005Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="2005Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="2005Net"></span></div></td>
                      </tr>
                      <tr id = "2006Row">
                        <td> 2005-06 </td>
                        <td class="inColumn"><div align="right"><span id="2006Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="2006Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="2006Net"></span></div></td>
                      </tr>
                      <tr id = "2007Row">
                        <td> 2006-07 </td>
                        <td class="inColumn"><div align="right"><span id="2007Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="2007Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="2007Net"></span></div></td>
                      </tr>
                      <tr id = "2008Row">
                        <td> 2007-08 </td>
                        <td class="inColumn"><div align="right"><span id="2008Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="2008Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="2008Net"></span></div></td>
                      </tr>
                       <tr id = "2009Row">
                        <td> 2008-09 </td>
                        <td class="inColumn"><div align="right"><span id="2009Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="2009Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="2009Net"></span></div></td>
                      </tr>
                       <tr id = "2010Row">
                        <td> 2009-10 </td>
                        <td class="inColumn"><div align="right"><span id="2010Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="2010Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="2010Net"></span></div></td>
                      </tr>
                      <tr id = "2011Row">
                        <td> 2010-11 </td>
                        <td class="inColumn"><div align="right"><span id="2011Im"></span></div></td>
                        <td class="outColumn"><div align="right"><span id="2011Em"></span></div></td>
                        <td class="netColumn"><div align="right"><span id="2011Net"></span></div></td>
                      </tr>
                      <tr style="font-weight:bold;">
                      	<td style="border-top-style:solid; border-top-color:black; border-top-width:2px;"> Total: <br />
                        <span id="startingYearTableEntry"></span> to <span id="endingYearTableEntry"></span> </td>
                        <td valign="bottom" style="border-top-style:solid; border-top-color:black; border-top-width:2px;" class="inColumn"><div align="right"><span id="TotalEm"></span></div></td>
                        <td valign="bottom" style="border-top-style:solid; border-top-color:black; border-top-width:2px;" class="outColumn"><div align="right"><span id="TotalIm"></span></div></td>
                        <td valign="bottom" style="border-top-style:solid; border-top-color:black; border-top-width:2px;" class="netColumn"><div align="right"><span id="TotalNet"></span></div></td>
                      </tr>
                      
                  </table><br /><button id="download_spreadsheet_graph" onclick="GraphTableButton()">Download as CSV</button></td>
                  <td width="15"></td>
             
                  <td width="320" align="right" valign="top"><table>
                      <tr>
                        <td width="106" align="right"> To: </td>
                        <td width="195" align="left"><select id="state1select" name="state1select" onchange = "ChangeOption();">
                            <option name="Alabama" value="1">Alabama</option>
                            <option name="Alaska" value="2">Alaska</option>
                            <option name="Arizona" value="4">Arizona</option>
                            <option name="Arkansas" value="5">Arkansas</option>
                            <option name="California" value="6">California</option>
                            <option name="Colorado" value="8">Colorado</option>
                            <option name="Connecticut" value="9">Connecticut</option>
                            <option name="Delaware" value="10">Delaware</option>
                            <option name="District of Columbia" value = "11">District of Columbia</option>
                            <option name="Florida" value="12">Florida</option>
                            <option name="Georgia" value="13">Georgia</option>
                            <option name="Hawaii" value="15">Hawaii</option>
                            <option name="Idaho" value="16">Idaho</option>
                            <option name="Illinois" value="17">Illinois</option>
                            <option name="Indiana" value="18">Indiana</option>
                            <option name="Iowa" value="19">Iowa</option>
                            <option name="Kansas" value="20">Kansas</option>
                            <option name="Kentucky" value="21">Kentucky</option>
                            <option name="Louisiana" value="22">Louisiana</option>
                            <option name="Maine" value="23">Maine</option>
                            <option name="Maryland" value="24">Maryland</option>
                            <option name="Massachusetts" value="25">Massachusetts</option>
                            <option name="Michigan" value="26">Michigan</option>
                            <option name="Minnesota" value="27">Minnesota</option>
                            <option name="Mississippi" value="28">Mississippi</option>
                            <option name="Missouri" value="29">Missouri</option>
                            <option name="Montana" value="30">Montana</option>
                            <option name="Nebraska" value="31">Nebraska</option>
                            <option name="Nevada" value="32">Nevada</option>
                            <option name="New Hampshire" value="33">New Hampshire</option>
                            <option name="New Jersey" value="34">New Jersey</option>
                            <option name="New Mexico" value="35">New Mexico</option>
                            <option name="New York" value="36">New York</option>
                            <option name="North Carolina" value="37">North Carolina</option>
                            <option name="North Dakota" value = "38">North Dakota</option>
                            <option name="Ohio" value="39">Ohio</option>
                            <option name="Oklahoma" value="40">Oklahoma</option>
                            <option name="Oregon" value="41">Oregon</option>
                            <option name="Pennsylvania" value="42">Pennsylvania</option>
                            <option name="Rhode Island" value="44">Rhode Island</option>
                            <option name="South Carolina" value="45">South Carolina</option>
                            <option name="South Dakota" value="46">South Dakota</option>
                            <option name="Tennessee" value="47">Tennessee</option>
                            <option name="Texas" value="48">Texas</option>
                            <option name="Utah" value="49">Utah</option>
                            <option name="Vermont" value="50">Vermont</option>
                            <option name="Virginia" value="51">Virginia</option>
                            <option name="Washington" value="53">Washington</option>
                            <option name="West Virginia" value="54">West Virginia</option>
                            <option name="Wisconsin" value="55">Wisconsin</option>
                            <option name="Wyoming" value="56">Wyoming</option>
                            <option name="All States" value="99">All States</option>
                          </select></td>
                      </tr>
                      <tr>
                        <td align="right"> From: </td>
                        <td align="left"><select id = "state2select" name="state2select" onchange = "ChangeOption();">
                            <option name="Alabama" value="1">Alabama</option>
                            <option name="Alaska" value="2">Alaska</option>
                            <option name="Arizona" value="4">Arizona</option>
                            <option name="Arkansas" value="5">Arkansas</option>
                            <option name="California" value="6">California</option>
                            <option name="Colorado" value="8">Colorado</option>
                            <option name="Connecticut" value="9">Connecticut</option>
                            <option name="Delaware" value="10">Delaware</option>
                            <option name="District of Columbia" value = "11">District of Columbia</option>
                            <option name="Florida" value="12">Florida</option>
                            <option name="Georgia" value="13">Georgia</option>
                            <option name="Hawaii" value="15">Hawaii</option>
                            <option name="Idaho" value="16">Idaho</option>
                            <option name="Illinois" value="17">Illinois</option>
                            <option name="Indiana" value="18">Indiana</option>
                            <option name="Iowa" value="19">Iowa</option>
                            <option name="Kansas" value="20">Kansas</option>
                            <option name="Kentucky" value="21">Kentucky</option>
                            <option name="Louisiana" value="22">Louisiana</option>
                            <option name="Maine" value="23">Maine</option>
                            <option name="Maryland" value="24">Maryland</option>
                            <option name="Massachusetts" value="25">Massachusetts</option>
                            <option name="Michigan" value="26">Michigan</option>
                            <option name="Minnesota" value="27">Minnesota</option>
                            <option name="Mississippi" value="28">Mississippi</option>
                            <option name="Missouri" value="29">Missouri</option>
                            <option name="Montana" value="30">Montana</option>
                            <option name="Nebraska" value="31">Nebraska</option>
                            <option name="Nevada" value="32">Nevada</option>
                            <option name="New Hampshire" value="33">New Hampshire</option>
                            <option name="New Jersey" value="34">New Jersey</option>
                            <option name="New Mexico" value="35">New Mexico</option>
                            <option name="New York" value="36">New York</option>
                            <option name="North Carolina" value="37">North Carolina</option>
                            <option name="North Dakota" value = "38">North Dakota</option>
                            <option name="Ohio" value="39">Ohio</option>
                            <option name="Oklahoma" value="40">Oklahoma</option>
                            <option name="Oregon" value="41">Oregon</option>
                            <option name="Pennsylvania" value="42">Pennsylvania</option>
                            <option name="Rhode Island" value="44">Rhode Island</option>
                            <option name="South Carolina" value="45">South Carolina</option>
                            <option name="South Dakota" value="46">South Dakota</option>
                            <option name="Tennessee" value="47">Tennessee</option>
                            <option name="Texas" value="48">Texas</option>
                            <option name="Utah" value="49">Utah</option>
                            <option name="Vermont" value="50">Vermont</option>
                            <option name="Virginia" value="51">Virginia</option>
                            <option name="Washington" value="53">Washington</option>
                            <option name="West Virginia" value="54">West Virginia</option>
                            <option name="Wisconsin" value="55">Wisconsin</option>
                            <option name="Wyoming" value="56">Wyoming</option>
                            <option name="All States" value="99">All States</option>
                          </select></td>
                      </tr>
                      <tr>
                        <td align="right"> Start year: </td>
                        <td align="left"><select name="startYearSelect" id="startYearSelect" onchange = "ChangeOption();">
                            <option name="1993" value="1993">1993</option>
                            <option name="1994" value="1994">1994</option>
                            <option name="1995" value="1995">1995</option>
                            <option name="1996" value="1996">1996</option>
                            <option name="1997" value="1997">1997</option>
                            <option name="1998" value="1998">1998</option>
                            <option name="1999" value="1999">1999</option>
                            <option name="2000" value="2000">2000</option>
                            <option name="2001" value="2001">2001</option>
                            <option name="2002" value="2002">2002</option>
                            <option name="2003" value="2003">2003</option>
                            <option name="2004" value="2004">2004</option>
                            <option name="2005" value="2005">2005</option>
                            <option name="2006" value="2006">2006</option>
                            <option name="2007" value="2007">2007</option>
                            <option name="2008" value="2008">2008</option>
                            <option name="2009" value="2009">2009</option>
                          </select></td>
                      </tr>
                      <tr>
                        <td align="right"> End year: </td>
                        <td align="left"><select name="endYearSelect" id="endYearSelect" onchange = "ChangeOption();">
                            <option name="1995" value="1995">1995</option>
                            <option name="1996" value="1996">1996</option>
                            <option name="1997" value="1997">1997</option>
                            <option name="1998" value="1998">1998</option>
                            <option name="1999" value="1999">1999</option>
                            <option name="2000" value="2000">2000</option>
                            <option name="2001" value="2001">2001</option>
                            <option name="2002" value="2002">2002</option>
                            <option name="2003" value="2003">2003</option>
                            <option name="2004" value="2004">2004</option>
                            <option name="2005" value="2005">2005</option>
                            <option name="2006" value="2006">2006</option>
                            <option name="2007" value="2007">2007</option>
                            <option name="2008" value="2008">2008</option>
                            <option name="2009" value="2009">2009</option>
                            <option name="2010" value="2010">2010</option>
                            <option name="2011" value="2011">2011</option>
                          </select><span style="font-size:10px;">&nbsp;(Up to but not including)</span></td>
                      </tr>
                      <tr>
                        <td align="right"> Mode: </td>
                        <td align="left"><input type="radio" name="modeRadio" value="0" onclick = "ChangeOption();" />
                          Returns </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td align="left"><input type="radio" name="modeRadio" value="1" checked onclick = "ChangeOption();" />
                          Exemptions </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td align="left"><input type="radio" name="modeRadio" value="2" onclick = "ChangeOption();" />
                          AGI <span style="font-size:10px">&nbsp;&nbsp; Adjust for inflation <input type="checkbox" id = "inflationBox" onclick="ChangeOption();" /></span></td>
                      </tr>
                      <tr>
                        <td align="right">Show: </td>
                        <td align="left"><input type="checkbox" id="emCheckbox" checked  onclick = "ChangeOption();" />
                          <span id="emStateCheckBox2"></span> to <span id="imStateCheckBox2"></span></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td align="left"><input type="checkbox" id="imCheckbox" checked  onclick = "ChangeOption();" />
                          <span id="imStateCheckBox1"></span> to <span id="emStateCheckBox1"></span></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td align="left"><input type="checkbox" id="netCheckbox" checked  onclick = "ChangeOption();" />
                          Net Migration</td>
                      </tr>
                      <tr>
                      <td></td><td align="left" style="font-size:10px">Note: picking the same state in both menus will show non-migrants</td></tr>
                    </table></td>
                </tr>
            </table></td>
          </tr>
        </table></td>
    </tr>
  </table>
  
  <div style="display:none">
  	<form name="graphSpreadsheet" action="graphspreadsheet.php" method="post">
    	<input type="text" name="tableJSON" />
        <input type="text" name="toState" />
        <input type="text" name="fromState" />
        <input type="text" name="mode" />
        <input type="text" name="adjusted" />
    </form>
  </div>
  
  <br />
  <div align="center">Tax Information for <span id="stateTaxName1"></span>: 
  	<span id="state1link1"></span> |&nbsp;
    <span id="state1link2"></span>
    </div><br />
  <div align="center">Tax Information for <span id="stateTaxName2"></span>: 
  	<span id="state2link1"></span> |&nbsp;
    <span id="state2link2"></span>
    </div><br />
   <div align="center"><a href="http://www.taxfoundation.org/taxdata/show/228.html">State Income Tax Rates</a> |
   <a href="http://www.taxfoundation.org/research/show/245.html">State Sales Tax Rates</a> |
  <a href="http://www.taxfoundation.org/taxdata/show/22661.html">State Business Tax Climates</a> |
   <a href="http://www.taxfoundation.org/taxfreedomday/">Tax Freedom Day</a> |
   <a href="http://www.taxfoundation.org/publications/show/2181.html">Facts and Figures</a></div>
   <br />
   <br />
   <br />
   
</div>
</div>
</div>
</div>
</body>
<script type="text/javascript">

function AssignValues() {
	SelectOption("state1select", _inStateID);
	SelectOption("state2select", _outStateID);
	SelectOption("startYearSelect", _startYear);
	SelectOption("endYearSelect", _endYear);
	AssignRadio("modeRadio", _dataToDisplay);
	AssignModeBox(_mode);
	document.getElementById("inflationBox").checked = _adjustForInflation;
};

function AssignRadio(radioName, radioValue) {
	var radioArray = new Array();
	radioArray = document.getElementsByName(radioName);
	for (i=0;i<radioArray.length;i++) {
		if (radioArray[i].value*1 == radioValue) {
			radioArray[i].checked = true;
		}
	}
};

function AssignModeBox(mode) {
	switch (mode) {
		case 0:
		document.getElementById("imCheckbox").checked = true;
		document.getElementById("emCheckbox").checked = false;
		document.getElementById("netCheckbox").checked = false;
		break;
		case 1:
		document.getElementById("imCheckbox").checked = false;
		document.getElementById("emCheckbox").checked = true;
		document.getElementById("netCheckbox").checked = false;
		break;
		case 2:
		document.getElementById("imCheckbox").checked = false;
		document.getElementById("emCheckbox").checked = false;
		document.getElementById("netCheckbox").checked = true;
		break;
	}
};

function SelectOption(selectorID, valueToSelect) {
	var i = 0;
	var currentValue = 0;
	while (1) {
		currentValue = document.getElementById(selectorID).options[i].value;
		currentValue = currentValue*1;
		if (currentValue == valueToSelect) {
			document.getElementById(selectorID).selectedIndex = i;
			return true;
		}
		i++;
		if (i==200) return false;
	}
};

var _inStateID = <?php echo $inStateID; ?>;
var _outStateID = <?php echo $outStateID; ?>;
var _mode = <?php echo $mode; ?>;
var _startYear = <?php echo $startYear; ?>;
var _endYear = <?php echo $endYear; ?>;
var _dataToDisplay = <?php echo $data; ?>;
var _textInflationAdjust = <?php echo $textInflationAdjust; ?>;
_textInflationAdjust = _textInflationAdjust * 1;
if (_textInflationAdjust == 0) {
	var _adjustForInflation = false;	
} else {
	var _adjustForInflation = true;
}


try {
	AssignValues();
} catch (ex) {
	
}

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
</script>
    
<script type="text/javascript">
	DrawMap(_inStateID, _outStateID, _mode, _startYear, _endYear, _dataToDisplay,_adjustForInflation);
</script>
</html>
