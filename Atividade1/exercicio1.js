const readline = require("readline-sync");

let salario = Number(readline.question("Digite o Salario: "));
let abono = Number(readline.question("Digite valor do Abono: "));

let novoSalario = salario + abono;

console.log("Novo Salario: R$" + novoSalario);