const booksTable = document.getElementById("livros")
searchBooks()
async function searchBooks(){
    const bookShelf = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
    const listBooks = await bookShelf.json()
    console.table(listBooks)
    
    showBooksOnScreen(listBooks)
}

function showBooksOnScreen(listOfBooks){
    listOfBooks.forEach(livro => {
        booksTable.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco + "0"}</p>
            <div class="tags">
            <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}

