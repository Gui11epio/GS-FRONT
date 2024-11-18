"use client";

import { useState, useEffect } from "react";

// Interface para tipar os dados dos usuários
interface Cadastro {
    id: number;
    nome: string;
    email: string;
}

export default function PaginaDeletar() {
    const [id, setId] = useState<number | string>(""); // Armazenar o ID do usuário a ser excluído
    const [mensagemErro, setMensagemErro] = useState(""); // Para exibir mensagens de erro
    const [mensagemSucesso, setMensagemSucesso] = useState(""); // Para exibir mensagens de sucesso
    const [usuarios, setUsuarios] = useState<Cadastro[]>([]); // Lista de usuários cadastrados

    // Função para buscar usuários cadastrados (IDs)
    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch("http://localhost:8080/cadastro"); // Endpoint que retorna todos os cadastros
                if (!response.ok) {
                    throw new Error("Erro ao carregar os cadastros.");
                }
                const data = await response.json();
                setUsuarios(data); // Armazenando os dados na lista
            } catch (error) {
                setMensagemErro("Erro ao carregar os cadastros.");
                console.error("Erro ao buscar cadastros:", error);
            }
        };

        fetchUsuarios();
    }, []);

    // Função para excluir os dados do usuário
    const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        // Confirmação antes de excluir
        const confirmarDelecao = window.confirm("Tem certeza que deseja excluir sua conta?");
        if (!confirmarDelecao) return;

        try {
            const resposta = await fetch(`http://localhost:8080/cadastro/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });

            if (!resposta.ok) {
                const textoErro = await resposta.text();
                setMensagemErro(textoErro);
                console.error("Erro ao excluir:", textoErro);
                return;
            }

            setMensagemSucesso("Conta excluída com sucesso!");
        } catch (erro) {
            console.error("Erro ao excluir:", erro);
            setMensagemErro("Erro ao excluir a conta. Tente novamente.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
            <main className="bg-white shadow-lg rounded-lg p-8 w-96 border border-gray-300">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Excluir Conta</h1>

                <form onSubmit={handleDelete} className="space-y-4">
                    <div>
                        <label htmlFor="id" className="block text-sm font-medium text-gray-600 mb-1">
                            ID do Usuário
                        </label>
                        <input
                            type="text"
                            id="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)} // Atualiza o estado do ID
                            placeholder="Digite o ID do usuário"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition"
                    >
                        Excluir Conta
                    </button>
                </form>

                {mensagemErro && (
                    <p className="text-red-500 text-sm mt-4 text-center">{mensagemErro}</p>
                )}

                {mensagemSucesso && (
                    <p className="text-green-500 text-sm mt-4 text-center">{mensagemSucesso}</p>
                )}

                {/* Exibir os IDs cadastrados */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">Usuários Cadastrados</h2>
                    <ul className="space-y-2">
                        {usuarios.length > 0 ? (
                            usuarios.map((usuario) => (
                                <li key={usuario.id} className="text-center">
                                    ID: {usuario.id} - {usuario.nome}
                                </li>
                            ))
                        ) : (
                            <p className="text-center text-gray-600">Nenhum usuário encontrado.</p>
                        )}
                    </ul>
                </div>
            </main>
        </div>
    );
}
