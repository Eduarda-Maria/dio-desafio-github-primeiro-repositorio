
//solucao 01
function vericaPalindromo(string){
  if(!string) return "string inexistente";

  return string.split("").reverse().join("") === string;
}
//split = separa toda as letras
//console.log(vericaPalindromo("ovo"));

//solucao 02

function vericaPalindromo(string){
  if(!string) return "string inexistente";

  for(let i = 0; i< string.length / 2; i++){
    if(string[i] !== string[string.length -1 - i]){
    return false;
    }
  }

  return true
}

console.log(vericaPalindromo('omo'))