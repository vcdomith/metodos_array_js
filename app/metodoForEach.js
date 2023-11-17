
function criaElementoLivros(listaLivros) {
    
    elementoListaLivros.innerHTML = ''

    listaLivros.forEach(livro => {
        
        // let disponivel = verificaDisponibilidade(livro)
        let disponivel = livro.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel'

        elementoListaLivros.innerHTML += `
        <div class="livro">
        <img class="${disponivel}" src="${livro.imagem}" alt="${livro.imagem}" />
        <h2 class="livro__titulo">
            ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
        </div>
        `

    })

}

function verificaDisponibilidade(livro) {

    if (livro.quantidade > 0) {
        
        return 'livro_imagens'

    } else {

        return 'livro_imagens indisponivel'

    }


}

