// dEFINIÇÃO DA CLASSE 'Casa'

class Casa {
  // Construtor define s propriedades da classe
  constructor(cor, numQuarto, temGaragem) {
    this.cor = cor;
    this.numQuarto = numQuarto;
    this.temGaragem = temGaragem;
  }
  // Método para descreveer a casa
  descrever() {
    let descricao = `Esá casa é de cor ${this.cor}, tem ${this.numQuarto}, quarto(s)...`;
    if (this.temGaragem) {
      descricao += ` e tem uma garagem.`;
    } else {
      descricao += ` e não tem garagem.`;
    }
    return descricao;
  }
}

// Criação de Objetos (Instâncias da classe Casa)
const minhaCasa = new Casa("Verde", 3, true);
const suaCasa = new Casa("Roxa", 2, false);

// Manipulação dos objetos e exibição das descrições

console.log(minhaCasa.descrever());
console.log(suaCasa.descrever ());
