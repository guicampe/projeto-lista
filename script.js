document.querySelector('#textoTarefa').focus();
const tarefa = document.querySelector('#lista');
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
    label.style.display = 'flex';
    label.style.alignItems = 'center';
    label.style.flexWrap = 'nowrap';
    label.style.gap = '5px'

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.style.verticalAlign = 'middle';

    const textoNode = document.createTextNode(texto);

    label.appendChild(checkbox);
    label.appendChild(textoNode)
    itemLista.appendChild(label);
    tarefa.appendChild(itemLista);

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