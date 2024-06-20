function selecionarAniversariante(aniversariante) {
    const resultado = document.getElementById('animacao');
    const bgDiv2 = document.getElementById('container-1');
    const mudarFrase = document.getElementById('frase');
    const edmar = 'src/img/img-edmar.png';
    const joao = 'src/img/img-jr.png';
    const bgEdmar = 'src/img/balada-gay.jpg';
    const bgJoao = 'src/img/robo3.png';
    const somEdmar = document.getElementById('somEdmar');

    if (aniversariante === 'Edmar') {
        resultado.innerHTML = `<img src="${edmar}" alt="Edmar" style="height: 400px; flex: 1;">`;
        bgDiv2.style.backgroundImage = `url('${bgEdmar}')`;
        resultado.style.backgroundSize = 'cover'; 
        mudarFrase.innerHTML = 'Parabéns No Filter';
        criarConfetes(resultado);
        somEdmar.play();
    } else if (aniversariante === 'João Roberto') {
        resultado.innerHTML = `
            <div style="display: flex;">
                <img src="${joao}" alt="João Roberto" style="height: 550px; flex: 1;">
                <img src="${bgJoao}" alt="Fundo João Roberto" style="height: 350px; flex: 1;">
            </div>`;
        bgDiv2.style.backgroundImage = 'None'
        mudarFrase.innerHTML = 'Parabéns Tuê';
        criarConfetes(resultado);
        somEdmar.pause();
        somEdmar.currentTime = 0;
    } else {
        resultado.innerHTML = '';
        apagar.innerHTML = 'Selecione o aniversariante:';
        somEdmar.pause();
        somEdmar.currentTime = 0;
    }
}

function criarConfetes(elementoPai) {
    for (let i = 0; i < 50; i++) {
        const confeti = document.createElement('div');
        confeti.classList.add('confeti');
        confeti.style.left = Math.random() * window.innerWidth + 'px';
        confeti.style.animationDelay = Math.random() * 5 + 's';
        elementoPai.appendChild(confeti);

        setTimeout(() => {
            confeti.remove();
        }, 25000);
    }
}
