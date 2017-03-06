<?php 
$dni_alumno=$_POST['dni_alumno'];

try
{
    $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
    $c= new PDO("mysql:host=localhost;dbname=gestiondecursos","root","",$opciones);
}
catch (PDOException $e)
{
    die ("Error:".$e->getMessage());
}






//recogemos el curso en el que está el alumno
    $sth = $c->prepare('SELECT id_curso from grupos WHERE dni_alumno LIKE :dni');
    //variables de sustitución
    $sth->bindParam(':dni', $dni_alumno);
    //ejecutamos consulta preparada
    $resultado = $sth->execute();


    //recogemos la fila y guardamos el id del curso para buscar sus asignaturas
    $id_curso = $sth->fetch(PDO::FETCH_OBJ);

    $asignaturas = array();
    //buscamos las asignaturas del curso
    $sth2 = $c->prepare('SELECT id, nombre FROM asignaturas WHERE id_curso LIKE :id');
    //variables de sustitución
    $sth2->bindParam(':id', $id_curso->id_curso);
    //ejecutamos consulta preparada
    $resultado = $sth2->execute();
    //recogemos las asignaturas  y las  guardamos en asignaturas
    $asignaturas = $sth2->fetchAll(PDO::FETCH_OBJ);

	$objeto_salida = array ( "asignaturas" => $asignaturas);

	$json_salida = json_encode($objeto_salida);

	echo $json_salida;

	unset($c);



 ?>