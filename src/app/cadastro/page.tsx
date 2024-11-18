"use client";

import { useState } from "react";
import { cadastrarUsuario } from "../../api/usuario"; // Importa a função da API

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        if (!nome || !email || !senha) {
            setErro("Por favor, preencha todos os campos.");
            return;
        }

        try {
            setErro(""); // Limpa mensagens de erro
            setSucesso(""); // Limpa mensagens de sucesso

            const mensagem = await cadastrarUsuario({ nome, email, senha }); // Chama a API
            setSucesso(mensagem); // Exibe mensagem de sucesso
            setNome("");
            setEmail("");
            setSenha("");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErro(error.message); // Exibe mensagem de erro da API
            } else {
                setErro("Erro desconhecido ao cadastrar.");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
            <main className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border border-gray-300">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Cadastro</h1>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Mensagem de erro */}
                    {erro && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
                            {erro}
                        </div>
                    )}
                    {/* Mensagem de sucesso */}
                    {sucesso && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
                            {sucesso}
                        </div>
                    )}

                    <div>
                        <label
                            htmlFor="nome"
                            className="block text-sm font-medium text-gray-600 mb-1">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                    </div>

                    <div>
                        <label
                            htmlFor="senha"
                            className="block text-sm font-medium text-gray-600 mb-1">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                    </div>

                    <button
                        type="submit"
                        className="border border-black w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                        Cadastrar
                    </button>
                </form>

                <p className="text-sm text-gray-500 text-center mt-4">
                    Já tem uma conta?{" "}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Faça login
                    </a>
                </p>
            </main>
        </div>
    );
}