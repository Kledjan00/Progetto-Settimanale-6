// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.

const interruttore = document.getElementById('interruttore');
const modulo = document.getElementById('modulo');
const crocetta = document.getElementById('crocetta');

// Tema chiaro / scuro: col click metto o tolgo .dark sul body
interruttore.addEventListener('click', function () {
    document.body.classList.toggle('dark');
});

// Invio: il grazie si apre nella nuova scheda e qui la modale si chiude da sola
modulo.addEventListener('submit', function () {
    crocetta.click();

    // Svuoto il form dopo un attimo, sennò partirebbe vuoto
    setTimeout(function () {
        modulo.reset();
    }, 500);
});
