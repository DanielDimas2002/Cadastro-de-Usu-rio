import { ElementType } from "react"

export interface TituloPros{
    princial : string
    secundario : string
    icone: ElementType
}

export default function Titulo(props: TituloPros){
    return(
        <div className="flex gap-2">
            <props.icone size={55} stroke={1}/>
            <div className="flex flex-col">
                <h1 className="text-2xl font-black">{props.princial}</h1>
                <h2 className="text-zinc-400">{props.secundario}</h2>
            </div>
        </div>
    )
}