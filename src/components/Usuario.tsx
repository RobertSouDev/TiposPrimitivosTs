type Props = {
    nome: string;
    idade?: number;
}

const Usuario = ({nome, idade}: Props) => {
    return ( 
        <div>
            <p>Nome: {nome}</p>
            {
                idade ? <p>Idade: {idade}</p> : <p>Idade: não informada</p>
            }
            
        </div>
     );
}
 
export default Usuario;