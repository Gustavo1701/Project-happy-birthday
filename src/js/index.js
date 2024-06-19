
function selecionarAniversariante(aniversariante) {
    const resultado = document.getElementById('animacao');
    const edmar = 'src/img/img-edmar.png';
    const joao = 'src/img/img-jr.png';

    if(aniversariante === 'Edmar') {
        resultado.innerHTML = `<img src="${edmar}" alt="Edmar">`;
    } else if(aniversariante === 'João Roberto') {
        resultado.innerHTML = `<img src="${joao}" alt="João Roberto" style="height 350">`;
    } else {
        resultado.innerHTML = '';
    }
}





