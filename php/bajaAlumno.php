<?php 
//Debemos eliminar de la tabla personas al alumno

//recogemos el dni del objeto ajax.
$dni = json_decode($_POST['dni']);

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

//Comprobamos si existe la persona con ese dni y que sea un alumno
$sql = 'SELECT * FROM personas where dni LIKE '."'".$dni."' ";
$sql.='AND tipo LIKE Alumno';
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
	//Este alumno existe
	//borramos
	 $sth = $c->prepare('DELETE FROM `personas` WHERE dni LIKE :dni');
	  //variables de sustitución
    $sth->bindParam(':dni', $dni);
    //ejecutamos consulta preparada
    $correcto = $sth->execute();
	if ($correcto==TRUE) 
	{
		// todo bien
		$resultado= "Alumno Eliminado correctamente";
	    $error = false;
	} 
	else 
	{
		//error
	    $resultado = "Hubo un error Eliminando el Alumno";
	    $error = true;
	}
}
else
{
	//Este no Existe
	$resultado= "No existe Alumno con dni: ".$dni;
	//error
	$error=true;
}




?>