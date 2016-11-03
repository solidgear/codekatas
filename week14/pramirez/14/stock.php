<?php
function getStock() {
    //streaming code
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    $myfile = fopen("stock.txt", "r") or die("Unable to open file!");
    echo "data: New random number:".fgets($myfile). "\n\n";
    fclose($myfile);
    flush();
}

function setStock($stock) {
    $myfile = fopen("stock.txt", "r") or die("Unable to open file!");
    fwrite($myfile, $stock);
    fclose($myfile);
}


$possible_url = array("getStock");

if (isset($_GET["action"]) && in_array($_GET["action"], $possible_url))
{
  switch ($_GET["action"])
    {
      case "getStock":
        $value = getStock();
        break;
      case "setStock":
        $value = setStock($_POST["stock"]);
        break;
    }
}
?>