const form = document.getElementById('tarefaFormulario');
const tarefaLista = document.getElementById('tarefas');


form.onsubmit = function(event) {
  event.preventDefault(); // cancela o evento 
  const inputTarefa = document.getElementById('tarefaInput');
  adicionaTarefa(inputTarefa.value);
  form.reset();
};


function adicionaTarefa(descricao){
  const tarefaContainer = document.createElement('div'); //criar um elemento no documento, no caso uma div
  const novaTarefa = document.createElement('input'); //criar um elemento no documento, no caso um input
  const tarefaLabel = document.createElement('label'); //criar um elemento no documento, no caso um label
  const tarefaDescricao = document.createTextNode(descricao);  //criar um novo texto no documento, esse método pode ser usado para escapar carecteres HTML

  novaTarefa.setAttribute('type', 'checkbox'); // o setAttribute ele adiciona um novo atributo ou modifica o valor de um atributo existente num elemento especifíco
  novaTarefa.setAttribute('name', descricao);
  novaTarefa.setAttribute('id', descricao);

  tarefaLabel.setAttribute('for', descricao);
  tarefaLabel.appendChild(tarefaDescricao); 

  tarefaContainer.classList.add('tarefa-item');
  tarefaContainer.appendChild(novaTarefa);
  tarefaContainer.appendChild(tarefaLabel);

  tarefaLista.appendChild(tarefaContainer);
};


