<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="title" content="State Migration Data" />
<meta name="description" content="Look up migration data between any two states, from 1993 to 2011." />
<link rel="img_src" href="screenshot.jpg" / >
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Migration Data</title>
<link rel="stylesheet" type="text/css" href="bushtaxcuts.css" />
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
<br />
<div id="white" style="margin-left:auto;margin-right:auto;width:1024px;background-color:#FFF;position:relative;top:-3px;">
<div id="contentArea" style="margin-left:auto;margin-right:auto;width:900px;">
<table><tr><td>
  <div style="font-size:24px;"> <b>State to State Migration Data</b> &nbsp; &nbsp;
  	</div></td><td>
    <a name="fb_share" type="button" href="http://www.facebook.com/sharer.php">Share</a><script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script></td><td>
    <!-- AddThis Button BEGIN -->
    <a class="addthis_button" href="http://www.addthis.com/bookmark.php?v=250&amp;username=xa-4c90f004441f617a"><img src="http://s7.addthis.com/static/btn/sm-share-en.gif" width="83" height="16" alt="Bookmark and Share" style="border:0"/></a>
    <script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#username=xa-4c90f004441f617a"></script>
    <!-- AddThis Button END --></td><td>
    <a href="http://twitter.com/share" class="twitter-share-button" data-count="horizontal" data-via="taxfoundation">Tweet</a>
    <script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>
  </td></tr></table>
  <td><iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Finteractive.taxfoundation.org%2Fmigration&amp;layout=standard&amp;show_faces=false&amp;width=450&amp;action=like&amp;font=verdana&amp;colorscheme=light&amp;height=35" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:35px;" allowTransparency="true"></iframe></td>
  <br />
  
  <div style="width:650px;display:inline-block;vertical-align:top">
  Pick a state, a start date and an end date, and this tool will tell you how many people and how much income moved to and from that state, from and to every other state, in the time period you've chosen. We show only state to state migration, and exclude foreign immigration and emigration. See our list of <a href="FAQ.html">Frequently Asked Questions</a> for more information.<br>
  <br>
  <div style="font-size:10px;" align="right"> To see a graph of migration over time between any two states, simply click on any of the figures below.  </div>
  </div>
  <div style="width:200px;display:inline-block;vertical-align:top">
  <img src="example.png">
  </div>
  <br>
  <form name="mainForm" method="post" action="graph.php">
    <table>
      <tr>
        <td><table>
        	<tr><td colspan="2"><b>Display Migration Data:</b></td></tr>
            <tr>
              <td align="right"><span id="toOrFrom"></span>:</td>
              <td align="left"><select name = "stateSelector" id="StateSelector" onchange="ChangeSelector();">
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
              <td align="right"> Starting year: </td>
              <td align="left"><select name = "startingYearSelector" id="startingYearSelector" onchange="ChangeSelector();">
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
                  <option name="2010" value="2010">2010</option>
                </select></td>
            </tr>
            <tr>
              <td align="right"> Ending year: </td>
              <td align="left"><select name = "endingYearSelector" id="endingYearSelector" onchange="ChangeSelector();">
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
                  <option name="2010" value="2010">2010</option>
                  <option name="2011" value="2011" selected>2011</option>
                </select>&nbsp;<span style="font-size:10px;">(Up to but not including) </span></td>
            </tr>
            <tr>
              <td colspan="2" style="display:none"> Hidden area.  State to submit =
                <input type="text" name="stateIDSubmit" />
                <br>
                Mode:
                <input type="text" name="modeIDSubmit" />
                <br />
                Inflation adjust:
                <input type="text" name="textInflationAdjust" /></td>
            </tr>
          </table></td>
        <td align="center">&nbsp; &nbsp; <a href="http://www.taxfoundation.org/support"><img src="donate-bar.jpg" border="0"></a></td>
      </tr>
      <tr>
        <td colspan="2"> Show:
          <input type="radio" name="inOutNet" value="1" onchange="ChangeSelector();">
          </input>
          In Migration &nbsp; &nbsp;
          <input type="radio" name="inOutNet" value="0" onchange="ChangeSelector();">
          Out Migration
          </input>
          &nbsp; &nbsp;
          <input type="radio" name="inOutNet" checked value="2" onchange="ChangeSelector();">
          Net Migration
          </input></td>
      </tr>
     
      <tr>
        <td colspan="2"><table width="893">
            <tr>
              <td valign="bottom">Click on a column header to sort by column.  Click on the data to display a graph.</td>
              <td align="right">Adjust AGI figures for Inflation <br>(2011 Dollars)
                <input type="checkbox" id="inflationAdjustBox" checked onclick="ChangeSelector();"></td>
            </tr>
          </table></td>
      </tr>
    </table>
    <!-- <button id="showHideMap" onclick="ShowHideMap();">Show Map</button><button id="updateMap" onclick="DrawMap();" style="display:none;">Update Map</button> (Takes some time - please be patient)
                <div id="canvas" style="overflow:hidden;position:relative;width:847px;height:531px;display:none;"></div> -->
    <table class="sortable" id="mainTable">
      <colgroup>
      <col id="stateColumn">
      <col id="returnsColumn">
      <col id="exemptionsColumn">
      <col id="agiColumn">
      </colgroup>
      <tr>
        <td class="tableCellLine" id="stateHeader" style="width:150px;"><b><span id="stateColumnHeader"></span></b></td>
        <td align="right" class="tableCellLine" style="width:250px;"><b><span id="returnsColumnHeader">Net # Tax Returns Inflow</span></b></td>
        <td align="right" class="tableCellLine" style="width:250px;"><b><span id="exemptionsColumnHeader">Net # Exemptions Inflow</span></b></td>
        <td align="right" class="tableCellLine" style="width:250px;"><b><span id="agiColumnHeader">Net AGI Inflow (thousands of dollars)</span></b></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link1">Alabama</span></td>
        <td align="right" class="tableCellLine"><span id="1ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(1);" onClick="SubmitFormRets(1);"></span></td>
        <td align="right" class="tableCellLine"><span id="1ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(1);" onClick="SubmitFormExem(1);"></span></td>
        <td align="right" class="tableCellLine"><span id="1AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(1);" onClick="SubmitFormAGI(1);" ></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link2">Alaska</span></td>
        <td align="right" class="tableCellLine"><span id="2ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(2);" onClick="SubmitFormRets(2);"></span></td>
        <td align="right" class="tableCellLine"><span id="2ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(2);" onClick="SubmitFormExem(2);"></span></td>
        <td align="right" class="tableCellLine"><span id="2AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(2);" onClick="SubmitFormAGI(2);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link4">Arizona</span></td>
        <td align="right" class="tableCellLine"><span id="4ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(4);" onClick="SubmitFormRets(4);"></span></td>
        <td align="right" class="tableCellLine"><span id="4ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(4);" onClick="SubmitFormExem(4);"></span></td>
        <td align="right" class="tableCellLine"><span id="4AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(4);" onClick="SubmitFormAGI(4);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link5">Arkansas</span></td>
        <td align="right" class="tableCellLine"><span id="5ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(5);" onClick="SubmitFormRets(5);"></span></td>
        <td align="right" class="tableCellLine"><span id="5ExemptionsInflow"  class = "graphLink" onMouseOver="GraphLinkExem(5);" onClick="SubmitFormExem(5);"></span></td>
        <td align="right" class="tableCellLine"><span id="5AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(5);" onClick="SubmitFormAGI(5);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link6" >California</span></td>
        <td align="right" class="tableCellLine"><span id="6ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(6);" onClick="SubmitFormRets(6);"></span></td>
        <td align="right" class="tableCellLine"><span id="6ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(6);" onClick="SubmitFormExem(6);"></span></td>
        <td align="right" class="tableCellLine"><span id="6AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(6);" onClick="SubmitFormAGI(6);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link8" >Colorado</span></td>
        <td align="right" class="tableCellLine"><span id="8ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(8);" onClick="SubmitFormRets(8);"></span></td>
        <td align="right" class="tableCellLine"><span id="8ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(8);" onClick="SubmitFormExem(8);"></span></td>
        <td align="right" class="tableCellLine"><span id="8AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(8);" onClick="SubmitFormAGI(8);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link9" >Connecticut</span></td>
        <td align="right" class="tableCellLine"><span id="9ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(9);" onClick="SubmitFormRets(9);"></span></td>
        <td align="right" class="tableCellLine"><span id="9ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(9);" onClick="SubmitFormExem(9);" ></span></td>
        <td align="right" class="tableCellLine"><span id="9AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(9);" onClick="SubmitFormAGI(9);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link10" >Delaware</span></td>
        <td align="right" class="tableCellLine"><span id="10ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(10);" onClick="SubmitFormRets(10);"></span></td>
        <td align="right" class="tableCellLine"><span id="10ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(10);" onClick="SubmitFormExem(10);" ></span></td>
        <td align="right" class="tableCellLine"><span id="10AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(10);" onClick="SubmitFormAGI(10);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link11" >District of Columbia</span></td>
        <td align="right" class="tableCellLine"><span id="11ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(11);" onClick="SubmitFormRets(11);"></span></td>
        <td align="right" class="tableCellLine"><span id="11ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(11);" onClick="SubmitFormExem(11);"></span></td>
        <td align="right" class="tableCellLine"><span id="11AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(11);" onClick="SubmitFormAGI(11);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link12" >Florida</span></td>
        <td align="right" class="tableCellLine"><span id="12ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(12);" onClick="SubmitFormRets(12);"></span></td>
        <td align="right" class="tableCellLine"><span id="12ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(12);" onClick="SubmitFormExem(12);" ></span></td>
        <td align="right" class="tableCellLine"><span id="12AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(12);" onClick="SubmitFormAGI(12);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link13" >Georgia</span></td>
        <td align="right" class="tableCellLine"><span id="13ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(13);" onClick="SubmitFormRets(13);"></span></td>
        <td align="right" class="tableCellLine"><span id="13ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(13);" onClick="SubmitFormExem(13);"></span></td>
        <td align="right" class="tableCellLine"><span id="13AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(13);" onClick="SubmitFormAGI(13);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link15" >Hawaii</span></td>
        <td align="right" class="tableCellLine"><span id="15ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(15);" onClick="SubmitFormRets(15);"></span></td>
        <td align="right" class="tableCellLine"><span id="15ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(15);" onClick="SubmitFormExem(15);"></span></td>
        <td align="right" class="tableCellLine"><span id="15AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(15);" onClick="SubmitFormAGI(15);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link16" >Idaho</span></td>
        <td align="right" class="tableCellLine"><span id="16ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(16);" onClick="SubmitFormRets(16);"></span></td>
        <td align="right" class="tableCellLine"><span id="16ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(16);" onClick="SubmitFormExem(16);"></span></td>
        <td align="right" class="tableCellLine"><span id="16AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(16);" onClick="SubmitFormAGI(16);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link17" >Illinois</span></td>
        <td align="right" class="tableCellLine"><span id="17ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(17);" onClick="SubmitFormRets(17);"></span></td>
        <td align="right" class="tableCellLine"><span id="17ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(17);" onClick="SubmitFormExem(17);"></span></td>
        <td align="right" class="tableCellLine"><span id="17AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(17);" onClick="SubmitFormAGI(17);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link18" >Indiana</span></td>
        <td align="right" class="tableCellLine"><span id="18ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(18);" onClick="SubmitFormRets(18);"></span></td>
        <td align="right" class="tableCellLine"><span id="18ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(18);" onClick="SubmitFormExem(18);"></span></td>
        <td align="right" class="tableCellLine"><span id="18AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(18);" onClick="SubmitFormAGI(18);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link19" >Iowa</span></td>
        <td align="right" class="tableCellLine"><span id="19ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(19);" onClick="SubmitFormRets(19);"></span></td>
        <td align="right" class="tableCellLine"><span id="19ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(19);" onClick="SubmitFormExem(19);"></span></td>
        <td align="right" class="tableCellLine"><span id="19AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(19);" onClick="SubmitFormAGI(19);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link20" >Kansas</span></td>
        <td align="right" class="tableCellLine"><span id="20ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(20);" onClick="SubmitFormRets(20);"></span></td>
        <td align="right" class="tableCellLine"><span id="20ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(20);" onClick="SubmitFormExem(20);"></span></td>
        <td align="right" class="tableCellLine"><span id="20AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(20);" onClick="SubmitFormAGI(20);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link21" >Kentucky</span></td>
        <td align="right" class="tableCellLine"><span id="21ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(21);" onClick="SubmitFormRets(21);"></span></td>
        <td align="right" class="tableCellLine"><span id="21ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(21);" onClick="SubmitFormExem(21);"></span></td>
        <td align="right" class="tableCellLine"><span id="21AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(21);" onClick="SubmitFormAGI(21);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link22" >Louisiana</span></td>
        <td align="right" class="tableCellLine"><span id="22ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(22);" onClick="SubmitFormRets(22);"></span></td>
        <td align="right" class="tableCellLine"><span id="22ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(22);" onClick="SubmitFormExem(22);"></span></td>
        <td align="right" class="tableCellLine"><span id="22AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(22);" onClick="SubmitFormAGI(22);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link23" >Maine</span></td>
        <td align="right" class="tableCellLine"><span id="23ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(23);" onClick="SubmitFormRets(23);"></span></td>
        <td align="right" class="tableCellLine"><span id="23ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(23);" onClick="SubmitFormExem(23);"></span></td>
        <td align="right" class="tableCellLine"><span id="23AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(23);" onClick="SubmitFormAGI(23);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link24" >Maryland</span></td>
        <td align="right" class="tableCellLine"><span id="24ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(24);" onClick="SubmitFormRets(24);"></span></td>
        <td align="right" class="tableCellLine"><span id="24ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(24);" onClick="SubmitFormExem(24);"></span></td>
        <td align="right" class="tableCellLine"><span id="24AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(24);" onClick="SubmitFormAGI(24);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link25" >Massachusetts</span></td>
        <td align="right" class="tableCellLine"><span id="25ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(25);" onClick="SubmitFormRets(25);"></span></td>
        <td align="right" class="tableCellLine"><span id="25ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(25);" onClick="SubmitFormExem(25);"></span></td>
        <td align="right" class="tableCellLine"><span id="25AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(25);" onClick="SubmitFormAGI(25);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link26" >Michigan</span></td>
        <td align="right" class="tableCellLine"><span id="26ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(26);" onClick="SubmitFormRets(26);"></span></td>
        <td align="right" class="tableCellLine"><span id="26ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(26);" onClick="SubmitFormExem(26);"></span></td>
        <td align="right" class="tableCellLine"><span id="26AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(26);" onClick="SubmitFormAGI(26);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link27" >Minnesota</span></td>
        <td align="right" class="tableCellLine"><span id="27ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(27);" onClick="SubmitFormRets(27);"></span></td>
        <td align="right" class="tableCellLine"><span id="27ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(27);" onClick="SubmitFormExem(27);"></span></td>
        <td align="right" class="tableCellLine"><span id="27AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(27);" onClick="SubmitFormAGI(27);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link28" >Mississippi</span></td>
        <td align="right" class="tableCellLine"><span id="28ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(28);" onClick="SubmitFormRets(28);"></span></td>
        <td align="right" class="tableCellLine"><span id="28ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(28);" onClick="SubmitFormExem(28);"></span></td>
        <td align="right" class="tableCellLine"><span id="28AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(28);" onClick="SubmitFormAGI(28);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link29" >Missouri</span></td>
        <td align="right" class="tableCellLine"><span id="29ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(29);" onClick="SubmitFormRets(29);"></span></td>
        <td align="right" class="tableCellLine"><span id="29ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(29);" onClick="SubmitFormExem(29);"></span></td>
        <td align="right" class="tableCellLine"><span id="29AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(29);" onClick="SubmitFormAGI(29);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link30" >Montana</span></td>
        <td align="right" class="tableCellLine"><span id="30ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(30);" onClick="SubmitFormRets(30);"></span></td>
        <td align="right" class="tableCellLine"><span id="30ExemptionsInflow" class = "graphLink"  onMouseOver="GraphLinkExem(30);" onClick="SubmitFormExem(30);"></span></td>
        <td align="right" class="tableCellLine"><span id="30AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(30);" onClick="SubmitFormAGI(30);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link31" >Nebraska</span></td>
        <td align="right" class="tableCellLine"><span id="31ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(31);" onClick="SubmitFormRets(31);"></span></td>
        <td align="right" class="tableCellLine"><span id="31ExemptionsInflow"  class = "graphLink" onMouseOver="GraphLinkExem(31);" onClick="SubmitFormExem(31);"></span></td>
        <td align="right" class="tableCellLine"><span id="31AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(31);" onClick="SubmitFormAGI(31);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link32" >Nevada</span></td>
        <td align="right" class="tableCellLine"><span id="32ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(32);" onClick="SubmitFormRets(32);"></span></td>
        <td align="right" class="tableCellLine"><span id="32ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(32);" onClick="SubmitFormExem(32);"></span></td>
        <td align="right" class="tableCellLine"><span id="32AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(32);" onClick="SubmitFormAGI(32);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link33" >New Hampshire</span></td>
        <td align="right" class="tableCellLine"><span id="33ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(33);" onClick="SubmitFormRets(33);"></span></td>
        <td align="right" class="tableCellLine"><span id="33ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(33);" onClick="SubmitFormExem(33);"></span></td>
        <td align="right" class="tableCellLine"><span id="33AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(33);" onClick="SubmitFormAGI(33);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link34" >New Jersey</span></td>
        <td align="right" class="tableCellLine"><span id="34ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(34);" onClick="SubmitFormRets(34);"></span></td>
        <td align="right" class="tableCellLine"><span id="34ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(34);" onClick="SubmitFormExem(34);"></span></td>
        <td align="right" class="tableCellLine"><span id="34AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(34);" onClick="SubmitFormAGI(34);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link35" >New Mexico</span></td>
        <td align="right" class="tableCellLine"><span id="35ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(35);" onClick="SubmitFormRets(35);"></span></td>
        <td align="right" class="tableCellLine"><span id="35ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(35);" onClick="SubmitFormExem(35);"></span></td>
        <td align="right" class="tableCellLine"><span id="35AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(35);" onClick="SubmitFormAGI(35);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link36" >New York</span></td>
        <td align="right" class="tableCellLine"><span id="36ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(36);" onClick="SubmitFormRets(36);"></span></td>
        <td align="right" class="tableCellLine"><span id="36ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(36);" onClick="SubmitFormExem(36);"></span></td>
        <td align="right" class="tableCellLine"><span id="36AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(36);" onClick="SubmitFormAGI(36);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link37" >North Carolina</span></td>
        <td align="right" class="tableCellLine"><span id="37ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(37);" onClick="SubmitFormRets(37);"></span></td>
        <td align="right" class="tableCellLine"><span id="37ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(37);" onClick="SubmitFormExem(37);"></span></td>
        <td align="right" class="tableCellLine"><span id="37AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(37);" onClick="SubmitFormAGI(37);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link38" >North Dakota</span></td>
        <td align="right" class="tableCellLine"><span id="38ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(38);" onClick="SubmitFormRets(38);"></span></td>
        <td align="right" class="tableCellLine"><span id="38ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(38);" onClick="SubmitFormExem(38);"></span></td>
        <td align="right" class="tableCellLine"><span id="38AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(38);" onClick="SubmitFormAGI(38);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link39" >Ohio</span></td>
        <td align="right" class="tableCellLine"><span id="39ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(39);" onClick="SubmitFormRets(39);"></span></td>
        <td align="right" class="tableCellLine"><span id="39ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(39);" onClick="SubmitFormExem(39);"></span></td>
        <td align="right" class="tableCellLine"><span id="39AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(39);" onClick="SubmitFormAGI(39);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link40" >Oklahoma</span></td>
        <td align="right" class="tableCellLine"><span id="40ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(40);" onClick="SubmitFormRets(40);"></span></td>
        <td align="right" class="tableCellLine"><span id="40ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(40);" onClick="SubmitFormExem(40);"></span></td>
        <td align="right" class="tableCellLine"><span id="40AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(40);" onClick="SubmitFormAGI(40);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link41" >Oregon</span></td>
        <td align="right" class="tableCellLine"><span id="41ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(41);" onClick="SubmitFormRets(41);"></span></td>
        <td align="right" class="tableCellLine"><span id="41ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(41);" onClick="SubmitFormExem(41);"></span></td>
        <td align="right" class="tableCellLine"><span id="41AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(41);" onClick="SubmitFormAGI(41);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link42" >Pennsylvania</span></td>
        <td align="right" class="tableCellLine"><span id="42ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(42);" onClick="SubmitFormRets(42);"></span></td>
        <td align="right" class="tableCellLine"><span id="42ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(42);" onClick="SubmitFormExem(42);"></span></td>
        <td align="right" class="tableCellLine"><span id="42AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(42);" onClick="SubmitFormAGI(42);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link44" >Rhode Island</span></td>
        <td align="right" class="tableCellLine"><span id="44ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(44);" onClick="SubmitFormRets(44);"></span></td>
        <td align="right" class="tableCellLine"><span id="44ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(44);" onClick="SubmitFormExem(44);"></span></td>
        <td align="right" class="tableCellLine"><span id="44AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(44);" onClick="SubmitFormAGI(44);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link45" >South Carolina</span></td>
        <td align="right" class="tableCellLine"><span id="45ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(45);" onClick="SubmitFormRets(45);"></span></td>
        <td align="right" class="tableCellLine"><span id="45ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(45);" onClick="SubmitFormExem(45);"></span></td>
        <td align="right" class="tableCellLine"><span id="45AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(45);" onClick="SubmitFormAGI(45);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link46" >South Dakota</span></td>
        <td align="right" class="tableCellLine"><span id="46ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(46);" onClick="SubmitFormRets(46);"></span></td>
        <td align="right" class="tableCellLine"><span id="46ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(46);" onClick="SubmitFormExem(46);"></span></td>
        <td align="right" class="tableCellLine"><span id="46AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(46);" onClick="SubmitFormAGI(46);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link47" >Tennessee</span></td>
        <td align="right" class="tableCellLine"><span id="47ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(47);" onClick="SubmitFormRets(47);"></span></td>
        <td align="right" class="tableCellLine"><span id="47ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(47);" onClick="SubmitFormExem(47);"></span></td>
        <td align="right" class="tableCellLine"><span id="47AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(47);" onClick="SubmitFormAGI(47);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link48" >Texas</span></td>
        <td align="right" class="tableCellLine"><span id="48ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(48);" onClick="SubmitFormRets(48);"></span></td>
        <td align="right" class="tableCellLine"><span id="48ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(48);" onClick="SubmitFormExem(48);"></span></td>
        <td align="right" class="tableCellLine"><span id="48AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(48);" onClick="SubmitFormAGI(48);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link49" >Utah</span></td>
        <td align="right" class="tableCellLine"><span id="49ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(49);" onClick="SubmitFormRets(49);"></span></td>
        <td align="right" class="tableCellLine"><span id="49ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(49);" onClick="SubmitFormExem(49);"></span></td>
        <td align="right" class="tableCellLine"><span id="49AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(49);" onClick="SubmitFormAGI(49);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link50" >Vermont</span></td>
        <td align="right" class="tableCellLine"><span id="50ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(50);" onClick="SubmitFormRets(50);"></span></td>
        <td align="right" class="tableCellLine"><span id="50ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(50);" onClick="SubmitFormExem(50);"></span></td>
        <td align="right" class="tableCellLine"><span id="50AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(50);" onClick="SubmitFormAGI(50);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link51" >Virginia</span></td>
        <td align="right" class="tableCellLine"><span id="51ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(51);" onClick="SubmitFormRets(51);"></span></td>
        <td align="right" class="tableCellLine"><span id="51ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(51);" onClick="SubmitFormExem(51);"></span></td>
        <td align="right" class="tableCellLine"><span id="51AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(51);" onClick="SubmitFormAGI(51);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link53" >Washington</span></td>
        <td align="right" class="tableCellLine"><span id="53ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(53);" onClick="SubmitFormRets(53);"></span></td>
        <td align="right" class="tableCellLine"><span id="53ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(53);" onClick="SubmitFormExem(53);"></span></td>
        <td align="right" class="tableCellLine"><span id="53AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(53);" onClick="SubmitFormAGI(53);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link54" >West Virginia</span></td>
        <td align="right" class="tableCellLine"><span id="54ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(54);" onClick="SubmitFormRets(54);"></span></td>
        <td align="right" class="tableCellLine"><span id="54ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(54);" onClick="SubmitFormExem(54);"></span></td>
        <td align="right" class="tableCellLine"><span id="54AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(54);" onClick="SubmitFormAGI(54);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link55" >Wisconsin</span></td>
        <td align="right" class="tableCellLine"><span id="55ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(55);" onClick="SubmitFormRets(55);"></span></td>
        <td align="right" class="tableCellLine"><span id="55ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(55);" onClick="SubmitFormExem(55);"></span></td>
        <td align="right" class="tableCellLine"><span id="55AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(55);" onClick="SubmitFormAGI(55);"></span></td>
      </tr>
      <tr>
        <td class="tableCellLine"><span id="link56" >Wyoming</span></td>
        <td align="right" class="tableCellLine"><span id="56ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(56);" onClick="SubmitFormRets(56);"></span></td>
        <td align="right" class="tableCellLine"><span id="56ExemptionsInflow" class = "graphLink" onMouseOver="GraphLinkExem(56);" onClick="SubmitFormExem(56);"></span></td>
        <td align="right" class="tableCellLine"><span id="56AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(56);" onClick="SubmitFormAGI(56);"></span></td>
      </tr>
      <tfoot>
      <td class="tableCellLine" style="border-top-style:solid; border-top-width:2px; border-top-color:#234C8A;"><span id="link99" >All States</span></td>
        <td align="right" class="tableCellLine" style="border-top-style:solid; border-top-width:2px; border-top-color:#234C8A;"><span id="99ReturnsInflow" class = "graphLink" onMouseOver = "GraphLinkRets(99);" onClick="SubmitFormRets(99);"></span></td>
        <td align="right" class="tableCellLine" style="border-top-style:solid; border-top-width:2px; border-top-color:#234C8A;"><span id="99ExemptionsInflow" class = "graphLink"  onMouseOver="GraphLinkExem(99);" onClick="SubmitFormExem(99);"></span></td>
        <td align="right" class="tableCellLine" style="border-top-style:solid; border-top-width:2px; border-top-color:#234C8A;"><span id="99AGIInflow" class = "graphLink" onMouseOver="GraphLinkAGI(99);" onClick="SubmitFormAGI(99);"></span></td>
        </tfoot>
    </table>
    
  </form>
  
  <form id="table_post" action="spreadsheet.php" method="post">
  <div style="display:none">
  	<input type="text" name="tableString" id="tableStringInput" />
 
    <input type="text" name="startYear" id="startYearInput" />
 
    <input type="text" name="endYear" id="endinYearInput" />
 
    <input type="text" name="state" id="stateInput" />
 
    <input type="text" name="mode" id="modeInput" />
    
      <input type="text" name="inflation" id="inflationInput" />
 	</form></div>
    <button id="generateTable" onclick="TableButton()" >Download Table as CSV</button>
  <br/>
 </div>
  <div align="center">
  <div align="center" class="donationbanner"><a href="http://www.taxfoundation.org/donate"><img src="donate-bar.jpg" border="0"/></a></div>
  <br/>
  <div align="center" style="height:15px">Tax Information for <span id="stateTaxName1"></span>: 
  	<span id="state1link1"></span> |&nbsp;
    <span id="state1link2"></span> 
    </div>
     <div align="center"><a href="http://www.taxfoundation.org/taxdata/show/228.html">State Income Tax Rates</a> |
   <a href="http://www.taxfoundation.org/research/show/245.html">State Sales Tax Rates</a> |
   <a href="http://www.taxfoundation.org/taxdata/show/22661.html">State Business Tax Climates</a> |
   <a href="http://www.taxfoundation.org/taxfreedomday/">Tax Freedom Day</a> |
   <a href="http://www.taxfoundation.org/publications/show/2181.html">Facts and Figures</a></div>
   <br />
  
  <div align="center"><a href="about.html">About this tool</a> | <a href="FAQ.html">Frequently Asked Questions</a> | <a href="http://www.youtube.com/watch?v=nk6uHzOLmJ8">Video Instructions</a></div>
</div>
<br />
<br />
<div align="center" style="font-size:14px">Migration tool by <a href="http://www.taxfoundation.org/staff/show/179.html">Nicholas A. Kasprak</a></div>
<br />
<br />
</div>
&nbsp; &nbsp;

</div>
</div>
</body>
<!--[if lte IE 7]>
	<script type="text/javascript" src="json3.min.js"></script>
<![endif]-->
<script type="text/javascript" src="sorttable.js">
        </script>
<script type="text/javascript" src="Migration.js">
        </script>
<script type="text/javascript" src="tableGenerator.js">
</script>
</html>
