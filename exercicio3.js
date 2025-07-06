const readline = require("readline-sync");

let salarioBruto = readline.questionInt("Digite o salario bruto: ");
let adicionalNoturno = readline.questionInt('Digite o valor adicional noturno: ');
let horasExtras = readline.questionInt("Digite o valor das horas extras: ");
let descontos = readline.questionInt("Digite valor dos descontos: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("Salário Liquido: R$ " + salarioLiquido)
