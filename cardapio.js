const selectMenu = document.getElementById('menu');
const resultado = document.getElementById('resultado');
let cardapio = {};

// Carregar dados do cardápio ao iniciar
fetch('cardapio_json.php')
    .then(response => response.json())
    .then(data => {
        cardapio = data;
        if (selectMenu.value) {
            renderizarPratos(selectMenu.value);
        }
    })
    .catch(error => {
        resultado.innerHTML = '<p style="color: red;">Erro ao carregar o cardápio.</p>';
        console.error(error);
    });

function renderizarPratos(categoria) {
    const pratos = cardapio[categoria];
    resultado.innerHTML = '';

    if (categoria === 'carne') {
        resultado.innerHTML += `
            <div style="width:100%;margin-top:3%;height:3px;border-radius:2px;background-color:#fff;"></div>
            <p style="font-weight:bold;margin-bottom:20px;color:#fff;">⚠ o valor é para cada 100 gramas (pedido mínimo a partir de 300g)</p>
            <div style="width:100%;height:3px;border-radius:2px;background-color:#fff;"></div>
        `;
    }

    if (pratos && pratos.length > 0) {
        pratos.forEach(prato => {
            const card = `
                <div class="cardapio-item">
                    <img src="${prato.imagem}" alt="${prato.nome}">
                    <h3>
                        <span>${prato.nome}</span>
                        <span>${prato.preco}</span>
                    </h3>
                    <p>${prato.descricao}</p>
                </div>
            `;
            resultado.innerHTML += card;
        });
    } else {
        resultado.innerHTML = '<p>Nenhum prato disponível nesta categoria.</p>';
    }
}

selectMenu.addEventListener('change', () => {
    renderizarPratos(selectMenu.value);
});
