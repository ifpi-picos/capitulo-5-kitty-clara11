// Função para classificar o triângulo
function classificarTriangulo() {
    // Solicita os três lados do triângulo ao usuário
    let lado1 = parseFloat(prompt("Digite o valor do primeiro lado do triângulo:"));
    let lado2 = parseFloat(prompt("Digite o valor do segundo lado do triângulo:"));
    let lado3 = parseFloat(prompt("Digite o valor do terceiro lado do triângulo:"));

    // Verifica se os lados formam um triângulo válido
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert("Os valores dos lados devem ser maiores que zero.");
    } else if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2) {
        // Verifica o tipo de triângulo
        if (lado1 === lado2 && lado2 === lado3) {
            alert("O triângulo é Equilátero.");
        } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
            alert("O triângulo é Isósceles.");
        } else {
            alert("O triângulo é Escaleno.");
        }
    } else {
        alert("Os valores informados não formam um triângulo válido.");
    }
}

// Chama a função para classificar o triângulo
classificarTriangulo();