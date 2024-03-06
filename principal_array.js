const readlineSync = require("readline-sync")

let numArray1 = [ 1 , 2 , 3 , 4 , 5 ]
let numArray2 = [ ]
let numArray3 = [ ]

// let contador = 0
let valor = 0

function soma(){
    for(let i=0;i<=4;i++){
        numArray3[i] = numArray1[i] + numArray2[i]
    }
    console.log("=========================================================")
    return numArray3
    // console.log("=========================================================")
}
function ler(){
    let contador = 0

while(contador <= 4){
    valor = Number(readlineSync.question("Digite Um Valor Para Ser Guardado: "))
    numArray2.push(valor)
    contador += 1
}
    return numArray2
}

console.log("=========================================================")
console.log("   Soma Dos Valores De 2 Arrays   ")
console.log("=========================================================")

let leia = ler()
let resposta = soma()


 console.log("O Array 2 É = ", leia)
 console.log("O Array 3 É = ", resposta)

 //soma()