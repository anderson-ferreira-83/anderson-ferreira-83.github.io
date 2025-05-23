carregarDados().then(dados => {
    const tabela = document.getElementById("classe-tabela");
    const extremos = document.getElementById("extremos");

    [1, 2, 3].forEach(classe => {
        const passageiros = dados.filter(p => p.Pclass === String(classe));
        const idades = passageiros.map(p => parseFloat(p.Age)).filter(a => !isNaN(a));
        const media = (idades.reduce((a, b) => a + b, 0) / idades.length).toFixed(1);
        const sobreviventes = passageiros.filter(p => p.Survived === "1").length;

        tabela.innerHTML += `
        <tr>
          <td>${classe}ª classe</td>
          <td>${passageiros.length}</td>
          <td>${media}</td>
          <td>${sobreviventes}</td>
        </tr>
      `;

        const maisJovem = passageiros.filter(p => p.Age).reduce((a, b) => parseFloat(a.Age) < parseFloat(b.Age) ? a : b);
        const maisVelho = passageiros.filter(p => p.Age).reduce((a, b) => parseFloat(a.Age) > parseFloat(b.Age) ? a : b);

        extremos.innerHTML += `
        <li><strong>${classe}ª classe</strong>: Jovem – ${maisJovem.Name} (${maisJovem.Age} anos), Velho – ${maisVelho.Name} (${maisVelho.Age} anos)</li>
      `;
    });
});
