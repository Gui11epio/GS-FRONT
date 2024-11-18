"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState<string>(""); // Tipagem explícita para o estado
    const [senha, setSenha] = useState<string>(""); // Tipagem explícita para o estado
    const [error, setError] = useState<string>(""); // Tipagem explícita para o estado
    const [success, setSuccess] = useState<string>(""); // Tipagem explícita para o estado

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:8080/cadastro/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    email, // Certifique-se de que essas variáveis contêm os dados corretos
                    senha
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.error || "Erro ao realizar login");
                return;
            }
    
            const data = await response.json();
            setSuccess("Login realizado com sucesso!");
        } catch (error) {
            setError("Erro de rede ou de conexão com o servidor.");
        }
    };
    
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
            <main className="bg-white shadow-lg rounded-lg p-8 w-96 border border-gray-300">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h1>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="senha" className="block text-sm font-medium text-gray-600 mb-1">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                        Entrar
                    </button>
                </form>

                {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                {success && <p className="text-green-500 text-sm mt-4">{success}</p>}

                <p className="text-sm text-gray-500 text-center mt-4">
                    Não tem uma conta?{" "}
                    <Link href="/cadastro" className="text-blue-500 hover:underline">
                        Cadastre-se
                    </Link>
                </p>
            </main>
        </div>
    );
}
