var arrayModulos = []

class Modulo {

    id; pasta; titulo; css; js; linha;
    
    constructor(id, pasta, titulo, css, js, linha) {
        this.id = id;
        this.pasta = pasta;
        this.titulo = titulo;
        this.css = css;
        this.js = js;
        this.linha = linha;
        arrayModulos.push(this)
    }

    invoker() {
        $("modulo").empty();
        $(".content-head").empty()
        $(".breadcrumbs").hide();
        $("#carregamentoModulo").show();
        closeSide()

        var html, id = this.id, js = this.js, titulo = this.titulo;
        $.ajax({
            url: this.pasta + "/index.html",
            type: 'get',
            dataType: 'html',
            async: false,
            success: function (data) {
                html = data;
            }
        });

        if (this.css == true) {
            $(".content-head").append("<link rel=\"stylesheet\" href=\" " + this.pasta + "/css.css\">");
        }
        if (this.js == true) {
            $(".content-head").append("<script src=\" " + this.pasta + "/javascript.js\"></script>");
        }

        setTimeout(function () {
            $("modulo").empty();
            $("#carregamentoModulo").hide();
            $(".breadcrumbs").show();
            $(".breadcrumbsTitulo").text(titulo)
            $(".breadcrumbs").attr("data-tooltip", titulo);
            $(".breadcrumbs-tooltipped").tooltip();
            $(".content").append(html)
            if (js == true) {
                window["init_" + id]()
            }
        }, 500);
    }
}