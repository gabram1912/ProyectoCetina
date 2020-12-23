<?php
$servername = 'sql309.tonohost.com';
$database = 'ottos_27465703_proyectofinal';
$username = 'ottos_27465703';
$password = 'deathstroke1912';


$nombre = $_POST['nombre'];
$motivo = $_POST['motivo'];
$numero = $_POST['numero'];
$fecha = $_POST['fecha'];



// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully";

$sql = "INSERT INTO citas (nombre, numero, fecha, motivo) VALUES ('$nombre','$numero','$fecha', '$motivo')";
if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
