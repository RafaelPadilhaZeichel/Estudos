// Arrow functions

// Exemplo básico de uma arroww function que soma dois números
let somar = (a,b) => {
    return a+b;
};

// Chamando a função e exibindo o resultado no console
console.log(somar(5,3));

// Exemplo de arrow function com um único parâmetro (Sem parenteses)
let dobrar = n => n*2;

console.log(dobrar(5));

// Exemplo de uma arrow function usada como callback
let numeros = [1,2,3,4,5];

// usando arrow functon com o método map para dobrar os valores do array
let numerosDobrados = numeros.map(n => n*2);

// exibindo o array resultante no console
console.log(numerosDobrados);

// arrow function com o corpo de função mais complexo
let saudacao = (nome,idade) => {
    let mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
    return mensagem;
};

// Chamando a função e exibindo o resultado no console
console.log(saudacao("Ana", 25));