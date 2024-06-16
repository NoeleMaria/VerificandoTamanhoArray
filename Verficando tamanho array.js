let lista = [];

function arrayBotaoJS() {
    lista = [85,46,45,95,68];

    document.getElementById('numero-JS1').innerHTML = `<strong>Lista:</strong> ${lista}`;
    let resultado = document.getElementById('validacao-js');

    tamanhoArray(lista, resultado);
}

function arrayBotaoUsuario() {
    let array = document.getElementById('numero-usuario1');
    if(array.value === '') {
        document.getElementById('lista').innerHTML = 'Insira um número';
    } else {
        lista.push(array.value);

        console.log(lista);
        console.log(lista.length);

        document.getElementById('lista').innerHTML = `${lista}`;

        let resultado = document.getElementById('validacao-usuario');

        tamanhoArray(lista, resultado);
    }
      

    array.value = '';
}

function tamanhoArray(lista, resultado) {
        resultado.innerHTML = `O tamanho do array é ${lista.length}.`;
}