// const numero1 = 4
// const numero2 = "5"

// console.log(numero1 + numero2) // 45, isso é uma concatenação de strings

// const numero3 = 4
// const numero4 = undefined

// console.log(numero1 + numero2) // NaN, isso é uma operação inválida

// console.log("Olá, mundo!")
// // TypeScript é um superconjunto de JavaScript que adiciona tipagem estática ao código
// // TypeScript é um conjunto de ferramentas que compila para JavaScript


// function somar(a: number, b: number): number {
//     return a + b
// }

// somar(1, 2) // 3


// const nomeDoUsuario = prompt("Qual é o seu nome?")
// console.log("Olá, " + nomeDoUsuario?.toLocaleUpperCase() + "!")

// number[] ou Array<number> é um array de números
// string[] ou Array<string> é um array de strings

const numero: Array<number> = [1, 2, 3, 4, 5]

// const misto: (number | string)[] = [1, 2, 3, 4, 5, "seis", "sete", "oito"]

numero.push(10)
numero.push(53)
numero.push(18)
numero.push(15)
numero.push(66)

const menoresDeIdade = numero.filter((idade) => idade < 18)

const maioresDeIdade = numero.filter((idade) => idade >= 18)

console.log(menoresDeIdade)

console.log(maioresDeIdade)
