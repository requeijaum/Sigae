function init() {
    $("#login").on("input", function () {
        if ($(this).val().length >= 11) {
            $("#senha").focus();
        }
    });
}

function enviarRecuperacao() {
    $("#sucessoEmail").hide()
    $("#erroEmail").hide()
    $("#waitingEmail").show()
    setTimeout(function () {
        var email = $('#recuperarEmail').val();
        if (email == "pedrocmota1@hotmail.com") {
            $("#sucessoEmail").show()
            $("#erroEmail").hide()
            $("#waitingEmail").hide()
        } else {
            $("#sucessoEmail").hide()
            $("#erroEmail").show()
            $("#waitingEmail").hide()
        }
    }, 1000);
}

function mainEmail() {
    $("#sucessoEmail").hide()
    $("#erroEmail").hide()
    $("#waitingEmail").hide()
}

class Campo {                                   // tá seguindo ECMAScript de qual ano ?
                                                // vamos seguir o ES6 e fim de papo...

    //input; enterClick; enterComponent;        // o construtor se vira... Safari 11.1.2 (2018) reclamou disso

    constructor(input, enterClick, enterComponent) {
        this.input = input;
        this.enterClick = enterClick;
        this.enterComponent = enterComponent;
        var input, enterClick, enterComponent
        $(input).on('keypress', function (e) {
            if (e.which == 13) {
                event.preventDefault();
                if (enterClick == "focus") {
                    $(enterComponent).focus();
                }
                if (enterClick == "click") {
                    $(enterComponent).focus();
                    $(enterComponent).click();
                }
            }
        });
    }

    img(img) {
        var input = this.input
        $(input).focus(function () {
            $(input).css("background-image", "url(./icones/" + img + ".png)");
        });
        $(input).focusout(function () {
            $(input).css("background-image", "url(./icones/" + img + "-disable.png)");
        });
    }
}