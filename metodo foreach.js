// MÉTODO FOREACH
const users = [
  {id:1, name:'Carlos', points:200},
  {id:2, name:'Grazi', points:150},
  {id:3, name:'Erick', points:100},
  {id:4, name:'Maria', points:250}
]

users.forEach((item, index)=>{
  console.log(`${index} - ${item.name} possui ${item.points} pontos`); //interpolação
})