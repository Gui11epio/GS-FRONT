"use client"
import { useState } from "react";

export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        if (!email || !senha) {
            setErro("Por favor, preencha todos os campos.");
            return;
        }

        setErro(""); // Limpa a mensagem de erro
        console.log("Cadastro realizado com sucesso!");
        // Aqui você pode adicionar a lógica para enviar os dados
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
            <main className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border border-gray-300">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Cadastro</h1>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {erro && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
                            {erro}
                        </div>
                    )}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600 mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="senha"
                            className="block text-sm font-medium text-gray-600 mb-1"
                        >
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
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
