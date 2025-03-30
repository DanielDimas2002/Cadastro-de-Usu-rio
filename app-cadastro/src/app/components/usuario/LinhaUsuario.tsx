import { Usuario } from "@/core/model/utils/Usuario";

export interface LinhaUsuarioPros{
    usuario: Usuario
}

export default function LinhaUsuario(props: LinhaUsuarioPros) {
    return (
        <div className="flex p-4">
            <span>{props.usuario.nome}</span>
        </div>
    );
}
