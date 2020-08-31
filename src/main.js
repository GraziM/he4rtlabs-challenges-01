let button = document.querySelector("#button");

button.onclick = function () {
    let tempoDiario = parseInt(document.querySelector('#tempo-diario').value);
    let diasEfetivos = parseInt(document.querySelector('#dias-efetivos').value);
    let diasFerias = parseInt(document.querySelector('#dias-ferias').value);
    let valorTotal = parseInt(document.querySelector('#valor-total').value);

    let valorHora = (valorTotal / (diasEfetivos * 4 * tempoDiario)) + ((diasFerias * diasEfetivos * tempoDiario));
    console.log(valorHora);

    if (!isNaN(valorHora)){
        
        let labelTitle = document.querySelector("#valor-hora");
        let labelValor = document.querySelector("#valor");
        labelValor.innerHTML = "<p> R$ " + valorHora.toFixed(2).replace(".",",") + "</p>";
        labelTitle.style.display = "inline";

        }
         
}
