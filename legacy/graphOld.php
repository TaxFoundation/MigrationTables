<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Graph</title>
<link rel="stylesheet" type="text/css" href="bushtaxcuts.css" />

<?php

$inStateID = $_GET["stateSelector"];
$outStateID = $_GET["stateIDSubmit"];
$mode = $_GET["inOutNet"];

?>

</head>
<body>
<div class="gradient" align="center" id="topbar" style="min-width:940px;"> <img src="MyTaxBurden.jpg" alt="My Tax Burden" /><a href="http://www.taxfoundation.org"><img src="TaxFoundation.jpg" alt="Tax Foundation" valign="top" border="0" /></a> </div>
<div class="tabbackground" align="center" style="min-width:940px;"> </div>
<div id="contentArea" style="margin-left:auto;margin-right:auto;width:900px;">
  <div style="font-size:18px;"> <b>Migration from <span id="inStateTitle"></span> to <span id="outStateTitle"></span></b> </div>
  
  <table>
    <tr>
      <td><table>
          <tr>
            <td width="50px"> Year </td>
            <td width="100px"> <span id="stateAbrv1"></span> to <span id="stateAbrv2"></span> </td>
            <td width="100px"> <span id="stateAbrv3"></span> to <span id="stateAbrv4"></span> </td>
            <td width="120px"> Net Migration </td>
          </tr>
          <tr>
            <td> 1994 </td>
            <td><span id="1994Im"></span></td>
            <td><span id="1994Em"></span></td>
            <td><span id="1994Net"></span></td>
          </tr>
          <tr>
            <td> 1995 </td>
            <td><span id="1995Im"></span></td>
            <td><span id="1995Em"></span></td>
            <td><span id="1995Net"></span></td>
          </tr>
          <tr>
            <td> 1996 </td>
            <td><span id="1996Im"></span></td>
            <td><span id="1996Em"></span></td>
            <td><span id="1996Net"></span></td>
          </tr>
          <tr>
            <td> 1997 </td>
            <td><span id="1997Im"></span></td>
            <td><span id="1997Em"></span></td>
            <td><span id="1997Net"></span></td>
          </tr>
          <tr>
            <td> 1998 </td>
            <td><span id="1998Im"></span></td>
            <td><span id="1998Em"></span></td>
            <td><span id="1998Net"></span></td>
          </tr>
          <tr>
            <td> 1999 </td>
            <td><span id="1999Im"></span></td>
            <td><span id="1999Em"></span></td>
            <td><span id="1999Net"></span></td>
          </tr>
          <tr>
            <td> 2000 </td>
            <td><span id="2000Im"></span></td>
            <td><span id="2000Em"></span></td>
            <td><span id="2000Net"></span></td>
          </tr>
          <tr>
            <td> 2001 </td>
            <td><span id="2001Im"></span></td>
            <td><span id="2001Em"></span></td>
            <td><span id="2001Net"></span></td>
          </tr>
          <tr>
            <td> 2002 </td>
            <td><span id="2002Im"></span></td>
            <td><span id="2002Em"></span></td>
            <td><span id="2002Net"></span></td>
          </tr>
          <tr>
            <td> 2003 </td>
            <td><span id="2003Im"></span></td>
            <td><span id="2003Em"></span></td>
            <td><span id="2003Net"></span></td>
          </tr>
          <tr>
            <td> 2004 </td>
            <td><span id="2004Im"></span></td>
            <td><span id="2004Em"></span></td>
            <td><span id="2004Net"></span></td>
          </tr>
          <tr>
            <td> 2005 </td>
            <td><span id="2005Im"></span></td>
            <td><span id="2005Em"></span></td>
            <td><span id="2005Net"></span></td>
          </tr>
          <tr>
            <td> 2006 </td>
            <td><span id="2006Im"></span></td>
            <td><span id="2006Em"></span></td>
            <td><span id="2006Net"></span></td>
          </tr>
          <tr>
            <td> 2007 </td>
            <td><span id="2007Im"></span></td>
            <td><span id="2007Em"></span></td>
            <td><span id="2007Net"></span></td>
          </tr>
        </table></td>
    </tr>
  </table>
</div>
</body>

<script type="text/javascript" src="flot/jquery.min.js"></script>
<script type="text/javascript" src="flot/jquery.flot.min.js"></script>
<script type="text/javascript">

var inStateID = <?php echo $inStateID; ?>;
var outStateID = <?php echo $outStateID; ?>;
var mode = <?php echo $mode; ?>;

</script>
<script type="text/javascript" src="MigrationGraph.js"></script>
<script type="text/javascript">
StateCompare();
</script>
</html>