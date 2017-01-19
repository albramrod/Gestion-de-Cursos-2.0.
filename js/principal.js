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
    eliminarListadosYMensajes();
    ocultarFormularios();
	document.formuAltaAlum.style.display="block";

}
function btnAltaProfesor(){
    eliminarListadosYMensajes();
	ocultarFormularios();
	document.formuAltaProfe.style.display="block";

}
function btnAltaGrupo(){
    eliminarListadosYMensajes();
	ocultarFormularios();
	document.formuAltaGrupo.style.display="block";
}
function btnAltaCurso(){
    eliminarListadosYMensajes();
	ocultarFormularios();
	document.formuAltaCurso.style.display="block";
}
function btnAltaCentro(){
    eliminarListadosYMensajes();
	ocultarFormularios();
	document.formuAltaCentro.style.display="block";	
}
function btnAltaAsignatura(){
    eliminarListadosYMensajes();
	ocultarFormularios();
	document.formuAltaAsignatura.style.display="block";
}
/*----------Funciones de baja-----*/
function btnBajaAlumno(){
    eliminarListadosYMensajes();
    ocultarFormularios();
    document.formuBajaAlum.style.display="block";

}
function btnBajaProfesor(){
    eliminarListadosYMensajes();
    ocultarFormularios();
    document.formuBajaProfe.style.display="block";

}
function btnBajaGrupo(){
    eliminarListadosYMensajes();
    ocultarFormularios();
    document.formuBajaGrupo.style.display="block";
}
function btnBajaCurso(){
    eliminarListadosYMensajes();
    ocultarFormularios();
    document.formuBajaCurso.style.display="block";
}
function btnBajaCentro(){
    eliminarListadosYMensajes();
    ocultarFormularios();
    document.formuBajaCentro.style.display="block"; 
}
function btnBajaAsignatura(){
    eliminarListadosYMensajes();
    ocultarFormularios();
    document.formuBajaAsignatura.style.display="block";
}
/*----------Funciones de Listados-----*/

var listaAlumnos = document.getElementById("btnListaAlumnos");
listaAlumnos.addEventListener("click",tablaAlumnos);

var listaProfesores = document.getElementById("btnListaProfesores");
listaProfesores.addEventListener("click",tablaProfesor);

var listaCursos = document.getElementById("btnListaCursos");
listaCursos.addEventListener("click",tablaCursos);

function tablaAlumnos() 
{

    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    eliminarListadosYMensajes();
    var nAlumnos = oGestion.alumnos.length;
    if (nAlumnos>0) 
    {
        //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        var tbody = document.createElement("tbody");
        //creamos los th
        var th1 = document.createElement("th");
        var dni=document.createTextNode("DNI");
        th1.appendChild(dni);
        tbody.appendChild(th1);

        var th2 = document.createElement("th");
        var dni=document.createTextNode("Nombre");
        th2.appendChild(dni);
        tbody.appendChild(th2);

        var th3 = document.createElement("th");
        var apellidos=document.createTextNode("Apellidos");
        th3.appendChild(apellidos);
        tbody.appendChild(th3);

        var th4 = document.createElement("th");
        var fecha=document.createTextNode("Fecha Nacimiento");
        th4.appendChild(fecha);
        tbody.appendChild(th4);


        var th5 = document.createElement("th");
        var telefono=document.createTextNode("Telefono");
        th5.appendChild(telefono);
        tbody.appendChild(th5);

        var th6 = document.createElement("th");
        var edad=document.createTextNode("Edad");
        th6.appendChild(edad);
        tbody.appendChild(th6);

        var th7 = document.createElement("th");
        var direccion=document.createTextNode("Direccion");
        th7.appendChild(direccion);
        tbody.appendChild(th7);


        //creamos las celdas
        for (var i = 0; i < nAlumnos; i++) 
        {
            //creamos filas
            var tr =document.createElement("tr");
            
            //creamos las celdas
                //td con DNI
            var td =document.createElement("td");
            var sDni =oGestion.alumnos[i].sDni;
            var oTexto = document.createTextNode(sDni);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sNombre
            var td =document.createElement("td");
            var sNombre =oGestion.alumnos[i].sNombre;
            var oTexto = document.createTextNode(sNombre);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sApellidos
            var td =document.createElement("td");
            var sApellido =oGestion.alumnos[i].sApellido;
            var oTexto = document.createTextNode(sApellido);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con dFechaNacimiento
            var td =document.createElement("td");
            var dFechaNacimiento =oGestion.alumnos[i].dFechaNacimiento;
            var oTexto = document.createTextNode(dFechaNacimiento);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con iTelefono
            var td =document.createElement("td");
            var iTelefono =oGestion.alumnos[i].iTelefono;
            var oTexto = document.createTextNode(iTelefono);
            td.appendChild(oTexto);
            tr.appendChild(td);
                // td con iEdad
            var td =document.createElement("td");
            var iEdad =oGestion.alumnos[i].iEdad;
            var oTexto = document.createTextNode(iEdad);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sDireccion
            var td =document.createElement("td");
            var sDireccion =oGestion.alumnos[i].sDireccion;
            var oTexto = document.createTextNode(sDireccion);
            td.appendChild(oTexto);
            tr.appendChild(td);
            //AÑADIMOS LOS TR con sus td al tbody
            tbody.appendChild(tr);
        }

        oTabla.appendChild(tbody);
        //atributos de la tabla
        oTabla.setAttribute('border','1');
        oTabla.classList.add("tablasDinamicas")
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        //Añadimos la tabla de alumnos al documento
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "Listado de Alumnos";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);

    }
    else
    {
        eliminarListadosYMensajes()
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Alumnos registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);

    }
}

