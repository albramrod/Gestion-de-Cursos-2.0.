<?php 
$oCurso = json_decode($_POST['datos']);
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestiondecursos";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
}

$sql = "INSERT INTO cursos (id,nombre,fecha_inicio,fecha_fin,descripcion,precio,localizacion) VALUES ( '$oCurso->id' ,'$oCurso->nombre', '$oCurso->fecha_ini','$oCurso->fecha_fin','$oCurso->descripcion','$oCurso->precio','$oCurso->localizacion')";

if ($conn->query($sql) === TRUE) {
    $resultado =  "Alta de curso correcta";
    $error = FALSE;
} else {
    $resultado = "Error: " . $sql . "<br>" . $conn->error;
    $error = TRUE;
}

// Creo un "objeto" php creando un array asociativo
// $objeto_salida = array ( "mensaje" => "Alta de alumno correcta" , "resultado" => $resultado, "accion" => 100, "error" => $error );
$objeto_salida = array ( "mensaje" => "Alta de curso" , "resultado" => $resultado, "accion" => 300, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;

$conn->close();
?>