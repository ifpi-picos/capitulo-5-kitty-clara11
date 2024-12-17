//função pra calcular a media 
function verificaraprovação(){
    //solicitar tres notas 
    let nota1 = parseFloat(prompt("digite a primeira nota:"))
    let nota2 = parseFloat(prompt("digite a segunda nota :"))
    let nota3 =parseFloat(prompt("digite a terceira nota:"))
    //calcula a media das notas
    let media =(nota1 +nota2+ nota3) /3
    //exibe a media das notas no console
    console.log(media + ""+ nota1 +nota2 + nota3);
    //verifica se o aluno foi aprovado ou reprovado
    if (media>=7){
        console.log("aluno aprovado!");
    } else {
        console.log("aluno reprovado!");
    }
    //chama a função para executar o programa
    verificaraprovação()
}