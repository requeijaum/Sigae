var versao = "Dev 1.0.5.1"

function definirVersao() {
    $(".versao").text(versao)
}

function sobreSigae() {
    sobre = new Popup("sobre", "../modulos/sobre", "Sobre o SiGAÊ", "500px", "560px");
    sobre.setCss(true)
    sobre.setJS(true)
    sobre.setScroll(true)
    sobre.invoker()
    sobre.show()
}