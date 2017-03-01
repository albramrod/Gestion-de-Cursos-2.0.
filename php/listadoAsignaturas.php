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
$num = $res->num_rows;
$tabla = "";
if($num>0){
	$asignaturas = array();
	while($row = $res->fetch_assoc()){
		$asignaturas[]=array("id"=>$row['id'],"nombre"=>$row['nombre'],"dni_profesor"=>$row['dni_profesor'],"id_curso"=>$row['id_curso']);
	}	
	echo "<table border='1' class='tablasDinamicas table table-striped'>";
	echo "<tr>";
		echo "<td>ID</td>";
		echo "<td>Nombre</td>";
		echo "<td>Dni profesor</td>";
		echo "<td>Id Curso</td>";		
	echo "</tr>";
	for($i=0;$i<count($asignaturas);$i++){
		echo"<tr>";
			echo "<td>".$asignaturas[$i]['id']."</td>";
			echo "<td>".$asignaturas[$i]['nombre']."</td>";
			echo "<td>".$asignaturas[$i]['dni_profesor']."</td>";
			echo "<td>".$asignaturas[$i]['id_curso']."</td>";		
		echo "</tr>";	
	}
	echo "</table>";
}
else{
	echo "<h2>No hay asignaturas registradas</h2>";


}

// $objeto_salida = array("alumnos" => $alumnos);
// $json_salida = json_encode($objeto_salida);



$conn->close();
?>
