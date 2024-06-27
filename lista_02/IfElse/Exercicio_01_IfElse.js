const leia = require("readline-sync");

// Função para calcular a soma dos dois primeiros números e comparar com o terceiro número

function calcularSomaEComparar(numeroA, numeroB, numeroC) {

    numeroA = parseFloat(numeroA);
    numeroB = parseFloat(numeroB);
    numeroC = parseFloat(numeroC);

    if (numeroA + numeroB > numeroC) {
    
        return "\n A soma dos dois primeiros números é maior que o terceiro numero.";
    
    } else if (numeroA + numeroB < numeroC) {
    
        return "\n A soma dos dois primeiros números é menor que o terceiro numero.";
    
    } else if (numeroA + numeroB == numeroC) {
    
        return "\n A soma dos dois primeiros números é igual ao terceiro numero.";
    }
}

let numeroA = leia.question("\n Digite o primeiro numero: ");
let numeroB = leia.question("\n Digite o segundo numero: ");
let numeroC = leia.question("\n Digite o terceiro numero: ");

console.log(calcularSomaEComparar(numeroA, numeroB, numeroC));