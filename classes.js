class Endereco {
  logradouro
  numero
  bairro
  complemento
  cidade
  estado
}
class Pessoa{
  nome
  dataNascimento
  cpfCnpj
  sexo
  nomeMae
  estadoCivil
  rendAtual
  telefone
  celular
  email
  endereco:Endereco
  
  constructor(endereco){
    this.endereco = endereco;
  }
}

let endereco = new Endereco();
let pessoa1 = new Pessoa(endereco);
let pessoa2 = new Pessoa(endereco)

let pessoas = [];
pessoas.push(pessoa1);
pessoas.push(pessoa2);

pessoa1.nome='Carlos Henrique';
pessoa1.dataNascimento='16/04/2006';
pessoa1.cpfCnpj='123.456.789-00';
pessoa1.sexo='masculino';
pessoa1.nomeMae='Gleydirlene Sampaio';
pessoa1.estadoCivil='solteiro';
pessoa1.rendAtual=100.20;
pessoa1.telefone='3653-0000';
pessoa1.celular='(00)12345 6789';
pessoa1.email='carlos@gmail.com';

pessoa2.nome='Gleydirlene Sampaio';
pessoa2.dataNascimento='25/11/1985';
pessoa2.cpfCnpj='123.456.789-00';
pessoa2.sexo='feminino';
pessoa2.nomeMae='Marilene Sampaio';
pessoa2.estadoCivil='casada';
pessoa2.rendAtual=1500.70;
pessoa2.telefone='3653-0000';
pessoa2.celular='(00)12345 6789';
pessoa2.email='gleydirlene@gmail.com';

pessoa1.endereco.logradouro='Rua Osvaldo Cruz';
pessoa1.endereco.numero=1780;
pessoa1.endereco.bairro='Canaã';
pessoa1.endereco.complemento='';
pessoa1.endereco.cidade='Santa Inês';
pessoa1.endereco.estado='Maranhão';

pessoa2.endereco.logradouro='Rua Osvaldo Cruz';
pessoa2.endereco.numero=1780;
pessoa2.endereco.bairro='Canaã';
pessoa2.endereco.complemento='';
pessoa2.endereco.cidade='Santa Inês';
pessoa2.endereco.estado='Maranhão';

let gerarCsv = function(){
     
    let csv = 'Nome; Data de Nascimento\n';
 
    pessoas.forEach(function(row) {
            csv += row.nome;
            csv += ';'+ row.dataNascimento;
            csv += '\n';
    });
  
    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'conta-rural-fichas-cadastrais.csv';
    hiddenElement.click();
};
gerarCsv();





