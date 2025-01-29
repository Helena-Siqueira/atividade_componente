import Menu from "./components/Menu";
import Produto from "./components/Produto";

export default function Home() {
  return (
    <div>

      <Menu/>

            <h1>Enviamos para o Github</h1>
            <p>Atividade em Andamento!</p>
          
          <hr/>

          <h2>Produtosss</h2>

          <div className="flex justify-around"> 
            <Produto nome="Canela" preco= "1,50" avaliacao="⭐" add="Comprar"  />
            <Produto nome="Café" preco= "3,50" avaliacao="⭐⭐⭐" add="Encomendar" />
            <Produto nome="Misto-Quente" preco= "2,50" avaliacao="⭐⭐⭐⭐" add="Comprar" />
          </div>

        </div> 
  );
}
