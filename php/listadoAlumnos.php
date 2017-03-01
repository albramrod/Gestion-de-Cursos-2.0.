<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestiondecursos";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
}
$sql = "SELECT * FROM personas where tipo='Alumno'";
$res = $conn->query($sql);
$num = $res->num_rows;
$tabla = "";
if($num>0){
	$alumnos = array();
	while($row = $res->fetch_assoc()){
		$alumnos[]=array("dni"=>$row['dni'],"nombre"=>$row['nombre'],"apellidos"=>$row['apellidos'],"fecha"=>$row['fecha_nacimiento'],"telefono"=>$row['telefono'],"edad"=>$row['edad'],"direccion"=>$row['direccion']);
	}	
	echo "<table border='1' class='tablasDinamicas table table-striped'>";
	echo "<tr>";
		echo "<td>Dni</td>";
		echo "<td>Nombre</td>";
		echo "<td>Apellidos</td>";
		echo "<td>Fecha de nacimiento</td>";
		echo "<td>Telefono</td>";
		echo "<td>Edad</td>";
		echo "<td>Direccion</td>";
	echo "</tr>";
	for($i=0;$i<count($alumnos);$i++){
		echo"<tr>";
			echo  "<td>".$alumnos[$i]['dni']."</td>";
			echo "<td>".$alumnos[$i]['nombre']."</td>";
			echo "<td>".$alumnos[$i]['apellidos']."</td>";
			echo "<td>".$alumnos[$i]['fecha']."</td>";
			echo "<td>".$alumnos[$i]['telefono']."</td>";
			echo "<td>".$alumnos[$i]['edad']."</td>";
			echo "<td>".$alumnos[$i]['direccion']."</td>";
		echo "</tr>";	
	}
	echo "</table>";
}
else{
	echo "<h2>No hay alumnos registrados</h2>";


}

// $objeto_salida = array("alumnos" => $alumnos);
// $json_salida = json_encode($objeto_salida);



$conn->close();
?>
