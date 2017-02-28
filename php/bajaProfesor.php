<?php 
$dni = $_POST['dni_profe'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestiondecursos";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
}
$sql = "DELETE FROM personas WHERE dni='".$dni."'";
$sql2 = "DELETE FROM asignaturas WHERE dni_profesor LIKE '$dni'";

if ($conn->query($sql) === TRUE && $conn->query($sql2) === TRUE){
    $resultado =  "Profesor borrado correctamente";
    $error = FALSE;
} else {
    $resultado = "Error: " . $sql . "<br>" . $conn->error;
    $error = TRUE;
}
$objeto_salida = array ( "resultado" => $resultado, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;
$conn->close();
?>