import { ElementType } from "react";  // Importando ElementType do React para permitir a tipagem dinâmica de componentes como ícones
import Menu from "./Menu";  // Importando o componente Menu (presumivelmente para usar em algum outro lugar do projeto, mas não utilizado diretamente neste arquivo)

// Definindo a interface MenuItemProps que define os tipos dos props do componente MenuItem
export interface MenuItemProps {
    icone: ElementType;  // O tipo do ícone é um componente React (ElementType), o que permite qualquer componente de ícone
    texto: string;  // O texto a ser exibido no item de menu (do tipo string)
    url: string;  // A URL para a qual o item de menu irá redirecionar (do tipo string)
}

// Componente MenuItem que recebe props e renderiza um item de menu com ícone e texto
export default function MenuItem(props: MenuItemProps) {
    return (
        // Componente Link que cria um link de navegação para a URL fornecida nos props
        // Adicionando classes do Tailwind para estilo e efeitos de hover
        <Link href={props.url} className="flex gap-2 px-4 py-2 hover:bg-black">
            {/* Componente ícone dinâmico, que é passado como uma propriedade */}
            {/* O ícone é renderizado com classes adicionais para estilo */}
            <props.icone className="bg-zinc-200" size={24} stroke={1} />
            
            {/* Texto do item, que descreve o destino do link */}
            {/* O texto também possui a classe de fundo `bg-zinc-200` para aplicar o mesmo estilo de fundo */}
            <span className="bg-zinc-200">{props.texto}</span>  
        </Link>
    );
}
