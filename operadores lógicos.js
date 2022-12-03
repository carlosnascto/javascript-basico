// OPERADORES LÓGICOS &&, ||, !

function maiorDeIdade (idade){
  if (idade >= 18)
    return true;
  else 
    return false;
}

let possuiIdadeMinima = maiorDeIdade(18);
const possuiCurriculo = true;

function podeTrabalhar(){
  if (possuiIdadeMinima && possuiCurriculo)
   return true
  else 
   return false;
}

podeTrabalhar();

