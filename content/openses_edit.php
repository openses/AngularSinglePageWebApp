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
$password = "opensesR";
$con = mysqli_connect("localhost","jacobc_opensesR",$password,"jacobc_openses");
$id = $_GET['id'];
$sql = "SELECT id, textarea FROM content WHERE id='" . $id . "'";
$result = $con->query($sql);
if ($result->num_rows > 0) {
  $firstrow = $result->fetch_assoc();
    // output data of each row
     while($row = $result->fetch_assoc()) {
      // echo $row["textarea"];
      // echo "id: " . $row["id"]. " textarea: " . $row["textarea"].  "<br>";
     }
} else {
    echo "0 results";
}
$con->close();
?>

   <form method="post" action="https://openses.org/openses-content/openses_update.php">
ID: <input type="text" name="id" value="<?php echo $id;?>"><br>
<textarea id="js--trumbowyg" name="textarea" width="95%" >
<?php echo $firstrow["textarea"];?>
</textarea>
Password: <input type="password" name="pwd">
<input type="submit" name="submit" value="Submit">
</form>

       <script src="https://openses.org/openses-content/jquery-3.3.1.js"></script>
        <script src="https://openses.org/openses-content/trumbowyg.min.js"></script>
        <script src="https://openses.org/openses-content/clipboard.js"></script>
        <script src="https://openses.org/openses-content/openses.js"></script>
  <!-- <script src="https://openses.org/openses-content/prism.js"></script> -->
        <script>
            $(document).ready(function(){
              $.trumbowyg.svgPath = 'https://openses.org/openses-content/icons/icons.svg';
             $('#js--trumbowyg').trumbowyg({
              // btns: [['viewHTML']],
              autogrow: true
             });
             $('#js--trumbowyg').trumbowyg('enable');
            });
          </script>
    </body>
</html>
