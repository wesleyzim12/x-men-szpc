const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem )=> {
    personagem.addEventListener('mouseenter', () => {
        
        if(window.innerWidth < 450) {
            window.scrollTo({top:0, behaviour: 'smooth'});
        }

        removerselecaodopersonagem();

        personagem.classList.add('selecionado');
       alterarimagemselecionado(personagem); 

       const nomepersonagem = alterarnomepersonagemselecionado();

       nomepersonagem.innerText = personagem.getAttribute('data-name');

       const descricaopersonagem = document.getElementById('descricao-personagem');
       descricaopersonagem.innerText = personagem.getAttribute('data-description')

    })
})
function alterarnomepersonagemselecionado() {
    return document.getElementById('nome-personagem');
}

function alterarimagemselecionado(personagem) {
    const imagempersonagemgrande = document.querySelector('.personagem-grande');

    const idpersonagem = personagem.attributes.id.value;

    imagempersonagemgrande.src = `./src/imagens/card-${idpersonagem}.png`;
}

function removerselecaodopersonagem() {
    const personagemselecionado = document.querySelector('.selecionado');
    personagemselecionado.classList.remove('selecionado');
}

