const multiplosDe3Ou5 = [];

function somar(limite){
  for (let i = 0; i <= limite; i++)
  if (i % 3 === 0 || i % 5 === 0)
    multiplosDe3Ou5.push(i);
 
}

somar(10);
const soma = multiplosDe3Ou5.reduce((a, b) => a + b);
console.log(soma);
