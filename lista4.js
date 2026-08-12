function buscarProduto(id) {
return new Promise(resolve => {
setTimeout(() => {
resolve(produtos.find(p => p.id === id));
}, 300);
});
}

async function buscar() {
const produto = await buscarProduto(2);
console.log(produto);
}

buscar();