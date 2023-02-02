let primeiroNumero = Number(prompt('Digite um número:'))
let segundoNumero = Number(prompt('Digite um número:'))

let comparacao1 = primeiroNumero > segundoNumero
let comparacao2 = primeiroNumero === segundoNumero

let comparacao3 = primeiroNumero % segundoNumero
let resultado3 = comparacao3 === 0

let comparacao4 = segundoNumero % primeiroNumero
let resultado4 = comparacao4 === 0

console.log(`
O primeiro numero é maior que o segundo? ${comparacao1}
O primeiro numero é igual ao segundo? ${comparacao2}
O primeiro numero é divisível pelo segundo? ${resultado3}
O segundo numero é divisível pelo primeiro? ${resultado4}
`) 