let listaPontos = [];
let pontosRestantes = 45000;  // Inicialmente começamos com 45000 pontos

function calcular() {
    // Obtém o valor do input
    const x = parseInt(document.getElementById("pontos").value);
    
    // Define os valores fixos
    const modo3 = 3;
    const tier = 1.2;
    
    // Calcula o multiplicado e o novo resultado final
    const multiplicado = (x * tier) * modo3;
    const resultado_final = (pontosRestantes - multiplicado);

    // Atualiza o valor de pontosRestantes com o novo resultado
    pontosRestantes = resultado_final;

    // Exibe o resultado
    document.getElementById("resultado").innerHTML = `Faltam: ${resultado_final}`;

    // Armazena o resultado na lista
    listaPontos.push({
        multiplicado: multiplicado,
        resultado_final: resultado_final
    });
    
    // Atualiza a lista de pontos exibida
    atualizarListaPontos();
}

function atualizarListaPontos() {
    const listaElement = document.getElementById("listaPontos");
    listaElement.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada ponto da lista ao elemento UL
    listaPontos.forEach((ponto, index) => {
        const li = document.createElement('li');
        li.textContent = `Resultado ${index + 1}: Você fez ${ponto.multiplicado.toFixed(2)} pontos, faltam ${ponto.resultado_final.toFixed(2)} pontos`;
        listaElement.appendChild(li);
    });
}

function resetar() {
    // Limpa a lista de pontos e reseta o valor inicial
    listaPontos = [];
    pontosRestantes = 45000;
    
    // Limpa o conteúdo da lista exibida
    document.getElementById("listaPontos").innerHTML = '';
    
    // Limpa o resultado atual
    document.getElementById("resultado").innerHTML = '';
}
