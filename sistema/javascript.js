function init() {
    initMaterialize()
    sideMenus()
    definirVersao()
}

function initMaterialize() {
    $(".side-nav.fixed").css("display", "block");
    $(".button-collapse").sideNav({
        onClose: function () {
            $(".hamburger").removeClass('is-active');
            $(".footer").css('display', "block");
        },
        draggable: false
    });
    $(document).ready(function () {
        $('.hamburger').click(function () {
            $(this).toggleClass('is-active');
        });
        $('.consoleModal').modal({
            ready: function () { renderConsole() },
            complete: function () { selectAtual() }
        });
    });
    sobre = new Popup("sobre", "../modulos/sobre", "Sobre o SiGAÊ", "500px", "560px");
    sobre.setCss(true)
    sobre.setJS(true)
    sobre.setScroll(true)
    sobre.invoker()
}