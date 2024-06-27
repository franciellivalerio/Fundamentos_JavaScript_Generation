const leia = require('readline-sync');

let nome;
let idade;

nome = leia.question("Digite o seu nome: ");
idade = leia.questionInt("Digite a sua idade: ");

if(idade >= 0 && idade <= 10){
    console.log("\n O seu Plano de Saúde custará R$ 100,00 por mês")

} else if(idade >= 11 && idade <= 29){
    console.log("\n O seu Plano de Saúde custará R$ 200,00 por mês")

} else if (idade >= 30 && idade <= 59) {
    console.log("\n O seu Plano de Saúde custará R$ 300,00 por mês")

}else if (idade >= 60) {
    console.log("\n O seu Plano de Saúde custará R$ 500,00 por mês")
}
