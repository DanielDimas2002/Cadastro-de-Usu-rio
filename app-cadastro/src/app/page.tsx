// Importando o componente Pagina que você criou para envolver conteúdo
import Pagina from "./components/template/Pagina";

// Componente Home principal
export default function Home() {
  return (
    <Pagina>  {/* Passando "Opa" como children para o componente Pagina */}
      Opa
    </Pagina>
  );
}
