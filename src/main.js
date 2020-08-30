let button = document.querySelector("#button");

button.onclick = function () {
    let tempoDiario = parseInt(document.querySelector('#tempo-diario').value);
    let diasEfetivos = parseInt(document.querySelector('#dias-efetivos').value);
    let diasFerias = parseInt(document.querySelector('#dias-ferias').value);
    let valorTotal = parseInt(document.querySelector('#valor-total').value);

    let valorHora = (valorTotal / (diasEfetivos * 4 * tempoDiario)) + ((diasFerias * diasEfetivos * tempoDiario));
    console.log(valorHora);

    if (!isNaN(valorHora)){
        let labelTitle;
        let labelValor;

        let HoraLabel = document.querySelector('#valor-hora');
        if (HoraLabel.hasChildNodes()){
            let labelTitle = document.querySelector('#valor-hora h4');
            let labelValor = document.querySelector("#valor-hora #valor");
            HoraLabel.removeChild(labelTitle);
            HoraLabel.removeChild(labelValor);
        }
        
        labelTitle = document.createElement('h4');
        text = document.createTextNode('Valor por hora');
        labelTitle.appendChild(text);
    
        let containerValor = document.createElement('div');
        containerValor.setAttribute('id', 'valor');
        labelValor = document.createElement('p');
        text = document.createTextNode(valorHora.toFixed(2).replace(".",","));
        labelValor.appendChild(text);
        containerValor.appendChild(labelValor);
    
        HoraLabel.appendChild(labelTitle);
        HoraLabel.appendChild(containerValor);
            
    }
}
