const leia = require("readline-sync");


function possibilidadeDeDoar(nomeDoador, idadeDoador, tipoDeDoacao) {

    idadeDoador = parseInt(idadeDoador);
    nomeDoador = nomeDoador.toString();
    nomeDoador = nomeDoador.toUpperCase();
    tipoDeDoacao = tipoDeDoacao.toLowerCase();

        if (idadeDoador < 60 && idadeDoador <= 69 && tipoDeDoacao == "sim") {
            
            return "\n Você nao esta apto para doar sangue!";
        
        } else if (idadeDoador < 16) {
            
            return "\n Você não pode doar sangue, pois e menor de idade.";
        
        } else if (idadeDoador > 69) {
            
            return "\n Você não pode doar sangue, pois e maior de idade.";
        
        } else if (tipoDeDoacao != "sim" && tipoDeDoacao != "nao") {
            
            return "\n Resposta invalida. Por favor, responda 'sim' ou 'nao'.";
        
}
}

let nomeDoador = leia.question("\n Por favor, digite seu nome: ");
let idadeDoador = leia.question("\n Por favor, digite sua idade: ");
let tipoDeDoacao = leia.question("\n Responda, e a sua primeira vez doando sangue? (sim ou nao): ");

console.log(possibilidadeDeDoar(nomeDoador, idadeDoador, tipoDeDoacao));

