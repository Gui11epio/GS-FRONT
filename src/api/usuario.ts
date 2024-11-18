const API_URL = "http://localhost:8080/cadastro"; // Path correto conforme o backend

interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

export async function cadastrarUsuario(usuario: Usuario): Promise<string> {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",  // Usamos POST para criar um novo cadastro
      headers: {
        "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
      },
      body: JSON.stringify(usuario), // Envia os dados do usuário como JSON
      credentials: "include", // Envia cookies ou credenciais se necessário
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData || "Erro ao cadastrar o usuário.");
    }

    const successMessage = await response.text();
    return successMessage;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || "Erro ao conectar ao servidor.");
    }
    throw new Error("Erro desconhecido.");
  }
}
