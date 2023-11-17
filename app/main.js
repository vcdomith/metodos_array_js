
let livros = []

const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getLivrosAPI()

const elementoListaLivros = document.getElementById('livros')

async function getLivrosAPI() {

    const res = await fetch(endpointAPI)
    livros = await res.json()

    let livrosDesconto = aplicaDesconto(livros)

    criaElementoLivros(livrosDesconto)
}