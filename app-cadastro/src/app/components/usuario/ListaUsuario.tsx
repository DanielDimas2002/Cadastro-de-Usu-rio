import usuarios from "@/app/data/hooks/constants/usuarios";
import { Usuario } from "@/core/model/utils/Usuario";
import LinhaUsuario from "./LinhaUsuario";


export default function ListaUsuario(){
    return(
        <div className="flex flex-col">
            {usuarios.map((usuario: Usuario) => {
                return <LinhaUsuario key={usuario.id!} usuario={usuario}/>
            })}
        </div>
    );
}
