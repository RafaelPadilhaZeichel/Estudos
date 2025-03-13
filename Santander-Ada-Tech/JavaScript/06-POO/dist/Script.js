"use strict";
//! Poo
//! Classe: abstração
//! Definindo a abstração de uma pessoa
class Pessoa {
    // métodos: ações (Funções)
    // método construtor: é um método especial que é chamado no momento da criação do objeto
    constructor(nome, idade, altura, peso, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this._cpf = cpf;
    }
    falar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
    dormir() {
        console.log(`Dormindo`);
    }
    // acessor (getter) - permite acessar o valor do atributo privado
    get cpf() {
        return this._cpf;
    }
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            throw new Error('O CPF deve ter 14 caracteres');
        }
        this._cpf = newCpf;
    }
}
// Criando/instaciando um pessoa (individual/object) a partir da definicão da classe Pessoa
const pessoa1 = new Pessoa('Maria', 25, 1.75, 70, '123.456.789-00');
const pessoa2 = new Pessoa('Maria', 25, 1.75, 70, '123.456.789-01');
console.log(pessoa1);
pessoa1.falar();
pessoa1.dormir();
console.log(pessoa1.cpf); // é possível vizualizar o cpf, pois foi criado um acessor (getter) para o atributo privado _cpf, mas não é possível alterar o cpf, pois o atributo é privado, mas com o setter é possível alterar o cpf
pessoa1.cpf = '123.456.789-99'; // alterando o cpf com o setter (acessor) 
console.log(pessoa1.cpf);
pessoa1.cpf = '123'; // alterando o cpf com o setter (acessor) 
console.log(pessoa1.cpf);
