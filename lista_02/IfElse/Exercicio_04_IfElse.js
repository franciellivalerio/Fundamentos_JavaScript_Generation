const leia = require("readline-sync");

console.log("\n Bem-vinde ao Jogo Qual animal estou pensando! Vamos jogar? ");

let animal = leia.question("\n Por favor, digite o nome do animal que estou pensando: ").toLowerCase();
let classe;
let especie;

if (animal === "vertebrado") {
    classe = leia.question("\n Qual a classe desse animal? ").toLowerCase();
    if (classe === "mamifero") {
        especie = leia.question("\n Qual a especie desse animal? ").toLowerCase();
        if (especie === "onivoro") {
            console.log("\n Homem!");
        } else if (especie === "herbivoro") {
            console.log("\n Vaca!");
        }
    } else if (classe === "ave") {
        especie = leia.question("\n Qual a especie dessa ave? ").toLowerCase();
        if (especie === "carnivoro") {
            console.log("\n Aguia!");
        } else if (especie === "onivoro") {
            console.log("\n Pomba!");
        }
    }
} else if (animal === "invertebrado") {
    classe = leia.question("\n Qual a classe desse animal? ").toLowerCase();
    if (classe === "inseto") {
        especie = leia.question("\n Qual a especie desse animal? ").toLowerCase();
        if (especie === "hematofago") {
            console.log("\n Pulga!");
        } else if (especie === "herbivoro") {
            console.log("\n Lagarta!");
        }
    } else if (classe === "anelideo") {
        especie = leia.question("\n Qual a especie desse? ").toLowerCase();
        if (especie === "hematofago") {
            console.log("\n Sanguessuga!");
        } else if (especie === "onivoro") {
            console.log("\n Minhoca!");
        }
    }
}