//**Llamada a gestión**//
var oGestion= new Gestion();

$.getScript('scripts/eventos.js')
//********************//
//Diálogo alta alumno
oDlgGestionAltaAlumno = $( "#gestionAltaAlumno" ).dialog({
      autoOpen: false,
      height: 550,
      width: 500,
      modal: true,

    /*      buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
          oDlgAltaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        formuAltaAlum.reset();
      }

    });


oDlgGestionNotaAlumno = $( "#gestionNotas" ).dialog({
      autoOpen: false,
      height: 550,
      width: 500,
      modal: true,

    /*      buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
          oDlgAltaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        $('#gestionNotas Select').remove();     
        $('#gestionNotas h3').remove();
        $('#gestionNotas form input[name="nota"]').val('');

         }

    });



oDlgGestionBajaProfesor = $( "#gestionBajaProfesor" ).dialog({
      autoOpen: false,
      height: 550,
      width: 500,
      modal: true,

    /*      buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
          oDlgAltaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        formuBajaProfe.reset();
      }

    });

function cargarSelectCursos(){
    // for(var i=0;i<oGestion.cursos.length;i++)
    // {
    //     var oOption = document.createElement('option');
    //     var oValor = oGestion.cursos[i].sId;
    //     var oNombre = oGestion.cursos[i].sNombre;
    //     oOption.setAttribute('value',oValor);            
    //     var texto = document.createTextNode(oNombre);
    //     oOption.appendChild(texto);
    //     selectCurso.appendChild(oOption);
    // } //llamada ajax para sacar listado

    var div = $('<div>').addClass('form-group');
    div.addClass('select');
    var label  =$('<label>').text('Curso: ').attr('class','control-label col-sm-2');
    var div2 = $('<div>').addClass('col-sm-6');
    div.append(label);

    var selectCurso = document.createElement('select');
    selectCurso.setAttribute('name','selectCursos');
    selectCurso.setAttribute("id","select_nombreCurso");        
    selectCurso.className="form-control";
    var oOptionDefault=document.createElement('option');
    var oNombreDefault = document.createTextNode("selecciona un Curso");
    oOptionDefault.setAttribute("value","default");
    oOptionDefault.appendChild(oNombreDefault);
    selectCurso.appendChild(oOptionDefault);
    
    $.post("php/listaCursos.php", null, function(json)
    {
       var oCursos = json.cursos;
        
        for (var i = 0; i < oCursos.length; i++) 
        {

        var oOption = document.createElement('option');
        var oValor = json.cursos[i].id;
        var oNombre = json.cursos[i].nombre;
        oOption.setAttribute('value',oValor);            
        var texto = document.createTextNode(oNombre);
        oOption.appendChild(texto);
        selectCurso.appendChild(oOption);
        }
    },'json');

    div2.append(selectCurso);
    div.append(div2);

     return div;

}

//Diálogo alta alumno
oDlgGestionBajaAlumno = $( "#gestionBajaAlumno" ).dialog({
      autoOpen: false,
      height: 500,
      width: 350,
      modal: true,

    /*      buttons: {
        "Baja": altaCliente,
        "Cancelar": function() {
          oDlgBajaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        formuBajaAlum.reset();
      }

    });




oDlgGestionAltaProfesor = $( "#gestionAltaProfesor" ).dialog({
      autoOpen: false,
      height: 550,
      width: 500,
      modal: true,

    /*      buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
          oDlgAltaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        formuAltaProfe.reset();
      }
    });


oDlgGestionAltaASignatura = $( "#gestionAltaAsignatura" ).dialog(
{
      autoOpen: false,
      height: 500,
      width: 350,
      modal: true,

    /*      buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
          oDlgAltaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        formuAltaAsignatura.reset();
      }
});


oDlgGestionBajaASignatura = $( "#gestionBajaAsignatura" ).dialog(
{
      autoOpen: false,
      height: 550,
      width: 500,
      modal: true,

    /*      buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
          oDlgAltaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        formuAltaAsignatura.reset();
      }
});





function cargarSelectAsignaturas(){

    var div = $('<div>').addClass('form-group');
    div.addClass('select');
    var label  =$('<label>').text('Asignatura: ').attr('class','control-label col-sm-2');
    var div2 = $('<div>').addClass('col-sm-6');
    div.append(label);

    var selectAsignatura = document.createElement('select');
    selectAsignatura.setAttribute("id","select_nombreAsignatura");        
    selectAsignatura.setAttribute("name","select_nombreAsignatura");
    selectAsignatura.className="form-control";
    var oOptionDefault=document.createElement('option');
    var oNombreDefault = document.createTextNode("selecciona una Asignatura");
    oOptionDefault.setAttribute("value","default");
    oOptionDefault.appendChild(oNombreDefault);
    selectAsignatura.appendChild(oOptionDefault);
    
    $.post("php/listaAsignaturas.php", null, function(json)
    {
       var oAsignaturas = json.asignaturas;
       
        
        for (var i = 0; i < oAsignaturas.length; i++) 
        {

        var oOption = document.createElement('option');
        var oValor = json.asignaturas[i].id;
        var oNombre = json.asignaturas[i].nombre;
        oOption.setAttribute('value',oValor);            
        var texto = document.createTextNode(oNombre);
        oOption.appendChild(texto);
        selectAsignatura.appendChild(oOption);
        }
    },'json');

    div2.append(selectAsignatura);
    div.append(div2);

    return div;

    // for(var i=0;i<oGestion.asignaturas.length ;i++)
    // {
    //     var oOption = document.createElement('option');
    //     var oValor = oGestion.asignaturas[i].iIdAsignatura;
    //     var oNombre = oGestion.asignaturas[i].sNombreAsignatura;
    //     oOption.setAttribute('value',oValor);            
    //     var texto = document.createTextNode(oNombre);
    //     oOption.appendChild(texto);
    //     selectAsignatura.appendChild(oOption);
    // }
}


oDlgGestionAltaCurso = $( "#gestionAltaCurso" ).dialog({
      autoOpen: false,
      height: 550,
      width: 500,
      modal: true,

    /*      buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
          oDlgAltaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        formuAltaCurso.reset();
      }
    });


oDlgGestionModificarCurso = $( "#gestionModificarCurso" ).dialog({
      autoOpen: false,
      height: 600,
      width: 700,
      modal: true,

    /*      buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
          oDlgAltaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        formuAltaCurso.reset();
      }
    });

$("#btnEnviarModificarCurso").click(actualizarCurso);
function actualizarCurso()
{
  //recogemos datos curso
  var formu  = document.formuModificarCurso;
  id_Curso         = formu.selectCursos.value;
  fecha_ini_Curso  = formu.fecha_ini_Curso.value;
  fecha_fin_Curso  = formu.fecha_fin_Curso.value;
  descripcion_Curso= formu.descripcion_Curso.value;
  precio_Curso = formu.precio_Curso.value;

  //llamada ajax para actualizar
   $.ajax({
      url: 'php/actualizarCurso.php',
      type: 'POST',
      dataType: 'json',
      data: {id:id_Curso,fecha_ini:fecha_ini_Curso,fecha_fin:fecha_fin_Curso,descripcion:descripcion_Curso,precio:precio_Curso},
      complete: function(oAjax)
      {
        var oObjeto =JSON.parse(oAjax.responseText);
        if (oObjeto.error == false)
        {
          toastr.success(oObjeto.resultado);
        }
        else{
          toastr.error(oObjeto.resultado);
        }
      }
    });
    




}



oDlgGestionBajaCurso = $( "#gestionBajaCurso" ).dialog({
      autoOpen: false,
      height: 550,
      width: 500,
      modal: true,

    /*      buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
          oDlgAltaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        formuBajaCurso.reset();
      }
    });




// creacion de dialogo de mensajes
oDlgMensaje = $( "#mensajes" ).dialog({
	  autoOpen: false,
      height: 240,
      width: 350,
      modal: true // modal
  });

// Manejador eventos para menu
// oDlgGestionAltaAlumno.css("left", "50%");
$("#btnAltaAlumno").click(function(){ oDlgGestionAltaAlumno.dialog("open"); });
$("#btnBajaAlumno").click(function(){ oDlgGestionBajaAlumno.dialog("open"); });
$("#btnAltaProfesor").click(function(){oDlgGestionAltaProfesor.dialog("open");});
$("#btnBajaProfesor").click(function(){oDlgGestionBajaProfesor.dialog("open");});


$("#btnAltaCurso").click(function(){oDlgGestionAltaCurso.dialog("open");});

$("#btnBajaCurso").click(function(){oDlgGestionBajaCurso.dialog("open");});



$("#btnAltaAsignatura").click(function(){oDlgGestionAltaASignatura.dialog("open");});
$("#btnBajaAsignatura").click(function(){oDlgGestionBajaASignatura.dialog("open");});
//*******************Diálogo de listados***************

//dialogo listado cursos
oDlgGestionListaCursos = $( "#listado" ).dialog(
{
      autoOpen: false,
      height: 900,
      width: 350,
      modal: false,

    /*      buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
          oDlgAltaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        eliminarListadosYMensajes();
      }
});
oDlgGestionListaAlumnos = $( "#listado" ).dialog(
{
      autoOpen: false,
      height: 900,
      width: 350,
      modal: false,

    /*      buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
          oDlgAltaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        eliminarListadosYMensajes();
      }
});
oDlgGestionListaProfesores = $( "#listado" ).dialog(
{
      autoOpen: false,
      height: 900,
      width: 350,
      modal: false,

    /*      buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
          oDlgAltaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        eliminarListadosYMensajes();
      }
});
oDlgGestionListaAsignaturas = $( "#listado" ).dialog(
{
      autoOpen: false,
      height: 900,
      width: 350,
      modal: false,

    /*      buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
          oDlgAltaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        eliminarListadosYMensajes();
      }
});
oDlgGestionListaGrupos = $( "#listado" ).dialog(
{
      autoOpen: false,
      height: 900,
      width: 500,
      modal: false,

    /*      buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
          oDlgAltaCliente.dialog( "close" );
        } 
      } ,*/
      close: function() {
        eliminarListadosYMensajes();
      }
});



$("#btnListaCursos").click(mostrarListadoCursos);

