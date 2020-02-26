arrayConsole = []

function abrirConsole() {
    $(".consoleModal").modal("open");
}

function fecharConsole() {
    $(".consoleModal").modal("close");
}

function renderConsole() {
    $(".conteudoConsole").empty()
    for (var i = 0; i < arrayConsole.length; i++) {
        $(".conteudoConsole").append("<div class=\"consoleContent\">" + arrayConsole[i] + "</div>")
    }
}

function erro(texto) {
    var toast = $("<span class=\"toastTexto\">" + texto + "</span>").add($('<button onclick="abrirConsole()" class="btn-flat toast-action">Abrir console</button>'));
    Materialize.toast(toast, 4000);
    var date = new Date();
    var textoFinal = date.getHours() + ":" + date.getMinutes() + "&emsp;&emsp;" + texto;
    arrayConsole.push(textoFinal)
    $(".noAlertas").hide()
}

function limparConsole() {
    $(".conteudoConsole").empty()
    arrayConsole = []
    $(".noAlertas").show()
}