import { ReactNode } from "react";  // Importando ReactNode para tipar children corretamente
import Menu from "./Menu";

// Definindo a interface PaginaPros com o tipo correto para children
export interface PaginaPros {
    children: ReactNode;  // children pode ser qualquer tipo de conteúdo renderizável no React
}

// Componente funcional que recebe os props e renderiza o conteúdo
export default function Pagina(props: PaginaPros) {
    return (
        <div className="flex">
            <Menu/>
           <main className=" flex-1 p-7">{props.children}  {/* Renderiza o conteúdo passado como "children" */}</main> 
        </div>
    );
}
