"use strict";
//! Poo
//! Classe: abstração
//! Definindo a abstração de uma pessoa
class Pessoa {
    // métodos: ações (Funções)
    // método construtor: é um método especial que é chamado no momento da criação do objeto
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    falar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
    dormir() {
        console.log(`Dormindo`);
    }
}
// Criando/instaciando um pessoa (individual/object) a partir da definicão da classe Pessoa
const pessoa1 = new Pessoa('Maria', 25, 1.75);
console.log(pessoa1);
