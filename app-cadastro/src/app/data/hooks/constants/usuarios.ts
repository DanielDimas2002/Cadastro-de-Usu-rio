import { Usuario } from "@/core/model/utils/Usuario"; // Importando a interface Usuario

// Criando uma lista de usuários fictícios para testes
const usuarios: Usuario[] = [
    {
        id: "1", // Identificador único do usuário
        email: "joao@email.com", // E-mail do usuário
        nome: "João Silva", // Nome completo
        senha: "senha123" // Senha (idealmente, deve ser criptografada antes de salvar no banco)
    },
    {
        id: "2",
        email: "maria@email.com",
        nome: "Maria Souza",
        senha: "123456"
    },
    {
        id: "3",
        email: "carlos@email.com",
        nome: "Carlos Oliveira",
        senha: "minhaSenha"
    },
    {
        id: "4",
        email: "ana@email.com",
        nome: "Ana Lima",
        senha: "senhaSegura"
    },
    {
        id: "5",
        email: "fernando@email.com",
        nome: "Fernando Costa",
        senha: "senhaForte"
    },
    {
        id: "6",
        email: "lucas@email.com",
        nome: "Lucas Martins",
        senha: "lucasSenha"
    },
    {
        id: "7",
        email: "juliana@email.com",
        nome: "Juliana Pereira",
        senha: "juliana123"
    },
    {
        id: "8",
        email: "ricardo@email.com",
        nome: "Ricardo Almeida",
        senha: "senhaRicardo"
    }
];

export default usuarios; // Exportando a lista para ser usada em outras partes da aplicação
