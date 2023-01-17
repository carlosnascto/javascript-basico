let endereco = {
  rua: 'rua osvaldo cruz',
  cidade: 'santa inês',
  cep: '65300-395'
};

function exibirEndereco(enderecoExibido){
  for (let chave in enderecoExibido)
    console.log(`${chave}: ${enderecoExibido[chave]}`);
}

exibirEndereco(endereco);