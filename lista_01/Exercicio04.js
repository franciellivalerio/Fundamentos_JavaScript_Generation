// Algoritmo que calcula o produto de dois valores e subtrai o produto de outros dois valores.

//A biblioteca readline-sync é usada para receber entradas do usuario.

const leia = require('readline-sync');

//Função que calcula o produto de dois valores e subtrai o produto de outros dois valores.

function calculoQuatroValores(valor1, valor2, valor3, valor4) {
    return (valor1*valor2) - (valor3*valor4);
}

//Recebe as entradas do usuario.

let valo1 = leia.questionFloat("Digite o primeiro valor:", {limitMessage: "Por favor, digite um valor valido!"});
let valor2= leia.questionFloat("Digite o segundo valor:",  {limitMessage: "Por favor, digite um valor valido!"});
let valor3 = leia.questionFloat("Digite o terceiro valor:", {limitMessage: "Por favor, digite um valor valido!"});
let valor4 = leia.questionFloat("Digite o quarto valor:",  {limitMessage: "Por favor, digite um valor valido!"});

//Calcula o produto de dois valores e subtrai o produto de outros dois valores.

let resultado = calculoQuatroValores(valo1, valor2, valor3, valor4);
resultado = resultado.toFixed(2);

//Imprime o resultado da operação.

console.log("O resultado da operação é: " + resultado);