// Definição da Classe 'Casa'

class Casa {
    // Construtor define as propriedades da classe
    constructor(cor, numQuarto, temGaragem) {
        // Propriedades privadas utilizando convenção de underscore
        this._cor = cor;
        this._numQuarto = numQuarto;
        this._temGaragem = temGaragem;
    }

    // Métodos getters e setters para acessar e modificar as propriedades
    get cor() {
        return this._cor;
    }
    
    set cor(novaCor) {
        this._cor = novaCor;
    }
    
    get numQuarto() {
        return this._numQuarto;
    }
    
    set numQuarto(novoNumQuarto) {
        this._numQuarto = novoNumQuarto;
    }

    get temGaragem() {
        return this._temGaragem;
    }
    
    set temGaragem(novoTemGaragem) {
        this._temGaragem = novoTemGaragem;
    }

    // Método para descrever a casa
    descrever() {
        let descricao = `Essa casa é de cor ${this.cor}, tem ${this.numQuarto} quarto(s)`;
        if (this.temGaragem) {
            descricao += ` e tem uma garagem.`;
        } else {
            descricao += ` e não tem garagem.`;
        }
        return descricao;
    }
}  

// Classe DERIVADA 'CasaLuxuosa' que Herda de 'Casa'
class CasaLuxuosa extends Casa {
    constructor(cor, numeroDeQuarto, temGaragem, temPiscina) {
        // Chama o construtor da classe base
        super(cor, numeroDeQuarto, temGaragem);
        // Propriedade adicional específica da classe derivada
        this._temPiscina = temPiscina;
    }

    // Getter e Setter para a nova propriedade
    get temPiscina() {
        return this._temPiscina;
    }

    set temPiscina(novoTemPiscina) { 
        this._temPiscina = novoTemPiscina;
    }

    // Sobrescrita do método descrever para incluir a piscina
    descrever() {
        let descricao = super.descrever();
        if (this._temPiscina) {
            descricao += ' Também tem uma piscina.';
        } else {
            descricao += ' Não tem piscina.';
        }
        return descricao;
    }
}

// Criação de Objetos (Instâncias da classe Casa)
const minhaCasa = new Casa("Azul", 3, true);
const casaLuxuosa = new CasaLuxuosa("Branca", 5, true, true);

// Manipulação dos objetos e exibição das descrições
console.log(minhaCasa.descrever());
console.log(casaLuxuosa.descrever());