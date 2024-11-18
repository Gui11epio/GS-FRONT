"use client";

import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Para exibir mensagens de erro

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        try {
            const response = await fetch("http://localhost:8080/cadastro/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            });

            if (!response.ok) {
                const errorText = await response.text(); // Lê o texto de erro
                setErrorMessage(errorText); // Atualiza o estado com a mensagem de erro
                console.error("Erro no login:", errorText);
                return;
            }

            const data = await response.json(); // Lê os dados da resposta
            console.log("Usuário autenticado:", data);

            // Redirecionar ou realizar alguma ação após o login bem-sucedido
            alert("Login realizado com sucesso!");
        } catch (error) {
            // Log de erros inesperados
            console.error("Erro ao fazer a requisição:", error);
            setErrorMessage("Erro inesperado ao realizar o login. Tente novamente.");
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                            placeholder="Digite seu email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="senha" className="block text-sm font-medium text-gray-600 mb-1">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha
                            placeholder="Digite sua senha"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                        Entrar
                    </button>
                </form>

                {errorMessage && ( // Exibe a mensagem de erro, se houver
                    <p className="text-red-500 text-sm mt-4 text-center">{errorMessage}</p>
                )}

                <p className="text-sm text-gray-500 text-center mt-4">
                    Não tem uma conta?{" "}
                    <a href="/cadastro" className="text-blue-500 hover:underline">
                        Cadastre-se
                    </a>
                </p>
            </main>
        </div>
    );
}