function mostrarListadoCursos()
{
  
  //recogemos el div
  var listadoDeCursos = $('#listado');


    //llamada ajax

    $.post("php/listaCursos.php", null, function(json)
    {
      var oCursos = json.cursos;    
      if (oCursos.length>0) 
      {//si hay cursos
          //creamos la tabla y tbody
          var oTabla=document.createElement("table");
          var thead = document.createElement("thead");
          //creamos los th
          var th1 = document.createElement("th");
          var id=document.createTextNode("ID");
          th1.appendChild(id);
          thead.appendChild(th1);

          var th2 = document.createElement("th");
          var nombre=document.createTextNode("Nombre");
          th2.appendChild(nombre);
          thead.appendChild(th2);

          var th3 = document.createElement("th");
          var fecha=document.createTextNode("Fecha Inicio");
          th3.appendChild(fecha);
          thead.appendChild(th3);

          var th4 = document.createElement("th");
          var fecha=document.createTextNode("Fecha Fin");
          th4.appendChild(fecha);
          thead.appendChild(th4);

          var th5 = document.createElement("th");
          var descripcion=document.createTextNode("Descripcion");
          th5.appendChild(descripcion);
          thead.appendChild(th5);

          var th6 = document.createElement("th");
          var precio=document.createTextNode("Precio");
          th6.appendChild(precio);
          thead.appendChild(th6);
          oTabla.appendChild(thead);

          var tbody = document.createElement("tbody");
          //creamos las celdas
          for (var i = 0; i < oCursos.length; i++) 
          {
              //creamos filas
              var tr =document.createElement("tr");
              
              //creamos las celdas
                  //td con ID
              var td =tr.insertCell(-1);
              var sId =oCursos[i].id
              var oTexto = document.createTextNode(sId);
              td.appendChild(oTexto);
              tr.appendChild(td);
                  //td con sNombre
              var td =tr.insertCell(-1);
              var sNombre =oCursos[i].nombre;
              var oTexto = document.createTextNode(sNombre);
              td.appendChild(oTexto);
              tr.appendChild(td);
                  //td con fecha ini
              /////////////////
              var td =tr.insertCell(-1);
              var dFecha =oCursos[i].fecha_inicio;
              var oTexto = document.createTextNode(dFecha);
              td.appendChild(oTexto);
              tr.appendChild(td);
                  //td con fecha fin
              var td =tr.insertCell(-1);
              var dFecha =oCursos[i].fecha_fin;
              var oTexto = document.createTextNode(dFecha);
              td.appendChild(oTexto);
              tr.appendChild(td);
                  //td con descripcion
              var td =tr.insertCell(-1);
              var sDescripcion =oCursos[i].descripcion;
              var oTexto = document.createTextNode(sDescripcion);
              td.appendChild(oTexto);
              tr.appendChild(td);
                  //td con precio
              var td =tr.insertCell(-1);
              var fPrecio =(oCursos[i].precio).toString();
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
          listadoDeCursos.html('<h3>Cursos</h3>');
          listadoDeCursos.append(oTabla);
          oDlgGestionListaCursos.dialog({ title: "Listado de Cursos",
                                          width: 900,
                                          height:500,
                                        }); 
          oDlgGestionListaCursos.dialog("open"); 


        //añadimos el input de busqueda por fechas
        //dos inputs con selects con fechas
        
        //etiqueta y input de busqueda de alumno
        var label=$('<label for="fecha_fin">');
        label.text('Fecha Fin :');
        var input_fin =$('<input type="text" name="fecha_fin" placeholder="2016-05-05" id="fecha_fin">');
        input_fin.attr('id','fecha_fin');
        listadoDeCursos.find('h3').after('<button id=BuscarCurso>Buscar</button>');
        listadoDeCursos.find('h3').after(input_fin);
        listadoDeCursos.find('h3').after(label);

        var label=$('<label for="fecha_inicio">');
        label.text('Fecha Inicio :');
        var inputBusqueda =$('<input type="text" name="fecha_inicio" placeholder="2015-05-05" id="fecha_inicio">');
        listadoDeCursos.find('h3').after(inputBusqueda);
        listadoDeCursos.find('h3').after(label);

        $('#buscarCurso').click(buscarCursos);
       



      }
      else
      {
          eliminarListadosYMensajes();
          //si no hay datos que listar
          var contenido = document.querySelector("#contenido");
          var h3 = document.createElement("h3");
          var titulo = "No hay Cursos registrados";
          var oTexto = document.createTextNode(titulo);
          h3.appendChild(oTexto);
          contenido.appendChild(h3);
      }

    },'json');
}





function buscarCursos()
{
      var bValido=true;
          //Validamos Fecha Inicio 
      var fechaInicio =$('#fecha_inicio').val();
          oExpReg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
          if (oExpReg.test(fechaInicio) == false)
          {
              if(bValido == true)
              {
                  bValido = false;        
              }
              sErrores += "\nFormato fecha yyyy-mm-dd<br>";        
              //Marcar error
              $('#fecha_inicio').className = "form-control input-md error"; 
          }
          else
          {
              //Validamos Fecha Fin 
              var fechaFin =$('#fecha_fin').val();
            oExpReg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
            if (oExpReg.test(fechaFin) == false)
            {
                if(bValido == true)
                {
                    bValido = false;        
                }
                sErrores += "\nFormato fecha yyyy-mm-dd<br>";        
                //Marcar error
                $('#fecha_fin').className = "form-control input-md error"; 
            }
            else
            {
              if ($('#fecha_inicio').val() > $('#fecha_fin').val()) 
              {
                bValido = false;
                sErrores += "\nLa fecha inicio no puede ser mayor que la de fin <br>";
                $('#fecha_fin').className = "form-control input-md error"; 
                $('#fecha_inicio').className = "form-control input-md error"; 

              }
            }

          }



          //si todo va bien buscamos los cursos
          if (bValido==true) 
          {
              $.post("php/listaCursos.php", null, function(json)
              {
                var oCursos = json.cursos;    
                if (oCursos.length>0) 
                {//si hay cursos
                    //creamos la tabla y tbody
                    var oTabla=document.createElement("table");
                    var thead = document.createElement("thead");
                    //creamos los th
                    var th1 = document.createElement("th");
                    var id=document.createTextNode("ID");
                    th1.appendChild(id);
                    thead.appendChild(th1);

                    var th2 = document.createElement("th");
                    var nombre=document.createTextNode("Nombre");
                    th2.appendChild(nombre);
                    thead.appendChild(th2);

                    var th3 = document.createElement("th");
                    var fecha=document.createTextNode("Fecha Inicio");
                    th3.appendChild(fecha);
                    thead.appendChild(th3);

                    var th4 = document.createElement("th");
                    var fecha=document.createTextNode("Fecha Fin");
                    th4.appendChild(fecha);
                    thead.appendChild(th4);

                    var th5 = document.createElement("th");
                    var descripcion=document.createTextNode("Descripcion");
                    th5.appendChild(descripcion);
                    thead.appendChild(th5);

                    var th6 = document.createElement("th");
                    var precio=document.createTextNode("Precio");
                    th6.appendChild(precio);
                    thead.appendChild(th6);
                    oTabla.appendChild(thead);

                    var tbody = document.createElement("tbody");
                    //creamos las celdas
                    for (var i = 0; i < oCursos.length; i++) 
                    {
                      if (oCursos[i].fecha_inicio==fechaInicio)
                      {
                         //creamos filas
                        var tr =document.createElement("tr");
                        
                        //creamos las celdas
                            //td con ID
                        var td =tr.insertCell(-1);
                        var sId =oCursos[i].id
                        var oTexto = document.createTextNode(sId);
                        td.appendChild(oTexto);
                        tr.appendChild(td);
                            //td con sNombre
                        var td =tr.insertCell(-1);
                        var sNombre =oCursos[i].nombre;
                        var oTexto = document.createTextNode(sNombre);
                        td.appendChild(oTexto);
                        tr.appendChild(td);
                            //td con fecha ini
                        /////////////////
                        var td =tr.insertCell(-1);
                        var dFecha =oCursos[i].fecha_inicio;
                        var oTexto = document.createTextNode(dFecha);
                        td.appendChild(oTexto);
                        tr.appendChild(td);
                            //td con fecha fin
                        var td =tr.insertCell(-1);
                        var dFecha =oCursos[i].fecha_fin;
                        var oTexto = document.createTextNode(dFecha);
                        td.appendChild(oTexto);
                        tr.appendChild(td);
                            //td con descripcion
                        var td =tr.insertCell(-1);
                        var sDescripcion =oCursos[i].descripcion;
                        var oTexto = document.createTextNode(sDescripcion);
                        td.appendChild(oTexto);
                        tr.appendChild(td);
                            //td con precio
                        var td =tr.insertCell(-1);
                        var fPrecio =(oCursos[i].precio).toString();
                        var oTexto = document.createTextNode(fPrecio);
                        td.appendChild(oTexto);
                        tr.appendChild(td);
                        //AÑADIMOS LOS TR con sus td al tbody
                        tbody.appendChild(tr);
                      }
                    }
                    oTabla.appendChild(tbody);
                    //atributos de la tabla
                    oTabla.setAttribute('border','1');
                    oTabla.classList.add("tablasDinamicas")
                    oTabla.classList.add("table");
                    oTabla.classList.add("table-striped");
                    //Añadimos la tabla de Profesor al documento
                    var contenido=document.querySelector("#contenido"); 
                    listadoDeCursos.html('<h3>Cursos</h3>');
                    listadoDeCursos.append(oTabla);
                    oDlgGestionListaCursos.dialog({ title: "Listado de Cursos",
                                                    width: 900,
                                                    height:500,
                                                  }); 
                    oDlgGestionListaCursos.dialog("open"); 

                }
                else
                {
                    eliminarListadosYMensajes();
                    //si no hay datos que listar
                    var contenido = document.querySelector("#contenido");
                    var h3 = document.createElement("h3");
                    var titulo = "No hay Cursos registrados";
                    var oTexto = document.createTextNode(titulo);
                    h3.appendChild(oTexto);
                    contenido.appendChild(h3);
                }

            },'json');
          }
          else
          {
            toastr.warning(sErrores);
          }
}






$("#btnListaAlumnos").click(mostrarListadoAlumnos);
function mostrarListadoAlumnos()
{
	$('#listado').empty();
	var listadoDeAlumnos = $('#listado');
	
  //etiqueta y input de busqueda de alumno
  var label=$('<label for="busquedaAlmno">');
  label.text('Buscar alumno por nombre :');
  listadoDeAlumnos.append(label);
  var inputBusqueda =$('<input type="text" name="busquedaAlumno">');
  inputBusqueda.attr('id','busquedaAlumno');
  listadoDeAlumnos.append(inputBusqueda);

  //si el input está vacío se muestran todos los alumnos
    //insertamos el listado
    $.get('php/listadoAlumnos.php', (new Date+Math.random(0,150)),function(tabla){
  		listadoDeAlumnos.append(tabla);
  		oDlgGestionListaAlumnos.dialog({ title: "Listado de Alumnos",
                                            width: 900,
                                            height:500,
                                          }); 
      	oDlgGestionListaAlumnos.dialog("open");
    	},'html');



  //actualizamos el listado si introducen algo en el INPUT
  $('#busquedaAlumno').keyup(function()
  {
    
    if ( /^[a-zA-Z\s]/.test(nombreAlumno)==false ) 
    {
      alert('nose ha introducido una letra');
      $('#listado table').empty();
      var listadoDeAlumnos = $('#listado');

      //si el input está vacío se muestran todos los alumnos
        //insertamos el listado
        $.get('php/listadoAlumnos.php', (new Date+Math.random(0,150)),function(tabla){
          listadoDeAlumnos.append(tabla);
          oDlgGestionListaAlumnos.dialog({ title: "Listado de Alumnos",
                                                width: 900,
                                                height:500,
                                              }); 
            oDlgGestionListaAlumnos.dialog("open");
          },'html');

        
    }
    else
    {
      //recogemos el input
      var nombreAlumno = $('#busquedaAlumno').val();
      $('#listado table').remove();
      var listadoDeAlumnos = $('#listado');

        $.post('php/buscarAlumnos.php',{nombre:nombreAlumno},function(tabla)
        {
          if(tabla!=false)
          {
          listadoDeAlumnos.append(tabla);
          }
        },'html');


    }
    
  });

}




$("#btnListaProfesores").click(mostrarListadoProfesores);
function mostrarListadoProfesores(){
	var listadoDeCursos = $('#listado');
	$('#listado').empty();	
	$.get('php/listadoProfesores.php', function(response){
		var profesores = response.getElementsByTagName('profesor');		
		if (profesores.length>0)
    {
	      		//si hay cursos
	      		//creamos la tabla y tbody
	      		var oTabla=document.createElement("table");
	          var thead = document.createElement("thead");
		        //creamos los th
		        var th1 = document.createElement("th");
		        var id=document.createTextNode("DNI");
		        th1.appendChild(id);
		        thead.appendChild(th1);
		        var th2 = document.createElement("th");
		        var nombre=document.createTextNode("Nombre");
		        th2.appendChild(nombre);
		        thead.appendChild(th2);

		        var th3 = document.createElement("th");
		        var fecha=document.createTextNode("Apellidos");
		        th3.appendChild(fecha);
		        thead.appendChild(th3);

		        var th4 = document.createElement("th");
		        var fecha=document.createTextNode("Fecha de nacimiento");
		        th4.appendChild(fecha);
		        thead.appendChild(th4);

		        var th5 = document.createElement("th");
		        var descripcion=document.createTextNode("Telefono");
		        th5.appendChild(descripcion);
		        thead.appendChild(th5);

		        var th6 = document.createElement("th");
		        var precio=document.createTextNode("Edad");
		        th6.appendChild(precio);
		        thead.appendChild(th6);
		        oTabla.appendChild(thead);

		        var th7 = document.createElement("th");
		        var descripcion=document.createTextNode("Direccion");
		        th7.appendChild(descripcion);
		        thead.appendChild(th7);
		        oTabla.appendChild(thead);

		        var tbody = document.createElement("tbody");
		        //creamos las celdas
		        for (var i = 0; i < profesores.length; i++){
		        	//creamos filas
		            var tr =document.createElement("tr");
		              
		            //creamos las celdas
		            //td con ID
		            var td =tr.insertCell(-1);
		            var sId =profesores[i].querySelector('dni').textContent;
		            var oTexto = document.createTextNode(sId);
		            td.appendChild(oTexto);
		            tr.appendChild(td);
		            //td con sNombre
		            var td =tr.insertCell(-1);
		            var sNombre =profesores[i].querySelector('nombre').textContent;
		            var oTexto = document.createTextNode(sNombre);
		            td.appendChild(oTexto);
		            tr.appendChild(td);
		            //td con fecha ini
		            /////////////////
		            var td =tr.insertCell(-1);
		            var dFecha =profesores[i].querySelector('apellidos').textContent;
		            var oTexto = document.createTextNode(dFecha);
		            td.appendChild(oTexto);
		            tr.appendChild(td);
		            //td con fecha fin
		            var td =tr.insertCell(-1);
		            var dFecha =profesores[i].querySelector('fecha').textContent;
		            var oTexto = document.createTextNode(dFecha);
		            td.appendChild(oTexto);
		            tr.appendChild(td);
		            //td con descripcion
		            var td =tr.insertCell(-1);
		            var sDescripcion =profesores[i].querySelector('telefono').textContent;
		            var oTexto = document.createTextNode(sDescripcion);
		            td.appendChild(oTexto);
		            tr.appendChild(td);
		            //td con precio
		            var td =tr.insertCell(-1);
		            var fPrecio =profesores[i].querySelector('edad').textContent;
		            var oTexto = document.createTextNode(fPrecio);
		            td.appendChild(oTexto);
		            tr.appendChild(td);

		            var td =tr.insertCell(-1);
		            var sDireccion =profesores[i].querySelector('direccion').textContent;
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
		        listadoDeCursos.html('<h3>Profesores</h3>');
		        listadoDeCursos.append(oTabla);
		        oDlgGestionListaCursos.dialog({ title: "Listado de Profesores",
		                                        width: 900,
		                                        height:500,
		                                     }); 
		        oDlgGestionListaCursos.dialog("open"); 

	      	}
	      	else{
	      		eliminarListadosYMensajes();
	      		//si no hay datos que listar
	      		var contenido = document.querySelector("#contenido");
	      		var h3 = document.createElement("h3");
	      		var titulo = "No hay Profesores registrados";
	      		var oTexto = document.createTextNode(titulo);
	      		h3.appendChild(oTexto);
	      		contenido.appendChild(h3);
	      	}



	},'xml');
	
}
$("#btnListaAsignaturas").click(mostrarListadoAsignaturas);
function mostrarListadoAsignaturas(){
	$('#listado').empty();
	var listadoDeCursos = $('#listado');
	listadoDeCursos.load('php/listadoAsignaturas.php', null, function(respuesta){
		
		oDlgGestionListaAsignaturas.dialog({ title: "Listado de Alumnos",
                                          width: 900,
                                          height:500,
                                        }); 
    	oDlgGestionListaAsignaturas.dialog("open");

	})
	
}
$("#btnListaGrupos").click(mostrarListadoGrupos);
function mostrarListadoGrupos(){
	var listadoDeCursos = $('#listado');
	$.post('php/listadoGrupos.php', function(tabla){
		listadoDeCursos.append(tabla);
		oDlgGestionListaGrupos.dialog({ title: "Listado de Grupos",
                                          width: 900,
                                          height:500,
                                        }); 
    	oDlgGestionListaGrupos.dialog("open");		
	},'html');
}










//**Cragar datos desde XML**//

// function loadXMLDoc(filename)
// {
//     if (window.XMLHttpRequest)
//       {
//       xhttp=new XMLHttpRequest();
//       }
//     else // code for IE5 and IE6
//       {
//       xhttp=new ActiveXObject("Microsoft.XMLHTTP");
//       }
//     xhttp.open("GET",filename,false);
    
//     xhttp.send();
    
//     return xhttp.responseXML;
// } 

//--Cargar Centros--//
// var oXML = loadXMLDoc("xml/centros.xml");
// var oCentros = oXML.getElementsByTagName("centro");

// for (var i = 0; i < oCentros.length; i++) 
// {
//     var id = oCentros[i].getElementsByTagName("id")[0].textContent;
//     var nombre = oCentros[i].getElementsByTagName("nombre")[0].textContent;
//     var localizacion = oCentros[i].getElementsByTagName("localizacion")[0].textContent;
    
//    var oCentro= new Centro(id,nombre,localizacion);
//    var aux = oGestion.darAltaCentro(oCentro);
// }

// //--Cargar Cursos--//
// var oXML = loadXMLDoc("xml/cursos.xml");
// var oCursos = oXML.getElementsByTagName("curso");

// for (var i = 0; i < oCursos.length; i++) 
// {
//     var id = oCursos[i].getElementsByTagName("id")[0].textContent;
//     var nombre = oCursos[i].getElementsByTagName("nombre")[0].textContent;
//     var fecha_ini = oCursos[i].getElementsByTagName("fecha_ini")[0].textContent;
//     var fecha_fin = oCursos[i].getElementsByTagName("fecha_fin")[0].textContent;
//     var descripcion = oCursos[i].getElementsByTagName("descripcion")[0].textContent;
//     var precio = oCursos[i].getElementsByTagName("precio")[0].textContent;
    
//    var oCurso= new Curso(id,nombre,fecha_ini,fecha_fin,descripcion,precio);
//    var aux = oGestion.darAltaCurso(oCurso);
// }

// //--Cargar Profesor--//
// var oXML = loadXMLDoc("xml/alumnos.xml");
// var oProfesores = oXML.getElementsByTagName("profesor");

// for (var i = 0; i < oProfesores.length; i++) 
// {
//     var id = oProfesores[i].getElementsByTagName("dni")[0].textContent;
//     var nombre = oProfesores[i].getElementsByTagName("nombre")[0].textContent;
//     var apellidos = oProfesores[i].getElementsByTagName("apellidos")[0].textContent;
//     var edad = oProfesores[i].getElementsByTagName("edad")[0].textContent;
//     var fecha_nac = oProfesores[i].getElementsByTagName("fecha_nac")[0].textContent;
//     var telefono = oProfesores[i].getElementsByTagName("telefono")[0].textContent;
//     var direccion = oProfesores[i].getElementsByTagName("direccion")[0].textContent;


//    var oProfesor= new Profesor(id,nombre,apellidos,edad,fecha_nac,telefono, direccion);
//    var aux = oGestion.darAltaProfesor(oProfesor);
// }


// //--Cargar Alumnos--//
// var oXML = loadXMLDoc("xml/alumnos.xml");
// var oAlumnos= oXML.getElementsByTagName("alumno");

// for (var i = 0; i < oAlumnos.length; i++) 
// {
//     var id = oAlumnos[i].getElementsByTagName("dni")[0].textContent;
//     var nombre = oAlumnos[i].getElementsByTagName("nombre")[0].textContent;
//     var apellidos = oAlumnos[i].getElementsByTagName("apellidos")[0].textContent;
//     var edad = oAlumnos[i].getElementsByTagName("edad")[0].textContent;
//     var fecha_nac = oAlumnos[i].getElementsByTagName("fecha_nac")[0].textContent;
//     var telefono = oAlumnos[i].getElementsByTagName("telefono")[0].textContent;
//     var direccion = oAlumnos[i].getElementsByTagName("direccion")[0].textContent;


//    var oAlumno= new Alumno(id,nombre,apellidos,edad,fecha_nac,telefono, direccion);
//    var aux = oGestion.darAltaAlumno(oAlumno);
// }



// //--Cargar Grupos--//
// var oXML = loadXMLDoc("xml/grupos.xml");
// var oGrupos = oXML.getElementsByTagName("grupo");

// for (var i = 0; i < oGrupos.length; i++) 
// {
//    var id = oGrupos[i].getElementsByTagName("id")[0].textContent;
//    var nombre = oGrupos[i].getElementsByTagName("nombre")[0].textContent;    
//    var oGrupo= new Grupo(id,nombre);
//    var aux = oGestion.darAltaGrupo(oGrupo);

// }

// //--Cargar Asignaturas--//
// var oXML = loadXMLDoc("xml/asignaturas.xml");
// var oAsignaturas = oXML.getElementsByTagName("asignatura");

// for (var i = 0; i < oAsignaturas.length; i++) 
// {
//    var id = oAsignaturas[i].getElementsByTagName("id")[0].textContent;
//    var nombre = oAsignaturas[i].getElementsByTagName("nombre")[0].textContent;    
//    var oAsignatura= new Asignatura(id,nombre);
//    var aux = oGestion.darAltaAsignatura(oAsignatura);
   
// }






//**************************//
/**---------------------OCULTAR Y MOSTRAR LOS FORMULARIOS-------------*/
/*--------Formularios de alta*/



function btnAltaAlumno(){
  eliminarListadosYMensajes();
  ocultarFormularios();
	document.formuAltaAlum.style.display="block";
  //añadimos al formulario el combo de cursos
  var selectCursos = cargarSelectCursos();
  $('form[name="formuAltaAlum"] .form-group:last').before(selectCursos);

}
function btnAltaProfesor(){
  eliminarListadosYMensajes();
	ocultarFormularios();
	document.formuAltaProfe.style.display="block";
  var selectAsignaturas = cargarSelectAsignaturas();
  $('form[name="formuAltaProfe"] .form-group:last').before(selectAsignaturas);

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
    //añadimos al formulario el combo de cursos
    var selectCursos = cargarSelectCursos();
    $('form[name="formuAltaAsignatura"] .form-group:last').before(selectCursos);
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

// var listaAlumnos = document.getElementById("btnListaAlumnos");
// listaAlumnos.addEventListener("click",tablaAlumnos);

// var listaProfesores = document.getElementById("btnListaProfesores");
// listaProfesores.addEventListener("click",tablaProfesor);

// var listaGrupos = document.getElementById("btnListaGrupos");
// listaGrupos.addEventListener("click",tablaGrupos);

// document.getElementById("btnListaCentros").addEventListener('click',tablaCentros);
document.getElementById("btnListaAsignaturas").addEventListener('click',tablaAsignaturas);

// document.getElementById("btnAnadirAlumGrupo").addEventListener('click',btnAnadirAlumGrupo);



// document.getElementById("btnAnadirAsignaturas").addEventListener('click',btnAnadirAsignaturas);
document.getElementById("btnModificarCurso").addEventListener('click',btnModificarCurso);


function btnAnadirAlumGrupo(){
    ocultarFormularios();
    eliminarListadosYMensajes();
    var nAlumnos = oGestion.alumnos.length;
    var nGrupos = oGestion.grupos.length;

    
    if(nAlumnos>0 && nGrupos>0){
        var oForm = document.createElement('form');
        oForm.className="formu form-horizontal";
        oForm.setAttribute('name','formuAnadirAlumGrupo');
        var oCapa = document.createElement('div');
        oCapa.className="form-group";
        var oCapa2 = document.createElement('div');
        oCapa.className="form-group";
        
        var oSubCapa = document.createElement('div');
        oSubCapa.className="col-sm-6";
        var msg = document.createElement('h3');
        var txt = document.createTextNode("Seleccione el alumno a añadir");
        msg.appendChild(txt);
        oSubCapa.appendChild(msg);
        var selectAlum = document.createElement('select');
        selectAlum.setAttribute("id","select_nombreAlum");        
        selectAlum.multiple="multiple";
        // selectAlum.setAttribute('value',"alumnos[]")
        selectAlum.className="form-control";
        for(var i=0;i<nAlumnos;i++){
            var oOption = document.createElement('option');
            var oValor = oGestion.alumnos[i].sDni;
            var oNombre = oGestion.alumnos[i].sNombre;
            oOption.value=oValor;            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectAlum.appendChild(oOption);
            // oSelect.appendChild(oOption);
        }
        oSubCapa.appendChild(selectAlum);
        oCapa.appendChild(oSubCapa);

        var oSubCapa2 = document.createElement('div');
        oSubCapa2.className="col-sm-6";        
        var selectGrup = document.createElement('select');
        selectGrup.setAttribute("id","select_nombreGrupo");
        selectGrup.className="form-control";
        for(var i=0;i<nGrupos;i++){
            var oOption = document.createElement('option');
            var oValor = oGestion.grupos[i].iId;
            var oNombre = oGestion.grupos[i].sNombre;
            oOption.setAttribute('value',oValor);            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectGrup.appendChild(oOption);
            // oSelect.appendChild(oOption);
        }
        oSubCapa2.appendChild(selectGrup);
        oCapa2.appendChild(oSubCapa2);
        oForm.appendChild(oCapa);
        oForm.appendChild(oCapa2);
        var btnEnviar = document.createElement('input');
        btnEnviar.setAttribute('type',"button");
        btnEnviar.className="ocultar btn btn-primary";
        btnEnviar.setAttribute('id',"btnEnviarAnadirAlumGrupo");
        btnEnviar.setAttribute('value',"Enviar");
        var btnReset = document.createElement('input');
        btnReset.setAttribute('type',"button");
        btnReset.className="ocultar btn btn-default";
        btnReset.setAttribute('name',"btnResetAnadirAlumGrupo");
        btnReset.setAttribute('value',"Resetear campos");
        var contenido = document.querySelector("#contenido");
        contenido.appendChild(selectAlum);
        contenido.appendChild(selectGrup);
        contenido.appendChild(btnEnviar);
        contenido.appendChild(btnReset);
        // anadirAlumGrupo();
        document.getElementById("btnEnviarAnadirAlumGrupo").addEventListener('click',anadirAlumGrupo);


        
    }
    else{
        eliminarListadosYMensajes();
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Alumnos ni Grupos registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);
    }   

}

function anadirAlumGrupo()
{
    var grupo = document.getElementById("select_nombreGrupo").value;
    var alumno =document.getElementById("select_nombreAlum");
    var arrayOpt= [];

    //recorremos las opciones y guardamos las seleccionadas en arrayOpt
    for (var i = 0; i < alumno.options.length; i++){
        if (alumno.options[i].selected){
            arrayOpt.push(alumno.options[i].value);        
        }
    }

    var alumnoEncontrado=false;//para saber si el alumno ya está en el grupo
    var gIndice=0;//indice del grupo seleccionado
    
    

    for(var i=0;i<oGestion.grupos.length;i++)
    {//recorremos los grupos en busca de los alumnos seleccionados
        //recorremos los alumnos del grupo
        for(var j=0;j<oGestion.grupos[i].alumnos.length;j++)
        {//recorremos el array con los sDni de los alumnos seleccionados
            for(var q=0;q<arrayOpt.length;q++)
            {//si coincide el dni el alumno ya está en un grupo.
                if(oGestion.grupos[i].alumnos[j].sDni==arrayOpt[q])
                {
                    alumnoEncontrado=true;
                }
            }
        }
    }

    //si los alumnos no pertenecen a ningún grupo
    if(!alumnoEncontrado)
    {   
        //variable con el grupo seleccionado 
        var grupoElegido=buscarGrupo(grupo);
        for (var i = 0; i < arrayOpt.length; i++) 
        {
            var alumnoEncontrado= buscarAlumno(arrayOpt[i]);
          
            grupoElegido.alumnos.push(alumnoEncontrado);
        }
        toastr.success("Alumnos añadidos correctamente");
    }
    else
    {
        toastr.warning("Uno o más de los alumnos ya están en un grupo");
    }

}

function buscarGrupo(sId)
{
    var grupos= oGestion.grupos;
    var grupoDevolver=null;

    grupos.forEach(function(grupos)
    {
        if (grupos.iId==sId) 
        {
            grupoDevolver=grupos;
            //para salid del loop
            return false;
        }
    })   
    return grupoDevolver;
}

function btnAnadirGrupoCurso(){
    ocultarFormularios();
    eliminarListadosYMensajes();    
    var nGrupos = oGestion.grupos.length;
    var nCursos = oGestion.cursos.length;

    
    if(nGrupos>0 && nCursos>0){
        var oForm = document.createElement('form');
        oForm.className="formu form-horizontal";
        oForm.setAttribute('name','formuAnadirGrupoCurso');
        var oCapa = document.createElement('div');
        oCapa.className="form-group";
        var oCapa2 = document.createElement('div');
        oCapa.className="form-group";
        
        var oSubCapa = document.createElement('div');
        oSubCapa.className="col-sm-6";
        var msg = document.createElement('h3');
        var txt = document.createTextNode("Seleccione el grupo a añadir");
        msg.appendChild(txt);
        oSubCapa.appendChild(msg);
        var selectGrupo = document.createElement('select');
        selectGrupo.setAttribute("id","select_nombreGrupo");
        selectGrupo.multiple="multiple";
        selectGrupo.className="form-control";
        for(var i=0;i<nGrupos;i++){
            var oOption = document.createElement('option');
            var oValor = oGestion.grupos[i].iId;
            var oNombre = oGestion.grupos[i].sNombre;
            oOption.setAttribute('value',oValor);            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectGrupo.appendChild(oOption);
            // oSelect.appendChild(oOption);
        }
        oSubCapa.appendChild(selectGrupo);
        oCapa.appendChild(oSubCapa);

        var oSubCapa2 = document.createElement('div');
        oSubCapa2.className="col-sm-6";        
        var selectCurso = document.createElement('select');
        selectCurso.setAttribute("id","select_nombreCurso");        
        selectCurso.className="form-control";
        for(var i=0;i<nCursos;i++){
            var oOption = document.createElement('option');
            var oValor = oGestion.cursos[i].sId;
            var oNombre = oGestion.cursos[i].sNombre;
            oOption.setAttribute('value',oValor);            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectCurso.appendChild(oOption);
            // oSelect.appendChild(oOption);
        }
        oSubCapa2.appendChild(selectCurso);
        oCapa2.appendChild(oSubCapa2);
        oForm.appendChild(oCapa);
        oForm.appendChild(oCapa2);
        var btnEnviar = document.createElement('input');
        btnEnviar.setAttribute('type',"button");
        btnEnviar.className="ocultar btn btn-primary";
        btnEnviar.setAttribute('id',"btnEnviarAnadirGrupoCurso");
        btnEnviar.setAttribute('value',"Enviar");
        var btnReset = document.createElement('input');
        btnReset.setAttribute('type',"button");
        btnReset.className="ocultar btn btn-default";
        btnReset.setAttribute('name',"btnResetAnadirGrupoCurso");
        btnReset.setAttribute('value',"Resetear campos");
        var contenido = document.querySelector("#contenido");
        contenido.appendChild(selectGrupo);
        contenido.appendChild(selectCurso);
        contenido.appendChild(btnEnviar);
        contenido.appendChild(btnReset);
        document.getElementById("btnEnviarAnadirGrupoCurso").addEventListener('click',anadirGrupoCurso);


        
    }
    else{
        eliminarListadosYMensajes();
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Alumnos ni Grupos registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);
    }

}
function btnAnadirAsignaturas()
{
    ocultarFormularios();
    eliminarListadosYMensajes();    
    var nAsignaturas = oGestion.asignaturas.length;
    var nCursos = oGestion.cursos.length;

    
    if(nAsignaturas>0 && nCursos>0){
        var oForm = document.createElement('form');
        oForm.className="formu form-horizontal";
        oForm.setAttribute('name','formuAnadirAsignatura');
        var oCapa = document.createElement('div');
        oCapa.className="form-group";
        var oCapa2 = document.createElement('div');
        oCapa.className="form-group";
        
        var oSubCapa = document.createElement('div');
        oSubCapa.className="col-sm-6";
        var msg = document.createElement('h3');
        var txt = document.createTextNode("Seleccione la asignatura a añadir");
        msg.appendChild(txt);
        oSubCapa.appendChild(msg);
       
        var selectAsignatura= cargarSelectAsignaturas();
        var selectCurso =cargarSelectCursos();

        oSubCapa.appendChild(selectAsignatura);
        oCapa.appendChild(oSubCapa);

        var oSubCapa2 = document.createElement('div');
        oSubCapa2.className="col-sm-6";        
        

        oSubCapa2.appendChild(selectCurso);
        oCapa2.appendChild(oSubCapa2);
        oForm.appendChild(oCapa);
        oForm.appendChild(oCapa2);
        var btnEnviar = document.createElement('input');
        btnEnviar.setAttribute('type',"button");
        btnEnviar.className="ocultar btn btn-primary";
        btnEnviar.setAttribute('id',"btnEnviarAnadirAsignatura");
        btnEnviar.setAttribute('value',"Enviar");
        var btnReset = document.createElement('input');
        btnReset.setAttribute('type',"button");
        btnReset.className="ocultar btn btn-default";
        btnReset.setAttribute('name',"btnResetAnadirAsignatura");
        btnReset.setAttribute('value',"Resetear campos");
        var contenido = document.querySelector("#contenido");
        contenido.appendChild(selectAsignatura);
        contenido.appendChild(selectCurso);
        contenido.appendChild(btnEnviar);
        contenido.appendChild(btnReset);
        document.getElementById("btnEnviarAnadirAsignatura").addEventListener('click',anadirAsignaturas);


        
    }
    else{
        eliminarListadosYMensajes();
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Alumnos ni Grupos registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);
    }

}
    

