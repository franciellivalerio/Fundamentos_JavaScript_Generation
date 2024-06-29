const leia = require("readline-sync");

let resposta = "S";

do {
let vetorInteiros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

 let numeroProcurado = leia.questionInt("\n Digite um numero de 1 a 10: ");

numeroProcurado < 1 || numeroProcurado > 10 ? console.log("\n O numero digitado não está entre 1 e 10.") : 
console.log(`\n O numero ${numeroProcurado} esta na posicao ${vetorInteiros.indexOf(numeroProcurado) + 1} do vetor.`);

resposta = leia.question("\n Deseja continuar? (S/N): ").toLowerCase();

} while (resposta === "S");