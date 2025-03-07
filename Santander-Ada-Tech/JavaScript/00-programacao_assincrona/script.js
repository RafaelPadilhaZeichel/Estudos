//! A programação assíncorna pode ser aplicada de três formas:
const fs = require("fs"); // Importando o módulo fs

//* 1. Por Callbacks ->
// lendo um arquivo de forma assíncrona (Função assíncrona)
// Callbacks são funções que são passadas como argumentos para outras funções
// e são chamadas quando um evento ocorre ou quando uma tarefa é concluída.

//* Exemplo 1 : fs.readFile (Função que lê um arquivo)
// console.log('Antes da leitura do arquivo');

// fs.readFile("Santander-Ada-Tech/JavaScript/00-programacao_assincrona/arquivo.txt",(erro, conteudoDoArquivo) => {
//     if (erro) {
//         console.log('Erro ao ler o arquivo', erro);
//     } else {
//         console.log(conteudoDoArquivo.toString());
//     }
// });

// console.log('Depois da leitura do arquivo');

//* Exemplo 2: setimeout (Função que cria um Timer)

// setTimeout(() => {
//     console.log('Passaram-se 2 segundos');
// }, 2000);

//! 2. Por Promises ->

// A promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona.

// A promise pode estar em um dos três estados:
// pending: estado inicial, não foi realizada nem rejeitada.
// fulfilled: significa que a operação foi realizada com sucesso.
// rejected: significa que a operação falhou.

//* Exemplo 1

// console.log("Antes da leitura do arquivo");

// function lerArquivoPromise() { 
//     return new Promise((resolve, reject) => {
//         fs.readFile(
//           "Santander-Ada-Tech/JavaScript/00-programacao_assincrona/arquivo.txt",
//           (erro, conteudoDoArquivo) => {
//             if (erro) {
//               reject("Erro ao ler o arquivo", erro);
//             } else {
//               resolve(conteudoDoArquivo.toString());
//             }
//           }
//         );
//       }); // Criando uma nova Promise      
// }//criando uma função que retorna uma promise


//Exitem funções que sao promesas, como a fetch, que é uma função que faz requisições HTTP
// fetch()


// console.log(promessa); // Promise { <pending> }
// lerArquivoPromise()
//   .then((retornoDoResolveDaPromise) => {
//     console.log("Deu certo: ", retornoDoResolveDaPromise);
//   })
//   .catch((erro) => {
//     console.log("Deu errado: ", erro);
//   }).finally(() => {
//     console.log("Isso vai ser executado independente do resultado da Promise");
//   });

//! 3. Resolvendo Promises usando Async/Await ->

