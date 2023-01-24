function Postagem(titulo, mensagem, autor, visualizacoes, comentarios, aovivo){
  this.titulo = titulo,
  this.mensagem = mensagem,
  this.autor = autor,
  this.visualizacoes = visualizacoes,
  this.comentarios = comentarios,
  this.aovivo = aovivo
}


const novaPostagem = new Postagem('OLÁ MUNDO', 'Escrevendo Olá Mundo com JavaScript', 'Carlos Henrique', 500, ['ótimo', 'muito bom', 'show'], true);
console.log(novaPostagem);
