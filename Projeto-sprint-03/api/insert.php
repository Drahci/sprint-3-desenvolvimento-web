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
  if(isset($_POST['name'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $details = $_POST['details'];
    try{
      $conn->exec("INSERT INTO Contatos(nome, assunto, detalhes) VALUES('$name', '$subject', '$details')");
      http_response_code(200);
    }catch(err){
      http_response_code(500);
    }
  }
?>