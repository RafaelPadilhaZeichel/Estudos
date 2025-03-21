// Classe base 'Imovel'

class Imovel {
  constructor(endereco, tamanho) {
    this.endereco = endereco;
    this.tamanho = tamanho;
  }

  // Método abstrato para descrever o imóvel (Deve ser implementado nas subclasses)
  descrever() {
    throw new Error("Este método deve ser implementado por subclasses");
  }

  // Método para validação de dados (Encapsulamento de exceções)
  validar() {
    if (!this.endereco || !this.tamanho) {
      throw new Error("Dados inválidos para o imóvel");
    }
  }
}

// Classe derivada "Casa" que herda de "Imovel"
class Casa extends Imovel {
  constructor(endereco, tamanho, cor, numeroDeQuartos, temGaragem) {
    super(endereco, tamanho);
    this.cor = cor;
    this.numeroDeQuartos = numeroDeQuartos;
    this.temGaragem = temGaragem;
  }

  /* descrever() {
      let descricao = `Casa localizada em ${this.endereco}, de cor ${this.cor}, com ${this.numeroDeQuartos} quartos, de tamanho ${this.tamanho}m²`;
  
      // Operador ternário
      descricao += this.temGaragem
        ? " e possui garagem."
        : " e não possui garagem";
  
      return descricao;
    }
      */

  descrever() {
    try {
      this.validar();

      let descricao = `Casa localizada em ${this.endereco}, de cor ${this.cor}, com ${this.numeroDeQuartos} quartos, de tamanho ${this.tamanho}m²`;

      descricao += this.temGaragem
        ? " e possui garagem."
        : " e não possui garagem";

      return descricao;
    } catch (error) {
      throw new Error(`Erro ao descrever a casa: ${error.message}`);
    }
  }
}

// Classe derivada "Apartamento" que herda de "Imovel"
class Apartamento extends Imovel {
  constructor(endereco, tamanho, numeroDoAndar, possuiElevador) {
    super(endereco, tamanho);
    this.numeroDoAndar = numeroDoAndar;
    this.possuiElevador = possuiElevador;
  }

  // Implementando o método descrever
  descrever() {
    let descricao = `Apartamento localizado em ${this.endereco}, no ${this.numeroDoAndar}° andar, de tamanho ${this.tamanho}m²`;

    descricao += this.possuiElevador
      ? " e possui elevador."
      : " e não possui elevador";

    return descricao;
  }
}

// Função para descrever um imóvel (Polimorfismo)
function descreverImovel(Imovel) {
  console.log(Imovel.descrever());
}

// Criação de objetos (instâncias das classes)
const minhaCasa = new Casa("Rua A, 123", 120, "Azul", 3, true);
const meuApartamento = new Apartamento("Avenida B, 456", 85, 7, true);

// Manipulação dos objetos e exibição das descrições usando polimorfismo
descreverImovel(minhaCasa);
descreverImovel(meuApartamento);
