
//exemplo de funcao callback;
const calc = function(operacao, num1, num2){
  return operacao(num1, num2);
}
const soma = function(num1, num2){
  return num1 + num2;
}
const sub = function(num1, num2){
  return num1 - num2;
}

const resultaSoma = calc(soma, 1, 2);

const resultaSub = calc(sub, 1, 2);

//console.log(resultaSoma);
//console.log(resultaSub);


//for
function tabuadaDeDois(arr){
  let multiplicados = [];

  for(let i = 0; i < arr.length; i++){
    multiplicados.push(arr[i]*2);
  }
  return multiplicados;
}

const numeros = [1,2,3,4,5,6,7,8,9,10];
//console.log(tabuadaDeDois(numeros));

//for...in
function forInExemplo(obj){
  for(prop in obj){
    //console.log(prop); // retorna nome, idade, cidade;
   // console.log(obj[prop])// reetorna o valor = João, 20, Salvador
  }
}

const meuObjeto = {
  nome: "João",
  idade: "20",
  cidade: "Salvador"
}

forInExemplo(meuObjeto);

//for...of
 function logLetras(palavras){
   for(letras of palavras){
     //console.log(letras);
   }
 }
 const palavras = "amendoim";
 logLetras(palavras);


 //while
 function exemploWhile(){
   let num = 0;
   while(num <= 5){
     //console.log(num);
     num++
   }
 }
 exemploWhile()

 //Do...while
 function exemploDoWhile(){
   let num = 0;
  do{
    //console.log(num);
    num++;
  } while(num <=5)
 }
 exemploDoWhile()

 //this
const pessoa = {
  firstName : "André",
  lastName: "Soares",
  id: 1,
  fullName: function(){
    return this.firstName + " " + this.lastName;
  },
  getId: function(){
    return this.id
  }
}

//console.log(pessoa.getId());

//this - menipular valor
//1- call
const person = {
  nome: "Miguel",
};

const animal = {
  nome: "cabrito",
};

function getSomething(){
  //console.log(this.nome);
}
getSomething.call(animal);

//cal com paramêtros
const myObj = {
  num1: 2,
  num2: 4,
};
function somaAB(a,b){
  //console.log(this.num1 + this.num2 + a + b);
}
somaAB.call(myObj,1,5);

//apply 
//é quase igual al call
//diferença= função dentro de um array
const myObjeto = {
  num1: 2,
  num2: 4,
};
function somaAEB(a,b){
  //console.log(this.num1 + this.num2 + a + b);
}
somaAEB.apply(myObjeto,[1,5]); //=> dentro de um array

//bind
const retornaNomes = function(){
  return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});
//console.log(bruno());

// arrow function =>
//const helloWorld =() => "Hello world";
//"regras"
//1- Caso exista apenas uma linha, pode dispensar as chaves e o return;
//exemplo:
/*const helloWorld = function(){
  return "Hello World"
}*/
const helloWorld =() => "Hello world";
//2- caso exista apenas uma parâmetro, pode dispensa os parênteses;
//exemplo:
//const soma = (a,b) => a+b; soma(4,6) // função de dois parâmetros;
const somaA = a => a; soma (4); // apenas um parâmentro, não precisa de parênteses