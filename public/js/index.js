const botoesCarousel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const botaoSelecionado = document.querySelectorAll(".selecionado");
const imagemAtiva = document.querySelector(".ativa");
const qtdBotoes = botoesCarousel.length;
let i = 0;

function removerClasse(elemento, classe) {
    elemento = document.querySelector("." + classe);
    elemento.classList.remove(classe);
}

function adicionarClasse(elemento, classe) {
    elemento.classList.add(classe);
}

function carouselAutomatico() {
    setInterval(() => {
        if (i < qtdBotoes) {
            removerClasse(botaoSelecionado[0], "selecionado");
            adicionarClasse(botoesCarousel[i], "selecionado");
            removerClasse(imagemAtiva, "ativa");
            adicionarClasse(imagens[i], "ativa");
            i++;
        } else {
            i = 0;
        }
    }, 3000);
}

botoesCarousel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        removerClasse(botaoSelecionado, "selecionado");
        adicionarClasse(botao, "selecionado");
        removerClasse(imagemAtiva, "ativa");
        adicionarClasse(imagens[indice], "ativa");
        i = indice;
    });
});
