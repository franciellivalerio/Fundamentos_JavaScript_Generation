const leia = require("readline-sync");

function numeroParOuImpar(numero) {
    if (numero % 2 === 0 && numero < 0 ) {
        console.log("O número é par e negativo");
    } else if (numero % 2 === 0 && numero > 0) {
        console.log("O número é par e positivo");
    } else if (numero % 2 !== 0 && numero < 0) {
        console.log("O número é ímpar e negativo");
    } else if (numero % 2 !== 0 && numero > 0) {
        console.log("O número é ímpar e positivo");
    } else {
        console.log("O número é neutro");
    }
}

const numero = leia.questionInt("Digite um numero: ");
numeroParOuImpar(numero);