function anadirAsignaturas()
{

    var sId= document.getElementById("select_nombreCurso").value;
    var asignaturas =document.getElementById("select_nombreAsignatura");
    var arrayOpt= [];
    
    //recorremos el select y guardamos las asignaturas seleccionadas en arrayOpt
    for (var i = 0; i < asignaturas.options.length; i++)
    {
        if (asignaturas.options[i].selected)
        {
            arrayOpt.push(asignaturas.options[i].value);        
        }
    }

    var asignaturaEncontrado=false;
    var cursoSeleccionado=buscarCurso(sId);

    //recorremos las asignaturas del cursoSeleccionado 
    for(var j=0;j<cursoSeleccionado.asignaturas.length;j++)
    {//recorremos el array con las asignaturas seleccionadas
        for(var q=0;q<arrayOpt.length;q++)
        {//si se encuentran las asignaturas seleccionadas en el curso
            if(cursoSeleccionado.asignaturas[j].iIdAsignatura==arrayOpt[q])
            {
                asignaturaEncontrado=true;
            }
        }
    }

    //si el curso seleccionado no contiene las asignaturas seleccionadas
    if(asignaturaEncontrado==false)
    {//recorremos las asignaturas para agregarlas al curso
        for(var i=0;i<oGestion.asignaturas.length;i++)
        {//buscamos las asignaturas en la gestion
            for(var j=0;j<arrayOpt.length;j++)
            {//si coincide el id , nos quedamos con la asignatura y la añadimos al curso
                if(oGestion.asignaturas[i].iIdAsignatura==arrayOpt[j])
                {

                    cursoSeleccionado.asignaturas.push(oGestion.asignaturas[i]);
                }    
            }    
        }

        //recorremos los objetos asignaturas y los añadimos a los alumnos del grupo
        //recorremos los grupos del curso
        for (var i = 0; i < cursoSeleccionado.grupos.length; i++) 
        {
            for (var j = 0; j < cursoSeleccionado.grupos[i].alumnos.length; j++) 
            {
                cursoSeleccionado.grupos[i].alumnos[j].asignaturas=arrayAsignaturasSeleccionados.slice(0);
                /*****************AÑADIR array asignaturas alumno a array notas alumno******************/
                var nota= new aNota( cursoSeleccionado.grupos[i].alumnos[j].asignaturas[j],0);

                for (var f = 0; f < cursoSeleccionado.grupos[i].alumnos[j].asignaturas.length; f++) 
                {
                    var nota = new aNota(cursoSeleccionado.grupos[i].alumnos[j].asignaturas[f],0);
                    cursoSeleccionado.grupos[i].alumnos[j].aNotas.push(nota);
                }
            }
        }
        toastr.success("Asignaturas añadidas correctamente");
    }
    else
    {
        toastr.warning("No se puede repetir una asignatura en un curso");
    }

}

