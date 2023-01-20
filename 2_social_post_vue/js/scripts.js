// 4° step: inizializzo la mia istanza di Vue
// 4.1: recupero la funzione createApp dall'oggetto globale Vue
const { createApp } = Vue;

// 4.2: richiamo la funzione createApp
createApp({
    data() {

        return {
            clicked: false,
            post: {
                id: 3,
                content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                media: "https://unsplash.it/600/400?image=234",
                author: {
                    name: "Chiara Passaro",
                    image: "https://unsplash.it/300/300?image=20"
                },
                likes: 78,
                created: "2021-05-15"
            }
        }

    },
    methods: {

        mePiace: function () {
            if (this.clicked == false) {
                this.clicked = true;
                this.post.likes++;
            }
            else {
                this.clicked = false;
                this.post.likes--;
            }
        },
        transformDate: function (date) {
            const splittedCreated = date.split('-');

            const italianCreated = splittedCreated[2] + '/' + splittedCreated[1] + '/' + splittedCreated[0];

            return italianCreated;
        }

    }
}).mount('#app'); // 4.3: montiamo la nostra istanza di Vue nell'HTML




/**
 * 
 * CONSEGNA
 * Stampare in pagina tutte le informazioni contenute in un oggetto post
 * 
 */







