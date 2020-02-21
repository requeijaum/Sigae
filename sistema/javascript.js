function init() {
    //menu()
    modulos()
}

function menu() {
    $(document).ready(function () {
        $('.hamburger').click(function () {
            $(this).toggleClass('is-active');
        });
    });

}

/*function modulos() {
    inicio = new Modulo("inicio", "Início", "home", "../modulos/inicio")
    inicio.setCss(true)
    inicio.setParent(null, "#linha1")
    inicio.setAuto(true)
    
    calendarioCompleto = new Modulo("calendarioCompleto", "Calendário completo", "perm_contact_calendar", "../modulos/calendario")
    calendarioCompleto.setParent("#node1", "#linha2")
}*/

function setNode(numero) {
    $("#node" + numero).css("color", "rgb(127, 148, 197)");
    $("#node" + numero).css("background-color", "rgb(50, 50, 61)");
    $("#arrow" + numero).css("transform", "rotateZ(180deg)");
    $("#conjunto" + numero).show(100);
}