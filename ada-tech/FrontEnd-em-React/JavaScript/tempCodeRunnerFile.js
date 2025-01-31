
let notaDoAluno = Number(prompt.question("Digite quanto você tirou na prova para eu fazer uma média da turma:"));
let acumulador = 0;

while (notaDoAluno >= 0){
    acumulador += notaDoAluno;
    notaDoAluno = Number(prompt.require("Informe a próxima nota"));
}

console.log(notaDoAluno)