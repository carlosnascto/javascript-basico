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
  constructor(nome, idade, sexo) {
    super(nome, idade, sexo);
  }

  saudacao() {
    console.log(`Olá Sr. ${this.nome}`);
  }
}

class Mulher extends Pessoa {
  constructor(nome, idade, sexo) {
    super(nome, idade, sexo);
  }

  saudacao() {
    console.log(`Olá Sra. ${this.nome}`);
  }
}

class Filho extends Pessoa {
  constructor(nome, idade, mae) {
    super(nome, idade);
    this.mae = new Mulher();
  }


  saudacao() {
    console.log('Olá, sou filho!');
  }
}

let filho = new Filho('igor', 14);
filho.saudacao();

