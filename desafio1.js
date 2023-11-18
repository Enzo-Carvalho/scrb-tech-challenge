const prompt = require("prompt-sync")({ sigint: true })

const numero = prompt("Digite um numero inteiro positivo: ")
let resultado = somatorio(numero)
console.log(resultado)

function somatorio(numero) {
    let numeroInteiro = parseInt(numero)
    
    if (!isNaN(numeroInteiro) && numeroInteiro > 0) {
      let somaTotal = 0  
      for(let i = 1; i<numeroInteiro; i++){
        if(i%3 == 0 || i%5 == 0){
            somaTotal = somaTotal + i
        }
      }
      return somaTotal
    } else {
      console.log("O valor digitado não é um número válido.");
      return null
    }
}
