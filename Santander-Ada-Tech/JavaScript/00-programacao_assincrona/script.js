//! A programação assíncorna pode ser aplicada de três formas:
const fs = require('fs'); // Importando o módulo fs


//* 1. Por Callbacks -> 
// lendo um arquivo de forma assíncrona (Função assíncrona)
// Callbacks são funções que são passadas como argumentos para outras funções
// e são chamadas quando um evento ocorre ou quando uma tarefa é concluída.


console.log('Antes da leitura do arquivo');

fs.readFile("Santander-Ada-Tech/JavaScript/00-programacao_assincrona/arquivo.txt",(erro, conteudoDoArquivo) => {
    if (erro) {
        console.log('Erro ao ler o arquivo', erro);
    } else {
        console.log(conteudoDoArquivo.toString());
    }
});

console.log('Depois da leitura do arquivo');


//! 2. Por Promises -> 

//! 3. Resolvendo Promises usando Async/Await ->

