function criarPessoa (nome, idade, sexo) {
  return {
    nome,
    idade,
    sexo,
    ligar(){
      console.log('fazendo ligação!')
    }
  }
}

const pessoa1 = criarPessoa('Carlos Henrique', 16, 'M');

console.log(pessoa1);