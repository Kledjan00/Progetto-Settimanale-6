// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.

const interruttore = document.getElementById('interruttore');

// Tema chiaro / scuro: col click metto o tolgo .dark sul body
interruttore.addEventListener('click', function () {
    document.body.classList.toggle('dark');
});
