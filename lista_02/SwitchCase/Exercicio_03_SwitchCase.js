const leia = require("readline-sync");

do {
    console.log("\n Bem Vinde a Calculadora Virtual! \n");

    let numero1 = leia.questionFloat("\n Digite o primerio numero: ");
    let numero2 = leia.questionFloat("\n Digite o segundo numero: ");

    console.log("\n Código das operacoes \n");
    console.log("\n 1 - Adição");
    console.log("\n 2 - Subtração");
    console.log("\n 3 - Multiplicação");
    console.log("\n 4 - Divisão");

    let codigoOperaçao = leia.questionInt("\n Digite o codigo da operacao desejada: ");


    switch (codigoOperaçao) {
        case 1:

            numero1 + numero2;
            console.log(`\n A soma dos números ${numero1} e ${numero2} é igual a ${numero1 + numero2}`);

            break;

        case 2:

            numero1 - numero2;
            console.log(`\n A subtração dos números ${numero1} e ${numero2} é igual a ${numero1 - numero2}`);

            break;

        case 3:

            numero1 * numero2;
            console.log(`\n A multiplicação dos números ${numero1} e ${numero2} é igual a ${numero1 * numero2}`);

            break;

        case 4:

            numero1 / numero2;
            console.log(`\n A divisão dos números ${numero1} e ${numero2} é igual a ${numero1 / numero2}`);

            break;

        default:

            console.log("\n Código de cargo inválido! Por favor, digite um código válido.");

    }

    continuar = leia.question("\n Deseja realizar outra operacao? (sim/nao): ").toLowerCase();
} while (continuar === "sim");

console.log("\n Obrigade por utilizar a Calculadora Virtual! \n");


