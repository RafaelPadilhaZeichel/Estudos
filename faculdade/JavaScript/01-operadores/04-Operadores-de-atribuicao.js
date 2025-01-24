// Exemplos de operadores de atribuição em jS

// operador de atribuição báscio (=)

/*function teste() {
    if (a == 10) {
        console.log("a é igual a 10")
    } else {
        console.log("a não é igual a 10")
    }
    return teste
}*/

let a = 10;
console.log(`Valor de a: ${a}`)


// operador de atribuição de adição (+=)
a += 5; // equivalente a a = a + 5
console.log(`Após a += 5, valor de a: ${a}`)

// operador de atribuição de subtração (-=)
a -= 3; // equivalente a a = a - 3
console.log(`Após a -= 3, valor de a: ${a}`)

// operador de atribuição de multiplicação (*=)
a *= 2; // equivalente a a = a * 2
console.log(`Após a *= 2, valor de a: ${a}`) // comparação e não atribuição >=

// operador de atribuição de divisão (/=)
a /= 4; // equivalente a a = a / 4
console.log(`Após a /= 4, valor de a: ${a}`)

// operador de atribuição de módulo (%=)
a %= 4; // equivalente a a = a % 4
console.log(`Após a %= 4, valor de a: ${a}`)

// operador de atribuição de exponenciação (**=)
a **= 3; // equivalente a a = a ** 5
console.log(`Após a **= 3, valor de a: ${a}`)