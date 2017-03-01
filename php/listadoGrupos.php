<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestiondecursos";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
}
$sql = "SELECT personas.nombre,cursos.nombre FROM personas,grupos,cursos WHERE cursos.id=grupos.id_curso AND personas.dni=grupos.dni_alumno";
$res = $conn->query($sql);
$num = $res->num_rows;
$tabla = "";
if($num>0){
	$grupos = array();
	while($row = $res->fetch_array(MYSQLI_NUM)){
		$grupos[]=array("nombrePersona"=>$row[0],"nombreCurso"=>$row[1]);
	}	
	echo "<table border='1' class='tablasDinamicas table table-striped'>";
	echo "<tr>";
		echo "<td>Nombre alumno</td>";
		echo "<td>Nombre curso</td>";
				
	echo "</tr>";
	for($i=0;$i<count($grupos);$i++){
		echo"<tr>";
			echo "<td>".$grupos[$i]['nombrePersona']."</td>";
			echo "<td>".$grupos[$i]['nombreCurso']."</td>";		
		echo "</tr>";	
	}
	echo "</table>";
}
else{
	echo "<h2>No hay alumnos matriculados en ningun curso</h2>";


}

// $objeto_salida = array("alumnos" => $alumnos);
// $json_salida = json_encode($objeto_salida);



$conn->close();
?>
