//solicita ao usuario 3 numeros 
let numero1 =parseInt(prompt("digite o primeiro numero:"))
let numero2 =parseInt(prompt("digite o segundo numero:"))
let numero3 =parseInt(prompt("digite o terceiro numero"))
//verifica qual é o maior numero
let maiorNumero =numero1;
if(numero2 > maiorNumero){
    maiorNumero = numero2;
}

if(numero3 >maiorNumero){
    maiorNumero = numero3;
}
//exibe o maior numero
console.log("o maior numero é:"+ maiorNumero);