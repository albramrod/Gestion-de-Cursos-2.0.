<?php 	
//recogemos objeto json
$id_Curso = json_decode($_POST['id']);
$fecha_ini_Curso = json_decode($_POST['fecha_ini']);
$fecha_fin_Curso = json_decode($_POST['fecha_fin']);
$descripcion_Curso = json_decode($_POST['descripcion']);
$precio_Curso = json_decode($_POST['precio']);



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
	$sth = $c->prepare('UPDATE cursos SET fecha_inicio=:fecha_ini , fecha_fin=:fecha_fin , descripcion =:descripcion , precio= :precio WHERE id = :id');
	  //variables de sustitución
    $sth->bindParam(':id', $id_Curso);
    $sth->bindParam(':fecha_ini', $fecha_ini_Curso);
    $sth->bindParam(':fecha_fin', $fecha_fin_Curso);
    $sth->bindParam(':descripcion', $descripcion_Curso);
    $sth->bindParam(':precio', $precio_Curso);
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



$objeto_salida = array ( "resultado" => $resultado, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;


unset($c)


 ?>