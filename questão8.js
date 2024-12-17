 // Função para simular o restaurante
 function escolherPrato() {
    // Exibe o menu para o usuário
    let prato = prompt("Escolha um prato do menu:\n1. Pizza\n2. Hambúrguer\n3. Salada\n4. Macarrão");

    // Usa a instrução switch para exibir o preço e descrição do prato escolhido
    switch (prato.toLowerCase()) {
        case "pizza":
            alert("Pizza: R$ 35,00\nDescrição: Pizza de massa fina com molho de tomate, queijo, e opções de cobertura como calabresa, frango e queijo.");
            break;
        case "hambúrguer":
            alert("Hambúrguer: R$ 20,00\nDescrição: Hambúrguer artesanal com carne de qualidade, queijo, alface, tomate e molho especial.");
            break;
        case "salada":
            alert("Salada: R$ 15,00\nDescrição: Salada fresca com alface, tomate, pepino, cenoura ralada e molho vinagrete.");
            break;
        case "macarrão":
            alert("Macarrão: R$ 25,00\nDescrição: Macarrão ao molho branco ou vermelho, com opções de carne moída ou frango grelhado.");
            break;
        default:
            alert("Opção inválida. Por favor, escolha um prato do menu.");
            break;
    }
}
     //chama a função para simular o restaurante
     escolherPrato();
