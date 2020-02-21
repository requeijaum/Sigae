class Modulo {

    name; titulo; icone; file; css; js; scroll; node; linha;
    constructor(name, titulo, icone, file) {
        this.name = name;
        this.file = file;
        this.titulo = titulo;
        this.icone = icone;
    }

    setAuto() {
        this.render(true)
    }

    setCss(boolean) {
        this.css = boolean;
    }

    setJS(boolean) {
        this.js = boolean;
    }

    setScroll(boolean) {
        this.scroll = boolean;
    }

    setParent(node, linha) {
        this.node = node;
        this.linha = linha;
        moduloInvoker(this, linha)
    }

    render(auto) {
        closeSide()
        var js = this.js, titulo = this.titulo, time = 0;
        $("modulo").empty();
        $(".content-head").empty()
        $(".breadcrumbs").hide();

        if (auto == false) {
            $("#carregamentoModulo").show();
            time = 700;
        }
        var html;

        $.ajax({
            url: this.file + "/index.html",
            type: 'get',
            dataType: 'html',
            async: false,
            success: function (data) {
                html = data;
            }
        });

        if (this.css == true) {
            $(".content-head").append("<link rel=\"stylesheet\" href=\" " + this.file + "/css.css\">");
        }
        if (this.js == true) {
            $(".content-head").append("<script src=\" " + this.file + "/javascript.js\"></script>");
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
                window["init_" + name]()
            }
        }, time);

        setNodeSelect(this.node, this.linha)
        
    }
}

function moduloInvoker(obj, linha) {
    $(linha).click(function () {
        obj.render(false)
    });
}