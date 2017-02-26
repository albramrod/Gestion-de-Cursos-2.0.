<?php 
$oAlumno = json_decode($_POST['datos']);
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestiondecursos";

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


//Comprobamos si ya existe persona con ese dni
$sql = 'SELECT * FROM personas where dni LIKE '."'".$oAlumno->dni."'";
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
	$resultado= "ya existe una persona con este dni";
	//error
	$error=true;
}
else
{
	//insertamos
	//preparamos la sentencia con variables de sustitucion
    $sth = $c->prepare('INSERT INTO personas 
    	(dni,nombre,apellidos,fecha_nacimiento,telefono,edad,direccion,tipo) 
    					VALUES ( :dni, :nombre, :apellidos, :fecha , :telefono, :edad, :direccion, "Alumno")');
    //variables de sustitución
    $sth->bindParam(':dni', $oAlumno->dni);
    $sth->bindParam(':nombre', $oAlumno->nombre);
    $sth->bindParam(':apellidos', $oAlumno->apellidos);
    $sth->bindParam(':fecha', $oAlumno->fecha);
    $sth->bindParam(':telefono', $oAlumno->telefono);
    $sth->bindParam(':edad', $oAlumno->edad);
    $sth->bindParam(':direccion', $oAlumno->direccion);
    //ejecutamos consulta preparada
    $correcto = $sth->execute();

	if ($correcto==TRUE) 
	{
	    $resultado =  "Alta de alumno correcta";
	    $error = false;
	} 
	else 
	{
	    $resultado = "Hubo un error al insertar El alumno";
	    $error = true;
	}
}


// creamos un objeto qeu es un array asociativo con $resultado=que es el mensaje que debe devolver el toaster y error para saber si soltar el toaster warning o succes, 
//y accion=100 para identificar la respuesta
$objeto_salida = array ( "resultado" => $resultado, "accion" => 100, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;

unset($c);
?>