//recebe o ano de nascimento da pessoa 
let anonascimento = parseInt(prompt("digite o ano de nascimento:"));
//recebe o ano atual
let anoatual =new Date().getFullYear();
//calcula a idade da pessoa 
let idade = anoatual - anonascimento;
//exibe a idade no console
console.log("idade da pessoa:"+idade);
//verifica se a pessoa é maior de idade
if (idade>=18) {
    console.log("a pessoa é maior de idade.");
}   else {
    console.log("a pessoa é menor de idade.");
}
