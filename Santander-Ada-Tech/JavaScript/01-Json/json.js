// Json é uma formatação leve de troca de dados. Para seres humanos, é fácil de ler e escrever. Para máquinas, é fácil de interpretar e gerar. Está baseado em um subconjunto da linguagem de programação JavaScript, Standard ECMA-262 3ª Edição - Dezembro 1999. JSON é em formato texto e completamente independente de linguagem, pois usa convenções que são familiares às linguagens C e familiares, incluindo C++, C#, Java, JavaScript, Perl, Python e muitas outras. Estas propriedades fazem com que JSON seja um formato ideal de troca de dados.

//Exemplo: configurando o Eslint, o eslint é uma configuração que faz com que o código fique mais limpo e organizado, para isso é necessário instalar o eslint e o prettier, e configurar o arquivo .eslintrc.json, para que o eslint funcione corretamente.

const fs = require('fs'); // isso é um módulo do Node.js que nos permite interagir com o sistema de arquivos do computador. O fs é um módulo nativo do Node.js, o que significa que não precisamos instalar nada para usá-lo. Para usá-lo, basta importá-lo com a palavra-chave require. Por exemplo: const fs = require('fs');

// Lendo um arquivo JSON

fs.readFile(
  'Santander-Ada-Tech/JavaScript/01-Json/.prettierrc.json',
  'utf8',
  (erro, dados) => {
    if (erro) {
      console.log('Erro ao ler o arquivo');
    } else {
      // dados: Buffer com os dados do arquivo json
      const dadosObjeto = JSON.parse(String(dados)); // convertendo o JSON para um objeto JavaScript

      console.log(dadosObjeto.rules);
    }
  }
);

// converter JSON, em formato texto, para um objeto JavaScript é chamado de "parse". Para fazer isso, usamos o método JSON.parse(). Este método requer um argumento, que é a string JSON que queremos converter em um objeto JavaScript. Por exemplo:

const jsonString = '{"nome": "Rafael", "idade": 20}';

console.log(JSON.parse(jsonString)); // { nome: 'Rafael', idade: 20 }

// convertendo um obejto do Js, em um JSON, é chamado de "stringify". Para fazer isso, usamos o método JSON.stringify(). Este método requer um argumento, que é o objeto JavaScript que queremos converter em uma string JSON. Por exemplo:

const pessoa = {
    nome : 'Rafael',
    papel: 'estudante'
}

console.log(JSON.stringify(pessoa)); // {"nome":"Rafael","papel":"estudante"}