//! Poo

//! objetc literal
// const pessoa = { //! esse objeto é único, se eu quisesse criar outro objeto com as mesmas propriedades, teria que recriar tudo
//     nome: 'Maria',
//     idade: 25,
//     endereco: {
//         logradouro: 'Rua ABC',
//         numero: 1000
//     }
// }

interface IPessoa { //! interface: é um contrato que define o que a classe deve ter, é um tipo de dado
    // atributos
    nome: string;
    idade: number;
    altura: number;

    // métodos
    falar(): void;
    dormir(): void;
}


//! Classe: abstração
//! Definindo a abstração de uma pessoa

class Pessoa implements IPessoa { //! implements IPessoa: é uma interface que define o que a classe Pessoa deve ter
    // atributos: características (Variáveis)
    nome: string;
    idade: number;
    altura: number;


    // métodos: ações (Funções)

    // método construtor: é um método especial que é chamado no momento da criação do objeto
    constructor(nome: string, idade: number, altura: number) {
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
