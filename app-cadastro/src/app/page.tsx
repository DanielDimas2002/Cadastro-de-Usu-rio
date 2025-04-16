'use client'

// Importando o componente Pagina que você criou para envolver conteúdo
import { IconUser } from "@tabler/icons-react";
import Pagina from "./components/template/Pagina";
import Titulo from "./components/template/Titulo";
import ListaUsuario from "./components/usuario/ListaUsuario";
import FormularioUsuario from "./components/usuario/FomularioUsuario";
import usuarios from "./data/hooks/constants/usuarios";

// Componente Home principal
export default function Home() {
  return (
    <Pagina className="flex flex-col gap-10">  
      <Titulo icone={IconUser} princial="Usuários" secundario="Cadastro de Usuários"/>
      {/*<ListaUsuario />*/}
      <FormularioUsuario usuario={usuarios[0]}/>
    </Pagina>
  );
}
