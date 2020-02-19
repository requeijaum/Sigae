<html>

<head>
    <title>SiGAÊ - IFBA</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="Pedro Cerqueira Mota, João Costa Neto, Rafael Requião" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
    <link rel="stylesheet" href="../componentes/APIs/hamburgers.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="./css.css">
    <link rel="stylesheet" href="./responsive.css">
    <link rel="stylesheet" href="../componentes/loading.css">
    <link rel="icon" href="../icones/si.png">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
    <script src="https://datuhealth.github.io/floating-label/dist/floatingLabel.js"></script>
    <script src="./javascript.js"></script>
    <script src="../componentes/moduloRender.js"></script>
    <script src="../componentes/popup.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
</head>

<body>
    <div class="divCarregamento">
        <img class="imgCarregamento" src="../icones/loading.svg">
        <div class="noJS">Essa página precisa de Javascript. Ative-o!</div>
    </div>
    <noscript>
        <style type="text/css">
            .textoCarregar {
                display: block;
            }
        </style>
    </noscript>

    <div class="tudo">
        <div class="sistema">
            <header style="height: 100px !important;">
                <div class="navbar-fixed">
                    <nav class="navbar">
                        <div class="navbarEsquerda">
                            <a data-activates="slide-out" class="button-collapse">
                                <div class="hamburger hamburger--collapse js-hamburger">
                                    <div class="hamburger-box">
                                        <div class="hamburger-inner"></div>
                                    </div>
                                </div>
                            </a>
                            <div class="row justify-content-center linhaTituloImg">
                                <a href="./">
                                    <img class="imgTitulo" src="../icones/sigae-min.png" width="155" height="54">
                                </a>
                            </div>
                        </div>
                        <div class="navbarDireita">
                            <h1 class="titulo">Sistema de Gerenciamento de Atendimento ao Estudante</h1>
                        </div>
                    </nav>
                </div>
            </header>
            <main style="flex: 1 0 auto;">
                <ul id="slide-out" class="side-nav fixed">
                    <div class="sideDiv">
                        <div class="divTitulo">
                            <div style="margin-top: 10px;margin-bottom: 10px;" class="row justify-content-center">
                                <img class="materialboxed circle" width="100" height="100" src="../icones/pp.jpg">
                            </div>
                            <h2 class="nome">Pedro Mota</h2>
                            <h2 class="tipo">Aluno(a)</h2>
                            <br>
                        </div>
                        <div class="divLinhas">
                            <div class="linha" id="linha1">
                                <div style="display: table-cell;vertical-align: middle;">
                                    <i style="margin-left: -5px; margin-top: 2px" class="material-icons">home</i>
                                    <span class="textoNode">Início</span>
                                </div>
                            </div>
                            <!-- NODE1 -->
                            <div class="node" id="node1" name="1">
                                <div style="display: table-cell;vertical-align: middle;">
                                    <i style="margin-left: -5px; margin-top: 2px" class="material-icons">perm_contact_calendar</i>
                                    <span class="textoNode">Calendários</span>
                                    <div class="container">
                                        <i id="arrow1" class="material-icons arrow">arrow_drop_up</i>
                                    </div>
                                </div>
                            </div>
                            <div class="conjunto" id="conjunto1">
                                <div class="linha hidden" id="linha2">
                                    <div style="display: table-cell;vertical-align: middle;">
                                        <span class="textoChildren">Calendário completo</span>
                                    </div>
                                </div>
                                <div class="linha hidden" id="linha3">
                                    <div style="display: table-cell;vertical-align: middle;">
                                        <span class="textoChildren">Calendário de minha turma</span>
                                    </div>
                                </div>
                            </div>

                            <!-- NODE 2 -->
                            <div class="node" id="node2" name="2">
                                <div style="display: table-cell;vertical-align: middle;">
                                    <i style="margin-left: -5px; margin-top: 2px" class="material-icons">school</i>
                                    <span class="textoNode">Alunos e professores</span>
                                    <div class="container">
                                        <i id="arrow2" class="material-icons arrow">arrow_drop_up</i>
                                    </div>
                                </div>
                            </div>
                            <div class="conjunto" id="conjunto2">
                                <div class="linha hidden" id="linha4">
                                    <div style="display: table-cell;vertical-align: middle;">
                                        <span class="textoChildren">Minha turma</span>
                                    </div>
                                </div>
                                <div class="linha hidden" id="linha5">
                                    <div style="display: table-cell;vertical-align: middle;">
                                        <span class="textoChildren">Alunos</span>
                                    </div>
                                </div>
                                <div class="linha hidden" id="linha6">
                                    <div style="display: table-cell;vertical-align: middle;">
                                        <span class="textoChildren">Professores</span>
                                    </div>
                                </div>
                            </div>

                            <!-- NODE 3 -->
                            <div class="node" id="node3" name="3">
                                <div style="display: table-cell;vertical-align: middle;">
                                    <i style="margin-left: -5px; margin-top: 2px" class="material-icons">people</i>
                                    <span class="textoNode">Meu usuário</span>
                                    <div class="container">
                                        <i id="arrow3" class="material-icons arrow">arrow_drop_up</i>
                                    </div>
                                </div>
                            </div>
                            <div class="conjunto" id="conjunto3">
                                <div class="linha hidden" id="linha7">
                                    <div style="display: table-cell;vertical-align: middle;">
                                        <span class="textoChildren">Meus atendimentos inscritos</span>
                                    </div>
                                </div>
                                <div class="linha hidden" id="linha8">
                                    <div style="display: table-cell;vertical-align: middle;">
                                        <span class="textoChildren">Alterar meus dados</span>
                                    </div>
                                </div>
                                <div class="linha hidden" id="linha9">
                                    <div style="display: table-cell;vertical-align: middle;">
                                        <span class="textoChildren">Alterar minha senha</span>
                                    </div>
                                </div>
                            </div>
                            <!-- NODE 4 -->
                            <div class="node" id="node4" name="4">
                                <div style="display: table-cell;vertical-align: middle;">
                                    <i style="margin-left: -5px; margin-top: 2px" class="material-icons">settings</i>
                                    <span class="textoNode">Configurações</span>
                                    <div class="container">
                                        <i id="arrow4" class="material-icons arrow">arrow_drop_up</i>
                                    </div>
                                </div>
                            </div>
                            <div class="conjunto" id="conjunto4">
                                <div class="linha hidden" id="linha4">
                                    <div style="display: table-cell;vertical-align: middle;">
                                        <span class="textoChildren">Alterar Configurações</span>
                                    </div>
                                </div>
                                <div class="linha hidden" id="linha5">
                                    <div style="display: table-cell;vertical-align: middle;">
                                        <span class="textoChildren">Sobre do SiGAÊ</span>
                                    </div>
                                </div>
                            </div>

                            <!-- EXIT -->
                            <div class="linha" id="linha1">
                                <div style="display: table-cell;vertical-align: middle;">
                                    <i style="margin-left: -5px; margin-top: 2px" class="material-icons">exit_to_app</i>
                                    <span class="textoNode">Finalizar sessão</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
                <div class="content">
                    <div class="breadcrumbs breadcrumbs-tooltipped" data-position="bottom" data-tooltip="">
                        <i class="small material-icons breadcrumbs-icone">home</i>
                        <h4 class="breadcrumbsTitulo"></h4>
                    </div> 
                    <img class="imgCarregamento" id="carregamentoModulo" src="../icones/spinner.svg">
                </div>
                <div class="content-head"></div>
            </main>
            <footer class="footer">
                <div class="row justify-content-center footerLinha">
                    <h4 class="copyright-titulo">Sistema de Gerenciamento de<br id="brTitulo"> Atendimento ao Estudante</h4>
                </div>
                <div class="row justify-content-center footerLinha">
                    <h4 class="copyright">© 2020 SiGAÊ | Desenvolvimento:
                        <a class="linkFooter" id="linkFooter1" href="https://portal.ifba.edu.br/" target="_blank">Instituto Federal da Bahia</a>
                        <a class="linkFooter" id="linkFooter2" href="https://portal.ifba.edu.br/" target="_blank">IFBA</a></p>
                    </h4>
                </div>
            </footer>
            <script>
                $(".side-nav.fixed").css("display", "block");
                $(".button-collapse").sideNav({
                    onClose: function(el) {
                        $(".hamburger").removeClass('is-active');
                        $(".footer").css('display', "block");
                    }
                });
                init()
                window.onload = function() {
                    setTimeout(function() {
                        $(".divCarregamento").hide()
                        $(".tudo").fadeIn(1200);
                    }, 500);
                }
            </script>
        </div>
    </div>
</body>

</html>