const sortBtn = document.getElementById('btnOrdenarPorPreco')
sortBtn.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    showBooksOnScreen(livrosOrdenados)
}
