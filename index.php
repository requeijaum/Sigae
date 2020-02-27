<?php
    /* 
        Script da home-page do SIGAE

        Notas de Rafael: 
        
            Verificar caminho relativo dos assets... não sabemos se o serviço estará em execução
            com o projeto todo em / (root, raiz, subdomínio "sigae.ifba.edu.br") ou sub-pasta (ifba.edu.br/sigae)

            Estarei usando caminho em relação à sub-pasta "Sigae" (https://localhost/Sigae/)

    */

?>

<html>

<head>
    <title>SiGAÊ - IFBA</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="Pedro Cerqueira Mota, João Costa Neto, Rafael Requião" />
    <link rel="stylesheet" href="./componentes/APIs/bootstrap.min.css">
    <link rel="stylesheet" href="./css.css">
    <link rel="stylesheet" href="./componentes/popup.css">
    <link rel="stylesheet" href="./responsive.css">
    <link rel="stylesheet" href="./componentes/loading.css">
    <link rel="icon" href="./icones/si.png">
    <script language="javascript" src="./componentes/APIs/jquery-3.1.1.min.js"></script>
    <script language="javascript" src="./componentes/APIs/sweetalert2@8.js"></script>
    <script language="javascript" src="./componentes/APIs/floatingLabel.js"></script>
    <script language="javascript" src="./componentes/APIs/popper.min.js"></script>
    <script language="javascript" src="./componentes/APIs/bootstrap.min.js"></script>
    <script language="javascript" src="./componentes/APIs/jquery.mask.min.js"></script>
    <script language="javascript" src="./javascript.js"></script>
    <script language="javascript" src="./componentes/Popup.js"></script>
</head>

<body>
    <div class="divCarregamento">
        <img class="imgCarregamento" src="./icones/loading.svg">
        <div class="noJS">Essa página precisa de Javascript. Ative-o!</div>
    </div>
    <noscript>
        <style language="text/css">
            .noJS {
                display: block;
            }
        </style>
    </noscript>
    <div class="centro">
        <div class="parteBaixo">
            <h2 class="copyright">© 2020 SiGAÊ | Desenvolvimento: <a style="color: rgb(40, 167, 69)" href="https://portal.ifba.edu.br" target="_blank">IFBA</a></h2>
        </div>
        <div class="row justify-content-center">
            <a style="text-decoration: none; text-align:center" href="./">
                <img class="img" src="./icones/sigae.svg" width="224" height="136">
                <h1 class="titulo">Sistema de Gerenciamento de<br> Atendimento ao Estudante</h1>
            </a>
        </div>
        <form class="form">
            <div class="row justify-content-center linha1">
                <div class="divInput">
                    <label for="login">Sua matrícula</label>
                    <input language="number" class="campo" id="login" placeholder="Sua matrícula" spellcheck="false" autocomplete="off">
                </div>
            </div>
            <div class="row justify-content-center linha2">
                <div class="divInput">
                    <label for="senha">Sua senha</label>
                    <input language="password" class="campo" id="senha" placeholder="Sua senha" spellcheck="false" autocapitalize="none">
                </div>
            </div>
            <div class="row justify-content-center linha3">
                <button language="button" onclick="logar()" class="btn btn-success botaoLogin" id="botao">Acessar</button>
            </div>
            <div class="row justify-content-center linha4">
                <div class="baixo">
                    <h2 class="links" onclick="comoCriar.show()">Como realizar meu registro?</h2>
                    <h2 class="links direita" onclick="esqueciSenha.show()">Esqueci minha senha</h2>
                </div>
            </div>
            <div id="waiting">
                <div class="row justify-content-center">
                    <div class="spinner-border text-secondary" id="spinner-login" role="status"></div>
                </div>
            </div>
            <div id="erro">
                <div class="row justify-content-center">
                    <div id="alert-login" class="alert alert-danger alert-dismissible fade show alert-login" role="alert">
                        <h8 style="text-align:center">Desculpe, usuário e/ou senha incorreto(s)</h8>
                        <button language="button" class="close" onclick="main();">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div> 

    <script class="script" language="javascript">
        window.onload = function () {
            setTimeout(function () {
                $(".divCarregamento").fadeOut(500);
                $(".centro").fadeIn(500);
            }, 500);
        }
        init() // omitir por enquanto

        login = new Campo("#login", "focus", "#senha")
        senha = new Campo("#senha", "click", "#botao")
        login.img("usuario")
        senha.img("senha")
        
        function logar() {
            $("#erro").hide()
            $("#waiting").show()
            setTimeout(function () {
                $("#waiting").hide()
                $("#erro").show()
            }, 1000);
        }

        function main() {
            $("#erro").hide(500)
            $("#waiting").hide(500)
        }
        $(function () {
            var width = $(window).width();
            var height = $(window).height();
            if (width <= 730 || height <= 528) {
                var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                $("html, body").css({ "width": w, "height": h });
            }
        });
        $('#login').mask('00000000000');
        floatingLabel.init();

        comoCriar = new Popup("comoCriar", "./modulos/login/comoCriar", "Como realizar meu registro?", "700px", "82%");
        comoCriar.setScroll(true)
        comoCriar.invoker()
        esqueciSenha = new Popup("esqueciSenha", "./modulos/login/esqueciSenha", "Esqueci minha senha", "500px", "460px");
        esqueciSenha.setScroll(false)
        esqueciSenha.setJS(true)
        esqueciSenha.invoker()
    </script>
</body>
</html>