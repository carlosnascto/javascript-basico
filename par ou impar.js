function exibirTipo(limite){
  for (let i = 0; i <= limite; i ++)
    if (i % 2 == 0)
      console.log(`${i} é PAR`)
    else 
      console.log(`${i} é IMPAR`)
}

exibirTipo(10);