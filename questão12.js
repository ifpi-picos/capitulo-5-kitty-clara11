 // Solicita ao usuário um número
 let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

 // Verifica se o número é válido
while (numero < 0 || isNaN(numero)) {
numero = parseInt(prompt("Por favor, digite um número válido (não negativo):"));
}

let fatorial = 1;

function factorial(numero) {
  // Calcula o fatorial usando um laço for
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;

}
console.log(factorial(numero));