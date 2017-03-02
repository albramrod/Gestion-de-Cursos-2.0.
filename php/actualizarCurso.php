<?php 	
<<<<<<< HEAD
//recogemos los datos
$id_Curso = $_POST['id'];
$fecha_ini_Curso = $_POST['fecha_ini'];
$fecha_fin_Curso = $_POST['fecha_fin'];
$descripcion_Curso = $_POST['descripcion'];
$precio_Curso = $_POST['precio'];
=======
//recogemos objeto json
$id_Curso = json_decode($_POST['id']);
$fecha_ini_Curso = json_decode($_POST['fecha_ini']);
$fecha_fin_Curso = json_decode($_POST['fecha_fin']);
$descripcion_Curso = json_decode($_POST['descripcion']);
$precio_Curso = json_decode($_POST['precio']);

>>>>>>> origin/master


//conexion PDO
try
{
    $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
    $c= new PDO("mysql:host=localhost;dbname=gestiondecursos","root","",$opciones);
}
catch (PDOException $e)
{
    die ("Error:".$e->getMessage());
}

//Actualizamos
<<<<<<< HEAD
					 // UPDATE cursos SET fecha_inicio= 2015-05-05 , fecha_fin=2017-05-05 , descripcion = 'ASDFASDFSAFDASFD' , precio= 1000 WHERE id LIKE '444A'
	$sth = $c->prepare("UPDATE cursos SET fecha_inicio= :fecha_ini, fecha_fin= :fecha_fin, descripcion= :descripcion, precio= :precio WHERE id LIKE :id ");
	  //variables de sustitución  
=======
	$sth = $c->prepare('UPDATE cursos SET fecha_inicio=:fecha_ini , fecha_fin=:fecha_fin , descripcion =:descripcion , precio= :precio WHERE id = :id');
	  //variables de sustitución
    $sth->bindParam(':id', $id_Curso);
>>>>>>> origin/master
    $sth->bindParam(':fecha_ini', $fecha_ini_Curso);
    $sth->bindParam(':fecha_fin', $fecha_fin_Curso);
    $sth->bindParam(':descripcion', $descripcion_Curso);
    $sth->bindParam(':precio', $precio_Curso);
<<<<<<< HEAD
    $sth->bindParam(':id', $id_Curso);
=======
>>>>>>> origin/master
    //ejecutamos consulta preparada
    $correcto = $sth->execute();

	if ($correcto==true) 
	{
		// todo bien
	    $error = false;
		$resultado= "Curso Actualizado correctamente";
	} 
	else 
	{
		//error
	    $resultado = "Hubo un error Actualizando el Curso";
	    $error = true;
	}


<<<<<<< HEAD
=======

>>>>>>> origin/master
$objeto_salida = array ( "resultado" => $resultado, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;


unset($c)


 ?>