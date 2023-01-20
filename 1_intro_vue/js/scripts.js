const { createApp } = Vue;

createApp({
    data() {
        return {
            userName: 'Alessio',
            title: 'Hello Vue!',
            text: 'Lorem ipsum dolor sit amet',
            h1Classes: 'text-center',
            inputValue: '',
            newClass: '',
            buttonLabel: 'Cliccami',
            classesList: ['red'],
            arr: [1, 2, 3],
            obj: {
                propUno: 'Ciao',
                propDue: 'Come va?'
            }
        }
    },
    methods: {
        greetings: function () {
            return  'Ciao';
        },
        addToClassesList: function () {
            this.classesList.push(this.newClass);

            this.newClass = '';
        },
        singlePClasses: function () {
            // Consegna:
            // Definire una funzione che, a partire da un array di classi,
            // mi restituisce una stringa contenente tutte le classi presenti
            // nell'array

            let stringa = '';
            this.classesList.forEach((item) => {
                stringa += item + ' ';
            });

            return stringa;
        },
        salutaUtente : function (language) {
            let counter = 0;
            for (let i = 0; i < 10; i++) {
                counter++;
            }

            if(language == 'ita'){
                return 'Ciao ' + this.userName + ' ' + counter + ' volte';

                // Non vanno bene, ma sono ottime intuizioni:
                // return 'Ciao ' + data().userName + ' ' + counter + ' volte';
                // return 'Ciao ' + data['userName'] + ' ' + counter + ' volte';
                // return 'Ciao ' + userName + ' ' + counter + ' volte';
            }
            else{
                return 'Hi ' + this.userName + ' ' + counter + ' volte';

                // Non vanno bene, ma sono ottime intuizioni:
                // return 'Hi ' + data().userName + ' ' + counter + ' volte';
                // return 'Hi ' + data['userName'] + ' ' + counter + ' volte';
                // return 'Hi ' + userName + ' ' + counter + ' volte';
            }
        }
    }
}).mount('#app');

// Esempio 1 - Text interpolation
// const message = 'Hello Vue!';
// const h1Dom = document.querySelector('h1');
// h1Dom.innerHTML = message;

// const pDom = document.querySelector('p');
// pDom.innerHTML = message;

// const buttonDom = document.querySelector('button');
// buttonDom.innerHTML = message;