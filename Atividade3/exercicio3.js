const readline = require("readline-sync");

let salarioBruto = Number(readline.question("Digite o salario bruto: "));
let adicionalNoturno = Number(readline.question('Digite o valor adicional noturno: '));
let horasExtras = Number(readline.question("Digite o valor das horas extras: "));
let descontos = Number(readline.question("Digite valor dos descontos: "))

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("Salário Liquido: R$ " + salarioLiquido)