<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  
  try{
    // Create connection
    $conn = new PDO("mysql:host=$servername;dbname=veterinaria", $username, $password);
  }catch(err){
    echo "connection error";
  }
  $query = $conn->query("SELECT * FROM Contatos ORDER BY id DESC");
  $response = array();
  $cont = 0;
  while($row = $query->fetch()){
    $el = new stdClass;
    $el->name = $row["nome"];
    $el->subject = $row["assunto"];
    $el->details = $row["detalhes"];
    $response[$cont] = $el;
    $cont++;
  }
  echo json_encode($response);
?>