
function App() {
const produtos = [
{ id: 1, nome: "Caneta", preco: 2.5 },
{ id: 2, nome: "Caderno", preco: 25 },
{ id: 3, nome: "Lápis", preco: 1.2 },
{ id: 4, nome: "Borracha", preco: 4 }
];

return (
{produtos
.filter(p => p.preco < 10)
.map(p => (
{p.nome} - R$ {p.preco.toFixed(2)}
))}
);
}

export default App;