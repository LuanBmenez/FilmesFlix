import Topo from "./Topo"
import Menu from "./Menu"
import Conteudo from "./Conteudo"



export default function App() {
  return (
    <>
      <Topo />
      <div className="row">
        <Menu />
        <Conteudo />
      </div>
    </>
  );
}


