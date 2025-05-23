carregarDados().then(dados => {
    atualizarTabela(dados);
    gerarTopTarifas(dados);
    gerarGrafico(dados);
});

function atualizarTabela(dados) {
    const tabela = document.getElementById('tabela-classes');
    const classes = [1, 2, 3];

    classes.forEach(classe => {
        const passageiros = dados.filter(p => p.Pclass === String(classe));
        const tarifas = passageiros.map(p => parseFloat(p.Fare)).filter(f => !isNaN(f));
        const sobreviventes = passageiros.filter(p => p.Survived === "1");
        const mediaTarifa = (tarifas.reduce((a, b) => a + b, 0) / tarifas.length).toFixed(2);
        const percSobreviveu = ((sobreviventes.length / passageiros.length) * 100).toFixed(1);

        tabela.innerHTML += `<tr>
        <td>${classe}ª classe</td>
        <td>$ ${mediaTarifa}</td>
        <td>${percSobreviveu}%</td>
      </tr>`;
    });
}

function gerarTopTarifas(dados) {
    const lista = document.getElementById('top-tarifas');
    const top = [...dados]
        .filter(p => p.Fare)
        .sort((a, b) => parseFloat(b.Fare) - parseFloat(a.Fare))
        .slice(0, 5);

    top.forEach(p => {
        lista.innerHTML += `<li>${p.Name} – $${parseFloat(p.Fare).toFixed(2)} (${p.Pclass}ª classe)</li>`;
    });
}

function gerarGrafico(dados) {
    const tarifas = dados.map(p => parseFloat(p.Fare)).filter(f => !isNaN(f));

    // Inicializa os contadores
    let contagem = [0, 0, 0, 0, 0];  // ≤50, ≤100, ≤200, ≤300, >300

    tarifas.forEach(fare => {
        if (fare <= 50) contagem[0]++;
        else if (fare <= 100) contagem[1]++;
        else if (fare <= 200) contagem[2]++;
        else if (fare <= 300) contagem[3]++;
        else contagem[4]++;
    });

    new Chart(document.getElementById('graficoTarifas'), {
        type: 'bar',
        data: {
            labels: ['≤50', '≤100', '≤200', '≤300', '>300'],
            datasets: [{
                label: 'Passageiros',
                data: contagem,
                backgroundColor: '#0077cc'
            }]
        }
    });
}

