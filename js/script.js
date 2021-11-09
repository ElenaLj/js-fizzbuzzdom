// Compito: stampa i numeri da 1 a 100

//Milestone 1: Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//Milestone 2: Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

//Dichiaro e assegno variabile
const ul = document.querySelector("ul.number")

//iterazione for
for (let i = 1; i <= 100; i++) {
    const elemento = `<li class="box box--${i}">${i}</li>`;
    ul.innerHTML += elemento;

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
};
