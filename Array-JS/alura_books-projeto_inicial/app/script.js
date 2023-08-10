searchBooks()
async function searchBooks(){
    const bookShelf = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
    const listBooks = await bookShelf.json()
    let discountBooks = applyDiscounts(listBooks)
    //console.table(listBooks)
    
    showBooksOnScreen(discountBooks)
}

