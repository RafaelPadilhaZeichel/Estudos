// void main() {
//   print("Hello World!");
// }

int add(int a, int b) {
  return a + b; // Retorna a soma de a e b
}

void soma() {
  int resultado = add(10, 20); // Chama a função add com os valores 10 e 20
  print(resultado); // Imprime o resultado da soma
}

void pessoas() {
  var list = ["Lucas", "João", "Maria"]; // Declara uma lista de strings
  
  list.forEach((Item) { // Itera sobre cada elemento da lista
    print(Item); // Imprime o elemento atual
  });
}

void Pessoa(){
  String nome = "Lucas"; // Variavel String

  int idade = 20; // Variavel inteira

  double altura = 1.80; // Variavel double serve para numeros reais

  bool estudante = true; // Variavel booleana (verdadeiro ou falso)

  print('nome: $nome'); // Imprime o nome
  print('idade: $idade'); // Imprime a idade
  print('altura: $altura'); // Imprime a altura
  print('é estudante: $estudante'); // Imprime se é estudante ou não
}


  // This method increments the counter and calls setState to update the UI.
void main() {
  Pessoa(); // Chama a função Pessoa para executar o código

  soma(); // Chama a função soma para executar o código

  pessoas(); // Chama a função pessoas para executar o código
}