import { tweetView } from './views.js'
window.addEventListener('DOMContentLoaded', function () {
    const tweets = [
        {
            author: "@alberto",
            message: "Lorem fistrum a peich benemeritaar amatomaa mamaar de la",
            date: "2021-02-09 20:54:23"
        },
        {
            author: "@chiquito",
            message: "Está la cosa muy malar torpedo llevame al sircoo la caidita benemeritaar",
            date: "2021-02-08 23:45:21"
        },
        {
            author: "@chiquito",
            message: "Está la cosa muy malar torpedo llevame al sircoo la caidita benemeritaar",
            date: "2021-02-08 23:45:21"
        }
    ];

    function loadTweets() {

        const list = document.querySelector('.post-list')

        for (const tweet of tweets) {
            const tweetElement = document.createElement('article') //creamos el padre
            const tweetHTML = tweetView(tweet)

            tweetElement.innerHTML = tweetHTML; // inyectamos los textos
            list.appendChild(tweetElement) //le decimos donde meterlos
        }

        //seleccionamos el nodo del loader

        const loader = document.querySelector('.lds-ring')
        loader.classList.toggle('hidden')
    }



    //seleccionamos el boton

    const button = document.querySelector('button')

    button.addEventListener('click', loadTweets) // los tweets se cargan al cliclar el boton.
    //no se pone loadTweets() para qeu no la ejecute al cargar la web


    //evitamos la accion por defecto del link

    document.querySelector('a').addEventListener('click', function (ev) {
        ev.preventDefault()
        //ahora le pasamos el link a otra web 
        window.location.href = 'https://developer.mozilla.org'
    })

})
