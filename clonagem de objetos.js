// CLONANDO OBJETOS
const celular = {
  marca: 'samsung',
  preco: 1200,
  modelo: 'a20'
}

const celula2 = Object.assign({ //atribuindo valores de um objeto para outro
  qtdCameras : 2 //novo objeto
},celular); 

console.log(celula2);