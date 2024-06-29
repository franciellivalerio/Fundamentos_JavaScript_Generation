const leia = require("readline-sync");

let numero01 = parseInt(leia.questionInt("Digite o primeiro numero: "));
let numero02 = parseInt(leia.questionInt("Digite o segundo numero: "));

// Verifica se o primeiro número é menor que o segundo número
if(numero01 >= numero02) {
    console.log("Intervalo inválido. O primeiro número deve ser menor que o segundo número.")
    } else {
// Loop para verificar se o número é divisível por 3 e por 5
        for(let i = numero01; i <= numero02; i++) {

            if(i % 3 === 0 && i % 5 === 0) {

                console.log("O número " + i + " é divisível por 3 e por 5.")
            }
    }
}