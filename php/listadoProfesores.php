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
$salida = '<?xml version="1.0" encoding="UTF-8"?>';
$salida = '<profesores>';
for($i=0;$i<count($profesores);$i++){
	$salida .= '<profesor>';
		$salida .= '<dni>'.$profesores[$i]['dni'].'</dni>';
		$salida .= '<nombre>'.$profesores[$i]['nombre'].'</nombre>';
		$salida .= '<apellidos>'.$profesores[$i]['apellidos'].'</apellidos>';
		$salida .= '<fecha>'.$profesores[$i]['fecha'].'</fecha>';
		$salida .= '<telefono>'.$profesores[$i]['telefono'].'</telefono>';
		$salida .= '<edad>'.$profesores[$i]['edad'].'</edad>';
		$salida .= '<direccion>'.$profesores[$i]['direccion'].'</direccion>';
		
	$salida .= '</profesor>';	
}
$salida .= '</profesores>';
	
header("Content-Type: text/xml");
echo $salida;
$conn->close();

?>