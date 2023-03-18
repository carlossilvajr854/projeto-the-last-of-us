const botoesCarousel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
let botaoSelecionado;
let imagemAtiva;

function removerClasse(objeto, classe) {
    objeto = document.querySelector("." + classe);
    objeto.classList.remove(classe);
}

function adicionarClasse(objeto, classe) {
    objeto.classList.add(classe);
}

botoesCarousel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        removerClasse(botaoSelecionado, "selecionado");
        adicionarClasse(botao, "selecionado");
        removerClasse(imagemAtiva, "ativa");
        adicionarClasse(imagens[indice], "ativa");
    });
});