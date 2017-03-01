<?php 	
$id_curso = $_POST['id_curso'];

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
$sql = 'SELECT * FROM cursos where id LIKE '."'".$id_curso."'";
$rSet = $c->query($sql);


$cursoAdevolver=array();
if($rSet) 
{		
	while ($curso = $rSet->fetch(PDO::FETCH_OBJ)) 
	{
		$cursoAdevolver =$curso;
	}
	
}

$objeto_salida = $cursoAdevolver;

$json_salida = json_encode($objeto_salida);

echo $json_salida;

unset($c);


 ?>