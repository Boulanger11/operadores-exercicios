//PARTE 1
let a = 20 < 5 && 5 < 2
console.log(a) 

let b = 5 === 5 || 5 === '5'
console.log(b) 

let c = !(20 > 50)
console.log(c)

let d = !(20 > 50 || 50 > 60)

//PARTE 2

//1)
const salarioFixo = 2000
let auxilioCreche = 45.50
const t1 = salarioFixo + auxilioCreche
console.log(t1)

//2
let comissao = 0.1
let jan = 5784.50
const t2 = comissao * jan
console.log(t2)

//3 
let inss = 0.05
const t3 = inss * (t2 + 2000)
console.log(t3)

let descontoInss = t1 * inss
console.log(descontoInss)
//4
// comissão(0.1) + salario - INSS
let fev = 3418.41
let mar = 4124.10 
let abril = 1874.00
let maio = 7000.00
let jun = 9450.00
const janResultado = (comissao * jan) + t1 - descontoInss
const fevResultado = (comissao * fev) + t1 - descontoInss
const marResultado = (comissao * mar) + t1 - descontoInss
const abrilResultado = (comissao * abril) + t1 - descontoInss
const maioResultado = (comissao * maio) + t1 - descontoInss
const junResultado = (comissao * jun) + t1 - descontoInss

console.log(`
Salário Janeiro: ${janResultado}
Salário Fevereiro: ${fevResultado}
Salário Março: ${marResultado}
Salário Abril: ${abrilResultado}
Salário Maio: ${maioResultado}
Salário Junho: ${junResultado}
`)

//5
const somaTotal1 = (comissao * jan) + t1
const somaTotal2 = (comissao * fev) + t1
const somaTotal3 = (comissao * mar) + t1
const somaTotal4 = (comissao * abril) + t1
const somaTotal5 = (comissao * maio) + t1
const somaTotal6 = (comissao * jun) + t1

const totalMeses = somaTotal1 + somaTotal2 + somaTotal3 + somaTotal4 + somaTotal5 + somaTotal6
console.log(totalMeses)

const mediaMeses = totalMeses / 6
console.log(mediaMeses)
