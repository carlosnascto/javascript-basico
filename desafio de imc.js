//CALCULANDO IMC
function Cadastro(nome, idade, peso, altura, imc){
  this.nome = nome;
  this.idade = idade
  this.peso = peso;
  this.altura = altura;
  this.imc = peso / altura * altura;
}

let listaDePessoas = [];

listaDePessoas.push(new Cadastro('Carlos Henrique', 16, 52.0, 1.70));
listaDePessoas.push(new Cadastro('Fernanda Aipana', 14, 40.0, 1.60));
listaDePessoas.push(new Cadastro('Gleyson Sampaio', 38, 85.5, 1.55));
listaDePessoas.push(new Cadastro('José de Ribamar', 52, 75.3, 1.40));

for(let i=0; i<listaDePessoas.length ;i++){
  console.log(`Pessoa: ${listaDePessoas[i].nome}, possui o Índice de Massa Corporal: ${listaDePessoas[i].imc} Kg/m2`);
}