function tablaProfesor() 
{
    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    eliminarListadosYMensajes()
    var nProfesor = oGestion.alumnos.length;
    if (nProfesor>0) 
    {
        //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        var tbody = document.createElement("tbody");
        //creamos los th
        var th1 = document.createElement("th");
        var dni=document.createTextNode("DNI");
        th1.appendChild(dni);
        tbody.appendChild(th1);

        var th2 = document.createElement("th");
        var dni=document.createTextNode("Nombre");
        th2.appendChild(dni);
        tbody.appendChild(th2);

        var th3 = document.createElement("th");
        var apellidos=document.createTextNode("Apellidos");
        th3.appendChild(apellidos);
        tbody.appendChild(th3);

        var th4 = document.createElement("th");
        var fecha=document.createTextNode("Fecha Nacimiento");
        th4.appendChild(fecha);
        tbody.appendChild(th4);


        var th5 = document.createElement("th");
        var telefono=document.createTextNode("Telefono");
        th5.appendChild(telefono);
        tbody.appendChild(th5);

        var th6 = document.createElement("th");
        var edad=document.createTextNode("Edad");
        th6.appendChild(edad);
        tbody.appendChild(th6);

        var th7 = document.createElement("th");
        var direccion=document.createTextNode("Direccion");
        th7.appendChild(direccion);
        tbody.appendChild(th7);


        //creamos las celdas
        for (var i = 0; i < nProfesor; i++) 
        {
            //creamos filas
            var tr =document.createElement("tr");
            
            //creamos las celdas
                //td con DNI
            var td =document.createElement("td");
            var sDni =oGestion.profesores[i].sDni;
            var oTexto = document.createTextNode(sDni);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sNombre
            var td =document.createElement("td");
            var sNombre =oGestion.profesores[i].sNombre;
            var oTexto = document.createTextNode(sNombre);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sApellidos
            var td =document.createElement("td");
            var sApellido =oGestion.profesores[i].sApellido;
            var oTexto = document.createTextNode(sApellido);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con dFechaNacimiento
            var td =document.createElement("td");
            var dFechaNacimiento =oGestion.profesores[i].dFechaNacimiento;
            var oTexto = document.createTextNode(dFechaNacimiento);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con iTelefono
            var td =document.createElement("td");
            var iTelefono =oGestion.profesores[i].iTelefono;
            var oTexto = document.createTextNode(iTelefono);
            td.appendChild(oTexto);
            tr.appendChild(td);
                // td con iEdad
            var td =document.createElement("td");
            var iEdad =oGestion.profesores[i].iEdad;
            var oTexto = document.createTextNode(iEdad);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sDireccion
            var td =document.createElement("td");
            var sDireccion =oGestion.profesores[i].sDireccion;
            var oTexto = document.createTextNode(sDireccion);
            td.appendChild(oTexto);
            tr.appendChild(td);
            //AÑADIMOS LOS TR con sus td al tbody
            tbody.appendChild(tr);
        }

        oTabla.appendChild(tbody);
        //atributos de la tabla
        oTabla.setAttribute('border','1');
        oTabla.classList.add("tablasDinamicas")
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        //Añadimos la tabla de Profesor al documento
        var contenido=document.querySelector("#contenido");
        var titulo="Listado de Profesores";
        contenido.appendChild(titulo);
        contenido.appendChild(oTabla);
    }
    else
    {
        eliminarListadosYMensajes()
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Profesores registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);

    }

}

