document.addEventListener('DOMContentLoaded', function(){
    const video = document.getElementById('videoHero');
    const muteBtn = document.getElementById('muteBtn');
    const buttons = document.querySelectorAll('[data-tab-button]');
    const lista = document.querySelector('.episodes__list');
    const mostrarMaisBtn = document.getElementById('mostrarMais');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const positionY = window.scrollY;

        if(positionY < alturaHero){
            hiddenElements();
        } else {
            showElements();
        }
    })



    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.add('temps__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('temps__tabs__btn--is-active');
        })
    }

    const itensVisiveisPrimeiro = 12;
    const incremento = 14;
    let itensVisiveis = itensVisiveisPrimeiro;
    const itens = lista.querySelectorAll("li");

    function mostrarMaisItens() {
        for (let i = itensVisiveis; i < itensVisiveis + incremento && i < itens.length; i++) {
            itens[i].style.display = "list-item";
        }
        itensVisiveis += incremento;
    
        if (itensVisiveis >= itens.length) {
            mostrarMaisBtn.style.display = "none";
            mostrarMenosBtn.style.display = "inline-block";
        }
    }
    mostrarMaisBtn.addEventListener("click", mostrarMaisItens);

    
    
    muteBtn.addEventListener('click', () => {
        if(video.muted){
            video.muted = false;
            muteBtn.innerHTML = '';
            const imagemMudo = document.createElement('img');
            imagemMudo.src = '../../dist/images/desmute.png';
            imagemMudo.alt = 'Mutar'
            muteBtn.appendChild(imagemMudo);
        } else {
            video.muted = true;
            muteBtn.innerHTML = '';
            const imagemSom = document.createElement('img');
            imagemSom.src = '../../dist/images/mute.png';
            imagemSom.alt = 'Ativar Som'
            muteBtn.appendChild(imagemSom);
        }
    });
})


function hiddenElements (){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showElements (){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}


function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('temps__tabs__btn--is-active');
    }
}


function escondeAbas (){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i =0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('temps__list--is-active')
    }
}

