type Produtos = {
    nome: string
    preco: number
    disponivel: boolean

}

function CardProduto({nome, preco, disponivel}: Produtos) {
    return ( 
        <div>
            <h2>{nome}</h2>
            <p>Preço: {preco}</p>
            <p>{disponivel === true ? "Produto disponível" : "Produto indisponível"}</p>
        </div>
     );
}

export default CardProduto;