<?php 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestiondecursos";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
}
$sql = "SELECT * FROM asignaturas";
$res = $conn->query($sql);
$asignaturas = array();
while($row = $res->fetch_assoc()){
	$asignaturas[]=array("id"=>$row['id'],"nombre"=>$row['nombre']);

}
$objeto_salida = array("asignaturas" => $asignaturas);
$json_salida = json_encode($objeto_salida);
echo $json_salida;
$conn->close();
?>