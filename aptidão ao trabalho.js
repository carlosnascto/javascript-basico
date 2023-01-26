const carlos = {nome:'carlos henrique', idade:16,temCurriculo:true};
const gleyson = {nome:'gleyson sampaio', idade:38,temCurriculo:false};

function podeTrabalhar( candidato ){
    if(candidato.idade >18 && candidato.temCurriculo)
      return true
    else
      return false
}

let resposta = podeTrabalhar(carlos)

if(resposta==true)
  console.log('Esta pessoa pode trabalhar')
else
  console.log('Esta pessoa NÃO pode trabalhar')

