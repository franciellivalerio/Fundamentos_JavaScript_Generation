const leia = require("readline-sync");

let numero;
let totalDivisivelPor3 = 0;
let soma = 0;

// Solicita o primeiro número

numero = leia.questionInt("\n Digite um numero (ou o numero zero para sair): ");

do {
    // Verifica se o número é divisível por 3
    if (numero % 3 === 0) {
        totalDivisivelPor3++;
        soma += numero;      
    }

    // Solicita o próximo número
    numero = leia.questionInt("\n Digite um numero (ou o numero zero para sair): ");
} while (numero !== 0);

// Calcula a média dos números divisíveis por 3 após sair do loop
let media = totalDivisivelPor3 > 0 ? soma / totalDivisivelPor3 : 0;

console.log(`\n A media dos números divisíveis por 3 é ${media} `);