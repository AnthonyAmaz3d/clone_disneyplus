document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

// animação do header 

    const heroSection = document.querySelector('.hero');
    const alturaHeroSection = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const alturaScrollY = window.scrollY;

        if (alturaScrollY < alturaHeroSection) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    // seção de shows ou atraçÕes

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }


    // seção de FAQ (accordion)

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', closeOrOpen);
    }
})

// função para ocultar elementos do header

const ocultaElementosDoHeader = () => {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

// função para exiber elementos do header

const exibeElementosDoHeader = () => {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}



// função para abrir e fechar o FAQ

const closeOrOpen = (elemento) => {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

//função para remover a classe --is-active do botão 

const removeBotaoAtivo = () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

// função para remover a classe --is-active dos tabs

const escondeTodasAbas = () => {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}  