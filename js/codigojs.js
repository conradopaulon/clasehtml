$(document).ready(
    function ()
    {
            $(".fondo").fadeIn(3000);
            $(".logo").bind("click",mostrarOcultarTitulo);
            $("#enlaceTecnologia").bind("click",mostrarTecnologia);
            $("#enlacePEA").bind("click",mostrarPEA);
    }
);

function mostrarOcultarTitulo()
    {
        $("#tituloindex").fadeToggle();
    }
function mostrarTecnologia()
    {
    $("#planes_de_estudio").fadeOut();
    $("#tecnologia").fadeIn(2000);

    }
function mostrarPEA()
    {
    $("#planes_de_estudio").fadeOut();
    $("#PEA").slideDown(1000);
    }