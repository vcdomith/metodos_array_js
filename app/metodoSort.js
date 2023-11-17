
const botaoSortPreco = document.getElementById('btnOrdenarPorPreco')

botaoSortPreco.addEventListener('click', aplicaSort)

function aplicaSort() {

    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)

    criaElementoLivros(livrosOrdenados)

}