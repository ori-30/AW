$(inicializar);
function inicializar() { 
    $.ajax({
        type: "get",
        url: "/api/datos",
        data: "",
        dataType: "",
        success: function (response) {
            var datos = response.Agenda;
            for (let index = 0; index < datos.length; index++) {
                var linea = datos[index]
                $("#tabla").append("<tr><td>" + linea.nombre + "</td><td>" + linea.telefono + "</td></tr>")
            }
        }
    });
}

function logOut(){
    $.ajax({
        type: "get",
        url: "/api/cerrarsesion",
        data: "",
        dataType: "",
        success: function (response) {
            $(location).prop('href', '/')
        },
        error: function (jqXHR, textStatus, errorThrown){
            alert("Se ha producido un error al cerrar sesión: \n" + errorThrown)
        }
    });
}

$("#cerrarSesion").on('click', logOut)