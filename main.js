$( document ).ready(function() {

    //agganciamo al click sul bottone la funzione di callback
    $(".sendmsg").click(function(){

    //ci salviamo il valore dell'input inserito dall'utente
    var messaggio = $(".message").val();
    // console.log(messaggio);
    
    // cloniamo il div con classe "msgsent" che sta dentro un div con ID "template"
    var elmentmsg = $("#template .msgsent").clone();
    console.log(elmentmsg);

    var autoAnswer = $("#template .bot").clone();

    // trova qualcosa che ha classe testo e scrivici dentro il messaggio
    //modifica questa copia di "msgsent" aggiungendogli il testo del messaggio
    elmentmsg.find(".testo").text(messaggio);
    
    autoAnswer.find(".testo-automatico").text("Hello");
    // $(".chat").find("p").text("Hello world!")

    // appendiamo una copia con testo valorizzato del div "msgsent"
    $(".chat").append(elmentmsg);

    $(".chat").append(autoAnswer);
    // ripuliamo il contenuto dell'input, per UX
    $(".message").val("");


    });


});


//sulla stessa funzione di callback (uso sempre il clone per l'elemento bianco di sx)
//appendere messaggio bianco sul messaggio verde nella stessa funzione di prima (usa setTimeout)



// l'evento non sarà click, ma quando io premo qualcosa a tastiera in più mentre scrivo devo filtrare ogni singolo carattere
// devo legare l'evento all'input della ricerca con il metodo della tastiera

// check solo sul nome contatto
// sull'evento di tastiera, devo confrontare l'input con ogni singolo blocco nome utente (se dà true inserisco in pagina i nomi matchati, altrimenti niente)

// eventi di tastiera
//come legare eventi tastiera al blocco
//come ciclare gli oggetti (ciclo di ogni singolo contatto) di jquery (each) per fare check (rivedi ex passati)
//per ogni blocco ocntatto fare check se il valore dell'utente come stringa è compreso nelle stringhe che ho già (usa includes in versione stringhe)

//ondeviceorientationabsoluteper ogni dei blocchi contatti fare un check 