function btnAnadirCursoCentro()
{
    ocultarFormularios();
    eliminarListadosYMensajes();    
    var nCentros = oGestion.centros.length;
    var nCursos = oGestion.cursos.length;

    
    if(nCentros>0 && nCursos>0)
    {
        var oForm = document.createElement('form');
        oForm.className="formu form-horizontal";
        oForm.setAttribute('name','formuAnadirCursoCentro');
        var oCapa = document.createElement('div');
        oCapa.className="form-group";
        var oCapa2 = document.createElement('div');
        oCapa.className="form-group";
        
        var oSubCapa = document.createElement('div');
        oSubCapa.className="col-sm-6";
        var msg = document.createElement('h3');
        var txt = document.createTextNode("Seleccione el curso a añadir");
        msg.appendChild(txt);
        oSubCapa.appendChild(msg);
        var selectCentro = document.createElement('select');        
        selectCentro.setAttribute("id","select_nombreCentro");
        
        selectCentro.className="form-control";
        for(var i=0;i<nCentros;i++){
            var oOption = document.createElement('option');
            var oValor = oGestion.centros[i].iId;
            var oNombre = oGestion.centros[i].sNombre;
            oOption.setAttribute('value',oValor);            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectCentro.appendChild(oOption);
            // oSelect.appendChild(oOption);
        }
        oSubCapa.appendChild(selectCentro);
        oCapa.appendChild(oSubCapa);

        var oSubCapa2 = document.createElement('div');
        oSubCapa2.className="col-sm-6";        
        var selectCurso = document.createElement('select');
        selectCurso.setAttribute("id","select_nombreCurso");
        selectCurso.multiple="multiple";
        selectCurso.className="form-control";
        for(var i=0;i<nCursos;i++){
            var oOption = document.createElement('option');
            var oValor = oGestion.cursos[i].sId;
            var oNombre = oGestion.cursos[i].sNombre;
            oOption.setAttribute('value',oValor);            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectCurso.appendChild(oOption);
            // oSelect.appendChild(oOption);
        }
        oSubCapa2.appendChild(selectCurso);
        oCapa2.appendChild(oSubCapa2);
        oForm.appendChild(oCapa);
        oForm.appendChild(oCapa2);
        var btnEnviar = document.createElement('input');
        btnEnviar.setAttribute('type',"button");
        btnEnviar.className="ocultar btn btn-primary";
        btnEnviar.setAttribute('id',"btnEnviarAnadirCursoCentro");
        btnEnviar.setAttribute('value',"Enviar");
        var btnReset = document.createElement('input');
        btnReset.setAttribute('type',"button");
        btnReset.className="ocultar btn btn-default";
        btnReset.setAttribute('name',"btnResetAnadirCursoCentro");
        btnReset.setAttribute('value',"Resetear campos");
        var contenido = document.querySelector("#contenido");
        contenido.appendChild(selectCurso);
        contenido.appendChild(selectCentro);
        contenido.appendChild(btnEnviar);
        contenido.appendChild(btnReset);
        document.getElementById("btnEnviarAnadirCursoCentro").addEventListener('click',anadirCursoCentro);
        // anadirGrupoCurso();


        
    }
    else{
        eliminarListadosYMensajes();
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Cursos o Centros registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);
    }

}
function anadirCursoCentro(){
    var centro = document.getElementById("select_nombreCentro").value;
    var curso =document.getElementById("select_nombreCurso");
    var arrayOpt= [];
    for (var i = 0; i < curso.options.length; i++){
        if (curso.options[i].selected){
            arrayOpt.push(curso.options[i].value);        
        }
    }
    var cursoEncontrado=false;
    var gIndice=0;
    var cursosDefinitivos=[];
    for(var i=0;i<oGestion.centros.length;i++){
        if(oGestion.centros[i].iId==centro)
            gIndice=i;
        
    }
    for(var j=0;j<oGestion.centros[gIndice].cursos.length;j++){
            for(var q=0;q<arrayOpt.length;q++){
                if(oGestion.centros[gIndice].cursos[j].sId==arrayOpt[q]){
                    cursoEncontrado=true;
                }
            }
    }
    var arrayCursosSeleccionados=[];
    if(cursoEncontrado==false){
        for(var i=0;i<oGestion.cursos.length;i++){
            for(var j=0;j<arrayOpt.length;j++){
                if(oGestion.cursos[i].sId==arrayOpt[j]){
                    arrayCursosSeleccionados.push(oGestion.cursos[i]);
                }    
            }    
            
        }
        for(var i=0;i<arrayCursosSeleccionados.length;i++){
            oGestion.centros[gIndice].cursos.push(arrayCursosSeleccionados[i]);
        }
        toastr.success("Cursos añadidos correctamente");
    }
    else{
        toastr.warning("No se puede repetir un curso en el mismo centro");
    }

}

//llamada ajax para actualizar o poner nota a alumno en una asignatura
$("#btnEnviarNota").click(function()
{
  //recogemos los datos
  if ($('#gestionNotas form input[name="nota"]').val()!='') 
  {
    var dataString = $('#gestionNotas form ').serialize();

        alert('Datos serializados: '+dataString);
    //llamada ajax 
    $.post('php/actualizarNota.php',dataString,function(json)
    {
      if (json.error == false)
      {
        toastr.success(json.resultado);
      }
      else
      {
        toastr.error(json.resultado);
      }
    },'json');

  }
  

});

document.querySelector("#btnAsignarNota").addEventListener("click",btnAsignarNota);


function btnAsignarNota()
{
  //ocultamos
    ocultarFormularios();
    eliminarListadosYMensajes();    
   //cargamos el select de alumnos
    var selectAlumnos = cargarSelectAlumnos();
    selectAlumnos.setAttribute("id","select_Alumnos_asignaturas");  
    selectAlumnos.setAttribute("name","id_alumno");  
    var label = document.createElement("label");
    var etiqueta= document.createTextNode("Selecciona Alumno");
    label.appendChild(etiqueta);
    label.setAttribute("class","ocultar");
    var h3 =document.createElement("h3");
    var oTexto= document.createTextNode("Asignar Nota a alumno");  
    h3.appendChild(oTexto);  

    //añadimos el select de alumnos ala gestionNota
    $('#gestionNotas form').prepend(selectAlumnos);
    $('#gestionNotas form').prepend(label);
    $('#gestionNotas form').prepend(h3);

    oDlgGestionNotaAlumno.dialog('open');
    $('#gestionNotas form').show();

   $('#select_Alumnos_asignaturas').change(function()
   {
    $('#gestionNotas form input[name="nota"]').val('');

    var dni= $('#select_Alumnos_asignaturas').val();

    if (dni!='default') 
    {
    //buscamos las asignaturas del alumno
    var selectAsignaturasAlumno=cargarSelectAsignaturasAlumno(dni);
    //añadimos el select de asignaturas del alumno
    $('#select_Alumnos_asignaturas').after(selectAsignaturasAlumno);
    }    

    $('#select_Asignaturas_alumno').change(function()
    {
      //al cambiar de asignatura y no ser la default se actualiza el input nota con la nota s esta asignada si no se pone un 0
      $('#gestionNotas form input[name="nota"]').val('');
      var id= $('#select_Asignaturas_alumno').val();
      if (id!='default') 
      {
        //llamada ajax buscamos la nota del alumno en esa asignatura,
        $.post('php/buscarNota.php',{dni_alumno:dni , id_asignatura:id},function(json)
        {
          //rellenamos el input con la nota del alumno
          var nota=json.nota;
          $('#gestionNotas form input[name="nota"]').val(nota.nota);
        },'json');


      }




    })

   });
    //cargarAsignaturas(alumnoSeleccionado);
  
}


function cargarSelectAsignaturasAlumno(dni)
{
  //borramos select anterior
  $('#select_Asignaturas_alumno').remove();

  var selectAsignaturasAlumno = document.createElement('select');
    selectAsignaturasAlumno.setAttribute("id","select_Asignaturas_alumno");        
    selectAsignaturasAlumno.setAttribute("name","id_asignatura");        
    selectAsignaturasAlumno.className="form-control";
    var oOptionDefault=document.createElement('option');
    var oNombreDefault = document.createTextNode("selecciona una asignatura");
    oOptionDefault.setAttribute("value","default");
    oOptionDefault.appendChild(oNombreDefault);
    selectAsignaturasAlumno.appendChild(oOptionDefault);

    //llamada ajax para recoger las asignaturas del alumno
    $.post('php/getAsignaturasAlumno.php',{dni_alumno:dni},function(json)
    {
      var oAsignaturasAlumno = json.asignaturas;
        for (var i = 0; i < oAsignaturasAlumno.length; i++) 
        {
          var oOption = document.createElement('option');
          var oValor = oAsignaturasAlumno[i].id;
          var oNombre = oAsignaturasAlumno[i].nombre;
          oOption.setAttribute('value',oValor);            
          var texto = document.createTextNode(oNombre);
          oOption.appendChild(texto);
          selectAsignaturasAlumno.appendChild(oOption);
        }
    },'json')

    return selectAsignaturasAlumno;
}

