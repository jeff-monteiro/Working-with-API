searchBooks()
async function searchBooks(){
    const bookShelf = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
    const listBooks = await bookShelf.json()
    let booksWithDiscount = applyDiscounts(books)
    
    showBooksOnScreen(listBooks)
}

