let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
searchBooks()

async function searchBooks(){
    const res = await fetch(endpointAPI)
    livros = await res.json()
    //let livrosComDesconto = applyDiscounts(livros)
    console.log(livros)
    
    showBooksOnScreen(livros)
}

