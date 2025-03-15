//! Poo

//! objetc literal
// const pessoa = { //* esse objeto é único, se eu quisesse criar outro objeto com as mesmas propriedades, teria que recriar tudo
//     nome: 'Maria',
//     idade: 25,
//     endereco: {
//         logradouro: 'Rua ABC',
//         numero: 1000
//     }
// }

interface IPessoa { //* interface: é um contrato que define o que a classe deve ter, é um tipo de dado
    // atributos
    nome: string;
    idade: number;
    altura: number;
    peso: number;

    // métodos
    falar(): void;
    dormir(): void;
}


//! Classe: abstração
//! Definindo a abstração de uma pessoa

class Pessoa implements IPessoa { //* implements IPessoa: é uma interface que define o que a classe Pessoa deve ter
    // atributos: características (Variáveis)
    nome: string;
    idade: number;
    altura: number;
    readonly peso: number; // atributo somente leitura (não pode ser alterado) - readonly
    private _cpf: string; // atributo privado (não pode ser acessado fora da classe)


    // métodos: ações (Funções)

    // método construtor: é um método especial que é chamado no momento da criação do objeto
    constructor(nome: string, idade: number, altura: number, peso: number, cpf: string) {
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
    get cpf(): string {
        return this._cpf;
    }

    set cpf(newCpf: string) {
        if (newCpf.length !== 14) {
            throw new Error('O CPF deve ter 14 caracteres');
        }
        
        this._cpf = newCpf;
    }
}

//! extends Pessoa: a classe Professor herda os atributos e métodos da classe Pessoa
//! Definindo a abstração de um professor, heranca de pessoa (classe pai)

class Professor extends Pessoa { 
    codigo: string;

    constructor(nome: string, idade: number, altura: number, peso: number, cpf: string, codigo: string) {
        super(nome, idade, altura, peso, cpf);
        this.codigo = codigo;
    }

    ensinar() {
        console.log('Ensinando... ');
    }
}


//! Criando/instaciando uma pessoa (individual/object) a partir da definicão da classe Pessoa

const pessoa1 = new Pessoa('Maria', 25, 1.75, 70, '123.456.789-00');
const pessoa2 = new Pessoa('Maria', 25, 1.75, 70, '123.456.789-01');

console.log(pessoa1);

pessoa1.falar();
pessoa1.dormir();

console.log(pessoa1.cpf) //* é possível vizualizar o cpf, pois foi criado um acessor (getter) para o atributo privado _cpf, mas não é possível alterar o cpf, pois o atributo é privado, mas com o setter é possível alterar o cpf

pessoa1.cpf = '123.456.789-99'; //* alterando o cpf com o setter (acessor) 

console.log(pessoa1.cpf);

//! pessoa1.cpf = '123'; // alterando o cpf com o setter (acessor) 

console.log(pessoa1.cpf);

//! objeto da classe Professor
const professor = new Professor('João', 30, 1.80, 80, '123.456.789-02', 'P001');

console.log(professor);
professor.ensinar()

//! Polimosfismo: capacidade de um objeto poder ser referenciado de várias formas

console.log(pessoa1 instanceof Pessoa); // Isso está dizendo que pessoa1 é uma instância de Pessoa
console.log(pessoa1 instanceof Professor); // Issso está dizendo que pessoa1 não é uma instância de Professor


