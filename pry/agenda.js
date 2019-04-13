
$(document).ready(function () { //jqread
    $("#btnRegistrar").click(function (e) { //jclick 
        e.preventDefault();
        registrar(); //ejecutamos la funcion registrar
    });

    $("body").on("click","opcion-eliminar",function (e) { //jclick
        e.preventDefault();
        var fila =$(this).parents().get(1);
        fila.remove();

    });
});

function registrar(){
    var nombre= $("#txtNombre").val(); //jval
    var apellidos = $("#txtApellidos").val();
    var correo = $("#txtCorreo").val();
    var fecha = $("#txtFecha").val();
    var pais = $("#txtPais").val();
    var sexo= $("input:radio[name=rbsexo]:checked").val();

        // creacion de fila
        var fila="";
        fila+="<tr>";
        fila+="<td>"+nombre+"</td>";
        fila+="<td>"+apellidos+"</td>";
        fila+="<td>"+correo+"</td>";
        fila+="<td>"+fecha+"</td>";
        fila+="<td>"+pais+"</td>";
        fila+="<td>"+sexo+"</td>";
        fila+=`<td><button class="btn btn-danger btn-sm opcion-eliminar">X</button></td>`;
        fila+="</tr>";

        //agregar fila a tbody
            //debemos agregar un id para saber a que no referimos 
        $("#tbldatos").append(fila);//jap primera opcion

console.log("Nombre: "+nombre);
console.log("Apellidos: "+apellidos);
console.log("Correo: "+correo);
console.log("Fecha: "+fecha);
console.log("Pais: "+pais);
console.log("Sexo: "+sexo);


}