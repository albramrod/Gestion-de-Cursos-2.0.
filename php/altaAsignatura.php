<?php 


$oAsignatura = json_decode($_POST['datos']);

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

//Comprobamos si ya existe la asignatura con ese dni
$sql = 'SELECT * FROM asignaturas where id LIKE '."'".$oAsignatura->id_asig."'";
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
	//mensaje del toaster
	$resultado= "ya existe una asignatura con ese id";
	//error
	$error=true;
}
else
{
	//insertamos
	//preparamos la sentencia con variables de sustitucion
    $sth = $c->prepare('INSERT INTO asignaturas 
    	(id,nombre,id_curso) 
    					VALUES ( :id, :nombre, :id_curso)');
    //variables de sustitución
    $sth->bindParam(':id', $oAsignatura->id_asig);
    $sth->bindParam(':nombre', $oAsignatura->nombre_asig);
    $sth->bindParam(':id_curso', $oAsignatura->id_curso);
    //ejecutamos consulta preparada
    $correcto = $sth->execute();

	if ($correcto==TRUE) 
	{
	    $resultado =  "Alta de Asignatura correcta";
	    $error = false;
	} 
	else 
	{
	    $resultado = "Hubo un error al insertar La asignatura";
	    $error = true;
	}
}


// creamos un objeto qeu es un array asociativo con $resultado=que es el mensaje que debe devolver el toaster y error para saber si soltar el toaster warning o succes, 
//y accion=100 para identificar la respuesta
$objeto_salida = array ( "resultado" => $resultado, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;

unset($c);




 ?>