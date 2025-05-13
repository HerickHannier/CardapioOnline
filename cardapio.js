const selectMenu = document.getElementById('menu');
const resultado = document.getElementById('resultado');
const cardapio = {
    carne: [
        {
            nome: "Picanha",
            preco: "R$ 17,90",
            descricao: "Acompanhamento de Mandioca, Farofa e Pimenta Dedo de Moça",
            imagem: "imagens/picanha.png"
        },
        {
            nome: "Ancho",
            preco: "R$ 15,90",
            descricao: "Acompanhamento de Mandioca, Pimenta Dedo de Moça e Farofa",
            imagem: "imagens/ancho.png"
        },
        {
            nome: "Fraldinha",
            preco: "R$ 13,90",
            descricao: "Acompanhamento de Mandioca, Farofa e Pimenta Dedo de Moça",
            imagem: "imagens/fraldinha.png"
        },
        {
            nome: "Flie Mignon",
            preco: "R$ 14,90",
            descricao: "Acompanhamento de Mandioca, Pimenta Dedo de Moça e Farofa",
            imagem: "imagens/file_mignon.png"
        }
    ],
    cerveja: [
        {
            nome: "Heineken",
            preco: "R$ 18,90",
            descricao: "",
            imagem: "imagens/heineken.png"
        },
        {
            nome: "Amstel",
            preco: "R$ 14,90",
            descricao: "",
            imagem: "imagens/amstel.png"
        },
        {
            nome: "Black Princess",
            preco: "R$ 16,90",
            descricao: "",
            imagem: "imagens/blackPrincess.png"
        }
    ],
    nao_alcoolico: [
        {
            nome: "Coca Cola",
            preco: "R$ 6,90",
            descricao: "",
            imagem: "imagens/CocaCola.png"
        },
        {
            nome: "Coca Cola Zero",
            preco: "R$ 6,90",
            descricao: "",
            imagem: "imagens/CocaColaZero.png"
        },
        {
            nome: "Fanta",
            preco: "R$ 6,90",
            descricao: "",
            imagem: "imagens/fanta.png"
        }],
    porcoes: [
        {
            nome: "Isca de Tilápia",
            preco: "R$ 49,90",
            descricao: "400 gramas.",
            imagem: "imagens/iscadetilapia.png"
        },
        {
            nome: "Torresmo",
            preco: "R$ 49,90",
            descricao: "500 gramas.",
            imagem: "imagens/torresmo.png"
        },
        {
            nome: "Batata Frita",
            preco: "R$ 21,90",
            descricao: "500 gramas.",
            imagem: "imagens/Batatafrita.png"
        }
    ]
};

// Função que renderiza os pratos da categoria escolhida
function renderizarPratos(categoria) {
    const pratos = cardapio[categoria];
    resultado.innerHTML = ''; // Limpa os cards anteriores

    if (categoria === 'carne') {
        const linha1 = document.createElement('div');
        linha1.style.width = "100%"
        linha1.style.marginTop = "3%"
        linha1.style.height = "3px"
        linha1.style.borderRadius = "2px"
        linha1.style.backgroundColor = "#ffff";
        resultado.appendChild(linha1);
        const aviso = document.createElement('p');
        aviso.textContent = "⚠ o valor é para cada 100 gramas (pedido minimo a partir de 300g)";
        aviso.style.fontWeight = "bold";
        aviso.style.marginBottom = "20px";
        aviso.style.color = "#ffff";
        resultado.appendChild(aviso);
        const linha2 = document.createElement('div');
        linha2.style.width = "100%"
        linha2.style.height = "3px"
        linha2.style.borderRadius = "2px"
        linha2.style.backgroundColor = "#ffff";
        resultado.appendChild(linha2);
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

// Quando o usuário mudar a categoria
selectMenu.addEventListener('change', () => {
    renderizarPratos(selectMenu.value);
});

// Quando a página carregar (e já tiver algo selecionado por padrão)
document.addEventListener('DOMContentLoaded', () => {
    if (selectMenu.value) {
        renderizarPratos(selectMenu.value);
    }
});