function cargarSelectAlumnos()
{
    
    var selectAlumnos = document.createElement('select');
    selectAlumnos.setAttribute("id","select_Alumnos");        
    selectAlumnos.className="form-control";
    var oOptionDefault=document.createElement('option');
    var oNombreDefault = document.createTextNode("selecciona un Alumno");
    oOptionDefault.setAttribute("value","default");
    oOptionDefault.appendChild(oNombreDefault);
    selectAlumnos.appendChild(oOptionDefault);
    //llamada ajax para recoger los Alumnos
    $.post('php/getAlumnos.php',null,function(json){
      var oAlumnos = json.alumnos;
        
        for (var i = 0; i < oAlumnos.length; i++) 
        {

        var oOption = document.createElement('option');
        var oValor = oAlumnos[i].dni;
        var oNombre = oAlumnos[i].nombre;
        oOption.setAttribute('value',oValor);            
        var texto = document.createTextNode(oNombre);
        oOption.appendChild(texto);
        selectAlumnos.appendChild(oOption);
        }
    },'json')

     return selectAlumnos;
}




function btnAsignarAsignaturasProfesor()
{
    ocultarFormularios();
    eliminarListadosYMensajes();    
    var nAsignaturas = oGestion.asignaturas.length;
    var nProfesores = oGestion.profesores.length;

    
    if(nAsignaturas>0 && nProfesores>0)
    {
        var oForm = document.createElement('form');
        oForm.className="formu form-horizontal";
        oForm.setAttribute('name','formuAnadirAsignaturaProfesor');
        var oCapa = document.createElement('div');
        oCapa.className="form-group";
        var oCapa2 = document.createElement('div');
        oCapa.className="form-group";
        
        var oSubCapa = document.createElement('div');
        oSubCapa.className="col-sm-6";
        var msg = document.createElement('h3');
        var txt = document.createTextNode("Seleccione el profesor a añadir");
        msg.appendChild(txt);
        oSubCapa.appendChild(msg);
        var selectProfesor = document.createElement('select');
        selectProfesor.setAttribute("id","select_nombreProfesor");
        selectProfesor.className="form-control";
        for(var i=0;i<nProfesores;i++)
        {
            var oOption = document.createElement('option');
            var oValor = oGestion.profesores[i].sDni;
            var oNombre = oGestion.profesores[i].sNombre;
            oOption.setAttribute('value',oValor);            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectProfesor.appendChild(oOption);
            // oSelect.appendChild(oOption);    
        }
        oSubCapa.appendChild(selectProfesor);
        oCapa.appendChild(oSubCapa);

        var oSubCapa2 = document.createElement('div');
        oSubCapa2.className="col-sm-6";        
        var selectAsignatura = document.createElement('select');
        selectAsignatura.setAttribute("id","select_nombreAsignatura");
        selectAsignatura.multiple="multiple";
        selectAsignatura.className="form-control";
        for(var i=0;i<nAsignaturas;i++){
            var oOption = document.createElement('option');
            var oValor = oGestion.asignaturas[i].iIdAsignatura;
            var oNombre = oGestion.asignaturas[i].sNombreAsignatura;
            oOption.setAttribute('value',oValor);            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectAsignatura.appendChild(oOption);
            // oSelect.appendChild(oOption);
        }
        oSubCapa2.appendChild(selectAsignatura);
        oCapa2.appendChild(oSubCapa2);
        oForm.appendChild(oCapa);
        oForm.appendChild(oCapa2);
        var btnEnviar = document.createElement('input');
        btnEnviar.setAttribute('type',"button");
        btnEnviar.className="ocultar btn btn-primary";
        btnEnviar.setAttribute('id',"btnEnviarAsignarAsignaturasProfesor");
        btnEnviar.setAttribute('value',"Enviar");
        var btnReset = document.createElement('input');
        btnReset.setAttribute('type',"button");
        btnReset.className="ocultar btn btn-default";
        btnReset.setAttribute('name',"btnResetAnadirProfesorGrupo");
        btnReset.setAttribute('value',"Resetear campos");
        var contenido = document.querySelector("#contenido");
        contenido.appendChild(selectAsignatura);
        contenido.appendChild(selectProfesor);
        contenido.appendChild(btnEnviar);
        contenido.appendChild(btnReset);
        document.getElementById("btnEnviarAsignarAsignaturasProfesor").addEventListener('click',asignarAsignaturasProfesor)
        // asignarProfesorGrupo();


        
    }
    else{
        eliminarListadosYMensajes();
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay profesores o asignaturas";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);
    }

}
function asignarProfesorGrupo(){
    var grupo = document.getElementById("select_nombreGrupo").value;
    var profesor = document.getElementById("select_nombreProfesor").value;
    var pEnc=false;
    var pIndice=0;
    for(var i=0;i<oGestion.profesores.length;i++){
        if(oGestion.profesores[i].sDni==profesor){
            pEnc=true;
            pIndice = i;
        }
    }
    if(oGestion.profesores[pIndice].grupo==null){
        oGestion.profesores[pIndice].grupo=grupo;
        toastr.success("Profesor asignado correctamente");
    }
    else{
        toastr.warning("Ese profesor ya tiene un grupo asignado");


    }

    var nGrupoCurso = oGestion.cursos[cIndice].grupos.length;
    var gEnc=false;
    for(var i=0;i<nGrupoCurso;i++){
        if(oGestion.cursos[cIndice].grupos[i].iId==grupo){
            gEnc=true;
        }
    }
    if(!gEnc){
        var grupoEnc;
        for(var i=0;i<oGestion.grupos.length;i++){
            if(oGestion.grupos[i].iId==grupo)
                var grupoEnc=oGestion.grupos[i];
        }
        oGestion.cursos[cIndice].grupos.push(grupoEnc);
        toastr.success("Grupo añadido correctamente");
    }
    else
        toastr.warning("Grupo añadido previamente");

}
function asignarAsignaturasProfesor()
{
    var profesor = document.getElementById("select_nombreProfesor").value;
    var asignatura =document.getElementById("select_nombreAsignatura");
    var arrayOpt= [];
    for (var i = 0; i < asignatura.options.length; i++){
        if (asignatura.options[i].selected){
            arrayOpt.push(asignatura.options[i].value);        
        }
    }
    var asignaturaEncontrado=false;
    var gIndice=0;
    var asignaturaDefinitivos=[];
    for(var i=0;i<oGestion.profesores.length;i++){
        if(oGestion.profesores[i].sDni==profesor)
            gIndice=i;
        
    }
    for(var j=0;j<oGestion.profesores[gIndice].asignaturas.length;j++){
            for(var q=0;q<arrayOpt.length;q++){
                if(oGestion.profesores[gIndice].asignaturas[j].iIdAsignatura==arrayOpt[q]){
                    asignaturaEncontrado=true;
                }
            }
    }
    var arrayAsignaturasSeleccionados=[];
    if(asignaturaEncontrado==false){
        for(var i=0;i<oGestion.asignaturas.length;i++){
            for(var j=0;j<arrayOpt.length;j++){
                if(oGestion.asignaturas[i].iIdAsignatura==arrayOpt[j]){
                    arrayAsignaturasSeleccionados.push(oGestion.asignaturas[i]);
                }    
            }    
            
        }
        for(var i=0;i<arrayAsignaturasSeleccionados.length;i++){
            oGestion.profesores[gIndice].asignaturas.push(arrayAsignaturasSeleccionados[i]);
        }
        toastr.success("Asignaturas añadidas correctamente");
    }
    else{
        toastr.warning("No se puede repetir una asignatura en el mismo profesor");
    }

}

function anadirGrupoCurso()
{
    var curso = document.getElementById("select_nombreCurso").value;
    var grupo =document.getElementById("select_nombreGrupo");
    var arrayOpt= [];

    for (var i = 0; i < grupo.options.length; i++)
    {
        if (grupo.options[i].selected)
        {
            arrayOpt.push(grupo.options[i].value);        
        }
    }

    var grupoEncontrado=false;
    //recorro los cursos en busca de grupos
    for(var i=0;i<oGestion.cursos.length;i++)
    {//recorremos los grupo del curso
        for (var j = 0; i < oGestion.cursos[i].grupos.length; j++) 
        {
            //recorremos los grupos seleccionados
            for(var q=0;q<arrayOpt.length;q++)
            {   
                if(oGestion.cursos[i].grupos[q].sId==arrayOpt[q])
                {//si encontramos el grupo seleccionado dentro del curso seleccionado
                    grupoEncontrado=true;
                }
            }
        }
    }    

    var cursoSeleccionado = buscarCurso(curso);
    //si este curso no contiene ha este grupo
    if(grupoEncontrado==false)
    {//recorremod los grupos
        
        for(var j=0;j<arrayOpt.length;j++)
        {//buscamos el grupo a añadir
            var grupoSeleccionado=buscarGrupo(arrayOpt[j])
            cursoSeleccionado.grupos.push(grupoSeleccionado);
            //añadimos a los alumnos del grupo las asignaturas del curso
            for (var i = 0; i < cursoSeleccionado.asignaturas.length; i++) 
            {
                var asig =cursoSeleccionado.asignaturas[i];
                for (var k = 0; k < grupoSeleccionado.alumnos.length; k++) 
                {
                    var nueva=new Asignatura(asig.iIdAsignatura,asig.sNombreAsignatura);
                    grupoSeleccionado.alumnos[k].aNotas.push(nueva,0);
                }
            }
        }    
        toastr.success("Grupos añadidos correctamente");
    }
    else
    {
        toastr.warning("Un grupo solo puede estar en un curso");
    }  
}

// function tablaAlumnos(){

//     //ocultamos formularios y eliminamos listados anteriores
//     ocultarFormularios();
//     eliminarListadosYMensajes()
//     var nAlumnos = oGestion.alumnos.length;
//     if (nAlumnos>0) 
//     {
//         //creamos la tabla y tbody
//         var oTabla=document.createElement("table");
//         var thead = document.createElement("thead");
//         //creamos los th
//         var th1 = document.createElement("th");
//         var id=document.createTextNode("DNI");
//         th1.appendChild(id);
//         thead.appendChild(th1);

//         var th2 = document.createElement("th");
//         var nombre=document.createTextNode("Nombre");
//         th2.appendChild(nombre);
//         thead.appendChild(th2);

//         var th3 = document.createElement("th");
//         var nombre=document.createTextNode("Apellidos");
//         th3.appendChild(nombre);
//         thead.appendChild(th3);

//         var th4 = document.createElement("th");
//         var nombre=document.createTextNode("Edad");
//         th4.appendChild(nombre);
//         thead.appendChild(th4);

//         var th5 = document.createElement("th");
//         var nombre=document.createTextNode("Fecha de Nacimiento");
//         th5.appendChild(nombre);
//         thead.appendChild(th5);

//         var th6 = document.createElement("th");
//         var nombre=document.createTextNode("Teléfono");
//         th6.appendChild(nombre);
//         thead.appendChild(th6);

//         var th7 = document.createElement("th");
//         var nombre=document.createTextNode("Direccion");
//         th7.appendChild(nombre);
//         thead.appendChild(th7);

//         oTabla.appendChild(thead);

           
//         var tbody=document.createElement("tbody");
//         //creamos las celdas
//         for (var i = 0; i < nAlumnos; i++) 
//         {
//            // creamos filas
//             var tr =oTabla.insertRow(-1);
            
//             //creamos las celdas
//                 //td con ID
//             var td =tr.insertCell(-1);
//             var sDni =oGestion.alumnos[i].sDni;
//             var oTexto = document.createTextNode(sDni);
//             td.appendChild(oTexto);
//             tr.appendChild(td);
//                 //td con sNombre
//             var td =tr.insertCell(-1);
//             var sNombre =oGestion.alumnos[i].sNombre;
//             var oTexto = document.createTextNode(sNombre);
//             td.appendChild(oTexto);
//             tr.appendChild(td);

//             var td =tr.insertCell(-1);
//             var sApellido =oGestion.alumnos[i].sApellido;
//             var oTexto = document.createTextNode(sApellido);
//             td.appendChild(oTexto);
//             tr.appendChild(td);

//             var td =tr.insertCell(-1);
//             var dFecha =oGestion.alumnos[i].dFechaNacimiento;
//             var oTexto = document.createTextNode(dFecha);
//             td.appendChild(oTexto);
//             tr.appendChild(td);

//             var td =tr.insertCell(-1);
//             var iTelefono =oGestion.alumnos[i].iTelefono;
//             var oTexto = document.createTextNode(iTelefono);
//             td.appendChild(oTexto);
//             tr.appendChild(td);

            
//             var td =tr.insertCell(-1);
//             var iEdad =oGestion.alumnos[i].iEdad;
//             var oTexto = document.createTextNode(iEdad);
//             td.appendChild(oTexto);
//             tr.appendChild(td);

//             var td =tr.insertCell(-1);
//             var sDireccion =oGestion.alumnos[i].sDireccion;
//             var oTexto = document.createTextNode(sDireccion);
//             td.appendChild(oTexto);
//             tr.appendChild(td);

//             //AÑADIMOS LOS TR con sus td al tbody
//             tbody.appendChild(tr);
//         }

//         oTabla.appendChild(tbody);
//         //atributos de la tabla
//         oTabla.setAttribute('border','1');
//         oTabla.classList.add("tablasDinamicas")
//         oTabla.classList.add("table");
//         oTabla.id="tablaAlumnos";
//         //Añadimos la tabla de Profesor al documento
//         var contenido=document.querySelector("#contenido");
//         var titulo="Listado de Alumnos";
//         var oTexto2 = document.createTextNode(titulo);
//         var h3 = document.createElement("h3");
//         h3.appendChild(oTexto2);
//         contenido.appendChild(h3);
        

//         //***Filtro de busqueda***//
//         var dni ="";
//         var nombre ="";
//         //select de alumnos
//         var select= document.createElement("select");

//         for (var i = 0; i < oGestion.alumnos.length; i++) 
//         {
//             var option = document.createElement("option");

//             sDni =oGestion.alumnos[i].sDni;
//             sNombre =oGestion.alumnos[i].sNombre;
//             var oTexto= document.createTextNode(sNombre);
//             option.value=sDni;
//             option.appendChild(oTexto);

//             select.appendChild(option);

//         }

//         //creamos boton ver Notas Alumno
//         //***Añadimos el select a la capa contenido***//
//         var btnBuscarAlumno= document.createElement("button");
//         var texto=document.createTextNode("Ver Notas");
//         btnBuscarAlumno.appendChild(texto);
//         btnBuscarAlumno.id="btnBuscarAlumno";
//         btnBuscarAlumno.addEventListener("click",tablaAlumnoAsignatura)
//         btnBuscarAlumno.classList.add("ocultar","btn", "btn-default","input-lg");

