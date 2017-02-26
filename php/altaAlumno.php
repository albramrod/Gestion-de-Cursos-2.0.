<?php 
$oAlumno = json_decode($_POST['datos']);
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestiondecursos";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
}

$sql = "INSERT INTO personas (dni,nombre,apellidos,fecha_nacimiento,telefono,edad,direccion,tipo) VALUES ( '$oAlumno->dni' , '$oAlumno->nombre' ,'$oAlumno->apellidos', $oAlumno->fecha,$oAlumno->telefono,$oAlumno->edad,'$oAlumno->direccion','Alumno')";

if ($conn->query($sql) === TRUE) {
    $resultado =  "Alta de alumno correcta";
    $error = FALSE;
} else {
    $resultado = "Error: " . $sql . "<br>" . $conn->error;
    $error = TRUE;
}

// Creo un "objeto" php creando un array asociativo
// $objeto_salida = array ( "mensaje" => "Alta de alumno correcta" , "resultado" => $resultado, "accion" => 100, "error" => $error );
$objeto_salida = array ( "mensaje" => "Alta de alumno" , "resultado" => $resultado, "accion" => 100, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;

$conn->close();
?>