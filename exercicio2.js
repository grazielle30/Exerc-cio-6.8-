const readline = require("readline-sync");

let nota1 = parseFloat(readline.question("Digite a nota 1:"));
let nota2 = parseFloat(readline.question("Digite a nota 2:"));
let nota3 = parseFloat(readline.question("Digite a nota 3:"));
let nota4 = parseFloat(readline.question("Digite a nota 4:"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("Média final: " + media.toFixed(1));


