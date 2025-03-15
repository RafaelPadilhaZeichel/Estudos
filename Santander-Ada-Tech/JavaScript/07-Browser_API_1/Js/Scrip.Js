// selecionando elemtos HTML da nossa página utilizando o document.querySelector

// 1. Pelo nome da tag
const titulos = document.getElementsByTagName("h1"); // com esse método, selecionamos todos os elementos h1 da nossa página

console.log(titulos);

// 2. Pelo nome da classe

const classeParagrafo = document.getElementsByClassName("paragrafo"); // com esse método, selecionamos todos os elementos que possuem a classe 'paragrafo'

console.log(classeParagrafo);

// 3. Pelo nome da tag

const emailInput = document.getElementsByName("email"); // com esse método, selecionamos todos os elementos que possuem o name 'email'

console.log(emailInput);

// 4. Pelo Id da tag

const JsImg = document.getElementById('logo-JS'); // com esse método, selecionamos o elemento que possui o id 'logo-JS'

console.log(JsImg);

// 5. Pelo querySelector - seleciona o primeiro elemento que corresponde ao seletor especificado

const imagem = document.querySelector('body > img'); // seleciona a primeira imagem que está dentro do body

console.log(imagem);


const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

console.clear();

// acessando e alterando o conteúdo de um elemento HTML

const primeiroParagrafo = document.querySelector('p.paragrafo');
 

console.log(primeiroParagrafo);

console.log('textContent:', primeiroParagrafo.textContent);
console.log('innerHTML:', primeiroParagrafo.innerHTML);


primeiroParagrafo.textContent = 'Texto alterado via JS';
primeiroParagrafo.innerHTML = '<strong>Texto alterado via JS</strong>';

console.clear();

// value - utilizado para acessar e alterar o valor de um input

emailInput[0].value = '@gmail.com';

// adicionando elementos HTML na pagina com o método createElement

const listaUl = document.querySelector('ul#lista'); // Selecionando a lista ul
const listaLis = document.querySelectorAll('ul > li'); // Selecionando todos os elementos li

const novoElemento = document.createElement('li');
novoElemento.textContent = 'Item adicionado via JS'; // Adicionando um texto ao elemento

// listaUl.appendChild(novoElemento); // Adicionando o elemento como filho do body

console.log(novoElemento);

console.clear();

// Adicionando em uma ordem específica

listaUl.insertBefore(novoElemento, listaLis[1]); // isso fez com que o novo elemento fosse adicionado antes do segundo elemento li