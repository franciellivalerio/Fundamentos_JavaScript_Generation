// Algortimo que calcula o salario liquido de um funcionario, com base no salario bruto, adicional noturno, horas extras e descontos.

//A biblioteca readline-sync é usada para receber entradas do usuario.

const leia = require('readline-sync');

//Função que calcula o salario liquido de um funcionario.

function salarioBruto(salario, adicionalNoturno, horasExtras, descontos) {
    return (salario + adicionalNoturno + (horasExtras*5) )- descontos;
}

//Recebe as entradas do usuario.

let salario = leia.questionFloat("Digite seu salario bruto:", {limitMessage: "Digite um valor valido para o salario"});
let adicionalNoturno= leia.questionFloat("Digite seu adicional noturno:",  {limitMessage: "Digite um valor valido para o adicional!"});
let horasExtras = leia.questionFloat("Digite quanto ganhou de hora extra:", {limitMessage: "Digite um valor valido para a as horas extras!"});
let descontos = leia.questionFloat("Digite seus descontos:",  {limitMessage: "Digite um valor valido para os descontos!"});

//Calcula o salario liquido e formata o resultado para duas casas decimais.

let salarioLiquido = salarioBruto(salario, adicionalNoturno, horasExtras, descontos);
salarioLiquido = salarioLiquido.toFixed(2);

//Imprime o resultado do Salário Liquido.

console.log("O Salario Liquido é: " + salarioLiquido);