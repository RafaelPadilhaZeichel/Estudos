let pessoa = {
    'nome': 'Rafael',
    'idade': 21,
    'endereco': {
      'rua': 'Rua A',
      'numero': '07'
    },
    'telefone': ['1245-8754', '6587-9587']
  };
console.log('\nAcessar dados:');    
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.endereco.rua);
console.log(pessoa['telefone'][0]);
console.log(pessoa['telefone'][1]);
console.log('\nAdicionar dados:');
pessoa.email = 'Rafae@gmail.com.br'
console.log(pessoa);

console.log('\nModificar dados:');
pessoa.idade = 22;
pessoa.endereco.rua = 'Rua B';
console.log(pessoa);

console.log('\nRemover dados:');
delete pessoa.email;
delete pessoa.telefone[1];
console.log(pessoa);

console.log('\nOperações com Arrays:');
pessoa.hobbies = ['Leitura', 'Esportes'];
console.log(pessoa.hobbies[1]);
pessoa.hobbies.push('Viagens');
console.log(pessoa.hobbies);

console.log('\nIterar sobre as propriedades do Objeto:');
for (let chave in pessoa){
  console.log(chave + ': ' + pessoa[chave]);
}

console.log('\nConverter de e para JSON:');

let jsonText = JSON.stringify(pessoa)
console.log(jsonText)
console.log('\n');
let objectJson = JSON.parse(jsonText)
console.log(objectJson)