// Importando o componente Pagina que você criou para envolver conteúdo
import Pagina from "./components/template/Pagina";
import ListaUsuario from "./components/usuario/ListaUsuario";

// Componente Home principal
export default function Home() {
  return (
    <Pagina>  {/* Passando "Opa" como children para o componente Pagina */}
      <ListaUsuario />
    </Pagina>
  );
}
