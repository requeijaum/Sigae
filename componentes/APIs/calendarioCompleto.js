// código bobo e básico

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    console.log(calendarEl);
    

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'pt-br',
        firstDay: 1,
        header: {
            left: 'prev,next today custom1',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek'
        },
        /*
        customButtons: {
            custom1: {
                text: 'Hub',
                click: function() {
                    window.location.href='../hub.php';                
                }
            }
        },
        */
        plugins: [ 'dayGrid', 'timeGrid', 'bootstrap', 'list' ],
        editable: false,
        // configurar event-sources de acordo com os tipos de evento !
        // afi.agenda possui data e hora de final de evento - afi.negociacoes não deve guardar data e hora de final de evento !
        eventSources: [
            {
                // shows
                url:            "fetch-events.php?tipo=0",
                color:          "lightgreen",
                //backgroundColor:color,
                textColor:      "black",
                failure:        function(){
                    displayError("Erro ao obter datas de shows!");
                }
            },
            {
                // ensaios
                url:            "fetch-events.php?tipo=1",
                color:          "pink",
                //backgroundColor:color,
                textColor:      "black",
                failure:        function(){
                    displayError("Erro ao obter datas de ensaios!");
                }
            },
            {
                // reuniões
                url:            "fetch-events.php?tipo=2",
                color:          "lightblue",
                //backgroundColor:color,
                textColor:      "black",
                failure:        function(){
                    displayError("Erro ao obter datas de reuniões!");
                }
            },
            {
                // indisponibilidades
                url:            "fetch-events.php?tipo=3",
                color:          "red",
                //backgroundColor:color,
                textColor:      "white",
                failure:        function(){
                    displayError("Erro ao obter datas de indispobilidades!");
                }
            },
            {
                // sociais
                url:            "fetch-events.php?tipo=4",
                color:          "lightgray",
                //backgroundColor:color,
                textColor:      "black",
                failure:        function(){
                    displayError("Erro ao obter datas de sociais!");
                }
            },
            {
                // negociacoes
                url:            "fetch-events.php?tipo=10",
                //color:          "yellow",     // comentei pra usar a propriedade de cor provinda do das condicionais em fetch-events.php:126
                //backgroundColor:color,
                textColor:      "black",
                failure:        function(){
                    displayError("Erro ao obter datas de negociações!");
                }
            }
    
    
    
        ],
        displayEventTime: false,
        eventRender: function (event, element, view) {
            if (event.allDay === 'true') {
                event.allDay = true;
            } else {
                event.allDay = false;
            }
        },
        eventClick: function(info) {
    
            // prevenir navegar até info.event.url
            info.jsEvent.preventDefault(); // don't let the browser navigate
            
            displayMessage("Evento: "+info.event.title+"<br/>"+"Início: "+info.event.start+"<br/>"+"Fim: "+info.event.end+"<br/>"+"Grupo: <a id='event_groupId' >"+info.event.groupId+"</a> ", info.event.backgroundColor);
    
            //console.log($("#event_groupId").html());
            traduzirGroupId();
    
            if (info.event.url) {
                //window.open(info.event.url);
                
                if(confirm("Ir para a página do evento/negociação?")){
                    window.open(info.event.url);
                }
            }
    
            console.log('Event: ' + info.event.title);
            console.log('Start: ' + info.event.start);
            console.log('End: ' + info.event.end);
            console.log('Group ID: ' + info.event.groupId);
            // precisaria de um End - para isso: usarei a tabela afi.eventos
            //console.log('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            //console.log('View: ' + info.view.type);
    
            //testar cores?
            console.log('color: ' + info.event.color);
            console.log('textColor: ' + info.event.textColor);
            console.log('backgroundColor: ' + info.event.backgroundColor);
            
            // change the border color just for fun
            info.el.style.borderColor = 'red';
    
            
        }
        
    });
    
    calendar.render();
    });
    
    function displayMessage(message, color) {
        $('.response').fadeIn();  // bugfix para onclick="$(this).fadeout();"
    
        $(".response").html("<div class='success'>"+message+"</div>");
        
        // mexer no CSS - cada evento precisa ter uma cor (.backgroundColor) no eventObject!
        //if(color != "")   { $(".success").css('background-color', color); $(".success").css('background', 'color');            }
        //else              { $(".success").css('background-color', '#ffffff'); $(".success").css('background', 'color'); }             
        
        // ficar no branco, por enquanto
        $(".success").css('background-color', '#ffffff'); $(".success").css('background', 'color');
    
        //$(".response").css('color', textColor);   // acho que não funciona
        
        
        console.log(message,color);
        //setInterval(function() { $(".success").fadeOut(); }, 10000);
    }
    
    function displayError(message) {
        $(".response").html("<div class='failure'>"+message+"</div>");
        //setInterval(function() { $(".failure").fadeOut(); }, 10000);
    }
    
    // eu deveria meter um reload a cada minuto?
    /*
    setInterval(function() { 
        window.reload(); 
    }, 60000);
    */
    
    function traduzirGroupId(){
        var id = $("#event_groupId").html();
        var trans = [
            "Show", "Ensaio", "Reunião", "Indisponibilidade", "Social", 
            "Desconhecido", "Desconhecido", "Desconhecido", "Desconhecido", "Desconhecido", 
            "Negociação"
        ];
        $("#event_groupId").html(trans[id]);
        // traduzido por posição - ver fetch-events.php:30
    }
    
    // eu poderia ter uma função que traduz status de negociações e eventos?
    
    // eu vou implementar o click pra fadeOut... sem setInterval
    
    