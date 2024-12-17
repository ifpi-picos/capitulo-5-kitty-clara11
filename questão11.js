  // Solicita ao usuário um número positivo
  let numero = parseInt(prompt("Digite um número positivo:"));

  // Verifica se o número é positivo
while (numero < 0 || isNaN(numero)) {
numero = parseInt(prompt("Por favor, digite um número positivo:"));
}

  // Exibe todos os números ímpares de 0 até o número informado
console.log("Números Ímpares de 0 até 9" (numero));
for (let i = 0; i <= numero; i++) {
if (i % 2 !== 0) {
console.log(i);
}
}