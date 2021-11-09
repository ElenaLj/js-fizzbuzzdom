// Compito: stampa i numeri da 1 a 100

//Milestone 1: Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//Milestone 2: Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
//Milestone 3: Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

//Dichiaro e assegno variabile
const ul = document.querySelector("ul.number")

//iterazione for
for (let i = 1; i <= 100; i++) {
    
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        const multiplo15 = `<li class="box box--${i}">FizzBuzz</li>`;
        ul.innerHTML += multiplo15;
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
        const multiplo3 = `<li class="box box--${i}">Fizz</li>`;
        ul.innerHTML += multiplo3;
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
        const multiplo5 = `<li class="box box--${i}">Buzz</li>`;
        ul.innerHTML += multiplo5;
    }
    else {
        console.log(i);
        const numero = `<li class="box box--${i}">${i}</li>`;
        ul.innerHTML += numero;
    }
};
