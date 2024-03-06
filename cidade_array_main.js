const readlineSync = require("readline-sync")
const Cidade = require("./cidade_array_class.js")

console.log("================================================")
console.log("   Dados Da Cidade E População   ")
console.log("================================================")

let nome = readlineSync.question("Digite O Nome Da Cidade: ")
let estado = readlineSync.question("Digite O Estado Da Cidade: ")
let numPopulacao = readlineSync.question("Digite O Numero Da Populacao Da Cidade: ")
let numHomens = readlineSync.question("Digite A Quantidade De Homens Da Cidade: ")
let numMulheres = readlineSync.question("Digite A Quantidade De Mulheres Da Cidade: ")

const cidade1 = new Cidade(nome, estado, numPopulacao, numHomens, numMulheres)

let homensPercentual = cidade1.percentualHomens()
let mulheresPercentual = cidade1.percentualMulheres()

console.log("================================================")
console.log("   Resultado Sobre Dados Da Cidade   ")
console.log("================================================")

console.log(`O Percentual De Homens E = ${homensPercentual.toFixed(2)} de ${numPopulacao} Habitantes`)
console.log(`O Percentual De Mulheres E = ${mulheresPercentual.toFixed(2)} de ${numPopulacao} Habitantes`)
console.log("================================================")