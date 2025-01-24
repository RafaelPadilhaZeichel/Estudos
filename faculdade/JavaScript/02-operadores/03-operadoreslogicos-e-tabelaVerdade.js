// Exemplo de operadores logicos em Js

// Operador E lógico (&&)

const a = true;
const b = false;

const resultadoE1 = a && b;
const resultadoE2 = a && true;

console.log(`true && false: ${resultadoE1}`); // false
console.log(`true && true: ${resultadoE2}`); // true

// Operador OU lógico (||)
const resultadoOU1 = a || b; // true
const resultadoOU2 = a || false; // false

console.log(`true || false: ${resultadoOU1}`); // true
console.log(`false || false: ${resultadoOU2}`); // false

// Operador NÃO lógico (!)

const resultadoNao1 = !a; // false
const resultadoNao2 = !b; // true

console.log(`!true: ${resultadoNao1}`); // Saída: false
console.log(`!true: ${resultadoNao2}`); // Saída: false

// combinação de operadores logicos

const resultadoCombo1 = (a || b) && !b;
const resultadoCombo2 = (a && b) || a;

console.log(`(true || false) && !false: ${resultadoCombo1}`); // Saída: true
console.log(`!(true && false) || true: ${resultadoCombo2}`); // Saída: true