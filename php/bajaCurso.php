<?php 
$id = $_POST['id_curso'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestiondecursos";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
}
$sql = "DELETE FROM cursos WHERE id='".$id."'";
$sql2 = "DELETE FROM grupos WHERE id_curso LIKE '$id'";
$sql3 = "DELETE FROM asignaturas WHERE id_curso like '$id'";
if ($conn->query($sql) === TRUE && $conn->query($sql2) === TRUE && $conn->query($sql3) === TRUE){
    $resultado =  "Curso borrado correctamente";
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