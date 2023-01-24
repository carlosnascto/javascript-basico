function Produtos(produto, quantidade, valorUnitario, valorTotal){
  this.produto = produto;
  this.quantidade = quantidade;
  this.valorUnitario = valorUnitario;
  this.valorTotal = quantidade*valorUnitario;
}

let carrinho = [];

carrinho.push(new Produtos('Arroz', 5, 3.99));
carrinho.push(new Produtos('Feijão', 1, 4.50));
carrinho.push(new Produtos('Macarrão', 8, 2.75));

let quantidadeItens = 0;
for(let i=0; i<carrinho.length;i++){
  quantidadeItens = quantidadeItens + carrinho[i].quantidade
}

let valorTotalCompra = 0;
for(let i=0; i<carrinho.length;i++){
  valorTotalCompra = valorTotalCompra + carrinho[i].valorTotal
}

console.log(`No seu carrinho temos um total de ${quantidadeItens} itens. O total da compra é: ${valorTotalCompra}`);




