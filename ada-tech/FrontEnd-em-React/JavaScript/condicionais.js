// Muito útil quando sua variável possui valores específicos

const { exit } = require("process");

const permissoes = "Admin"; // "Aluno" ou "Professor" ou "Admin"

switch (permissoes) {
  case "Aluno":
    console.log("Você Só pode visualizar as aulas.");
    break;
  case "Professor":
    console.log("Você pode visualizar e editar as aulas.");
    break;
  case "Admin":
    console.log("Você pode visualizar, editar e excluir as aulas.");
    break;
  default:
    console.log("Você não tem permissão para acessar o sistema.");
    break;
}

// Operador ternário

const idade = 21;

idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade")

const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade"

console.log(mensagem)