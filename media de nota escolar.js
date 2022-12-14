let array = [60,60,60,60];//array de notas

function calcularMedia(array){
  let soma = 0;// declarando uma variável
  for (valor of array) soma += valor; //criando um loop para somar cada valor
  return soma/(array.length); //retornando média
}

function mediaDoAluno(notas){ // função
  const media = calcularMedia(notas)
    if(media < 59) return 'F';
    if(media < 69) return 'D';
    if(media < 79) return 'C';
    if(media < 89) return 'B';
    return 'A'
}

console.log(mediaDoAluno(array));
