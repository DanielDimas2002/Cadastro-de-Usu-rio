import Link from "next/link";  // Importando o componente Link do Next.js para navegação entre páginas
import { IconHome, IconUser } from "@tabler/icons-react";  // Importando o ícone "Home" do pacote Tabler Icons React

// Componente MenuItem que representa um item no menu de navegação
function MenuItem(props: { icone: ElementType, texto: string, url: string }) {
    return (
        // Componente Link que cria um link de navegação para a página inicial ou outra URL
        // Adicionando classes do Tailwind para estilo e efeitos de hover
        <Link href={props.url} className="flex gap-2 px-4 py-2 hover:bg-black">
            {/* Ícone de Home, representando o ícone de navegação, usando o componente dinâmico */}
            <props.icone />
            {/* Texto do item, descrevendo o destino do link, que pode ser personalizado através dos props */}
            <span>{props.texto}</span>  
        </Link>
    );
}

// Componente Menu que representa a estrutura de navegação lateral
export default function Menu() {
    return (
        // Usando a tag aside para criar uma barra lateral de navegação com largura fixa e altura de tela cheia
        <aside className="w-72 bg-zinc-900 h-screen">
            {/* Usando uma navegação com flexbox em coluna para os itens de menu, 
                incluindo espaçamento entre os itens e padding superior */}
            <nav className="flex flex-col gap-1 py-7">
                {/* Chamando o MenuItem várias vezes para criar múltiplos itens de navegação */}
                <MenuItem icone={IconHome} texto="Início" url="/" />
                <MenuItem icone={IconUser} texto="Cadastro Usuário" url="/" />
            </nav>
        </aside>
    );
}
