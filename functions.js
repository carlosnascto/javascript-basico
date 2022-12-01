let corInicial = 'branco';

function mudarCor(cor, tom){
  corInicial = cor + ' ' + tom;
};

console.log(corInicial);
mudarCor('azul','claro');
console.log(corInicial);