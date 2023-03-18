class Pessoa {
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
  saudacao() {
    console.log(`Olá! Sou ${this.nome}`);
  }
}

class Homem extends Pessoa {
  constructor(nome, idade) {
    super(nome, idade, 'masculino');
  }

  saudacao() {
    console.log(`Olá Sr. ${this.nome}`);
  }
}

class Mulher extends Pessoa {
  constructor(nome, idade) {
    super(nome, idade, 'feminino');
  }

  saudacao() {
    console.log(`Olá Sra. ${this.nome}`);
  }
}

class Filho extends Pessoa {
  constructor(nome, idade, pai, mae) {
    super(nome, idade);
    this.mae = mae;
    this.pai = pai;
  }


  saudacao() {
    console.log(`Olá, sou filho do Sr.${this.pai.nome} da Sra.${this.mae.nome}`);
  }
}

let pai = new Homem('Augusto', 34);
let mae = new Mulher('Catarina', 29);
let filho = new Filho('Mateus', 14, pai, mae);
filho.saudacao();

