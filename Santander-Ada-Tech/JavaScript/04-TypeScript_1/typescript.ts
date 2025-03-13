// const numero1 = 4
// const numero2 = "5"

// console.log(numero1 + numero2) // 45, isso é uma concatenação de strings

// const numero3 = 4
// const numero4 = undefined

// console.log(numero1 + numero2) // NaN, isso é uma operação inválida

// console.log("Olá, mundo!")

//! TypeScript é um superconjunto de JavaScript que adiciona tipagem estática ao código
//! TypeScript é um conjunto de ferramentas que compila para JavaScript

// function somar(a: number, b: number): number {
//     return a + b
// }

// somar(1, 2) // 3

// const nomeDoUsuario = prompt("Qual é o seu nome?")
// console.log("Olá, " + nomeDoUsuario?.toLocaleUpperCase() + "!")

//! number[] ou Array<number> é um array de números
//! string[] ou Array<string> é um array de strings

// const numero: Array<number> = [1, 2, 3, 4, 5]

// const misto: (number | string)[] = [1, 2, 3, 4, 5, "seis", "sete", "oito"]

// numero.push(10)
// numero.push(53)
// numero.push(18)
// numero.push(15)
// numero.push(66)

// const menoresDeIdade = numero.filter((idade) => idade < 18)

// const maioresDeIdade = numero.filter((idade) => idade >= 18)

// console.log(menoresDeIdade)

// console.log(maioresDeIdade)

//! tuplas são arrays de tamanho fixo e com tipos fixos

// const pessoa: [string, number] = ["Alice", 25]

//! tipagem de objetos em TypeScript é feita com interfaces ou types (tipos)
//! Object types

//! interface

// interface Person {
//     nome: string;
//     idade: number;
//     profissao: string;
//     altura: number;
// }

// const pessoa2: Person = {
//     nome: "Alice",
//     idade: 25,
//     profissao: "Desenvolvedora",
//     altura: 1.70
// }

//! type

// type Person = {
//     nome: string;
//     idade: number;
//     profissao?: string;
//     altura: number;
// }

// type Profissao = {
//     nome: string;
//     salario: number;
//     cargo: string;
//     curso?: string;
// }

// const emprego: Profissao = {
//     nome: "Alice",
//     salario: 5000,
//     cargo: "Desenvolvedora",
//     curso: "Engenharia de Software"
// }

// console.log(emprego)

//! isso é um uniao de tipos e literal types, ou seja, um tipo que aceita um valor específico

// function chooseNumber(
//   numero1: number,
//   numero2: number,
//   criterio?: "greater" | "smaller" // é um tipo que aceita apenas "greater" ou "smaller"
// ) {
//   switch (criterio) {
//     case "greater":
//       return numero1 > numero2 ? numero1 : numero2;
//     case "smaller":
//       return numero1 < numero2 ? numero1 : numero2;
//     default:
//       const numeroAleatorio = Math.random();
//       if (numeroAleatorio > 0.5) {
//         return numero1;
//       } else {
//         return numero2;
//       }
//   }
// }

// const numeroEscolhido = chooseNumber(10, 20, "greater");

// console.log(numeroEscolhido);

//! type aliases é uma forma de criar um tipo personalizado

// type criterio = "greater" | "smaller";

// function chooseNumber(numero1: number, numero2: number, criterio?: criterio): number {
//   switch (criterio) {
//     case "greater":
//       return numero1 > numero2 ? numero1 : numero2;
//     case "smaller":
//       return numero1 < numero2 ? numero1 : numero2;
//     default:
//       const numeroAleatorio = Math.random();
//       return numeroAleatorio > 0.5 ? numero1 : numero2;
//   }
// }

// const numeroEscolhido = chooseNumber(10, 20, "greater");

// console.log(numeroEscolhido);

// function somar (a: number, b: number): number {
//     return a + b
// }

// const resultado = somar(1, 2)

// console.log(resultado)

//! utilies types são tipos que já existem no TypeScript, a ideia é permitir que você crie novos tipos a partir de tipos existentes

//! partial

type Person = {
  nome: string;
  idade: number;
  profissao?: string;
  altura: number;
};

type PersonPartial = Partial<Person>;

const outraPessoa: PersonPartial =
  // isso torna os atributos opcionais
  {};

//! required

type PersonRequired = Required<Person>;

const pessoa: PersonRequired =
  // isso torna os atributos obrigatórios
  {
    nome: "Alice",
    idade: 25,
    profissao: "Desenvolvedora",
    altura: 1.7,
  };

//! pick

type PersonPick = Pick<Person, "nome" | "idade">; // isso pega apenas os atributos que você quer

//! omit

type PersonOmit = Omit<Person, "profissao">; // isso omite os atributos que você não quer

//! exclude

type criterio = "greater" | "smaller";

type criterioExcluido = Exclude<criterio, "greater">; // isso exclui um valor específico

//! record

type PersonRecord = Record<"nome" | "idade", string>; // isso cria um objeto com os atributos que você quer
