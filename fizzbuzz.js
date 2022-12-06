function fizzBuzz(entrada) {
  if (typeof entrada !== "number") return "não é um número"
  else if (entrada % 3 === 0 && entrada % 5 === 0) return "fizzbuzz"
  else if (entrada % 3 === 0) return "fizz"
  else if (entrada % 5 === 0) return "buzz"
  else return entrada;
}

const resultado = fizzBuzz(30);
console.log(resultado);
