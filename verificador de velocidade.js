function verificarVelocidade(velocidade){
  
  const velocidadeMaxima = 70;
  const kmPorPonto = 5;
  const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
  
  if (velocidade <= 70)
    console.log('ok');
  else
    
    if (pontos >= 12)
      console.log('carteira suspensa');
    else
      console.log(`pontos atribuídos a carteira: ${pontos}`);
}

verificarVelocidade(65);