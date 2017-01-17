//**Llamada a gestión**//
var oGestion= new Gestion();
//********************//

/**---------------------OCULTAR Y MOSTRAR LOS FORMULARIOS-------------*/
/*--------Formularios de alta*/
document.getElementById("btnAltaAlumno").addEventListener('click',btnAltaAlumno);
document.getElementById("btnAltaProfesor").addEventListener("click",btnAltaProfesor);
document.getElementById("btnAltaGrupo").addEventListener("click",btnAltaGrupo);
document.getElementById("btnAltaCurso").addEventListener("click",btnAltaCurso);
document.getElementById("btnAltaCentro").addEventListener("click",btnAltaCentro);
document.getElementById("btnAltaAsignatura").addEventListener("click",btnAltaAsignatura);
/*-----Formularios de baja*/
document.getElementById("btnBajaAlumno").addEventListener('click',btnBajaAlumno);
document.getElementById("btnBajaProfesor").addEventListener("click",btnBajaProfesor);
document.getElementById("btnBajaGrupo").addEventListener("click",btnBajaGrupo);
document.getElementById("btnBajaCurso").addEventListener("click",btnBajaCurso);
document.getElementById("btnBajaCentro").addEventListener("click",btnBajaCentro);
document.getElementById("btnBajaAsignatura").addEventListener("click",btnBajaAsignatura);


function btnAltaAlumno(){
	ocultarFormularios();
	document.formuAltaAlum.style.display="block";

}
function btnAltaProfesor(){
	ocultarFormularios();
	document.formuAltaProfe.style.display="block";

}
function btnAltaGrupo(){
	ocultarFormularios();
	document.formuAltaGrupo.style.display="block";
}
function btnAltaCurso(){
	ocultarFormularios();
	document.formuAltaCurso.style.display="block";
}
function btnAltaCentro(){
	ocultarFormularios();
	document.formuAltaCentro.style.display="block";	
}
function btnAltaAsignatura(){
	ocultarFormularios();
	document.formuAltaAsignatura.style.display="block";
}
/*----------Funciones de baja-----*/
function btnBajaAlumno(){
    ocultarFormularios();
    document.formuBajaAlum.style.display="block";

}
function btnBajaProfesor(){
    ocultarFormularios();
    document.formuBajaProfe.style.display="block";

}
function btnBajaGrupo(){
    ocultarFormularios();
    document.formuBajaGrupo.style.display="block";
}
function btnBajaCurso(){
    ocultarFormularios();
    document.formuBajaCurso.style.display="block";
}
function btnBajaCentro(){
    ocultarFormularios();
    document.formuBajaCentro.style.display="block"; 
}
function btnBajaAsignatura(){
    ocultarFormularios();
    document.formuBajaAsignatura.style.display="block";
}

function ocultarFormularios(){
	document.formuAltaAlum.style.display="none";
	document.formuAltaProfe.style.display="none";
	document.formuAltaGrupo.style.display="none";
	document.formuAltaCurso.style.display="none";
	document.formuAltaCentro.style.display="none";
	document.formuAltaAsignatura.style.display="none";

    document.formuBajaAlum.style.display="none";
    document.formuBajaProfe.style.display="none";
    document.formuBajaGrupo.style.display="none";
    document.formuBajaCurso.style.display="none";
    document.formuBajaCentro.style.display="none";
    document.formuBajaAsignatura.style.display="none";
}
/*-----------FIN DE MOSTRAR Y OCULTAR FORMULARIOS-------------*/

