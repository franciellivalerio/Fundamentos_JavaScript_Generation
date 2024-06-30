const leia = require("readline-sync");

let nomeColaborador = leia.question("\n Digite o seu nome: ");

let salarioAtual = leia.questionFloat("\n Digite o seu salário atual: ");

let codigoCargo = leia.questionInt("\n Digite o codigo do seu cargo: ");

let novoSalario = parseFloat(0);

switch (codigoCargo) {
    case 1:
        novoSalario = salarioAtual + (salarioAtual * 0.1); // 10%
        console.log(`\n O novo salário do colaborador ${nomeColaborador} é de R$ ${novoSalario.toFixed(2)}`);
        console.log("\n Cargo: Gerente");

        break;

    case 2:

        novoSalario = salarioAtual + (salarioAtual * 0.07); // 7%
        console.log(`\n O novo salário do colaborador ${nomeColaborador} é de R$ ${novoSalario.toFixed(2)}`);
        console.log("\n Cargo: Vendedor");

        break;

    case 3:

        novoSalario = salarioAtual + (salarioAtual * 0.09); // 9%
        console.log(`\n O novo salário do colaborador ${nomeColaborador} é de R$ ${novoSalario.toFixed(2)}`);
        console.log("\n Cargo: Supervisor");

        break;

    case 4:

        novoSalario = salarioAtual + (salarioAtual * 0.06); // 6%
        console.log(`\n O novo salário do colaborador ${nomeColaborador} é de R$ ${novoSalario.toFixed(2)}`);
        console.log("\n Cargo: Motorista");

        break;

    case 5:

        novoSalario = salarioAtual + (salarioAtual * 0.05); // 5%
        console.log(`\n O novo salário do colaborador ${nomeColaborador} é de R$ ${novoSalario.toFixed(2)}`);
        console.log("\n Cargo: Estoquista");

        break;

    case 6:

        novoSalario = salarioAtual + (salarioAtual * 0.08); // 8%
        console.log(`\n O novo salário do colaborador ${nomeColaborador} é de R$ ${novoSalario.toFixed(2)}`);
        console.log("\n Cargo: Tecnico de TI");

        break;

    default:

        console.log("\n Código de cargo inválido! Por favor, digite um código válido.");
}

