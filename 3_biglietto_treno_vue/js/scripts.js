// 4° step: inizializzo la mia istanza di Vue
// 4.1: recupero la funzione createApp dall'oggetto globale Vue
const { createApp } = Vue;

// 4.2: richiamo la funzione createApp
createApp({
    data() {

        return {
            
            priceKm: 0.21,
            userKm: 0,
            userAge: 0,
            finalPrice: '-',

        }

    },
    methods: {
        
        calcPrice: function () {

            let tempPrice = this.priceKm * this.userKm;

            if (this.userAge < 18) {
                tempPrice *= 0.8;
            }
            else if (this.userAge >= 65) {
                tempPrice *= 0.6;
            }

            this.finalPrice = '€ ' + (tempPrice.toFixed(2));

        }

    }
}).mount('#app'); // 4.3: montiamo la nostra istanza di Vue nell'HTML




/**
 * 
 *  CONSEGNA
    Scrivere un programma che chieda all'utente:
    - Il numero di chilometri da percorrere
    - Età del passeggero
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.

    MILESTONE 1:
    Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone
    (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa
    stampata in pagina.

    MILESTONE 2:
    Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui
    l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
    Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere
    formattato con massimo due decimali, per indicare i centesimi sul prezzo).
 * 
 */







