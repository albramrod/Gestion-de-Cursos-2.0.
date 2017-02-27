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
    $sth = $c->prepare('SELECT * FROM cursos');
    //ejecutamos consulta preparada
    $resultado = $sth->execute();

    $cursos= array();
    //recogemos todas las filas de la select y las metemos en el array $cursos que contiene objetos de la clase curso;
    $cursos = $sth->fetchAll(PDO::FETCH_OBJ);



	//y accion=302 para identificar la respuesta del listado


	$objeto_salida = array ( "cursos" => $cursos);

	$json_salida = json_encode($objeto_salida);

	echo $json_salida;

	unset($c);

?>
