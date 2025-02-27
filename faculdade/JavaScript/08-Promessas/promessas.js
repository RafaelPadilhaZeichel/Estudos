// Função que simula uma operação assíncrona de verificação do status de uma casa
function verificaStatusDaCasa(Casa) {
  return new Promise((resolve, reject) => {
    // simlunaod uma operação que leva 2 segundos para ser concluída
    setTimeout(() => {
      const sucesso = Math.random() > 0.5; // Simulnaod sucesso ou falha de forma aleatória
      if (sucesso) {
        resolve(
          `A casa localizada em ${Casa.endereco} está em boas condições.`
        );
      } else {
        reject(`A casa localizada em ${Casa.endereco} precisa de reparos.`);
      }
    }, 2000);
  });
}

// Função que simula uma operação assíncrona de inspeção da casa
function inspecionarCasa(Casa) {
  return new Promise((resolve) => {
    // Simulando uma operação assíncrona que ela 1 segundo para ser concluída
    setTimeout(() => {
      resolve(`Inspeção da casa localizada en ${Casa.endereco} concluída.`);
    }, 1000);
  });
}

// Função que simula uma operação assíncrona de reparos na casa
function repararCasa(Casa) {
  return new Promise((resolve) => {
    // Simulando uma operação assíncrona que ela 3 segundo para ser concluída
    setTimeout(() => {
      resolve(`Reparos na casa localizada en ${Casa.endereco} foram concluída.`);
    }, 3000);
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
      });
  }

  // Método para verificar o status da casa
  verificaStatusDaCasa() {
    verificaStatusDaCasa(this)
        .then((resultado) => {
            console.log(resultado); // Saída: A casa está em baos condições!
            return inspecionarCasa(this);
        })
        .then((resultadoinspecao) => {
            console;log(resultadoinspecao); // Saída: Inspeão da casa concluída.
        })
        .catch((erro) => {
            console.error(erro); // Saída: A casa precisa de reparos.
            return repararCasa(this);
        })
        .then((resultadoDoReparo) => {
            if(resultadoDoReparo) {
                console.log(resultadoDoReparo); // Saída: reparos na casa foram concluídos.
                return inspecionarCasa(this);
            }
        })
        .then((resultadoFinalInspecao) => {
            if (resultadoFinalInspecao) {
                console.log(resultadoFinalInspecao); // Saída: Inspeção da casa concluída após reparos.
            }
        })
        .catch((erro) => {
            console.error(`Erro final: ${erro}`)
        })
  }
}



// Criação de um objeto (Instância da classe Casa)
const minhaCasa = new Casa("Rua A, 123", "Azul", 3, true);

// Manipulação de objeto e exibição da descrição
console.log(minhaCasa.descrever());

// Verificação do status da casa utilizando a promessa
minhaCasa.verificaStatusDaCasa();

// Caso de falha
const casaInvalida = new Casa("", 0, "Verde", 2, false);
console.log(casaInvalida.descrever());
casaInvalida.verificaStatusDaCasa();
