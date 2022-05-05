// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue (
    {
        el: '#root',
        // creo il messaggio nel data per poi passarlo nell'h1 in html
        data: {
            message : 'Big Dreams',
            myImage : 'https://thumbs.dreamstime.com/b/money-dreams-original-idea-nice-40543089.jpg'
        },
    }
);