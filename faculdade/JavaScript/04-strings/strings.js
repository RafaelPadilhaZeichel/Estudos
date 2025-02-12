let frutas = 'maça, banana, laranja, uva, abacaxi'

console.log('A quantidade de caracteres das frutas é:', frutas.length)

let parteFrutas = frutas.slice(6,21)
console.log('Resultado do Slice():',parteFrutas)

let frutaComEspaco = '          abacaxi            '

let frutaSemEspaco = frutaComEspaco.trim();
console.log('Resultado do trim():',frutaSemEspaco)

let listaDeFrutas = 'maça,banana,laranja,uva,abacaxi'
let arrayDeFrutas = listaDeFrutas.split(',')
console.log('Resultado do split():', arrayDeFrutas)


let animal1 = 'Elefante'
let animal2 = 'Girrafa'
let animal3 = 'Zebra'

let parteAnimal = animal1.substring(3, 7)
console.log('Resultado da substring():',parteAnimal)

let novoAnimal2 = animal2.replace('ra', 're')
console.log('Resultado da replace():',novoAnimal2)

let animaisJuntos = animal1.concat(' ', animal2, ' ', animal3)
console.log('Resultado da concat():',animaisJuntos)

let nome = 'Rafael Padilha Zeichel'
let nomeMinusculo = nome.toLowerCase();

console.log('Aqui está o seu nome todo minusculo:', nomeMinusculo)

let nomeMaiusculo = nome.toUpperCase();
console.log('Aqui está o seu nome todo maisculo:', nomeMaiusculo)