document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos de entrada
    const contato = document.getElementById('input-contato').value;
    const telefone = document.getElementById('input-telefone').value;
    const recado = document.getElementById('input-recado').value;

    // Obtém a referencia do tbody
    const tbody = document.getElementById('contact-table-body');

    // Remove a linha padrão, se existir
    const defaultRow = document.getElementById('default-row');
    if (defaultRow) {
        tbody.removeChild(defaultRow);
    }

    // Cria uma nova linha na tabela
    const newRow = tbody.insertRow();

    const contatoCell = newRow.insertCell(0);
    const telefoneCell = newRow.insertCell(1);
    const recadoCell = newRow.insertCell(2);

    contatoCell.textContent = contato;
    telefoneCell.textContent = telefone;
    recadoCell.textContent = recado;

    document.getElementById('input-contato').value = '';
    document.getElementById('input-telefone').value = '';
    document.getElementById('input-recado').value = '';


   
});