let mesada = 50;

function valorAleatorio(n1, n2){
  return Math.floor(Math.random() * (n2 - n1 + 1)) + n1
}

while(mesada > 0){
  let valorDoce = valorAleatorio(2, 8);
  if(valorDoce > mesada)
   valorDoce = mesada;
  
  console.log("Doce do valor: " + valorDoce + " Adicionado no carrinho");
  mesada = mesada - valorDoce;
}

console.log("Mesada: " + mesada);
console.log("Anya gastou toda a sua mesada em doces");