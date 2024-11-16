"use client"
import Link from "next/link";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
            {/* Contêiner principal que ocupa a altura total da tela e centraliza o conteúdo */}
            <main className="bg-white shadow-lg rounded-lg p-8 w-96 border border-gray-300">
                {/* Caixa de conteúdo principal com fundo branco, bordas arredondadas, sombra e borda */}
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h1>
                {/* Título do formulário, com tamanho grande (2xl), negrito e cor de texto cinza escuro */}

                <form className="space-y-4">
                    {/* Formulário com espaçamento entre os campos */}

                    <div>
                        {/* Campo para o e-mail */}
                        <label 
                            htmlFor="email" 
                            className="block text-sm font-medium text-gray-600 mb-1">
                            Email
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Digite seu email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        {/* Campo para a senha */}
                        <label 
                            htmlFor="senha" 
                            className="block text-sm font-medium text-gray-600 mb-1">
                            Senha
                        </label>
                        <input 
                            type="password" 
                            id="senha" 
                            placeholder="Digite sua senha" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                        Entrar
                    </button>
                </form>

                <p className="text-sm text-gray-500 text-center mt-4">
                    {/* Texto abaixo do formulário, informando o usuário sobre a opção de cadastro */}
                    Não tem uma conta?{" "}
                    <Link 
                        href="/cadastro" 
                        className="text-blue-500 hover:underline">
                        Cadastre-se</Link>
                </p>
            </main>
        </div>
    );
}
