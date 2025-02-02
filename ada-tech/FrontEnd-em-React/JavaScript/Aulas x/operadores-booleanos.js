const prompt = require('readline-sync');

const numero1 = 10;
const numero2 = 20;

console.log(numero1 == numero2); // false
console.log(numero1 === numero2); // false
console.log(numero1 === "10"); // false
console.log(numero1 == "10"); // true

console.log(numero1 != numero2); // true


// Controle de fluxo com condicionais

const idade = prompt.question("Qual a sua idade?");

if (idade >= 18) {
    console.log("Voce eh maior de idade");
} else {
    console.log("Voce eh menor de idade");
}

