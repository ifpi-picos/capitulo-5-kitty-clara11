//Pergunta ao usuario qual conversão deseja realizar
let escolha = prompt("Escolha a conversão desajada:\n1. Celsius para Farenheit\n2. Farenheit para Celsius");
//valida  aescola do usuario
if(escolha==="1"||escolha ==="2"){
    //pergunta ao usuario a temperatura a ser convertida
    let temperatura =parseFloat(prompt("digite a temperatura:"));
    //converte a temperatura com base na escolha 
    if(escolha==="1") {
        //Celsius para Farenheit
        let Farenheit = (temperatura *9/5)+ 32;
        alert(temperatura+"°C é igual a"+ Farenheit.toFixed(2)+"°F");

    }else if(escolha==="2") {
        //Farenheit para Celsius
        let Celsius = (temperatura -32) * 5/9;
        alert(temperatura+"°F é igual a"+ Celsius.toFixed(2)+"°C");

    }
} else{
    alert("opção invalida. por favor, escolha 1 ou 2.");
      }

