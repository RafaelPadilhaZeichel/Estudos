const prompt = require("readline-sync") 

// Expressão 1: Declara a váriavel
// Expressão 2: Condição de permanência do for
// Expressão 3: o incremento da várivavel de controle

// for (expressão 1; expressão 2; expressão 3;){
//    o escopo for
// }

for (let i = 0; i < 5; i++){
    console.log(i)
}

// Limpando o console
console.clear();

// Exemplo

// let maiorNumero = 0;
// let numeroInformado;

// for(let i = 0; i < 5; i++){
//     numeroInformado = Number(prompt.question("Informe um número positivo: "))

//     if(numeroInformado > maiorNumero){
//         maiorNumero = numeroInformado
//     }
// }

// console.log("O maior número informado foi:",maiorNumero)

// Exemplo

const nome = "Rafael"

// console.log(nome[0])

for ( let i = 0; i < nome.length; i++){
    console.log(nome[i])
}