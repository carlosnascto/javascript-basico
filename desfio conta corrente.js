let contaCorrente = {
  saldoConta: 1000,
  numeroAgencia: '1234-0',
  numeroConta: 001,
  cpf: '123.456.789-00',
  nomeCorrentista: 'Carlos Henrique',
  
  depositar: function(valorDeposito){
  this.saldoConta = valorDeposito + this.saldoConta;
}, 
  sacar: function(valorSaque){
  this.saldoConta = this.saldoConta - valorSaque;  
},
  exibirSaldo: function(){
  return console.log(`O saldo da conta é de R$ ${this.saldoConta}`)
  }
}

contaCorrente.depositar(100);
contaCorrente.sacar(568);

contaCorrente.exibirSaldo();
