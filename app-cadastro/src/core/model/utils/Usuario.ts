export interface Usuario {
    id?: string;  // O "id" é opcional porque geralmente é gerado automaticamente pelo banco de dados.
    email: string; // O e-mail do usuário, usado para login ou contato.
    nome: string;  // O nome do usuário.
    senha: string; // A senha do usuário. Importante criptografar antes de salvar no banco.
}
