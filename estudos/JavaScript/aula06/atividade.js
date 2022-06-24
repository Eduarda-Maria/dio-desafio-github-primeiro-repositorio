//criando um Erro
function validaArray(arr, num){
  try{
    if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

    if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo Object");
  
    if(typeof num !== 'number') throw new TypeError("num precisa ser do tipo number");
  
    if(arr.length !== num) throw new RangeError("Tamanho Inválido!");

    return arr;
  }
  catch(e){
    if( e instanceof ReferenceError){
      console.log("Este erro é um ReferenceError!");
      console.log(e.message);
    } else if( e instanceof TypeError){
      console.log("Esta erro é um TypeError!");
      console.log(e.message);
    } else if( e instanceof RangeError){
      console.log("Esta erro é um RangeError!");
      console.log(e.message);
    } else{
      console.log("Tipo de erro não esperado:" + e);
    }
  }
}
console.log(validaArray([1,2,3,4,5,], 5));