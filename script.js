document.querySelector('#textoTarefa').focus();
const tarefa = document.querySelector('#listaItens');
const item = [];
const botao2 = document.querySelector('#botaoLimpar')

botao2.style.display = "none";


function adiciona() {
    const texto = document.querySelector('#textoTarefa').value.trim();

    // evitar strings vazias
    if (texto === "") {
        return;
    }

    item.push(texto);

    const itemLista = document.createElement('li');

    const label = document.createElement('label');
    label.classList.add('label');

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('checkbox');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            label.classList.add('checked');
            botaoRemover.classList.add('checked');
            label.style.transition = 'none';
            botaoRemover.style.transition = 'none';
            itemLista.style.color = 'white';
            botaoRemover.style.color = 'white';
        } else {
            label.classList.remove('checked');
            botaoRemover.classList.remove('checked');
            label.style.transition = 'background-color ease-in-out 0.3s';
            botaoRemover.style.transition = 'background-color ease-in-out 0.3s';
            itemLista.style.color = 'black';
            botaoRemover.style.color = 'black';
        }
    })

    const textoNode = document.createTextNode(texto);

    const botaoRemover = document.createElement('button');
    botaoRemover.innerText = 'delete'
    botaoRemover.classList.add('material-symbols-outlined', 'botaoRemover');
    botaoRemover.style.verticalAlign = 'middle';

    botaoRemover.onclick = function() {
        this.parentElement.parentElement.remove();
        if (listaItens.childElementCount == 0) {
            botao2.style.display = 'none';
        }
        }

    label.appendChild(checkbox);
    label.appendChild(textoNode)
    itemLista.appendChild(label);
    tarefa.appendChild(itemLista);
    label.appendChild(botaoRemover);

    document.querySelector('#textoTarefa').value = "";
    document.querySelector('#textoTarefa').focus();
    botao2.style.display = "block";
}

// adicionar com enter
document.querySelector('#textoTarefa').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        adiciona();
    }
})

function limpa() {
    tarefa.innerHTML = "";
    botao2.style.display = "none";
}