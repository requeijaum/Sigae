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
}