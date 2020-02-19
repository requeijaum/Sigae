function init_esqueciSenha() {
    floatingLabel.evaluateInputs();
    email = new Campo("#recuperarEmail", "click", "#botaoEnviarRecuperacao")
    email.img("email")
    $("#recuperarEmail").prop("disabled", false)
}