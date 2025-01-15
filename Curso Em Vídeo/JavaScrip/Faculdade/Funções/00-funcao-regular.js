/* Praticando javaScript*/

/*
* function nome(parametro){//Bloco de código que será executado}
* let x = exemplo (2,3);
*   function exemplo(a,b){
*    return a+b;
*   }
*
*
*
*/

// Definindo outra função regular com dois parâmetros
function soma(a,b){
    return a+b;
}

// Chamando a função soma e armazenando o resultado em uma variável
let resultado = soma(13,29);

// Exibindo o resultado da função soma
console.log("O resultado da soma é: "+ resultado);
console.log("O resultado da soam é: "+ soma(13,29));

// Definindo uma função regular usando a palavra-chave "function"
function saudação(nome){
    console.log("Olá, tudo bem? " + nome + "! Como você está?");
}

// Chamando a função saudação e passando um argumento
saudação("Rafael padilha");
