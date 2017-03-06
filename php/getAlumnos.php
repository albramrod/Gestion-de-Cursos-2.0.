<?php 
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

//preparamos la sentencia con variables de sustitucion
    $sth = $c->prepare('SELECT * FROM personas WHERE tipo="Alumno"');
    //ejecutamos consulta preparada
    $resultado = $sth->execute();

    $alumnos= array();
    //recogemos todas las filas de la select y las metemos en el array $alumnos que contiene objetos de la clase alumno;
    $alumnos = $sth->fetchAll(PDO::FETCH_OBJ);

	$objeto_salida = array ( "alumnos" => $alumnos);

	$json_salida = json_encode($objeto_salida);

	echo $json_salida;

	unset($c);


 ?>