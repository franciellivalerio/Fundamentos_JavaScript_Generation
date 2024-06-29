const leia = require("readline-sync");

let idade;
let totalMenorIgual21 = 0;
let totalMaiorIgual50 = 0;

// Solicita a primeira idade
idade = leia.questionInt("\n Digite a sua idade (ou um numero negativo para sair): ");

// Loop para ler múltiplas idades
while (idade >= 0) {
    if (idade < 21) {
        totalMenorIgual21++;
    } else if (idade > 50) {
        totalMaiorIgual50++;
    }

    // Solicita a próxima idade
    idade = leia.questionInt("\n Digite a sua idade (ou um numero negativo para sair): ");
}

console.log(`\n Total de pessoas com idade menor que 21 anos: ${totalMenorIgual21}\n`);
console.log(`\n Total de pessoas com idade maior que 50 anos: ${totalMaiorIgual50}\n`);


