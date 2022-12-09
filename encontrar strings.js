let desenhoAnimado = {
  nomePersonagem: 'Fred',
  nomeDesenho: 'Scooby-Doo',
  dataLancamento: 2000,
  nomeDiretor: 'Júnior Calieri'
}

function exibirPropriedades(objeto) {
  for (propiedade in objeto)
    if (typeof objeto[propiedade] === 'string')
      console.log(propiedade, objeto[propiedade]);
} 

exibirPropriedades(desenhoAnimado);