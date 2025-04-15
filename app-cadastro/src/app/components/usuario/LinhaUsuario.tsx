import { Usuario } from "@/core/model/utils/Usuario";

export interface LinhaUsuarioPros {
    usuario: Usuario
}

export default function LinhaUsuario(props: LinhaUsuarioPros) {
    return (
        <div className="flex bg-zinc-900 p-4 rounded-mb">
            <div className="flex flex-col"> 
                <span className="text-xl font-black">{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>
        </div>
    );
}
