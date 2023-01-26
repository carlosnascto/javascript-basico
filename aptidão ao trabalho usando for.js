// ARRAY DE OBJETOS
let candidatos =[
  {nome:'Carlos Henrique', idade:16, temCurriculo:true},
  {nome:'Gleyson Sampaio', idade:38, temCurriculo:true},
  {nome:'Paulo Henrique', idade:33, temCurriculo:true},
  {nome:'Gleydirlene Sampaio', idade:38, temCurriculo:false}
];


function podeTrabalhar(){  // FUNÇÃO
  for(let i = 0; i < candidatos.length; i++) { // VERIFICANDO OS ÍNDICES
    
    if(candidatos[i].idade >= 18 && candidatos[i].temCurriculo)  // CONDIÇÃO PARA VERIFICAR A APTIDÃO
      console.log(candidatos[i].nome + ' ' + 'está apto a trabalhar')
    else
      console.log(candidatos[i].nome + ' ' + 'não está apto a trabalhar')
  }
}

podeTrabalhar();