function tablaCursos() 
{
    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    eliminarListadosYMensajes()
    var nCursos = oGestion.cursos.length;
    if (nCursos>0) 
    {
        //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        var tbody = document.createElement("tbody");
        //creamos los th
        var th1 = document.createElement("th");
        var id=document.createTextNode("ID");
        th1.appendChild(id);
        tbody.appendChild(th1);

        var th2 = document.createElement("th");
        var nombre=document.createTextNode("Nombre");
        th2.appendChild(nombre);
        tbody.appendChild(th2);

        var th3 = document.createElement("th");
        var fecha=document.createTextNode("Fecha Inicio");
        th3.appendChild(fecha);
        tbody.appendChild(th3);

        var th4 = document.createElement("th");
        var fecha=document.createTextNode("Fecha Fin");
        th4.appendChild(fecha);
        tbody.appendChild(th4);

        var th5 = document.createElement("th");
        var descripcion=document.createTextNode("Descripcion");
        th5.appendChild(descripcion);
        tbody.appendChild(th5);

        var th6 = document.createElement("th");
        var precio=document.createTextNode("Precio");
        th6.appendChild(precio);
        tbody.appendChild(th6);

        //creamos las celdas
        for (var i = 0; i < nCursos; i++) 
        {
            //creamos filas
            var tr =document.createElement("tr");
            
            //creamos las celdas
                //td con ID
            var td =document.createElement("td");
            var sId =oGestion.cursos[i].sId;
            var oTexto = document.createTextNode(sId);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sNombre
            var td =document.createElement("td");
            var sNombre =oGestion.cursos[i].sNombre;
            var oTexto = document.createTextNode(sNombre);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con fecha ini
            /////////////////
            var td =document.createElement("td");
            var dFecha =oGestion.cursos[i].dFecha_ini;
            var oTexto = document.createTextNode(dFecha);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con fecha fin
            var td =document.createElement("td");
            var dFecha =oGestion.cursos[i].dFecha_fin;
            var oTexto = document.createTextNode(dFecha);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con descripcion
            var td =document.createElement("td");
            var sDescripcion =oGestion.cursos[i].sDescripcion;
            var oTexto = document.createTextNode(sDescripcion);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con precio
            var td =document.createElement("td");
            var fPrecio =(oGestion.cursos[i].fPrecio).toString();
            var oTexto = document.createTextNode(fPrecio);
            td.appendChild(oTexto);
            tr.appendChild(td);
            //AÑADIMOS LOS TR con sus td al tbody
            tbody.appendChild(tr);
        }

        oTabla.appendChild(tbody);
        //atributos de la tabla
        oTabla.setAttribute('border','1');
        oTabla.classList.add("tablasDinamicas")
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        //Añadimos la tabla de Profesor al documento
        var contenido=document.querySelector("#contenido");
        var titulo="Listado de Cursos";
        var oTexto2 = document.createTextNode(titulo);
        var h3 = document.createElement("h3");
        h3.appendChild(oTexto2);
        contenido.appendChild(h3);
        contenido.appendChild(oTabla);
    }
    else
    {
        eliminarListadosYMensajes()
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Cursos registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);

    }

}




function eliminarListadosYMensajes()
{
 var contenido = document.querySelector("#contenido");
 var oTablas = document.querySelectorAll("table");
 for (var i = 0; i < oTablas.length; i++) 
 { 
    contenido.removeChild(oTablas[i]);
 }

 //borramos mensajes anteriores
    var mensajes = document.querySelectorAll("h3");
    for (var i = 0; i < mensajes.length; i++) 
    { 
         contenido.removeChild(mensajes[i]);
    }


}


/*----------Fin de Listados-----*/
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
        var sDireccion = oForm.direccion_Alumno.value.trim();

        //Creamos alumno
        var oAlumno= new Alumno(sDni,sNombre,sApellido,dFechaNacimiento,iTelefono,iEdad,sDireccion);
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
    var precio = parseFloat(oForm.precio_Curso.value);
    
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
        var fPrecio = parseFloat(oForm.precio_Curso.value.trim());
        //Creamos Curso
        var oCurso= new Curso(iId,sNombre,dFecha_inicio,dFecha_fin,sDescripcion,fPrecio);
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
        if(s) 
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