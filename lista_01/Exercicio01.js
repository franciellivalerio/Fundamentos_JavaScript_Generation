//Algoritmo que calcula o novo salário de um funcionário, a partir do salário atual e do abono.

//A biblioteca readline-sync é usada para receber entradas do usuario.

const leia = require('readline-sync');

//Função que calcula o novo salário de um funcionário.

function calcularNovoSalario(salario, abono) {
    return salario + abono;
}

//Recebe as entradas do usuario.

let salario = leia.questionFloat("Digite o seu salario:", {limitMessage: "Digite um valor valido para o salario!"});
let abono = leia.questionFloat("Digite o seu abono:",  {limitMessage: "Digite um valor valido para o abono!"});

//Calcula o novo salário e formata o resultado para duas casas decimais.

let novoSalario = calcularNovoSalario(salario, abono);
novoSalario = novoSalario.toFixed(2);

//Imprime o resultado do novo salário.

console.log("O novo salário é: " + novoSalario);

