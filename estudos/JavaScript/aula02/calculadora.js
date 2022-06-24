//criando uma calculadora
function calculadora(){
  const operacao = Number(prompt("Escolha uma operação:\n 1-Soma(+)\n 2-Subtração(-)\n 3-Multiplicação(*)\n 4-Divisão(/)\n 5-Divisão Inteira(%)\n 6-Potenciação(**)"));

  //verificando se a operação é válida
  if(!operacao || operacao >= 7){
    alert("Erro - Operanção Inválida")
    calculadora();
  } else{

    // definindo variáveis
    // todas as entradas devem ser do tipo number
    let n1 = Number(prompt("Insira o primero valor:"));
    let n2 = Number(prompt("Insira o segundo valor:"));
    let resultado;

    // verificando se as variáveis são válidas
    if(!n1 || !n2){
      alert("Erro - parametros inválidos!!");
      calculadora();
    }  else{
      // definindo as funções
        function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }

      function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }

      function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaoReal(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaoInteira(){
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} % ${n2} é igual a ${resultado}`);
        novaOperacao();
      }

      function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a  ${resultado}`);
        novaOperacao();
      }

      // nova operação
      function novaOperacao(){
        let opcao = prompt("Deseja fazer outra operação? \n 1-Sim\n 2-Não");

        if(opcao == 1){
          calculadora()
        } else if (opcao == 2){
          alert("Até mais!")
        }else{
          alert("Digite uma opção válida!")
          novaOperacao();
        }
      }
    }
    
    // escolhendo operação
    // usando if && else

    /*if(operacao == 1){
      soma();
    } else if(operacao == 2){
      subtracao();
    } else if(operacao == 3){
      multiplicacao();
    }else if(operacao == 4){
      divisaoReal();
    }else if(operacao == 5){
      divisaoInteira();
    }else if(operacao == 6){
      potenciacao();
    }*/

    // usando switch case
    switch(operacao){
      case 1:
        soma();
        break;
      case 2:
        subtracao();
        break;
      case 3:
        multiplicacao();
        break;
      case 4:
        divisaoReal();
        break;
      case 5:
        divisaoInteira();
        break;
      case 6:
        potenciacao();
        break;
    }
  }
}

calculadora();