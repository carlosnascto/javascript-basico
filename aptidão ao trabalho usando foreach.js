let candidatos =[
  {nome:'Carlos Henrique', idade:16, temCurriculo:true},
  {nome:'Gleyson Sampaio', idade:38, temCurriculo:true},
  {nome:'Paulo Henrique', idade:33, temCurriculo:true},
  {nome:'Gleydirlene Sampaio', idade:38, temCurriculo:false}
];

candidatos.forEach((item) => {
  
    if(item.idade >= 18 && item.temCurriculo) 
      console.log(item.nome + ' ' + 'está apto a trabalhar')
    else
      console.log(item.nome + ' ' + 'não está apto a trabalhar')
  })

