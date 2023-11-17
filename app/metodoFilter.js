

const botoesCategorias = Array.from(document.querySelectorAll('.btn')).filter(botao => botao.value !== '')

botoesCategorias.forEach(botao => {

    botao.addEventListener('click', aplicaFiltro)

})


function aplicaFiltro() {

    const categoria = this.value

    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria()

    // console.table(livrosFiltrados)

    criaElementoLivros(livrosFiltrados)

    if (categoria === 'disponivel') {

        const valorTotal = calculaTotalLivros(livrosFiltrados) 
        exibeValorTotal(valorTotal)

    }

    function filtrarPorCategoria() {
        return livros.filter(livro => livro.categoria === filtro)
    }
}

const elementoValorTotal = document.getElementById('valor_total_livros_disponiveis')


function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibeValorTotal(valorTotal) {

    elementoValorTotal.innerHTML = `
    <section id="valor_total_livros_disponiveis">
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  </section>
    `

}

function calculaTotalLivros(livros) {

    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)

}