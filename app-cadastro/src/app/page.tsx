// Importando o componente Pagina que você criou para envolver conteúdo
import { IconUser } from "@tabler/icons-react";
import Pagina from "./components/template/Pagina";
import Titulo from "./components/template/Titulo";
import ListaUsuario from "./components/usuario/ListaUsuario";

// Componente Home principal
export default function Home() {
  return (
    <Pagina className="flex flex-col gap-10">  {/* Passando "Opa" como children para o componente Pagina */}
      <Titulo icone={IconUser} princial="Usuários" secundario="Cadastro de Usuários"/>
      <ListaUsuario />
    </Pagina>
  );
}
