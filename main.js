$(document).ready(function () {

    //agganciamo al click sul bottone la funzione di callback
    $(".sendmsg").click(function () {

        //ci salviamo il valore dell'input inserito dall'utente
        var messaggio = $(".message").val();
        // console.log(messaggio);

        // cloniamo il div con classe "msgsent" e "autoAnswer" che sta dentro un div con ID "template"
        var elmentmsg = $("#template .msgsent").clone();
        // console.log(elmentmsg);

        var autoAnswer = $("#template .bot").clone();

        //modifica questa copia di "msgsent" trovando qualcosa che ha classe testo e scrivici dentro il messaggio
        elmentmsg.find(".testo").text(messaggio);
        //modifica questa copia di "msgsent" trovando qualcosa che ha classe testo-automatico e scrivici dentro una stringa di testo
        autoAnswer.find(".testo-automatico").text("Hello");

        //appendiamo una copia con testo valorizzato del div "msgsent"
        $(".chat").append(elmentmsg);

        //appendiamo una copia con testo valorizzato del div "autoAnswer" tramite funzione di setTimeout
        setTimeout(oneSecond, 1000);

        function oneSecond() {
            $(".chat").append(autoAnswer);
        }

        // ripuliamo il contenuto dell'input, per UX
        $(".message").val("");

    });


    $(".search").keyup(function () {

        var key = $(this).val().toLowerCase();

        $(".user-list .username").each(function (i, item) {
            // leggo testo dentro elemento con html
            var userName = $(item).html().toLowerCase();

            //ricordati che  includes torna sempre true se key ==""
            if (!userName.includes(key)) {
                $(item).parent().parent().hide();
            } else {
                $(item).parent().parent().show();
            }
        });


    });
    //al click sul blocco contatto
    $(".block").click(function () {

    //attribuisco al blocco cliccato l'attributo data-ref e lo salvo in una variabile
    var clickedBlock = $(this).attr("data-ref");
        console.log(clickedBlock);
        
    //seleziono il blocco che ha già la classe active di default e gliela tolgo
    $(".user-list div.active").removeClass("active");

    //seleziono la chat che ha già la classe active di default e gliela tolgo
    $(".right-section div.active").removeClass("active");
    
    //attribuisco la classe active al blocco che ho cliccato
    $(this).addClass("active");
    
    //seleziono la chat e le attribuisco la classe active

    $(".right-section div[data-ref=" + clickedBlock +"]").addClass("active");

    });

});
//click sul contatto (come i pallini del carousel): usa data attribute -- a questo blocco qui corrispodnde questa chat qui e
//per spostare l'header posso recuperare le info del blocco che ho cliccato e mettere nell'header della chat

//cancella mex: (ex live della to do list) uso poi la tecnica di bubbling