//         select.classList.add("input-lg","col-sm-12", "col-md-6", "col-lg-6");
//         select.setAttribute("id","select_aluNota"); 
//         select.id="select_aluNota";
//         contenido.appendChild(select);
//         contenido.appendChild(btnBuscarAlumno);     
//         contenido.appendChild(oTabla);
//     }
//     else
//     {
//         eliminarListadosYMensajes()
//         //si no hay datos que listar
//         var contenido = document.querySelector("#contenido");
//         var h3 = document.createElement("h3");
//         var titulo = "No hay Alumnos registrados";
//         var oTexto = document.createTextNode(titulo);
//         h3.appendChild(oTexto);
//         contenido.appendChild(h3);

//     }
// }


function tablaAlumnoAsignatura()
{
    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();

    if (oGestion.alumnos.length==0) 
    {
        toastr.error("No hay alumnos");
    }
    else
    {
    //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        var thead = document.createElement("thead");
        
        var th1 = document.createElement("th");
        var id=document.createTextNode("Id Asignatura");
        th1.appendChild(id);
        thead.appendChild(th1);


        var th2 = document.createElement("th");
        var nombre=document.createTextNode("Nombre Asignatura");
        th2.appendChild(nombre);
        thead.appendChild(th2);

        var th3 = document.createElement("th");
        var nota=document.createTextNode("Nota");
        th3.appendChild(nota);
        thead.appendChild(th3);

        oTabla.appendChild(thead);

            //buscamos alumno y sacamos las asignaturas
            var selectAlumno = document.getElementById("select_aluNota");
            var sDni= selectAlumno.value;
            var tbody = document.createElement("tbody");

            var alumnoSeleccionado= buscarAlumno(sDni);

        //creamos las celdas
        for (var i = 0; i < alumnoSeleccionado.aNotas.length; i++) 
        {
            //creamos filas
            var tr =oTabla.insertRow(-1);
            //creamos las celdas
                //td con sNombre
            if (i%2==0) 
            {
                var td =tr.insertCell(-1);
                //si es par es la asignatura
                var nota =alumnoSeleccionado.aNotas[i];
                var oTexto = document.createTextNode(nota.iIdAsignatura);
                td.appendChild(oTexto);
                tr.appendChild(td);

                var td =tr.insertCell(-1);
                //si es par es la asignatura
                var nota =alumnoSeleccionado.aNotas[i];
                var oTexto = document.createTextNode(nota.sNombreAsignatura);
                td.appendChild(oTexto);
                tr.appendChild(td);
                tbody.appendChild(tr);
                //es una nota
                var td =tr.insertCell(-1);
                var nota =alumnoSeleccionado.aNotas[i+1];
                var oTexto = document.createTextNode(nota);
                td.appendChild(oTexto);
                tr.appendChild(td);
                tbody.appendChild(tr);
            }
            
        }
        oTabla.id="tablaAsignaturasAlumno";
        oTabla.appendChild(tbody);

        if (contenido.querySelector("#tablaAsignaturasAlumno")!=null) 
        {
            contenido.removeChild(contenido.querySelector("#tablaAsignaturasAlumno"));
        }
        contenido.insertBefore(oTabla, contenido.querySelector("#tablaAlumnos"));
        

    }
}








// function tablaProfesor() 
// {
//     //ocultamos formularios y eliminamos listados anteriores
//     ocultarFormularios();
//     eliminarListadosYMensajes();
//     var nProfesores = oGestion.profesores.length;
//     if (nProfesores>0) 
//     {
//        //creamos la tabla y tbody
//         var oTabla=document.createElement("table");
//         var thead = document.createElement("thead");
//         //creamos los th
//         var th1 = document.createElement("th");
//         var id=document.createTextNode("DNI");
//         th1.appendChild(id);
//         thead.appendChild(th1);

//         var th2 = document.createElement("th");
//         var nombre=document.createTextNode("Nombre");
//         th2.appendChild(nombre);
//         thead.appendChild(th2);

//         var th3 = document.createElement("th");
//         var nombre=document.createTextNode("Apellidos");
//         th3.appendChild(nombre);
//         thead.appendChild(th3);

//         var th4 = document.createElement("th");
//         var nombre=document.createTextNode("Edad");
//         th4.appendChild(nombre);
//         thead.appendChild(th4);

//         var th5 = document.createElement("th");
//         var nombre=document.createTextNode("Fecha de Nacimiento");
//         th5.appendChild(nombre);
//         thead.appendChild(th5);

//         var th6 = document.createElement("th");
//         var nombre=document.createTextNode("Teléfono");
//         th6.appendChild(nombre);
//         thead.appendChild(th6);

//         var th7 = document.createElement("th");
//         var nombre=document.createTextNode("Direccion");
//         th7.appendChild(nombre);
//         thead.appendChild(th7);

//         oTabla.appendChild(thead);

//         var tbody = document.createElement("tbody");
//         //creamos las celdas
//         for (var i = 0; i < nProfesores; i++) 
//         {
//             //creamos filas
//             var tr =oTabla.insertRow(-1);
//             //creamos las celdas
//                 //td con ID
//             var td =tr.insertCell(-1);
//             var sDni =oGestion.profesores[i].sDni;
//             var oTexto = document.createTextNode(sDni);
//             td.appendChild(oTexto);
//             tr.appendChild(td);
//                 //td con sNombre
//             var td =tr.insertCell(-1);
//             var sNombre =oGestion.profesores[i].sNombre;
//             var oTexto = document.createTextNode(sNombre);
//             td.appendChild(oTexto);
//             tr.appendChild(td);

//             var td =tr.insertCell(-1);
//             var sApellido =oGestion.profesores[i].sApellido;
//             var oTexto = document.createTextNode(sApellido);
//             td.appendChild(oTexto);
//             tr.appendChild(td);

//             var td =tr.insertCell(-1);
//             var dFecha =oGestion.profesores[i].dFechaNacimiento;
//             var oTexto = document.createTextNode(dFecha);
//             td.appendChild(oTexto);
//             tr.appendChild(td);

//             var td =tr.insertCell(-1);
//             var iTelefono =oGestion.profesores[i].iTelefono;
//             var oTexto = document.createTextNode(iTelefono);
//             td.appendChild(oTexto);
//             tr.appendChild(td);

//             var td =tr.insertCell(-1);
//             var iEdad =oGestion.profesores[i].iEdad;
//             var oTexto = document.createTextNode(iEdad);
//             td.appendChild(oTexto);
//             tr.appendChild(td);

//             var td =tr.insertCell(-1);
//             var sDireccion =oGestion.profesores[i].sDireccion;
//             var oTexto = document.createTextNode(sDireccion);
//             td.appendChild(oTexto);
           
//             //AÑADIMOS LOS TR con sus td al tbody
//             tbody.appendChild(tr);
//         }

//         oTabla.appendChild(tbody);
//         //atributos de la tabla
//         oTabla.setAttribute('border','1');
//         oTabla.classList.add("tablasDinamicas")
//         oTabla.classList.add("table");
//         oTabla.classList.add("table-striped");
//         //Añadimos la tabla de Profesor al documento
//         var contenido=document.querySelector("#contenido");
//         var titulo="Listado de Profesores";
//         var oTexto2 = document.createTextNode(titulo);
//         var h3 = document.createElement("h3");
//         h3.appendChild(oTexto2);
//         contenido.appendChild(h3);
//         contenido.appendChild(oTabla);
//     }
//     else
//     {
//         eliminarListadosYMensajes();
//         //si no hay datos que listar
//         var contenido = document.querySelector("#contenido");
//         var h3 = document.createElement("h3");
//         var titulo = "No hay Profesores registrados";
//         var oTexto = document.createTextNode(titulo);
//         h3.appendChild(oTexto);
//         contenido.appendChild(h3);

//     }

// }


function btnModificarCurso()
{
//ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    eliminarListadosYMensajes();
    var contenido=document.querySelector("#contenido");
    var h3=document.createElement("h3");
    var titulo= document.createTextNode("Seleccione el Curso a Modificar");
    h3.appendChild(titulo);

    var selectCursos = cargarSelectCursos();


    //añadimos el select al div del dialogo
    $('#gestionModificarCurso form').prepend(selectCursos[0]);
    $('#gestionModificarCurso form ').prepend(h3);
    oDlgGestionModificarCurso.dialog("open");
    $('#gestionModificarCurso form').show();


    // //le añadimos el evento change para que llame a los datos del curso cada vez que se cambie
      $('#select_nombreCurso').change(function() 
      {
      //recoger value commbo curso
      var cursoCombo = $('#select_nombreCurso').val();
      
      if(cursoCombo!="default")
      {
        //si el curso seleccionado no es default
        //llamada ajax al servidor para trear los datos del curso seleccionado
   
        $.post("php/buscarCurso.php",{id_curso:cursoCombo} , function(curso)
        {
            //añadimos los datos del curso a los values de los inputs
            var formu = document.formuModificarCurso;
            formu.id_Curso.value=curso.id;
            formu.nombre_Curso.value=curso.nombre;
            formu.fecha_ini_Curso.value=curso.fecha_inicio;
            formu.fecha_fin_Curso.value=curso.fecha_fin;
            formu.descripcion_Curso.value=curso.descripcion;
            formu.precio_Curso.value=curso.precio;

            formu.id_Curso.setAttribute('readonly',true);
            formu.nombre_Curso.setAttribute('readonly',true);
        },'json');
      }
     });



}
function eliminarTabla(oTabla)
{
    var padre= oTabla.parentNode;
    padre.removeChild(oTabla);

}
function mostrarDatosCurso(oEvento)
{
    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    if (document.querySelector("#tablaModCurso")!=null) 
    {
        var tablaRm=document.querySelector("#tablaModCurso");
        eliminarTabla(tablaRm);
    }

    var oE= window.event || oEvento;
    var sIdCursoSeleccionado= oE.target.value; 

    var cursoSeleccionado =buscarCurso(sIdCursoSeleccionado);

    if (cursoSeleccionado!=null) 
    {
        //mostramos una tabla con inputs
         //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        oTabla.id="tablaModCurso";
        var thead = document.createElement("thead");
        //creamos los th
        var th1 = document.createElement("th");
        var id=document.createTextNode("ID");
        th1.appendChild(id);
        thead.appendChild(th1);

        var th2 = document.createElement("th");
        var nombre=document.createTextNode("Nombre");
        th2.appendChild(nombre);
        thead.appendChild(th2);

        var th3 = document.createElement("th");
        var fecha=document.createTextNode("Fecha Inicio");
        th3.appendChild(fecha);
        thead.appendChild(th3);

        var th4 = document.createElement("th");
        var fecha=document.createTextNode("Fecha Fin");
        th4.appendChild(fecha);
        thead.appendChild(th4);

        var th5 = document.createElement("th");
        var descripcion=document.createTextNode("Descripcion");
        th5.appendChild(descripcion);
        thead.appendChild(th5);

        var th6 = document.createElement("th");
        var precio=document.createTextNode("Precio");
        th6.appendChild(precio);
        thead.appendChild(th6);
        oTabla.appendChild(thead);

        var tbody = document.createElement("tbody");


        //creamos filas
        var tr =document.createElement("tr");
            
        //creamos las celdas
            //td con ID
        var td =tr.insertCell(-1);
        var sId = cursoSeleccionado.sId;
        //creamos el input
            var input= document.createElement("input");
            input.setAttribute("type","text")
            input.readOnly=true;
            input.value=sId;
            input.name="sId";
            td.appendChild(input);
            tr.appendChild(td);
                //td con sNombre
            var td =tr.insertCell(-1);
            var sNombre =cursoSeleccionado.sNombre;
            //creamos el input
            var input= document.createElement("input");
            input.setAttribute("type","text")
            input.readOnly.true;
            input.value=sNombre;
            input.name="sNombre";
            td.appendChild(input);
            tr.appendChild(td);
                //td con fecha ini
            /////////////////
            var td =tr.insertCell(-1);
            var dFecha =cursoSeleccionado.dFecha_ini;
           //creamos el input
            var input= document.createElement("input");
            input.setAttribute("type","date");
            input.value=dFecha;
            input.readOnly.true;
            input.name="fecha_ini";
            td.appendChild(input);
            tr.appendChild(td);
                //td con fecha fin
            var td =tr.insertCell(-1);
            var dFecha =cursoSeleccionado.dFecha_fin;
            //creamos el input
            var input= document.createElement("input");
            input.setAttribute("type","date");
            input.value=dFecha;
            input.readOnly.true;
            input.name="fecha_fin";
            td.appendChild(input);
            tr.appendChild(td);
                //td con descripcion
            var td =tr.insertCell(-1);
            var sDescripcion =cursoSeleccionado.sDescripcion;
           //creamos el input
            var input= document.createElement("textarea");
            input.setAttribute("type","text");
            input.value=sDescripcion;
            input.name="descripcion";
            td.appendChild(input);
            tr.appendChild(td);
            //td con precio
            var td =tr.insertCell(-1);
            var fPrecio =cursoSeleccionado.fPrecio;
            //creamos el input
            var input= document.createElement("input");
            input.setAttribute("type","text");
            input.value=fPrecio;
            input.name="precio";
            td.appendChild(input);
            tr.appendChild(td);
            //AÑADIMOS LOS TR con sus td al tbody
            tbody.appendChild(tr);
        

        oTabla.appendChild(tbody);
        //atributos de la tabla
        oTabla.setAttribute('border','1');
        oTabla.classList.add("tablasDinamicas")
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        //Añadimos la tabla de Profesor al documento
        var contenido=document.querySelector("#contenido");
        contenido.appendChild(oTabla);

        //btn guardar cambios
        if (document.querySelector("#btnGuardarCambios")!=null) 
        {
            var padre =document.querySelector("#btnGuardarCambios").parentNode;
            padre.removeChild("#btnGuardarCambios");
        }
        var btnGuardarCambios= document.createElement("button");
        btnGuardarCambios.setAttribute("class","btn-primary ocultar");
        btnGuardarCambios.id="btnGuardarCambios";
        var texto=document.createTextNode("Guardar Cambios");
        btnGuardarCambios.appendChild(texto);
        btnGuardarCambios.addEventListener("click",validarModCurso);
        contenido.appendChild(btnGuardarCambios);



    }
}

