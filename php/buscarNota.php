<?php 
//recogemos variables
$dni_alumno=$_POST['dni_alumno'];
$id_asignatura=$_POST['id_asignatura'];

//conexion
try
{
    $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
    $c= new PDO("mysql:host=localhost;dbname=gestiondecursos","root","",$opciones);
}
catch (PDOException $e)
{
    die ("Error:".$e->getMessage());
}

//consultamos la nota del alumno en esa asignatura

 $sth = $c->prepare('SELECT nota from calificaciones WHERE dni_alumno LIKE :dni AND id_asignatura LIKE :id');
    //variables de sustitución
    $sth->bindParam(':dni', $dni_alumno);
    $sth->bindParam(':id', $id_asignatura);
    //ejecutamos consulta preparada
    $resultado = $sth->execute();
 	//recogemos la nota ç
    $nota = $sth->fetch(PDO::FETCH_OBJ);  

	$objeto_salida = array ( "nota" => $nota);

	$json_salida = json_encode($objeto_salida);

	echo $json_salida;

	unset($c);




 ?>