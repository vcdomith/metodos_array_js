
function aplicaDesconto(livros) {

    const desconto = 0.3

    livrosDesconto = livros.map(livro => {

        return {...livro, preco: livro.preco - (livro.preco * desconto)}

    })

    // Usa-se o metodo acima com o spread operator para manter todos os valores inalterados em seus respectivos lugares e apenas alterar o preco do livro. O metodo abaixo retorna um array com apenas of preços com o desconto
    // return livros.map(livro => livro.preco - (livro.preco * desconto))

    return livrosDesconto

}