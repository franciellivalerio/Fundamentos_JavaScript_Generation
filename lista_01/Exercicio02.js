
// Algoritmo que calcula a média de um aluno e verificar se ele foi aprovado ou reprovado.
const leia = require('readline-sync');

function calculoMedia(nota1, nota2, nota3, nota4) {
    return (nota1 + nota2 + nota3 + nota4) / 4;
}

let nota1 = leia.questionFloat("Digite sua primeira nota:", {limitMessage: "Digite um valor valido para a nota!"});
let nota2= leia.questionFloat("Digite sua segunda nota:",  {limitMessage: "Digite um valor valido para a nota!"});
let nota3 = leia.questionFloat("Digite sua terceira nota:", {limitMessage: "Digite um valor valido para a nota!"});
let nota4 = leia.questionFloat("Digite sua última nota:",  {limitMessage: "Digite um valor valido para a nota!"});

let media = calculoMedia(nota1, nota2, nota3, nota4);
media = media.toFixed(2);

console.log("A média das notas é: " + media);

if (media >= 7) {
    console.log("Parabens, voce foi aprovado!");
} else {
    console.log("Foi quase! Nao desista e tente novamente no proximo ano. Voce foi Reprovado!");
}