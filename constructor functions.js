function Pessoa(nome, idade, sexo){
  this.nome = nome,
  this.idade = idade,
  this.sexo = sexo,
  this.ligar = function(){
    console.log('fazendo ligação')
  }
}

const novaPessoa = new Pessoa('Fernanda', 13, 'F');
console.log(novaPessoa);