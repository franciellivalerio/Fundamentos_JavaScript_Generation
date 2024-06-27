const leia = require ("readline-sync");

let valorTotal = 0;


function calcularPrecoDoProduto(codigoDoProduto, quantidadeDoProduto) {
        
        codigoDoProduto = parseInt(codigoDoProduto);
        quantidadeDoProduto = parseInt(quantidadeDoProduto);
        
        switch (codigoDoProduto) {
            case 1:
                return quantidadeDoProduto * 10;
            case 2:
                return quantidadeDoProduto * 15;
            case 3:
                return quantidadeDoProduto * 18;
            case 4:
                return quantidadeDoProduto * 12;
            case 5:
                return quantidadeDoProduto * 8;
            case 6:
                return quantidadeDoProduto * 13;
            default:
                return "\n Codigo invalido. Por favor, digite um codigo valido.";
        }
    
}

console.log("\n Bem-vinde a lanchonete BomSabor! Aqui esta o nosso cardápio: ");
console.log(" \n [1] - Cachorro-quente - R$ 10,00 ");
console.log(" \n [2] - X-Salada - R$ 15,00 ");
console.log(" \n [3] - X-Bacon - R$ 18,00 ");
console.log(" \n [4] - Bauru - R$ 12,00 ");
console.log(" \n [5] - Refrigerante - R$ 8,00 ");
console.log(" \n [6] - Suco de Laranja - R$ 13,00 ");

do {
    let codigoDoProduto = leia.question("\n Por favor, digite o codigo do produto que deseja comprar: ");
    let quantidadeDoProduto = leia.question("\n Por favor, digite a quantidade do produto que deseja comprar: ");

    let valorDoPedido = calcularPrecoDoProduto(codigoDoProduto, quantidadeDoProduto);
    if (typeof valorDoPedido === 'number') {
        valorTotal += valorDoPedido;
    } else {
        console.log("Por favor, digite um codigo que conste no nosso cardapio."); 
    }

    continuar = leia.question("\n Deseja fazer mais um pedido? (sim/nao): ").toLowerCase();
} while (continuar === 'sim');

console.log("\n O valor total da sua compra e de R$ " + valorTotal.toFixed(2) + ". Obrigade pela preferencia!");
