const prompt = require("readline-sync")

//let saldo = Number(prompt.question("Qual eh o seu saldo?"))

//while (saldo < 0){
//    saldo = Number(
//        prompt.question("Saldo Inválido, Por favor, informe novamente!")
//    )
//}
//console.log(saldo)

//let notaDoAluno = Number(prompt.question("Digite quanto você tirou na prova para eu fazer uma média da turma: "));
//let acumulador = 0;
//let contador = 0;

//while (notaDoAluno >= 0){
//    acumulador = acumulador + notaDoAluno;
//    notaDoAluno = Number(prompt.question("Informe a próxima nota: "));
//    contador = contador + 1;
//}
//let mediaDasNotas = acumulador / contador

//console.log("A média das notas informadas eh:",mediaDasNotas);



// * Exemplo 3

// Math.random() => Entre 0 e 1 

const numeroAleatorio = parseInt(Math.random() * 10)

let numeroDoUsuario = Number(prompt.question("Informe um número entre 0 e 10: "))

let tentativasDoUsuario = 1;

while (numeroAleatorio !== numeroDoUsuario){
    console.log("Você errou o número!")
    numeroDoUsuario = Number(prompt.question("Informe um número entre 0 e 10: "))
    tentativasDoUsuario += 1
}

console.log("Parabéns! Você acertou, o número era", numeroAleatorio, "Sua quantidade de tentativas foi", tentativasDoUsuario)


