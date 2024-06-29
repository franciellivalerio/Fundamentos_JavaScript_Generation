const leia = require("readline-sync");

// iniciando com uma matriz vazia com tamanho pré-definido 3x3
let matrizQuadrada = new Array(3);

// preenchendo a matriz com vetores de tamanho 3

for (indiceLinha = 0; indiceLinha < matrizQuadrada.length; indiceLinha++){
    matrizQuadrada[indiceLinha] = new Array(3);
}

// preenchendo a matriz com valores informados pelo usuário
for ( indiceLinha = 0; indiceLinha < matrizQuadrada.length; indiceLinha++ ){

    for ( indiceColuna = 0; indiceColuna < matrizQuadrada.length; indiceColuna++){

        matrizQuadrada[indiceLinha][indiceColuna] = leia.questionInt(`\n Digite o numero do elemento [${indiceLinha}][${indiceColuna}]: `);


    }
}

// somando os elementos da diagonal principal

let somaDiagonalPrincipal = 0;

for (indiceLinha = 0; indiceLinha < matrizQuadrada.length; indiceLinha++){

    console.log("\n Os elementos da diagonal principal são: " , matrizQuadrada[indiceLinha][indiceLinha]);

    somaDiagonalPrincipal += matrizQuadrada[indiceLinha][indiceLinha];

}

console.log(`\n A soma dos elementos da diagonal principal e de ${somaDiagonalPrincipal}.`);

// somando os elementos da diagonal secundária

let somaDiagonalSecundaria = 0;

for (indiceLinha = 0; indiceLinha < matrizQuadrada.length; indiceLinha++){

    console.log("\n Os elementos da diagonal secundária são: " , matrizQuadrada[indiceLinha][matrizQuadrada.length - 1 - indiceLinha]);

    somaDiagonalSecundaria += matrizQuadrada[indiceLinha][matrizQuadrada.length - 1 - indiceLinha];

}

console.log(`\n A soma dos elementos da diagonal secundária e de ${somaDiagonalSecundaria}.`);