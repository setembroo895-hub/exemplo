const baratos = produtos
.filter(p => p.preco <= 5)
.map(p => p.nome);

console.log(baratos);
