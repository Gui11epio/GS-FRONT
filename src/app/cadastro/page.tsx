export default function Cadastro() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <main className="bg-white shadow-lg rounded-lg p-8 w-96 border border-gray-300">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Cadastro</h1>
                <form className="space-y-4">
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                        Cadastrar
                    </button>
                </form>
                <p className="text-sm text-gray-500 text-center mt-4">
                    Já tem uma conta?{" "}
                    <a 
                        href="/login" 
                        className="text-blue-500 hover:underline">
                        Faça login
                    </a>
                </p>
            </main>
        </div>
    );
}
