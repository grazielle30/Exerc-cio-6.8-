const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o numero 1: "));
let numero2 = Number(readline.question("Digite o numero 2: "));
let numero3 = Number(readline.question("Digite o numero 3: "));
let numero4 = Number(readline.question("Digite o numero 4: "));

let diferença = (numero1 * numero2) - (numero3 * numero4);

console.log("Diferença: " + diferença);

