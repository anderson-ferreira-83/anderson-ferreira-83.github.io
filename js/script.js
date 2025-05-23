function abrirProjeto(url) {
    window.open(url, "_blank");
}

document.getElementById('formContato').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    this.reset();
    const resposta = document.getElementById('resposta');
    resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    resposta.style.color = 'green';
});
