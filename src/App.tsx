import CardProduto from "./components/CardProduto";
import produtos from "./morck/produtos";

export default function App() {

  return (
      <div className="min-w-full flex flex-col  items-center md:h-screen bg-gray-100">
        <div className="w-[100%] border  p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Lista de Produtos</h1>
        </div>
          <div className="border w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {produtos.map((produto)=> (
              <div key={produto.id} className="border w-64 h-64 bg-white rounded-lg shadow-md">
                <CardProduto
                 nome={produto.nome}
                 preco={produto.preco}
                 disponivel={produto.disponivel}
                />
              </div>
            ))}
          </div>
      </div>

  )
}


