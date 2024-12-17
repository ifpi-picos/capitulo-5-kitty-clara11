 // Solicita ao usuário um número positivo
 let numero = parseInt(prompt("Digite um número positivo:"));

 // Verifica se o número é positivo
while (numero < 0 || isNaN(numero)) {
numero = parseInt(prompt("Por favor, digite um número positivo:"));
}

let contador = 0;

// Exibe todos os números pares de 0 até o número informado
console.log("Números pares 0 até 10"(numero));
while (contador <= numero) {
if (contador % 2 === 0) {
console.log(contador);
}
contador++;
}