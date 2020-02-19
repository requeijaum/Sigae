function init() {
    menu()
    modulos()
}

function menu() {
    $(document).ready(function () {
        $('.hamburger').click(function () {
            $(this).toggleClass('is-active');
        });
    });
    $("#node1, #node2, #node3, #node4").on('click', function (e) {
        var numero = e.currentTarget.getAttribute("name");
        var elemento = "conjunto" + e.currentTarget.getAttribute("name");
        if ($("#" + elemento).is(":hidden")) {
            $("#node" + numero).css("color", "rgb(127, 148, 197)");
            $("#node" + numero).css("background-color", "rgb(50, 50, 61)");
            $("#arrow" + numero).css("transform", "rotateZ(180deg)");
            $("#" + elemento).show(100);
        } else {
            $("#node" + numero).css("color", "white");
            $("#node" + numero).css("background-color", "rgb(59, 59, 75)");
            $("#arrow" + numero).css("transform", "rotateZ(90deg)");
            $("#" + elemento).hide(100);
        }
    });

}

function modulos() {
    inicio = new Modulo("inicio", "Início", "home", "../modulos/inicio")
    inicio.setCss(true)
    inicio.setAuto(true)
    inicio.setParent("#linha1")
    //moduloInvoker(inicio, "#linha1")
}

function setNode(numero) {
    $("#node" + numero).css("color", "rgb(127, 148, 197)");
    $("#node" + numero).css("background-color", "rgb(50, 50, 61)");
    $("#arrow" + numero).css("transform", "rotateZ(180deg)");
    $("#conjunto" + numero).show(100);
}