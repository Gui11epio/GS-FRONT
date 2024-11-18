"use client";

import { useState, useEffect } from "react";

// Interface para tipar os dados dos usuários
interface Cadastro {
    id: number;
    nome: string;
    email: string;
}

export default function UpdatePage() {
    const [id, setId] = useState<number | string>(""); // Armazenar o ID do usuário a ser atualizado
    const [nome, setNome] = useState(""); // Nome do usuário a ser atualizado
    const [email, setEmail] = useState(""); // Novo email
    const [senha, setSenha] = useState(""); // Nova senha
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
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
                setErrorMessage("Erro ao carregar os cadastros.");
                console.error("Erro ao buscar cadastros:", error);
            }
        };

        fetchUsuarios();
    }, []);

    // Função para atualizar os dados do usuário
    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!id) {
            setErrorMessage("Por favor, forneça o ID do usuário.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/cadastro/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, email, senha }), // Atualizando o nome, email e senha
            });

            if (!response.ok) {
                const errorText = await response.text();
                setErrorMessage(errorText);
                console.error("Erro ao atualizar:", errorText);
                return;
            }

            setSuccessMessage("Dados atualizados com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar:", error);
            setErrorMessage("Erro ao atualizar os dados. Tente novamente.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
            <main className="bg-white shadow-lg rounded-lg p-8 w-96 border border-gray-300">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Atualizar Dados</h1>

                <form className="space-y-4" onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="id" className="block text-sm font-medium text-gray-600 mb-1">
                            ID do Usuário
                        </label>
                        <input
                            type="text"
                            id="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="Digite o ID do usuário"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                    </div>

                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-600 mb-1">
                            Novo Nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite o novo nome"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                            Novo Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu novo email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                    </div>

                    <div>
                        <label htmlFor="senha" className="block text-sm font-medium text-gray-600 mb-1">
                            Nova Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Digite sua nova senha"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                    </div>

                    <button
                        type="submit"
                        className="border border-black w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
                        Atualizar
                    </button>
                </form>

                {errorMessage && (
                    <p className="text-red-500 text-sm mt-4 text-center">{errorMessage}</p>
                )}

                {successMessage && (
                    <p className="text-green-500 text-sm mt-4 text-center">{successMessage}</p>
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