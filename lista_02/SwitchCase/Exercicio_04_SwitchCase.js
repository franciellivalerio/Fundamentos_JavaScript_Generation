const leia = require("readline-sync");

let continuar;
let saldoAtual = 1000.00;

do {
    console.log("\n Bem-vinde ao Banco Digital MoneySecurity! O que deseja fazer hoje? ");
    
    console.log("\n [1] - Consultar saldo ");
    console.log("\n [2] - Sacar ");
    console.log("\n [3] - Depositar ");

    let codigo = parseInt(leia.question("\n Por favor, digite o numero da opcao desejada: "));

    switch (codigo) {
        case 1:
            console.log("\n O seu saldo atual e de R$ " + saldoAtual.toFixed(2) + ".");
            break;
        case 2:
            let valorSaque = parseFloat(leia.question("\n Por favor, digite o valor que deseja sacar: "));
            if (valorSaque > saldoAtual) {
                console.log("\n Saldo insuficiente. Por favor, tente novamente.");
            } else {
                saldoAtual -= valorSaque;
                console.log("\n Voce sacou R$ " + valorSaque.toFixed(2) + ". O seu saldo atual e de R$ " + saldoAtual.toFixed(2) + ".");
            }
            break;
        case 3:
            let valorDeposito = parseFloat(leia.question("\n Por favor, digite o valor que deseja depositar: "));
            saldoAtual += valorDeposito;
            console.log("\n Voce depositou R$ " + valorDeposito.toFixed(2) + ". O seu saldo atual e de R$ " + saldoAtual.toFixed(2) + ".");
            break;
        default:
            console.log("\n Opcao invalida. Por favor, tente novamente.");
            break;
    }

    continuar = leia.question("\n Deseja realizar mais alguma operacao? (sim/nao): ").toLowerCase();
} while (continuar === 'sim');

console.log("\n Obrigade por utilizar o Banco Digital MoneySecurity! Tenha um otimo dia!");