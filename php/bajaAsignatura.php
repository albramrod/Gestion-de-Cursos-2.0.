<?php 
//Debemos eliminar de la tabla personas al alumno

//recogemos el id del objeto ajax.
$id = $_GET['id_asignatura'];

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

//Comprobamos si existe la asignatura con ese id 
$sql = 'SELECT * FROM asignaturas where id LIKE "'.$id.'"';
$n=0;
$resultado = $c->query($sql);

if($resultado) 
{		
	while ($registro = $resultado->fetch(PDO::FETCH_OBJ)) 
	{
		$n++;
	}
}

if ($n>0) 
{
	//Esta asignatura existe
	//borramos
	$sth = $c->prepare('DELETE FROM `asignaturas` WHERE id LIKE :id');
	  //variables de sustitución
    $sth->bindParam(':id', $id);
    //ejecutamos consulta preparada
    $correcto = $sth->execute();
	if ($correcto==TRUE) 
	{
		// todo bien
	    $error = false;
		$resultado= "asignatura Eliminada correctamente";
	} 
	else 
	{
		//error
	    $resultado = "Hubo un error Eliminando la Asignatura";
	    $error = true;
	}
}
else
{
	//Este no Existe
	$resultado= "No existe la asignatura con este id: ".$id;
	//error
	$error=true;
}

$objeto_salida = array ( "resultado" => $resultado, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;

unset($c)
?>