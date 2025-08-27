document.addEventListener("DOMContentLoaded", function () {
    const botaoAcessibilidade = document.querySelector('.acessibilidade');
    const body = document.querySelector('body');
    
    botaoAcessibilidade.addEventListener('click', function() {
        body.classList.toggle('contraste-alto');
        body.classList.toggle('fonte-grande');
    });

    // Adicionando funcionalidade para o botão de compra
    const buttons = document.querySelectorAll('.comprar');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item adicionado ao carrinho!');
        });
    });
});
