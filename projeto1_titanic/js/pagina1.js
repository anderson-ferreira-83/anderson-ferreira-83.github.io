carregarDados().then(dados => {
    const total = dados.length;
    const sobreviventes = dados.filter(p => p.Survived === "1");
    const taxa = (sobreviventes.length / total * 100).toFixed(1);

    document.getElementById("total").textContent = total;
    document.getElementById("sobreviventes").textContent = sobreviventes.length;
    document.getElementById("taxa").textContent = `${taxa}%`;

    const homens = sobreviventes.filter(p => p.Sex === "male").length;
    const mulheres = sobreviventes.filter(p => p.Sex === "female").length;

    document.getElementById("homens").textContent = homens;
    document.getElementById("mulheres").textContent = mulheres;

    const faixas = {
        "0–17": 0,
        "18–40": 0,
        "41–60": 0,
        "60+": 0
    };

    sobreviventes.forEach(p => {
        const idade = parseFloat(p.Age);
        if (!isNaN(idade)) {
            if (idade < 18) faixas["0–17"]++;
            else if (idade <= 40) faixas["18–40"]++;
            else if (idade <= 60) faixas["41–60"]++;
            else faixas["60+"]++;
        }
    });

    const ul = document.getElementById("faixas");
    for (const faixa in faixas) {
        ul.innerHTML += `<li>${faixa}: ${faixas[faixa]}</li>`;
    }
});
