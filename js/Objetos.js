//---------- Objeto Persona ----------
function Persona(sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,sDireccion){
	
	this.sDni=sDni;
	this.sNombre=sNombre;
	this.sApellido=sApellido;
	this.dFechaNacimiento=dFechaNacimiento;
	this.iTelefono=iTelefono;
	this.sDireccion=sDireccion;

}

//---------- Métodos Objeto Persona ----------
Persona.prototype.toHTMLRow=function(){
	
	return    "<td>" + this.sDni + "</td>"
			+ "<td>" + this.sNombre + "</td>"
	  		+ "<td>" + this.sApellido + "</td>"
	   		+ "<td>" + this.dFechaNacimiento + "</td>"
	   		+ "<td>" + this.iTelefono + "</td>"
	   		+ "<td>" + this.sDireccion + "</td>";

}
//********** Fin Objeto Persona **********

//---------- Objeto Profesor ----------
function Profesor (sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,sDireccion){
	Persona.call(this,sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,sDireccion);
	this.aAsignatura = [ ];//array vacio que contine a objetos asignatura
}

Profesor.prototype = Object.create(Profesor.prototype);

Profesor.prototype.toHTMLRow=function(){

	var tdDatosProfesor=    "<td>" + this.sDni + "</td>"
					 	  + "<td>" + this.sNombre + "</td>"
	  					  + "<td>" + this.sApellido + "</td>"
	   				 	  + "<td>" + this.dFechaNacimiento + "</td>"
	   				 	  + "<td>" + this.iTelefono + "</td>"
	   				 	  + "<td>" + this.sDireccion + "</td>";
	
	

	//recorremos las asignaturas del profesor y almacenarlas en td
	var tdDatosAsgnaturas = "<td>";
	for (var i = 0; i < this.aAsignatura.length; i++) {
	  		 	
	    tdDatosAsgnaturas+= this.aAsignatura[i].sNombreAsignatura+"\n";
	}  		
	tdDatosAsgnaturas += "<td/>"; 

	var tdProfesor= tdDatosProfesor+tdDatosAsgnaturas;


	return tdProfesor;
}
//********** Fin Objeto Profesor **********

//---------- Objeto Asignatura ----------
function Asignatura (iIdAsignatura,sNombreAsignatura){
	this.iIdAsignatura = iIdAsignatura;
	this.sNombreAsignatura= sNombreAsignatura;
}
//---------- Métodos Objeto Asignatura ----------

Asignatura.prototype.toHTMLRow=function(){

	return    "<td>" + this.sNombreAsignatura + "</td>"; 

}
//********** Fin Objeto Asignatura **********


//---------- Objeto Alumno ----------
function Alumno (sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,sDireccion){
	Persona.call(this,sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,sDireccion);
	this.aNotas = [ ];//array vacio que contine a objetos Notas
}

//---------- Métodos Objeto ALumno ----------
Alumno.prototype = Object.create(Alumno.prototype);

Alumno.prototype.toHTMLRow = function(){

	var tdDatosAlumno=     "<td>" + this.sDni + "</td>"
					 	  + "<td>" + this.sNombre + "</td>"
	  					  + "<td>" + this.sApellido + "</td>"
	   				 	  + "<td>" + this.dFechaNacimiento + "</td>"
	   				 	  + "<td>" + this.iTelefono + "</td>"
	   				 	  + "<td>" + this.sDireccion + "</td>";
	
	

	//recorremos las asignaturas del profesor y almacenarlas en td
	var tdDatosNota = "<td>";
	for (var i = 0; i < this.aNotas.length; i++) {
	  		 	 
	    tdDatosNota += this.aNotas[i].sNombreNota;
	}  		
	tdDatosNota += "<td/>"; 

	var tdAlumno = tdDatosAlumno+tdDatosNota;


	return tdAlumno;

}
//********** Fin Objeto Alumno **********



//------------Objeto Curso--------------
function Curso(id,sNombre,dFecha_ini,dFecha_fin,sDescripcion,asignaturas,grupos,fPrecio){
	this.id=id;
	this.sNombre=sNombre;
	this.dFecha_ini=dFecha_ini;
	this.dFecha_fin=dFecha_fin;
	this.sDescripcion=sDescripcion;
	this.asignaturas=asignaturas;
	this.grupos=grupos;
	this.fPrecio=fPrecio;
}
Curso.prototype.toHTMLRow=function(){
	
	return    "<td>" + this.id + "</td>"
			+ "<td>" + this.sNombre + "</td>"
	  		+ "<td>" + this.dFecha_ini + "</td>"
	   		+ "<td>" + this.dFecha_fin + "</td>"
	   		+ "<td>" + this.sDescripcion + "</td>"
	   		+ "<td>" + this.fPrecio + "</td>";

}
//------------Objeto Centro--------------
function Centro(id,sNombre,cursos,sLocalizacion){
	this.id=id;
	this.sNombre=sNombre;
	this.cursos=cursos;
	this.sLocalizacion=sLocalizacion;

}
Centro.prototype.toHTMLRow = function(){
	return    "<td>" + this.id + "</td>"
			+ "<td>" + this.sNombre + "</td>"
	  		+ "<td>" + this.sLocalizacion + "</td>";
	   		
}
//------------Objeto Grupo--------------
function Grupo(id,sNombre,alumnos){
	this.id=id;
	this.sNombre=sNombre;
	this.alumnos=alumnos;

}
Grupo.prototype.toHTMLRow = function(){
	return    "<td>" + this.id + "</td>"
			+ "<td>" + this.sNombre + "</td>"
	  		+ "<td>" + this.alumnos + "</td>";
	   		
}