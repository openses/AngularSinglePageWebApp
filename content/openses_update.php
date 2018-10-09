<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="Claude Jacob / buerojacob.ch GmbH" />
  <meta content="Open School Ecosystems, digitalschoolecosystem.org, schul-ökosystem.ch, edusuisseid.ch, jsonsis.ch, schoolinformationsystem.ch, suisseeduid.ch" />
  <link href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" rel="stylesheet">
  <link href="https://openses.org/openses-content/trumbowyg.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://openses.org/openses-content/openses_iframe.css" media="screen" />
  <title>Übersicht Open School Ecosystems / openses.org</title>
</head>
<html>
<body>
             <?php
             $textarea = $_POST['textarea'];
$con = mysqli_connect("localhost","jacobc_opensesU",$_POST['pwd'],"jacobc_openses");
// Check connection
if ($con->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} else {
  echo "Connected to MySQL: " . mysqli_get_host_info($con) . PHP_EOL;
};
//https://www.w3schools.com/php/func_mysqli_real_escape_string.asp
$id = mysqli_real_escape_string($con, $_POST['id']);
$sql = "UPDATE content SET textarea = '" . $textarea ."' WHERE id = '".$id."'";

if (mysqli_query($con, $sql)) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . mysqli_error($conn);
}
$con->close();
?>
        <script src="https://openses.org/openses-content/jquery-3.3.1.js"></script>
        <script src="https://openses.org/openses-content/trumbowyg.min.js"></script>
        <script src="https://openses.org/openses-content/clipboard.js"></script>
        <script src="https://openses.org/openses-content/openses.js"></script>
  <!-- <script src="https://openses.org/openses-content/prism.js"></script> -->
        <script>
            $(document).ready(function(){
              $.trumbowyg.svgPath = 'https://openses.org/openses-content/ui/icons.svg';
             $('#js--trumbowyg').trumbowyg({
              btns: [['viewHTML']],
              autogrow: true
             });
             $('#js--trumbowyg').trumbowyg('enable');
            });
          </script>
    </body>
</html>
