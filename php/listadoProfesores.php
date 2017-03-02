<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestiondecursos";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
}
$sql = "SELECT * FROM personas where tipo='Profesor'";
$res = $conn->query($sql);
$profesores = array();

while($row = $res->fetch_assoc())
{
	$profesores[]=array("dni"=>$row['dni'],"nombre"=>$row['nombre'],"apellidos"=>$row['apellidos'],"fecha"=>$row['fecha_nacimiento'],"telefono"=>$row['telefono'],"edad"=>$row['edad'],"direccion"=>$row['direccion']);
}	
	


$objeto_salida = array("profesores" => $profesores);
$json_salida = json_encode($objeto_salida);
echo $json_salida;

$conn->close();

?>