//função para verificar se pelo menos um numero é multiplo do outro
function verificarmultiplo(){
    // Solicita os dois números ao usuário
    let numero1 = parseInt(prompt("Digite o primeiro número:"));
    let numero2 = parseInt(prompt("Digite o segundo número:"));

    // Verifica se pelo menos um dos números é múltiplo do outro
    if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
        alert("Pelo menos um dos números é múltiplo do outro.");
    } else {
        alert("Nenhum dos números é múltiplo do outro.");
    }
}
    //chama a função para verificar se os numeros são multiplos
    verificarmultiplo();