function validarModCurso()
{
    var s="";
    var id=document.querySelector("input[name='sId']").value;
    var nombre = document.querySelector("input[name='sNombre']").value;
    var fecha_ini= document.querySelector("input[name='fecha_ini']").value;
    var fecha_fin= document.querySelector("input[name='fecha_fin']").value;
    var descripcion= document.querySelector("textarea[name='descripcion']").value;
    var precio = parseFloat(document.querySelector("input[name='precio']").value);
    
    var bValido = true;
    var sErrores = "";

    //Nombre
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(nombre) == false)
    {
        if(bValido == true)
        {
            bValido = false;         
        }
    
        sErrores += "\nNombre incorrecto<br>";
        
        //Marcar error
        nombre.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        nombre.className = "form-control";    

    }

       //Fecha inicio
    oExpReg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
    if (oExpReg.test(fecha_ini) == false)
    {
        if(bValido == true)
        {
            bValido = false;        
        }
        sErrores += "\nFormato fecha yyyy-mm-dd<br>";        
        //Marcar error
        fecha_ini.className = "form-control input-md error"; 
    }
    else {
        //Desmarcar error
        //comprobamos que la fecha sea correcta
        var fecha_nac = new Date (Date.parse(fecha_ini));
        if (fecha_nac=="Invalid Date") 
        {
             sErrores += "\nFecha incorrecta<br>";
             bValido=false;
            fecha_ini.className = "form-control input-md error"; 
        }
        else
        {
            fecha_ini.className = "form-control "; 
        }
    }

    //Fecha Fin
    oExpReg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
    if (oExpReg.test(fecha_fin) == false)
    {
    
        if(bValido == true)
        {
            bValido = false;        
        }
        sErrores += "\nFormato fecha yyyy-mm-dd<br>";        
        //Marcar error
        fecha_fin.className = "form-control input-md error"; 

    }
    else {
        //Desmarcar error
        //comprobamos que la fecha sea correcta
        var fecha_nac = new Date (Date.parse(fecha_fin));
        if (fecha_nac=="Invalid Date") 
        {
             sErrores += "\nFecha incorrecta<br>";
             bValido=false;
            fecha_fin.className = "form-control input-md error"; 
        }
        else
        {
            fecha_fin.className = "form-control "; 
        }
    }


    if (fecha_ini>fecha_fin) 
    {
        sErrores += "\nFecha inicio > fecha fin<br>";
        bValido=false;
        fecha_fin.className = "form-control input-md error";
        fecha_ini.className = "form-control input-md error";
    }

    //Descripcion 
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(descripcion) == false)
    {
    
        if(bValido == true)
        {
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nDescripción incorrecta<br>";
        
        //Marcar error
        descripcion.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        descripcion.className = "form-control";    

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
        precio.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        precio.className = "form-control";    

    } 


     //mensaje de error o de confirmación
    //y llamada a método para añadir curso
    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        
        //datos del Curso
        var id=document.querySelector("input[name='sId']").value;
        var nombre = document.querySelector("input[name='sNombre']").value;
        var fecha_ini= document.querySelector("input[name='fecha_ini']").value;
        var fecha_fin= document.querySelector("input[name='fecha_fin']").value;
        var descripcion= document.querySelector("textarea[name='descripcion']").value;
        var precio = parseFloat(document.querySelector("input[name='precio']").value);
    
        //Buscamos curso y lo modificamos 
       
        var cursoCambiar=buscarCurso(id);
        cursoCambiar.sNombre=nombre;
        cursoCambiar.dFecha_ini=fecha_ini;
        cursoCambiar.dFecha_fin=fecha_fin;
        cursoCambiar.sDescripcion=descripcion;
        cursoCambiar.fPrecio=precio;
        if (!s) 
        {
            toastr.success("Curso Modificado correctamente");
        }
        else
        {
          toastr.warning("Este Curso ya existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada


}

function buscarCurso(sId)
{
    // var nCursos=oGestion.cursos.length
    // for (var i = 0; i < nCursos; i++) 
    // {
    //     if (oGestion.cursos[i].sId==sId) 
    //     {
    //         oGestion.cursos[i];
    //     }
    // }
    var cursos= oGestion.cursos;
    var cursoDevolver=null;
    cursos.forEach(function(cursos)
    {
        if (cursos.sId==sId) 
        {
            cursoDevolver=cursos;
            return false;
        }

    })   
    return cursoDevolver;
}





// function tablaGrupos() 
// {
//     //ocultamos formularios y eliminamos listados anteriores
//     ocultarFormularios();
//     eliminarListadosYMensajes();
//     var nGrupos = oGestion.grupos.length;
//     if (nGrupos>0) 
//     {
//         //creamos la tabla y tbody
//         var oTabla=document.createElement("table");
//         var thead = document.createElement("thead");
//         //creamos los th
//         var th1 = document.createElement("th");
//         var id=document.createTextNode("ID");
//         th1.appendChild(id);
//         thead.appendChild(th1);

//         var th2 = document.createElement("th");
//         var nombre=document.createTextNode("Nombre");
//         th2.appendChild(nombre);
//         thead.appendChild(th2);

//         oTabla.appendChild(thead);

//         var tbody = document.createElement("tbody");
//         //creamos las celdas
//         for (var i = 0; i < nGrupos; i++) 
//         {
//             //creamos filas
//             var tr =document.createElement("tr");
            
//             //creamos las celdas
//                 //td con ID
//             var td =tr.insertCell(-1);
//             var iId =oGestion.grupos[i].iId;
//             var oTexto = document.createTextNode(iId);
//             td.appendChild(oTexto);
//             tr.appendChild(td);
//                 //td con sNombre
//             var td =tr.insertCell(-1);
//             var sNombre =oGestion.grupos[i].sNombre;
//             var oTexto = document.createTextNode(sNombre);
//             td.appendChild(oTexto);
//             tr.appendChild(td);
//             //AÑADIMOS LOS TR con sus td al tbody
//             tbody.appendChild(tr);
//         }

//         oTabla.appendChild(tbody);
//         //atributos de la tabla
//         oTabla.setAttribute('border','1');
//         oTabla.classList.add("tablasDinamicas")
//         oTabla.classList.add("table");
//         oTabla.classList.add("table-striped");
//         //Añadimos la tabla de Profesor al documento
//         var contenido=document.querySelector("#contenido");
//         var titulo="Listado de Grupos";
//         var oTexto2 = document.createTextNode(titulo);
//         var h3 = document.createElement("h3");
//         h3.appendChild(oTexto2);
//         contenido.appendChild(h3);
//         contenido.appendChild(oTabla);
//     }
//     else
//     {
//         eliminarListadosYMensajes()
//         //si no hay datos que listar
//         var contenido = document.querySelector("#contenido");
//         var h3 = document.createElement("h3");
//         var titulo = "No hay Cursos registrados";
//         var oTexto = document.createTextNode(titulo);
//         h3.appendChild(oTexto);
//         contenido.appendChild(h3);

//     }

// }

function tablaCursos() 
{
    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    eliminarListadosYMensajes();
    var nCursos = oGestion.cursos.length;
    if (nCursos>0) 
    {
        //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        var thead = document.createElement("thead");
        //creamos los th
        var th1 = document.createElement("th");
        var id=document.createTextNode("ID");
        th1.appendChild(id);
        thead.appendChild(th1);

        var th2 = document.createElement("th");
        var nombre=document.createTextNode("Nombre");
        th2.appendChild(nombre);
        thead.appendChild(th2);

        var th3 = document.createElement("th");
        var fecha=document.createTextNode("Fecha Inicio");
        th3.appendChild(fecha);
        thead.appendChild(th3);

        var th4 = document.createElement("th");
        var fecha=document.createTextNode("Fecha Fin");
        th4.appendChild(fecha);
        thead.appendChild(th4);

        var th5 = document.createElement("th");
        var descripcion=document.createTextNode("Descripcion");
        th5.appendChild(descripcion);
        thead.appendChild(th5);

        var th6 = document.createElement("th");
        var precio=document.createTextNode("Precio");
        th6.appendChild(precio);
        thead.appendChild(th6);
        oTabla.appendChild(thead);

        var tbody = document.createElement("tbody");
        //creamos las celdas
        for (var i = 0; i < nCursos; i++) 
        {
            //creamos filas
            var tr =document.createElement("tr");
            
            //creamos las celdas
                //td con ID
            var td =tr.insertCell(-1);
            var sId =oGestion.cursos[i].sId;
            var oTexto = document.createTextNode(sId);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sNombre
            var td =tr.insertCell(-1);
            var sNombre =oGestion.cursos[i].sNombre;
            var oTexto = document.createTextNode(sNombre);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con fecha ini
            /////////////////
            var td =tr.insertCell(-1);
            var dFecha =oGestion.cursos[i].dFecha_ini;
            var oTexto = document.createTextNode(dFecha);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con fecha fin
            var td =tr.insertCell(-1);
            var dFecha =oGestion.cursos[i].dFecha_fin;
            var oTexto = document.createTextNode(dFecha);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con descripcion
            var td =tr.insertCell(-1);
            var sDescripcion =oGestion.cursos[i].sDescripcion;
            var oTexto = document.createTextNode(sDescripcion);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con precio
            var td =tr.insertCell(-1);
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
// function tablaCentros(){
//     //ocultamos formularios y eliminamos listados anteriores
//     ocultarFormularios();
//     eliminarListadosYMensajes()
//     var nCentros = oGestion.centros.length;
//     if (nCentros>0)     
//     {
//         //creamos la tabla y tbody
//         var oTabla=document.createElement("table");
//         var thead = document.createElement("thead");
//         //creamos los th
//         var th1 = document.createElement("th");
//         var id=document.createTextNode("ID");
//         th1.appendChild(id);
//         thead.appendChild(th1);

//         var th2 = document.createElement("th");
//         var nombre=document.createTextNode("Nombre");
//         th2.appendChild(nombre);
//         thead.appendChild(th2);

//         var th3 = document.createElement("th");
//         var fecha=document.createTextNode("Localización");
//         th3.appendChild(fecha);
//         thead.appendChild(th3);
//         oTabla.appendChild(thead);       


//         var tbody = document.createElement("tbody");
//         //creamos las celdas
//         for (var i = 0; i < nCentros; i++) 
//         {
//             //creamos filas
//             var tr =document.createElement("tr");
            
//             //creamos las celdas
//                 //td con ID
//             var td =tr.insertCell(-1);
//             var sId =oGestion.centros[i].iId;
//             var oTexto = document.createTextNode(sId);
//             td.appendChild(oTexto);
//             tr.appendChild(td);
//                 //td con sNombre
//             var td =tr.insertCell(-1);
//             var sNombre =oGestion.centros[i].sNombre;
//             var oTexto = document.createTextNode(sNombre);
//             td.appendChild(oTexto);
//             tr.appendChild(td);
//                 //td con fecha ini
//             /////////////////
//             var td =tr.insertCell(-1);
//             var localizacion =oGestion.centros[i].sLocalizacion;
//             var oTexto = document.createTextNode(localizacion);
//             td.appendChild(oTexto);
//             tr.appendChild(td);
//                 //td con fecha fin
            
//             //AÑADIMOS LOS TR con sus td al thead
//             tbody.appendChild(tr);
//         }

//         oTabla.appendChild(tbody);
//         //atributos de la tabla
//         oTabla.setAttribute('border','1');
//         oTabla.classList.add("tablasDinamicas")
//         oTabla.classList.add("table");
//         oTabla.classList.add("table-striped");
//         //Añadimos la tabla de Profesor al documento
//         var contenido=document.querySelector("#contenido");
//         var titulo="Listado de Centros";
//         var oTexto2 = document.createTextNode(titulo);
//         var h3 = document.createElement("h3");
//         h3.appendChild(oTexto2);
//         contenido.appendChild(h3);
//         contenido.appendChild(oTabla);
//     }
//     else
//     {
//         eliminarListadosYMensajes()
//         //si no hay datos que listar
//         var contenido = document.querySelector("#contenido");
//         var h3 = document.createElement("h3");
//         var titulo = "No hay Centros registrados";
//         var oTexto = document.createTextNode(titulo);
//         h3.appendChild(oTexto);
//         contenido.appendChild(h3);

//     }

// }

function tablaAsignaturas(){
    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    eliminarListadosYMensajes()
    var nAsignaturas = oGestion.asignaturas.length;
    if (nAsignaturas>0)
    {
        //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        var thead = document.createElement("thead");
        //creamos los th
        var th1 = document.createElement("th");
        var id=document.createTextNode("ID");
        th1.appendChild(id);
        thead.appendChild(th1);

        var th2 = document.createElement("th");
        var nombre=document.createTextNode("Nombre");
        th2.appendChild(nombre);
        thead.appendChild(th2);
        oTabla.appendChild(thead);

           
        var tbody = document.createElement("tbody");
        //creamos las celdas
        for (var i = 0; i < nAsignaturas; i++) 
        {
            //creamos filas
            var tr =document.createElement("tr");
            
            //creamos las celdas
                //td con ID
            var td =tr.insertCell(-1);
            var sId =oGestion.asignaturas[i].iIdAsignatura;
            var oTexto = document.createTextNode(sId);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sNombre
            var td =tr.insertCell(-1);
            var sNombre =oGestion.asignaturas[i].sNombreAsignatura;
            var oTexto = document.createTextNode(sNombre);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con fecha ini
            /////////////////
            
                //td con fecha fin
            
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
        var titulo="Listado de Asignaturas";
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
        var titulo = "No hay Centros registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);

    }
}


/****AQUIII*///

function eliminarListadosYMensajes()
{
   var contenido = document.querySelector("#contenido");
    var oTablas = $('.tabla');
    for (var i = 0; i < oTablas.length; i++)
    {
        contenido.removeChild(oTablas[i]);
    }
    
    
    var oSelect = $('.form-group.select');
    for (var i = 0; i < oSelect.length; i++) 
    {
        oSelect[i].parentNode.removeChild(oSelect[i]);
    }
      
    var oButton = document.querySelectorAll('.ocultar');
    for(var i=0;i<oButton.length;i++)
    {
        oButton[i].remove();
    }
    // while(contenido.firstChild){
    //     contenido.removeChild(contenido.firstChild);

    // }


}


/*----------Fin de Listados-----*/
function ocultarFormularios(){
	document.formuAltaAlum.style.display="none";
	document.formuAltaProfe.style.display="none";
	document.formuAltaGrupo.style.display="none";
	document.formuAltaCurso.style.display="none";
	document.formuAltaAsignatura.style.display="none";
   
    document.formuBajaAlum.style.display="none";
    document.formuBajaProfe.style.display="none";
    document.formuBajaGrupo.style.display="none";
    document.formuBajaCurso.style.display="none";
    document.formuBajaAsignatura.style.display="none";
}
/*-----------FIN DE MOSTRAR Y OCULTAR FORMULARIOS-------------*/

/*-----------VALIDACIONES FORMULARIOS--------------*/
document.formuAltaAlum.btnEnviarAltaAlumno.addEventListener('click',validarAltaAlumno);
document.formuAltaProfe.btnEnviarAltaProfesor.addEventListener('click',validarAltaProfesor);
document.formuAltaGrupo.btnEnviarAltaGrupo.addEventListener('click',validarAltaGrupo);
document.formuAltaCurso.btnEnviarAltaCurso.addEventListener('click',validarAltaCurso);

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
    var fecha_nac = oForm.fechaNac_Alumno.value;
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
    //Nombre : cualquier letra entre a-z case insensitive y de 3-40 caracteres
    oExpReg = /^[a-z]{3,40}$/i;
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

    //Fecha nacimiento 
    oExpReg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
    if (oExpReg.test(fecha_nac) == false){
    
        if(bValido == true)
        {
            bValido = false;        

        }
        sErrores += "\nFormato fecha yyyy-mm-dd<br>";        
        //Marcar error
        oForm.fechaNac_Alumno.className = "form-control input-md error"; 
        
    }
    else {
        //Desmarcar error
        //comprobamos que la fecha sea correcta
        fecha_nac = new Date (Date.parse(oForm.fechaNac_Alumno.value));
        if (fecha_nac=="Invalid Date") 
        {
             sErrores += "\nFecha incorrecta<br>";
             bValido=false;
            oForm.fechaNac_Alumno.className = "form-control input-md error"; 
        }
        else
        {
            oForm.fechaNac_Alumno.className = "form-control "; 
        }

        
    }


    //Telefono 
    oExpReg = /^[0-9]{9}$/;
    if (oExpReg.test(telefono) == false)
    {
    
        if(bValido == true)
        {
            bValido = false;        

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

    if (oForm.selectCursos.value=='default') 
    {
        if(bValido == true)
        {
            bValido = false;        
        }
         sErrores += "\nSeleccione un curso Para el Alumno<br>";

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
        var dFechaNacimiento = new Date (Date.parse(oForm.fechaNac_Alumno.value));        
        var iTelefono = parseInt(oForm.telefono_Alumno.value);
        var iEdad = parseInt(oForm.edad_Alumno.value);
        var sDireccion = oForm.direccion_Alumno.value.trim();

        //Creamos alumno
        // var oAlumno= new Alumno(sDni,sNombre,sApellido,dFechaNacimiento,iTelefono,iEdad,sDireccion);
        var oAlumno = {
        	dni: oForm.dni_Alumno.value.trim(),
        	nombre: oForm.nombre_Alumno.value.trim(),
        	apellidos: oForm.apellidos_Alumno.value.trim(),
        	fecha: new Date (Date.parse(oForm.fechaNac_Alumno.value)),
        	telefono: parseInt(oForm.telefono_Alumno.value.trim()),
        	edad: parseInt(oForm.edad_Alumno.value.trim()),
        	direccion: oForm.direccion_Alumno.value.trim(),
            id_curso: oForm.selectCursos.value
        };
        // s=oGestion.darAltaAlumno(oAlumno);
        var sURL = "php/altaAlumno.php";
        var sParametros = "datos=" + JSON.stringify(oAlumno);  

        peticionAjax(sURL,sParametros);
        // if(!s){
        //     toastr.success("Alumno registrado correctamente");
        // }
        // else
        // {
        //   toastr.warning("Este Alumno ya existe");  
        // }
    }
    //Fin Mensajes de error confirmación y llamada


}

function validarAltaProfesor(){
	var s="";
	var oForm = document.formuAltaProfe;
    var dni = oForm.dni_Profesor.value;
    var nombre = oForm.nombre_Profesor.value;
    var apellidos = oForm.apellidos_Profesor.value;
    var fecha_nac =oForm.fechaNac_Profesor.value;
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
    
    //Fecha nacimiento 
    oExpReg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
    if (oExpReg.test(fecha_nac) == false){
    
        if(bValido == true)
        {
            bValido = false;        

        }
        sErrores += "\nFormato fecha yyyy-mm-dd<br>";        
        //Marcar error
        oForm.fechaNac_Profesor.className = "form-control input-md error"; 
    }
    else {
        //Desmarcar error
        //comprobamos que la fecha sea correcta
        fecha_nac = new Date (Date.parse(oForm.fechaNac_Profesor.value));
        if (fecha_nac=="Invalid Date") 
        {
             sErrores += "\nFecha incorrecta<br>";
             bValido=false;
            oForm.fechaNac_Profesor.className = "form-control input-md error"; 
        }
        else
        {
            oForm.fechaNac_Profesor.className = "form-control "; 
        }
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
      var oForm=document.formuAltaProfe;
      var sDni = oForm.dni_Profesor.value.trim();
      var sNombre = oForm.nombre_Profesor.value.trim();
      var sApellido = oForm.apellidos_Profesor.value.trim();
      var dFechaNacimiento = oForm.fechaNac_Profesor.value;
      var iTelefono = parseInt(oForm.telefono_Profesor.value);
      var iEdad = parseInt(oForm.edad_Profesor.value);
      var sDireccion = oForm.direccion_Profesor.value;
      var sAsignatura = oForm.select_nombreAsignatura.value;

      var oProfesor = {
        dni: sDni,
        nombre: sNombre, 
        apellidos: sApellido,
        fecha: dFechaNacimiento,
        telefono: iTelefono,
        edad: iEdad,
        direccion: sDireccion,
        asignatura: sAsignatura
      };

      //Creamos Profesor
      // var sURL = "php/altaProfesor.php";
      // var sParametros = "datos=" + JSON.stringify(oProfesor);  

      // peticionAjax(sURL,sParametros);        



      $.post("php/altaProfesor.php", "datos=" + JSON.stringify(oProfesor), function(json){
        if (json.error == false){
          toastr.success(json.resultado);
        }
        else{
          toastr.error(json.resultado);
        }
      },'json');              
    }
    //Fin Mensajes de error confirmación y llamada

}
function validarAltaGrupo(){
    var s="";
    var oForm = document.formuAltaGrupo;
    var id = oForm.id_Grupo.value;
    var nombre = oForm.nombre_Grupo.value;
    var fecha_ini=oForm.fecha_ini_curso;
    
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
    var fecha_ini= oForm.fecha_ini_Curso.value;
    var fecha_fin=oForm.fecha_fin_Curso.value;
    var descripcion = oForm.descripcion_Curso.value;
    var precio = parseFloat(oForm.precio_Curso.value);
    
    var bValido = true;
    var sErrores = "";
    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true)
        {
            bValido = false;        
       
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

       //Fecha inicio
    oExpReg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
    if (oExpReg.test(fecha_ini) == false)
    {
        if(bValido == true)
        {
            bValido = false;        
        }
        sErrores += "\nFormato fecha yyyy-mm-dd<br>";        
        //Marcar error
        oForm.fecha_ini_Curso.className = "form-control input-md error"; 
    }
    else {
        //Desmarcar error
        //comprobamos que la fecha sea correcta
        fecha_nac = new Date (Date.parse(oForm.fecha_ini_Curso.value));
        if (fecha_nac=="Invalid Date") 
        {
             sErrores += "\nFecha incorrecta<br>";
             bValido=false;
            oForm.fecha_ini_Curso.className = "form-control input-md error"; 
        }
        else
        {
            oForm.fecha_ini_Curso.className = "form-control "; 
        }
    }

    //Fecha Fin
    oExpReg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
    if (oExpReg.test(fecha_fin) == false)
    {
    
        if(bValido == true)
        {
            bValido = false;        
        }
        sErrores += "\nFormato fecha yyyy-mm-dd<br>";        
        //Marcar error
        oForm.fecha_fin_Curso.className = "form-control input-md error"; 

    }
    else {
        //Desmarcar error
        //comprobamos que la fecha sea correcta
        fecha_nac = new Date (Date.parse(oForm.fecha_fin_Curso.value));
        if (fecha_nac=="Invalid Date") 
        {
             sErrores += "\nFecha incorrecta<br>";
             bValido=false;
            oForm.fecha_fin_Curso.className = "form-control input-md error"; 
        }
        else
        {
            oForm.fecha_fin_Curso.className = "form-control "; 
        }
    }


    if (fecha_ini>fecha_fin) 
    {
        sErrores += "\nFecha inicio > fecha fin<br>";
        bValido=false;
        oForm.fecha_fin_Curso.className = "form-control input-md error";
        oForm.fecha_ini_Curso.className = "form-control input-md error";
    }

    //Descripcion 
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(descripcion) == false)
    {
    
        if(bValido == true)
        {
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
        // var oCurso= new Curso(iId,sNombre,dFecha_inicio,dFecha_fin,sDescripcion,fPrecio);
        // s=oGestion.darAltaCurso(oCurso);
        var oCurso = {
        	id: iId,
        	nombre: sNombre,
        	fecha_ini: dFecha_inicio,
        	fecha_fin: dFecha_fin,
        	descripcion: sDescripcion,
        	precio: fPrecio
        };


        var sURL = "php/altaCurso.php";
        var sParametros = "datos=" + JSON.stringify(oCurso);  
        peticionAjax(sURL,sParametros);

        
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
    var id = oForm.id_Asignatura.value.trim();
    var nombre = oForm.nombre_Asignatura.value.trim();
    
    
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
    //error combo cursos
    if (oForm.selectCursos.value=='default') 
    {

        if(bValido == true)
        {
            bValido = false;       
            sErrores += "\n Seleccione un curso";

        }
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
        //llamada ajax
        var oAsignatura= 
        {
            id_asig: oForm.id_Asignatura.value.trim(),
            nombre_asig: oForm.nombre_Asignatura.value.trim(),
            id_curso: oForm.selectCursos.value
        };


        $.post("php/altaAsignatura.php","datos=" + JSON.stringify(oAsignatura), function(json)
        {
            if (json.error == false)
            {
                toastr.success(json.resultado);
            }
            else
            {
                toastr.error(json.resultado);
            }
        },'json');

       
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

        //LLAMADA AJAX para borrar al alumno


    $.post("php/bajaAlumno.php",{dni:sDni} , function(json)
    {
        if (json.error == false)
        {
            toastr.success(json.resultado);
        }
        else
        {
            toastr.error(json.resultado);
        }
          
    },'json');

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
        // var oFrom=document.formuBajaProfesor;
        // var sDni = oForm.dni_Profesor.value.trim();
        // s=oGestion.darBajaProfesor(sDni);

        // if (s) 
        // {
        //     toastr.success("Profesor Eliminado correctamente");
        // }
        // else
        // {
        //   toastr.warning("Este Profesor No existe");  
        // }
        $.get("php/bajaProfesor.php",{dni_profe:dni} , function(json){
          if (json.error == false){
            toastr.success(json.resultado);
          }
          else{
            toastr.error(json.resultado);
          }
        },'json');
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
        // var oFrom=document.formuBajaCurso;
        // var sId = oForm.id_Curso.value.trim();
        // s=oGestion.darBajaCurso(sId);
        // if(s) 
        // {
        //     toastr.success("Curso Eliminado correctamente");
        // }
        // else
        // {
        //   toastr.warning("Este Curso No existe");  
        // }
        $.post("php/bajaCurso.php", {id_curso: id}, function(json){
          if (json.error == false){
              toastr.success(json.resultado);
          }
          else
          {
              toastr.error(json.error);
          }
        });
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
    else 
    {
        //Desmarcar error
        oForm.id_Asignatura.className = "form-control"; 


    }
    
    //llamada ajax
    $.ajax({
      url: 'php/bajaAsignatura.php',
      type: 'GET',
      dataType: 'json',
      data: {id_asignatura:id},
      complete: function(oAjax){
        var oObjeto = JSON.parse(oAjax.responseText);
        if (oObjeto.error == false){
          toastr.success(oObjeto.resultado);
        }
        else{
          toastr.error(oObjeto.resultado);
        }
      }
    });
    
    

    // $.post("php/bajaAsignatura.php",{id_asignatura:id}, function(json)
    // {
    //     if (json.error == false)
    //     {
    //         toastr.success(json.resultado);
    //     }
    //     else
    //     {
    //         toastr.error(json.resultado);
    //     }
    // },'json');


}
// function completaBajaAsig(sParametros){
//   var oObjeto = JSON.parse(sParametros.responseText);
//   if (oObjeto.error == false){
//     toastr.success(oObjeto.resultado);
//   }
//   else{
//     toastr.error(oObjeto.resultado);
//   }


// }










//MÉTODOS DE AJAX CON JS
var oAjax = null;

function inicializa_xhr() {
  if (window.XMLHttpRequest) {
	    return new XMLHttpRequest(); 
  } else if (window.ActiveXObject) {
	    return new ActiveXObject("Microsoft.XMLHTTP"); 
  } 
}

function peticionAjax(sURL,sParametros){

    // PRIMERO: configuracion de la peticion
    oAjax = inicializa_xhr();

    oAjax.open("POST",sURL,true);
    
    oAjax.addEventListener("readystatechange",procesarRespuesta,false); 

    oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    // SEGUNDO : hacer la peticion
    oAjax.send(sParametros);
    
}
    
function procesarRespuesta()
{
    // TERCERO: procesar respuesta cuando llega
    if (oAjax.readyState == 4 && oAjax.status == 200)
    {    
        // JSON.parse cadena --> objeto
        // JSON.stringify objeto --> cadena
        var oObjeto = JSON.parse(oAjax.responseText);
        switch(oObjeto.accion){
            case 100: // altaCliente             
                if (oObjeto.error == false){
                    toastr.success(oObjeto.resultado);
                }
                else{
                	toastr.error(oObjeto.resultado);
                }
                break;
            case 200: //altaProfesor
            	if (oObjeto.error == false){
		            toastr.success("Profesor registrado correctamente");
		        }
		        else{
		        	toastr.warning("Este Profesor ya existe");  
		        }   
		    case 300: //altaCurso
		    	if (oObjeto.error == false){
		            toastr.success("Curso registrado correctamente");
		        }
		        else{
		          toastr.warning("Este Curso ya existe");  
		        }                                  
        }
    }
}   