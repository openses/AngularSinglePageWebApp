<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="Claude Jacob / buerojacob.ch GmbH" />
  <meta content="Open School Ecosystems, digitalschoolecosystem.org, schul-ökosystem.ch, edusuisseid.ch, jsonsis.ch, schoolinformationsystem.ch, suisseeduid.ch" />
  <!-- <link rel="stylesheet" href="https://openses.org/openses-content/trumbowyg.min.css"> -->
  <link rel="stylesheet" href="https://openses.org/openses-content/openses_iframe.css" media="screen" />
  <title>Übersicht Open School Ecosystems / openses.org</title>
</head>
<html>
   <body>
   <a target= "_blank" href="https://openses.org" rel="noopener" style="color:#546E7A"><i class="material-icons" >home</i></a>

<?php
$password = "opensesR";
$con = mysqli_connect("localhost","jacobc_opensesR",$password,"jacobc_openses");

// Check connection
/* if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error() . PHP_EOL;
  } else {
    echo "Connected to MySQL: " . mysqli_get_host_info($con) . PHP_EOL;
  }; */

// $id ="T1";
$id = $_GET['id'];
$link_to_edit = "https://openses.org/openses-content/openses_edit.php/?id=" . $id;
$sql = "SELECT id, textarea FROM content WHERE id='" . $id . "'";
$result = $con->query($sql);

if ($result->num_rows > 0) {
  $firstrow = $result->fetch_assoc();
    // output data of each row
    while($row = $result->fetch_assoc()) {
      //echo $row["textarea"];
        // echo "id: " . $row["id"]. " textarea: " . $row["textarea"].  "<br>";
    }
} else {
    echo "0 results";
}
$con->close();
?>
<div  width="95%" >
<?php echo $firstrow["textarea"];?>
</div>
<a target= "_blank" href="<?php echo $link_to_edit; ?>" rel="noopener" style="color:#546E7A"><i class="material-icons">edit</i></a>

        <script src="https://openses.org/openses-content/jquery-3.3.1.js"></script>
        <script src="https://openses.org/openses-content/clipboard.js"></script>
        <script src="https://openses.org/openses-content/openses.js"></script>
  <!-- <script src="https://openses.org/openses-content/prism.js"></script> -->
    </body>
</html>
