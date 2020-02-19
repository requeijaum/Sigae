class Modulo {

    name; titulo; icone; file; css; js; scroll;
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

    setParent(id) {
        moduloInvoker(this, id)
    }

    render(auto) {
        closeSide()
        var js = this.js, titulo = this.titulo, time = 0;
        $("modulo").remove();
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
            $("modulo").remove();
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
    }
}

function moduloInvoker(obj, id) {
    $(id).click(function () {
        obj.render(false)
    });
    $(".linha").each(function() {
        $(this.id).css("color", "rgb(255, 255, 255)")
    });
    $(id).css("color", "rgb(41, 170, 149)")
    
}

function closeSide() {
    $('.button-collapse').sideNav('hide');
}