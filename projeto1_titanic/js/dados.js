// Carrega os dados JSON do Titanic de forma assíncrona
// dados.js
async function carregarDados() {
    const resp = await fetch("data/train.json");
    const dados = await resp.json();
    return dados;
}

