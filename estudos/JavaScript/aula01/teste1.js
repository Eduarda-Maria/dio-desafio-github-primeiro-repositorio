//variavel muda; constate não;
//var numero = 2;
//var numero = 3; //pode altera/mudar;
//
//const numeroAtual = 5; //não pode alterar/mudar
//
////funções
//function soma(a, b){
//  return a + b; //se eu quiser manipular e reutilizar depois, coloca return
//};
//
//soma(3, 5); //chamando a função

function returnEvenValues(array){
  let evenNums = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      evenNums.push(array[i]);
    } else{
      console.log(`${array[i]} não é par!`);
    }
  }
  console.log(`Os números pares são:`,evenNums);
}

let array = [1,2,3,4,5,7,8];
returnEvenValues(array);