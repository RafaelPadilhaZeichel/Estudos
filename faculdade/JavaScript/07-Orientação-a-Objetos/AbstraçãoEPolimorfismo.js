// Classe base 'Imovel'

class Imovel {
    constructor(endereco, tamanho){
        this.endereco= endereco;
        this.tamanho= tamanho;
    }

    // Método abstrato para descrever o imóvel (Deve ser implementado nas subclasses)
    descrever() {
        throw new Error("Este método deve ser implementado por subclasses");
        
    }
}

// Classe derivada "Casa" que herda de "Imovel"
class casa extends Imovel {
    constructor(endereco, tamanho, cor, numeroDeQaurtos, temGaragem) {
        super(endereco, tamanho);
        this.cor = cor;
        this.numeroDeQaurtos = numeroDeQaurtos;
        this.temGaragem = temGaragem;
    }

    
}

    