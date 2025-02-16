let array1 = [];
let array2 = new Array();
let array3 = ["Maça", "Banana", "Uva"];

console.log("Array 2", array1);
console.log("Array 2", array2);
console.log("Array 3", array3);

// array1 = ['Teste1'];
// array2 = ['Teste2'];
// array3 = ['Teste3'];

console.log("\n Array 1", array1);
console.log("   Array 2", array2);
console.log("   Array 3", array3);

//! A forma correta de adicionar elementos no Array é usando metódos espécificos para isso, como o .push();

console.log("\n Array após adicionar elementos:", array1);
array1.push("ele1");
array2.push("ele2");
array3.push("ele3");

console.log("\n Novo Array 1", array1);
console.log("   Novo Array 2", array2);
console.log("   Novo Array 3", array3);

//! Forma de acessar um elemento no meu array.

let primeiroElemento = array1[0];
console.log('\n Primeiro elemento:', primeiroElemento);

