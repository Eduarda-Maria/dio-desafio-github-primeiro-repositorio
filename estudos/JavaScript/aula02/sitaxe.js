//tipos primitivos;

//boolean;
//var vOuf = false;
//console.log(typeof(vOuf));

//number;
//var numberQualquer = 1;
//console.log(typeof(numberQualquer));

//string;

//var nome = "Duda";
//console.log(typeof(nome));

//function
//var funcao = function(){}
//  console.log(typeof(funcao));


//como declarar
//var
//var nome = 'duda';
//nome = 'eduarda';
//console.log(nome);

//let
//let nome2='duda';
//nome2 = 'eduarda';
//console.log(nome2);

//const
//const nome3 = 'duda2';
//nome3='eduarda2';
//console.log(nome3);




//var exibeMensagem = function(){
//  if(true){
//    var escopoFuncao = 'Função';
//    let escopoBloco = "Bloco";
//    console.log(escopoBloco);
//  }
//  console.log(escopoFuncao);  
//  console.log(escopoBloco);
//}
//
//exibeMensagem()

//array
//let array = ['string', 1, true];
//console.log(array);

//guarda dados do array
//let array= ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
//console.log(array[3]);

//objeto
//let objeto = {
//  string: 'string',
//  number: 1,
//  boolean: true,
//  array: ["array"],
//  obejtoInterto:{
//    obejtoInterto: 'objeto interno'
//  }
//}
//console.log(objeto.obejtoInterto);

//destruturação do objeto;
//var string= objeto.string;
//console.log(string);

//var outroArray = objeto.array;
//console.log(objeto);

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5', ];
let objeto={
  propriedade1:'valor1',
  propriedade2:'valor2',
  propriedade3:'valor3',
}



//for - executa uma função até que ela seja falsa;
for(let indice = 0; indice < array.length; indice++){
  console.log(indice);
}

//for/in - executa repetição a partit de uma propriedade;
//com array
//for(let i in array){
//  console.log(i);
//}

//com Objeto
//for(i in objeto){
//  console.log(i);
//}

//for/of - executa repetição a partir de valor;
//com array
//for(i of array){
//  console.log(i);
//}

//com Objeto(não criar), só se passar uma propriedade;
//for(i of objeto.propriedade1){
//  console.log(i)
//}

//var a = 0;

//while(a < 10){
//  a++;
//  console.log(a);
//}
//
//do{
//  a++;
//  console.log(a)
//} while(a < 10)


//função

//como declarar
//function funcao(){
//console.log("essa mensagem veio de uma funcao")
//}
//funcao();

//funcao com parametro

//function mensagem(primeiro, segundo){
//  console.log(primeiro, segundo)
//}
//mensagem("Tudo certo", 'jovem')



//expresao de função

//var funcao = function(){
//  console.log('Sou uma mensagem de função de expressão');
//}
//funcao();


//Arrow function

var funcao =() =>{
  console.log('Sou uma arrow function');
}