/*-----------VALIDACIONES FORMULARIOS--------------*/
document.formuAltaAlum.btnEnviarAltaAlumno.addEventListener('click',validarAltaAlumno);
document.formuAltaProfe.btnEnviarAltaProfesor.addEventListener('click',validarAltaProfesor);
document.formuAltaGrupo.btnEnviarAltaGrupo.addEventListener('click',validarAltaGrupo);
document.formuAltaCurso.btnEnviarAltaCurso.addEventListener('click',validarAltaCurso);
document.formuAltaCentro.btnEnviarAltaCentro.addEventListener('click',validarAltaCentro);
document.formuAltaAsignatura.btnEnviarAltaAsignatura.addEventListener('click',validarAltaAsignatura);
/*---------Validaciones de baja--------*/
document.formuBajaAlum.btnEnviarBajaAlumno.addEventListener('click',validarBajaAlumno);
document.formuBajaProfe.btnEnviarBajaProfesor.addEventListener('click',validarBajaProfesor);
document.formuBajaGrupo.btnEnviarBajaGrupo.addEventListener('click',validarBajaGrupo);
document.formuBajaCurso.btnEnviarBajaCurso.addEventListener('click',validarBajaCurso);
document.formuBajaCentro.btnEnviarBajaCentro.addEventListener('click',validarBajaCentro);
document.formuBajaAsignatura.btnEnviarBajaAsignatura.addEventListener('click',validarBajaAsignatura);
document.formuAltaAlum.btnResetearAltaAlumno.addEventListener('click',resetAltaAlumno);
//en proceso el borrado
function resetAltaAlumno(){
    var oForm = document.formuBajaAlum;
    var sDni = oForm.dni_Alumno.value;
     //Dni 
    var oExpReg = /^[0-9]{8}[a-zA-Z]{1}$/;
    
    if (oExpReg.test(sDni) == false)
    {
    
        if(bValido == true)
        {
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
        sErrores += "\nDni incorrecto<br>";
        //Marcar error
        oForm.dni_Alumno.className = "form-control input-md error";
    }
    else 
    {
        //Desmarcar error
        oForm.dni_Alumno.className = "form-control";    
    }
}


function validarAltaAlumno(){
    var s="";
    var oForm = document.formuAltaAlum;
    var dni = oForm.dni_Alumno.value;
    var nombre = oForm.nombre_Alumno.value;
    var apellidos = oForm.apellidos_Alumno.value;
    var telefono = oForm.telefono_Alumno.value;
    var edad = oForm.edad_Alumno.value;
    var direccion = oForm.direccion_Alumno.value;
    
    var bValido = true;
    var sErrores = "";
    //Dni 
    var oExpReg = /^[0-9]{8}[a-zA-Z]{1}$/;
    if (oExpReg.test(dni) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nDni incorrecto<br>";
        
        //Marcar error
        oForm.dni_Alumno.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.dni_Alumno.className = "form-control";    

    }
    //Nombre
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(nombre) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nNombre incorrecto<br>";
        
        //Marcar error
        oForm.nombre_Alumno.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.nombre_Alumno.className = "form-control";    

    }
    //Apellidos 
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(apellidos) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nApellidos incorrectos<br>";
        
        //Marcar error
        oForm.apellidos_Alumno.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.apellidos_Alumno.className = "form-control";    

    }
    //Telefono 
    oExpReg = /^[0-9]{9}$/;
    if (oExpReg.test(telefono) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nTeléfono incorrecto<br>";
        
        //Marcar error
        oForm.telefono_Alumno.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.telefono_Alumno.className = "form-control";    

    }
    //Edad 
    oExpReg = /^[0-9]/;
    if (oExpReg.test(edad) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nEdad incorrecta<br>";
        
        //Marcar error
        oForm.edad_Alumno.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.edad_Alumno.className = "form-control";    

    }
    //Direccion
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(direccion) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nDirección incorrecta<br>";
        
        //Marcar error
        oForm.direccion_Alumno.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.direccion_Alumno.className = "form-control";    

    }

    //mensaje de error o de confirmación
    //y llamada a método para añadir alumno

    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        
        //datos del alumno
        var oFrom=document.formuAltaAlum;
        var sDni = oForm.dni_Alumno.value.trim();
        var sNombre = oForm.nombre_Alumno.value.trim();
        var sApellido = oForm.apellidos_Alumno.value.trim();
        var dFechaNacimiento = oForm.fechaNac_Alumno.value;
        var iTelefono = parseInt(oForm.telefono_Alumno.value);
        var iEdad = parseInt(oForm.edad_Alumno.value);
        var sDireccion = oForm.direccion_Alumno.value;

        //Creamos alumno
        var oAlumno= new Alumno(sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,iEdad,sDireccion);
        s=oGestion.darAltaAlumno(oAlumno);
        if (!s) 
        {
            toastr.success("Alumno registrado correctamente");
        }
        else
        {
          toastr.warning("Este Alumno ya existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada


}

function validarAltaProfesor(){
	var s="";
	var oForm = document.formuAltaProfe;
    var dni = oForm.dni_Profesor.value;
    var nombre = oForm.nombre_Profesor.value;
    var apellidos = oForm.apellidos_Profesor.value;
    var telefono = oForm.telefono_Profesor.value;
    var edad = oForm.edad_Profesor.value;
    var direccion = oForm.direccion_Profesor.value;
    
    var bValido = true;
    var sErrores = "";
    //Dni 
    var oExpReg = /^[0-9]{8}[a-zA-Z]{1}$/;
    if (oExpReg.test(dni) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nDni incorrecto<br>";
        
        //Marcar error
        oForm.dni_Profesor.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.dni_Profesor.className = "form-control";    

    }
    //Nombre
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(nombre) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nNombre incorrecto<br>";
        
        //Marcar error
        oForm.nombre_Profesor.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.nombre_Profesor.className = "form-control";    

    }
    //Apellidos 
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(apellidos) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nApellidos incorrectos<br>";
        
        //Marcar error
        oForm.apellidos_Profesor.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.apellidos_Profesor.className = "form-control";    

    }
    //Telefono 
    oExpReg = /^[0-9]{9}$/;
    if (oExpReg.test(telefono) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nTeléfono incorrecto<br>";
        
        //Marcar error
        oForm.telefono_Profesor.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.telefono_Profesor.className = "form-control";    

    }
    //Edad 
    oExpReg = /^[0-9]/;
    if (oExpReg.test(edad) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nEdad incorrecta<br>";
        
        //Marcar error
        oForm.edad_Profesor.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.edad_Profesor.className = "form-control";    

    }
    //Direccion
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(direccion) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nDirección incorrecta<br>";
        
        //Marcar error
        oForm.direccion_Profesor.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.direccion_Profesor.className = "form-control";    

    }

    //mensaje de error o de confirmación
    //y llamada a método para añadir profesor

    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        
        //datos del Profesor
        var oFrom=document.formuAltaProfe;
        var sDni = oForm.dni_Profesor.value.trim();
        var sNombre = oForm.nombre_Profesor.value.trim();
        var sApellido = oForm.apellidos_Profesor.value.trim();
        var dFechaNacimiento = oForm.fechaNac_Profesor.value;
        var iTelefono = parseInt(oForm.telefono_Profesor.value);
        var iEdad = parseInt(oForm.edad_Profesor.value);
        var sDireccion = oForm.direccion_Profesor.value;

        //Creamos Profesor
        var oProfesor= new Profesor(sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,iEdad,sDireccion);
        s=oGestion.darAltaProfesor(oProfesor);
        if (!s) 
        {
            toastr.success("Profesor registrado correctamente");
        }
        else
        {
          toastr.warning("Este Profesor ya existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada

}
function validarAltaGrupo(){
    var s="";
    var oForm = document.formuAltaGrupo;
    var id = oForm.id_Grupo.value;
    var nombre = oForm.nombre_Grupo.value;
    
    
    var bValido = true;
    var sErrores = "";
    //Dni 
    var oExpReg = /^[0-9]{3}[a-zA-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Grupo.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.id_Grupo.className = "form-control";    

    }
    //Nombre
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(nombre) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nNombre incorrecto<br>";
        
        //Marcar error
        oForm.nombre_Grupo.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.nombre_Grupo.className = "form-control";    

    }
    //mensaje de error o de confirmación
    //y llamada a método para añadir grupo
    if(bValido==false){
        s=sErrores;
        toastr.error(s);
    }
    else{
        //datos del Grupo
        var oFrom=document.formuAltaGrupo;
        var iId = oForm.id_Grupo.value.trim();
        var sNombre = oForm.nombre_Grupo.value.trim();

        //Creamos Grupo
        var oGrupo= new Grupo(iId,sNombre);
        s=oGestion.darAltaGrupo(oGrupo);
        if (!s) 
        {
            toastr.success("Grupo registrado correctamente");
        }
        else
        {
          toastr.warning("Este Grupo ya existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada


}
function validarAltaCurso(){
    var s="";
    var oForm = document.formuAltaCurso;
    var id = oForm.id_Curso.value;
    var nombre = oForm.nombre_Curso.value;
    var descripcion = oForm.descripcion_Curso.value;
    var precio = oForm.precio_Curso.value;
    
    
    var bValido = true;
    var sErrores = "";
    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Curso.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.id_Curso.className = "form-control";    

    }
    //Nombre
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(nombre) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nNombre incorrecto<br>";
        
        //Marcar error
        oForm.nombre_Curso.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.nombre_Curso.className = "form-control";    

    }
    //Descripcion 
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(descripcion) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nDescripción incorrecta<br>";
        
        //Marcar error
        oForm.descripcion_Curso.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.descripcion_Curso.className = "form-control";    

    }
    //Precio 
    oExpReg = /^[0-9]/;
    if (oExpReg.test(precio) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nPrecio incorrecto<br>";
        
        //Marcar error
        oForm.precio_Curso.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.precio_Curso.className = "form-control";    

    } 


     //mensaje de error o de confirmación
    //y llamada a método para añadir curso
    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        
        //datos del Curso
        var oFrom=document.formuAltaCurso;
        var iId = oForm.id_Curso.value.trim();
        var sNombre = oForm.nombre_Curso.value.trim();
        var dFecha_inicio = oForm.fecha_ini_Curso.value;
        var dFecha_fin = oForm.fecha_fin_Curso.value;
        var sDescripcion = oForm.descripcion_Curso.value.trim();
        var iPrecio = parseInt(oForm.precio_Curso.value);
        //Creamos Curso
        var oCurso= new Curso(iId,sNombre,dFecha_inicio,dFecha_fin,sDescripcion,iPrecio);
        s=oGestion.darAltaCurso(oCurso);
        if (!s) 
        {
            toastr.success("Curso registrado correctamente");
        }
        else
        {
          toastr.warning("Este Curso ya existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada

}
function validarAltaCentro(){
    
    var bValido = true;
    var sErrores = "";
    var oForm = document.formuAltaCentro;
    var iId = oForm.id_Centro.value;
    var snombre = oForm.nombre_Centro.value.trim();
    var slocalizacion = oForm.localizacion_Centro.value.trim();
    
    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(iId) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Centro.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.id_Centro.className = "form-control";    

    }
    //Nombre
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(sNombre) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nNombre incorrecto<br>";
        
        //Marcar error
        oForm.nombre_Centro.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.nombre_Centro.className = "form-control";    

    }
    //Localización 
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(sLocalizacion) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nLocalización incorrecta<br>";
        
        //Marcar error
        oForm.localizacion_Centro.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.localizacion_Centro.className = "form-control";    

    }

    //mensaje de error o de confirmación
    //y llamada a método para añadir curso
    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        
        //datos del Centro
        var oFrom=document.formuAltaCentro;
        var iId = oForm.id_Centro.value.trim();
        var sNombre = oForm.nombre_Centro.value.trim();
        var sLocalizacion = oForm.localizacion_Centro.value.trim();
       
        //Creamos Centro
        var oCentro= new Centro(iId,sNombre,sLocalizacion);
        s=oGestion.darAltaCentro(oCentro);
        if (!s) 
        {
            toastr.success("Centro registrado correctamente");
        }
        else
        {
          toastr.warning("Este Centro ya existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada
}
function validarAltaAsignatura(){
    var s="";
    var oForm = document.formuAltaAsignatura;
    var id = oForm.id_Asignatura.value;
    var nombre = oForm.nombre_Asignatura.value;
    
    
    var bValido = true;
    var sErrores = "";
    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Asignatura.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.id_Asignatura.className = "form-control";    

    }
    //Nombre
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(nombre) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nNombre incorrecto";
        
        //Marcar error
        oForm.nombre_Asignatura.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.nombre_Asignatura.className = "form-control";    

    }

    //mensaje de error o de confirmación
    //y llamada a método para añadir curso
    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        //datos del Asignatura
        var oFrom=document.formuAltaAsignatura;
        var iId = oForm.id_Asignatura.value.trim();
        var sNombre = oForm.nombre_Asignatura.value.trim();
       
        //Creamos Asignatura
        var oAsignatura= new Asignatura(iId,sNombre);
        s=oGestion.darAltaAsignatura(oAsignatura);
        if (!s) 
        {
            toastr.success("Asignatura registrado correctamente");
        }
        else
        {
          toastr.warning("Este Asignatura ya existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada
}

/*--Funciones validar Bajas--*/
function validarBajaAlumno(){
    var s="";
    var oForm = document.formuBajaAlum;
    var dni = oForm.dni_Alumno.value; 
    
    var bValido = true;
    var sErrores = "";
    //Dni 
    var oExpReg = /^[0-9]{8}[a-zA-Z]{1}$/;
    if (oExpReg.test(dni) == false)
    {
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "Dni incorrecto<br>";
        
        //Marcar error
        oForm.dni_Alumno.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.dni_Alumno.className = "form-control";    

    }

    //mensaje de error o de confirmación
    //y llamada a método para añadir curso
    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        //datos del Alumno
        var oFrom=document.formuBajaAlumno;
        var sDni = oForm.dni_Alumno.value.trim();
        s=oGestion.darBajaAlumno(sDni);

        if (s) 
        {
            toastr.success("Alumno Eliminado correctamente");
        }
        else
        {
          toastr.warning("Este Alumno No existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada

}
function validarBajaProfesor(){
    var s="";
    var oForm = document.formuBajaProfe;
    var dni = oForm.dni_Profesor.value; 
    
    var bValido = true;
    var sErrores = "";
    //Dni 
    var oExpReg = /^[0-9]{8}[a-zA-Z]{1}$/;
    if (oExpReg.test(dni) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nDni incorrecto<br>";
        
        //Marcar error
        oForm.dni_Profesor.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.dni_Profesor.className = "form-control";    

    }

    //mensaje de error o de confirmación
    //y llamada a método para añadir curso
    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        //datos del Profesor
        var oFrom=document.formuBajaProfesor;
        var sDni = oForm.dni_Profesor.value.trim();
        s=oGestion.darBajaProfesor(sDni);

        if (s) 
        {
            toastr.success("Profesor Eliminado correctamente");
        }
        else
        {
          toastr.warning("Este Profesor No existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada

}
function validarBajaCurso(){
    var s="";
    var oForm = document.formuBajaCurso;
    var id = oForm.id_Curso.value.trim();
    var bValido = true;
    var sErrores = "";

    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Curso.className = "form-control input-md error";
    
    }
    else 
    {//Desmarcar error
        oForm.id_Curso.className = "form-control";   
    }
    
    //mensaje de error o de confirmación
    //y llamada a método para añadir curso
    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        //datos del Curso
        var oFrom=document.formuBajaCurso;
        var sId = oForm.id_Curso.value.trim();
        s=oGestion.darBajaCurso(sId);
        if(!s) 
        {
            toastr.success("Curso Eliminado correctamente");
        }
        else
        {
          toastr.warning("Este Curso No existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada

}
function validarBajaGrupo(){
    var s="";
    var oForm = document.formuBajaGrupo;
    var id = oForm.id_Grupo.value;
    
    
    
    var bValido = true;
    var sErrores = "";
    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Grupo.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.id_Grupo.className = "form-control";    

    }
    


    if(bValido==false){
        s=sErrores;
    }else{
        s="Sin errores";
    }
    toastr.warning(s);

}
function validarBajaCentro(){
    var s="";
    var oForm = document.formuBajaCentro;
    var id = oForm.id_Centro.value;
    
    
    
    var bValido = true;
    var sErrores = "";
    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Centro.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.id_Centro.className = "form-control";    

    }
    


    if(bValido==false){
        s=sErrores;
    }else{
        s="Sin errores";
    }
    toastr.warning(s);

}
function validarBajaAsignatura(){
    var s="";
    var oForm = document.formuBajaAsignatura;
    var id = oForm.id_Asignatura.value;
    
    
    
    var bValido = true;
    var sErrores = "";
    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Asignatura.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.id_Asignatura.className = "form-control";    

    }
    


    if(bValido==false){
        s=sErrores;
    }else{
        s="Sin errores";
    }
    toastr.warning(s);

}