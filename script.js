let tarefa = document.getElementById("tarefa");
let botaoSalvar = document.getElementById("salvar");
let cardTarefasSalvas = document.getElementById("tarefasSalvas");

let tarefasSalvas = [];

botaoSalvar.addEventListener("click", function(e) {
    e.preventDefault();
    if (tarefa.value.trim() !== "") {
        tarefasSalvas.push(tarefa.value.trim());
        atualizarTarefas();
        tarefa.value = "";
    }
});

function atualizarTarefas() {
    cardTarefasSalvas.innerHTML = "";
    tarefasSalvas.forEach((tarefa, index) => {
        let novoCard = document.createElement("div");
        novoCard.innerHTML = `
            <span>${tarefa}</span>
            <button onclick="editarTarefa(${index})">Editar</button>
            <button onclick="deletarTarefa(${index})">Deletar</button>
        `;
        cardTarefasSalvas.appendChild(novoCard);
    });
}

window.editarTarefa = function(index) {
    let novaTarefa = prompt("Edite sua tarefa:", tarefasSalvas[index]);
    if (novaTarefa !== null) {
        tarefasSalvas[index] = novaTarefa.trim();
        atualizarTarefas();
    }
};

window.deletarTarefa = function(index) {
    tarefasSalvas.splice(index, 1);
    atualizarTarefas();
};