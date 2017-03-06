<?php 
//recogemos los datos
$dni_alumno = $_POST['id_alumno'];
$id_asignatura = $_POST['id_asignatura'];
$nota = $_POST['nota'];

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



$sql = "SELECT COUNT(*) FROM calificaciones WHERE dni_alumno LIKE '$dni_alumno'  AND id_asignatura LIKE '$id_asignatura'";
if ($resultado = $c->query($sql)) 
{
    /* Comprobar el número de filas que coinciden con la sentencia SELECT */
  if ($resultado->fetchColumn() > 0)
   {
   		//actualizamos
					 // UPDATE cursos SET fecha_inicio= 2015-05-05 , fecha_fin=2017-05-05 , descripcion = 'ASDFASDFSAFDASFD' , precio= 1000 WHERE id LIKE '444A'
		$sth = $c->prepare("UPDATE calificaciones SET nota= :nota WHERE dni_alumno LIKE :dni AND id_asignatura LIKE :id ");
		  //variables de sustitución  
	    $sth->bindParam(':dni', $dni_alumno);
		$sth->bindParam(':id', $id_asignatura);
				$sth->bindParam(':nota', $nota);

	    //ejecutamos consulta preparada
	    $correcto = $sth->execute();

		if ($correcto==true) 
		{
			// todo bien
		    $error = false;
			$resultado= "Nota actualizada correctamente";
		} 
		else 
		{
			//error
		    $resultado = "Hubo un error actualizando la nota";
		    $error = true;
		}
        
   }
    /* No coincide ningua fila -- hacer algo en consecuencia */
  else 
  {
  	//insertamos
	//preparamos la sentencia con variables de sustitucion
    $sth = $c->prepare('INSERT INTO calificaciones 
    				  (dni_alumno,id_asignatura,nota) 
    				  VALUES ( :dni, :id, :nota)');
    //variables de sustitución  
	$sth->bindParam(':dni', $dni_alumno);
	$sth->bindParam(':id', $id_asignatura);
	$sth->bindParam(':nota', $nota);
	   //ejecutamos consulta preparada
    $correcto = $sth->execute();

	if ($correcto==true) 
	{
	    $resultado =  "Nota añadida correctamente";
	    $error = false;

	} 
	else 
	{
	    $resultado = "Hubo un error al añadir la nota";
	    $error = true;
	}




  }
}

$objeto_salida = array ( "resultado" => $resultado, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;


unset($c)








?>