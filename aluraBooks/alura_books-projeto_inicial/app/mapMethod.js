function applyDiscounts(books){
    const discount = 0.3
    discountBooks = books.map(livro => {
        return {...listBooks, preco: livro.preco - (livro.preco * discount)}
    })
    return discountBooks
}