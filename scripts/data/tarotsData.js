// Per chi volesse approfondire come sono stati generate le seguenti immagini
// link al mio referall su Replicate, piattaforma che permette di utilizzare
// modelli di intelligenza artificiale per generare immagini, video, audio e testo.
// https://replicate.com/invites/cabeef3f-0065-4afc-8a21-b063cc86ba26
//
// In modello è stato scelto per la caratteristica di generare immagini con uno stile anime cupo 
// Il modello che ho utilizzato in questo caso è Flux Dev (https://replicate.com/black-forest-labs/flux-dev)

const tarots = [
    {
        number: 0,
        type: "Arcano Maggiore",
        name: "il Matto",
        img: "imgs/tarots/00_the_fool.png",
        description:
            "La carta senza numero. L'innocenza e la sincerità del Matto aprono di fronte a lui infinite possibilità. Nessun pericolo sembra spaventarlo, perché è lo spirito che lo guida. Puoi essere spontaneo e lasciarti andare, per ricominciare tutto da capo. Non c'è spazio per i dubbi in questa impresa, buttati e abbi fiducia nel tuo nuovo percorso."
    },
    {
        number: 1,
        type: "Arcano Maggiore",
        name: "Il Mago",
        img: "imgs/tarots/01_the_magician.png",
        description:
            "E' la prima carta del gioco e suggerisce un'inizio. Il principio di una nuova impresa, un'opportunità da cogliere che può segnare una svolta. Gli strumenti sono a disposizione sulla tavola del Mago, e ciò che lo guida è l'intelligenza nell'utilizzarli, secondo la sua voltà e la sua ragione. Non lasciare al caso il tuo destino, usa gli strumenti a tua disposizione: sono nelle tue mani. Dai una direzione alla tua vita."
    },
    {
        number: 2,
        type: "Arcano Maggiore",
        name: "La Papessa",
        img: "imgs/tarots/02_the_high_priestess.png",
        description:
            "Il potere della Papessa è fatto di luce e acqua, di intuizione e conoscenza occulta. Ai suoi occhi le cose nascoste si rivelano, perché il suo sguardo non è superficiale, ma si rivolge in profondità, alla psiche. Calma e pura come l'acqua, sa aspettare il momento giusto per agire. E' il momento di osservare gli eventi della tua vita: cosa ti ha portato a questo? Segui le tue intuizioni più profonde, e saprai vedere oltre le apparenze"
    },
    {
        number: 3,
        type: "Arcano Maggiore",
        name: "L'Imperatrice",
        img: "imgs/tarots/03_the_empress.png",
        description:
            "L'imperatrice è una donna forte e consapevole del suo potere, con cui può creare e guarire. Madre che dona la vita e la difende, donna che ama e riscalda. Il tuo progetto creativo è stimolato e protetto dalla sua energia. Cogli l'opportunità e lascia fluire la tua creatività. senza limitazioni. Metti l'amore in tutto ciò che fai."
    },
    {
        number: 4,
        type: "Arcano Maggiore",
        name: "L'imperatore",
        img: "imgs/tarots/04_the_emperor.png",
        description:
            "L'imperatore è il potere su questa Terra, sul mondo materiale. Puoi conquistarlo grazie all'esperienza maturata, alla conoscenza e al dominio di sé. Il suo carisma è smisurato. Usa questo potere per guidare gli altri e autodisciplinarti. In questo momento puoi rafforzare e consolidare i tuoi progetti usando metodo, organizzazione e forza di volontà. Abbi fiducia in te stesso."
    },
    {
        number: 5,
        type: "Arcano Maggiore",
        name: "Il Papa",
        img: "imgs/tarots/05_the_hierophant.png",
        description:
            "Il potere del Papa è spirituale, ma non esoterico: è il potere della tradizionee della morale. La sua conoscenza si è formata nel tempo, e ora è una guida che può proteggere, trasmettere la sua saggezza e illuminare. I suoi discepoli lo circondano per apprendere, Agisci in linea con questa morale, consiglia chi si rivolge a te, e segui a tua volta i consigli del più saggio. Non è il momento per ribellarsi; rispetta la gerarchia e i valori della tua morale"
    },
    {
        number: 6,
        type: "Arcano Maggiore",
        name: "Gli Amanti",
        img: "imgs/tarots/06_the_lovers.png",
        description:
            "L'amore si manifesta verso altre persone, ma anche verso un'idea, un progetto o un obiettivo. Ma in qualsiasi forma al cospetto dell'amore dobbiamo essere nudi. Sinceri e autentici. Di fronte al vero amore, dobbiamo essere noi stessi. E' importante non cedere alla paura di mostrarsi, solo così l'amore di eleverà. Soltanto attraverso questa coraggiosa scelta di essere veri, si ha la possibilità dell'unione. Perciò lasciati guidare dalla spinta che senti. Se devi scegliere tra l'amore e il dovere, segui con convinzione l'amore"
    },
    {
        number: 7,
        type: "Arcano Maggiore",
        name: "Il Carro",
        img: "imgs/tarots/07_the_chariot.png",
        description:
            "Il percorso dell'autodisciplina e dell'impegno costante può essere faticoso, ma questo sforzo può portare alla vittoria. Bisogna prendere in mano le redini della situazione, imbrigliare i problemi e dare un colpo decisivo, una direzione. La determinazione è fondamentale. Questo è assolutamente il tempo di agire verso i tuoi obiettivi senza esitare, concentrati e evita le tentazioni"
    },
    {
        number: 8,
        type: "Arcano Maggiore",
        name: "La Giustizia",
        img: "imgs/tarots/08_justice.png",
        description:
            "La Giustizia ci mette di fronte alle conseguenze delle nostre azioni, di qualsiasi natura esse siano. Il rigore e la fermezza del giudizio sono rappresentati dalla sua spada. Ma se siamo in pace con le nostre azioni non dobbiamo temere la sua lama: la bilancia ci porta conforto. Definisci i valori su cui vuoi basare la tua vita, senza lasciarti trascinare dagli impulsi in questa scelta"
    },
    {
        number: 9,
        type: "Arcano Maggiore",
        name: "L'Eremita",
        img: "imgs/tarots/09_the_hermit.png",
        description:
            "Attraverso lo studio e la riflessione, l'Eremita ha raggiunto la saggezza. Nella sua vita semplice e solitaria non c'è bisogno di alcun bene materiale, perché lui possiede l'essenziale. E in sé, un'infinta ricchezza di spirito che lo rende una guida preziosa per chi è pronto ad ascoltare. Muoviti lentamente e con prudenza, è necessario analizzare la situazione prima di agire. Raccogli le energie e isolati per ascoltarti e ritrovarti. Non hai bisogno di altro che dell'essenziale."
    },
    {
        number: 10,
        type: "Arcano Maggiore",
        name: "La Ruota della Fortuna",
        img: "imgs/tarots/10_wheel_of_fortune.png",
        description:
            "Ciò che influisce sulla propria vita a volte è fuori dal nostro controllo, nelle mani del destino. La Ruota dell Fortuna simboleggia l'infinito alternarsi degli eventi. Nulla è eterno e immutabile, né il bello né il brutto, e oltre la realtà si muovono delle forze spirituali che si manifestano nei momenti più importanti della vita. Non possiamo che accettare con fiducia il perenne mutamento comisco. La tua situazione è il frammento di un'immenso disegno."
    },
    {
        number: 11,
        type: "Arcano Maggiore",
        name: "La Forza",
        img: "imgs/tarots/11_strength.png",
        description:
            "La Forza bruta e la Forza spirituale sono in eterno conflitto: quella spirituale è la più potente. Con autocontrollo e pazienza, domina la sua parte più animalesca. Non è una forza aggressiva, ma una forza d'animo con cui possiamo tenere sotto controllo la nostra parte più feroce. Resisti, anche se è difficile. Puoi vincere con la forza del tuo spirito, mettendo un freno alla vendetta e domando paura e aggressvità."
    },
    {
        number: 12,
        type: "Arcano Maggiore",
        name: "L'Appeso",
        img: "imgs/tarots/12_the_hanged_man.png",
        description:
            "L'Appeso uscirà trasformato dal processo di sacrifico e dolore. Il suo corpo immobilizzato non può che subire ogni esperienza proveniente dall'esterno. Ma il rinnovamento giungerà dall'accettazione; anche se il corpo è bloccato, non lo è il suo spirito, che può ancora lavorare. Guardati dentro e rinnovati, non intraprendere un nuovo progetto ma preparati a farlo. Capovolgi la tua prospettiva sul mondo, lavorando dentro di te."
    },
    {
        number: 13,
        type: "Arcano Maggiore",
        name: "La Morte",
        img: "imgs/tarots/13_death.png",
        description:
            "La Morte segna la fine di un percorso. In questo momento non si costruisce, ma si distrugge. Un cambiamento è necessario e inevitabile. Che lo si voglia o no, l'energia distruttiva della Morta si è innescata. Devi essere pronto al liberarti dell'inutile e andare incontro a un'eventuale rinascita ripulito da ogni scoria del passato. E' ora di chiudere definitivamente tutto ciò che si sta trascinando da tempo, forse te ne sei già accorto. E ricorda, ogni fine porta con sé un nuovo inizio."
    },
    {
        number: 14,
        type: "Arcano Maggiore",
        name: "La Temperanza",
        img: "imgs/tarots/14_temperance.png",
        description:
            "Dopo la distruzione la Temperanza arriva a portare un nuovo equilibrio. Con moderazione e prudenza, si trova l'armonia. Il giusto approccio non è la forza, ma la dolcezza. Questo travaso è un'opportunità per riconciliare le forze in opposizione. Hai la possibilità di poter unire sinergicamente persone, situazioni... Riporta la pace."
    },
    {
        number: 15,
        type: "Arcano Maggiore",
        name: "Il Diavolo",
        img: "imgs/tarots/15_the_devil.png",
        description:
            "Il Diavolo rappresenta la nostra prigionia, le catene che ci riducono in schiavitù. Il nemico si manifesta nella nostra vita sotto varie forme. A volte, è annidato dentro di noi. Alimenta le nostre paure e i nostri dubbi, e ci vincola. La possibilità di fuggire c'è, ma spetta a noi stessi capire come. Accetta ogni lato di te, anche quello più oscuro. Devi comprendere la natura della tua prigionia, se vuoi uscirne. Osserva come la dipendenza emotiva porta dolore sia detro che fuori. Riconosci il tuo lato demoniaco se vuoi riuscire a trascenderlo."
    },
    {
        number: 16,
        type: "Arcano Maggiore",
        name: "La Torre",
        img: "imgs/tarots/16_the_tower.png",
        description:
            "Lo stile di vita a cui eravamo abituati può crollare improvvisamente. Le nostre difese erano più fragili del previsto, il cambiamento è repentino. La prova a cui ci sottopone questo crollo è accettare e adattarsi al cambiamento senza venirne travolti. Non fuggire dalla realtà, tutto ciò che non ha fondamenta solide va distrutto e ricostruito. Non farti trovare nella Torre al momento del crollo. Se ti aggrappi al passato, ne resterai ucciso."
    },
    {
        number: 17,
        type: "Arcano Maggiore",
        name: "La Stella",
        img: "imgs/tarots/17_the_star.png",
        description:
            "La Stella illumina il nostro cammino con la sua luce benefica, che ci porta grandi visioni. Questo è un buon momento per sognare. Il nostro pensiero può estendersi senza limiti come il Cosmo, mentre l'acqua in cui ci immergiamo ci purifica. Possiamo rilassarci, l'universo è dalla nostra parte. Scegli di seguire la Stella, l'opzione che ti porta la massima serenità, e lascia da parte ogni cosa che ti crea preoccupazioni o ansie. Non accontentarti."
    },
    {
        number: 18,
        type: "Arcano Maggiore",
        name: "La Luna",
        img: "imgs/tarots/18_the_moon.png",
        description:
            "La magia e l'illusione della notte, l'immaginazione, il sogno... la Luna. Illuminate dalla sua luce, le situazioni sembrano più affascinanti, ma meno chiare. La sua energia seducente agisce indirettamente. Considera il lato nascosto delle cose, ciò che vedi ora non è tutta la verità. Cosa c'è oltre? Sii più ricettivo."
    },
    {
        number: 19,
        type: "Arcano Maggiore",
        name: "Il Sole",
        img: "imgs/tarots/19_the_sun.png",
        description:
            "Il Sole ci appare rassicurante e luminoso. Il temperamento positivo ci porta a vedere la situazione con il massimo dell'ottimismo. Possiamo approfittare di questo momento magico che porta con sé un periodo fortunato e produttivo, in un clima di serenità e tenerezza. Il Sole simboleggia l'ascesa, il raggiungimento della vetta. I suoi raggi scaldano e illuminano anche le carte negative, attenuandone gli effetti. E' l'ora della pienezza interiore ed esteriore."
    },
    {
        number: 20,
        type: "Arcano Maggiore",
        name: "Il Giudizio",
        img: "imgs/tarots/20_judgement.png",
        description:
            "Il Giiudizio divino si annuncia improvvisamente. In caso positivo si manifesta con piacevoli sorprese e successi. Il giudizio delle carte è sempre favorevole alla domanda: il cambiamento porterà entusiasmo, crescita e miglioramento."
    },
    {
        number: 21,
        type: "Arcano Maggiore",
        name: "Il Mondo",
        img: "imgs/tarots/21_the_world.png",
        description:
            "Il Mondo è l'ultima carta del mazzo. Il raggiungimento della completezza dopo una lenta e piena evoluzione. Qualsiasi sia il campo, il successo sarà solido e duraturo. Le circostanze favorevoli e la protezione del destino hanno portato al totale appagamento delle nostre fatiche. Tutto procede secondo le migliori aspettative."
    }
];
