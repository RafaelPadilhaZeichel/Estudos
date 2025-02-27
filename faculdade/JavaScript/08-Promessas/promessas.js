// Função que simula uma operação assíncrona de verificação do status de uma casa
function verificaStatusDaCasa(casa) {
  return new Promise((resolve, reject) => {
    // simlunaod uma operação que leva 2 segundos para ser concluída
    setTimeout(() => {
      const sucesso = Math.random() > 0.5; // Simulnaod sucesso ou falha de forma aleatória
      if (sucesso) {
        resolve(
          `A casa localizada em ${casa.endereco} está em boas condições.`
        );
      } else {
        reject(`A casa localizada em ${casa.endereco} precisa de reparos.`);
      }
    }, 2000);
  });
}

// Classe "Casa"

class Casa {
  constructor(endereco, cor, numerodeQuartos, temGaragem) {
    this.endereco = endereco;
    this.cor = cor;
    this.numerodeQuartos = numerodeQuartos;
    this.temGaragem = temGaragem;
  }

  descrever() {
    let descricao = `Casa localizada em ${this.endereco}, de cor ${this.cor}, com ${this.numeroDeQuartos} quartos, de tamanho ${this.tamanho}m²`;

    descricao += this.temGaragem
      ? " e possui garagem."
      : " e não possui garagem";

    return descricao;
  }

  // Método para verificar o status da casa
  verificaStatusDaCasa() {

    verificaStatusDaCasa(this)
        .then((resultado) => {
            console.log(resultado); // Resultado positivo
        })
        .catch((erro) => {
            console.log(erro);
        })
  }
}
