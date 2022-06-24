//function numeros(num1, num2){
//  const igual = num1 === num2 ? `${num1} e ${num2} são iguais` : `${num1} e ${num2} não são iguais`;
//  const soma = num1 + num2;
//
//  const compara10 =soma > 10 ? 'é maior que 10' :'é menor que 10';
//  const compara20 = soma > 20 ?'é maior que 20' : 'é menor que 20';
//  console.log(`Os numeros ${igual}, a  soma é ${soma}, e ${soma} ${compara10} e ${compara20}`);
//}
//
//numeros(1,8)

function compararNumeros(num1, num2){
  if(!num1 || !num2) return "Defina dois números!";

  const primeiraFrase = criaPrimeiraFrase(num1, num2);
  const segundaFrase = criaSegundaFrase(num1, num2)//;

  return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2){
  let saoIguais = "";

  if(num1 !==num2){
    saoIguais= "não"
  }
  return `os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2){
const soma = num1 + num2;

  let resultado10 ="menor";
  let resultado20 ="menor";
  const compara10 = soma > 10;
  const compara20 = soma > 20;

  if(compara10){
    resultado10 = "maior";
  }

  if(compara20){
    resultado20 = "maior";
  }

  return `\nSua soma é ${soma}, que é ${resultado10}  que 10 e ${resultado20} que 20`;
}

console.log(compararNumeros(2,2));

