'use client';
import React, { useState } from "react";

export default function Desafios() {

     // Declaração dos estados para controlar o pop-up de ativação e o progresso do desafio.
     const [ativarPopUp, setAtivarPopUp] = useState<number | null>(null); // Define o estado para controlar o pop-up, inicialmente null (sem desafio ativo).
     const [status, setStatus] = useState(0); // Define o estado do progresso, inicialmente em 0%.
 
     // Definição dos desafios com id, título e descrição.
     const desafios = [
         {
         id: 1,
         titulo: "Desafio 1: Colete garrafas plásticas",
         descricao: "Colete 10 garrafas. Cadastre-se no posto para completar o desafio.",
         },
         {
         id: 2,
         titulo: "Desafio 2: Colete materiais eletrônicos",
         descricao: "Colete 10kg de materiais eletrônicos. Complete o desafio indo a um posto.",
         },
         {
         id: 3,
         titulo: "Desafio 3: Colete papelão",
         descricao: "Colete 20 papelões. Complete o desafio indo a um posto.",
         },
     ];
 
     // Função que fecha o pop-up e reseta o progresso do desafio.
     const handleClose = () => {
         setAtivarPopUp(null); // Reseta o estado do pop-up para null, fechando o pop-up.
         setStatus(0); // Reseta o progresso para 0%.
     };
 
     // Função para marcar o desafio como concluído.
     const handleComplete = () => {
         setStatus(100); // Define o progresso como 100%, indicando que o desafio foi concluído.
     };

    return (
        <div>
        <main className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-300 overflow-y-auto">
            <h1 className="text-2xl font-bold text-gray-800">Escolha um Desafio!</h1>
            
            <div className="space-y-4 w-full max-w-xl">
            {desafios.map((desafio) => (
                <div key={desafio.id} className="bg-white shadow-lg rounded-lg p-4 w-full">
                <h2 className="text-xl font-semibold text-gray-800">{desafio.titulo}</h2>
                <p className="text-gray-600 mt-2">{desafio.descricao}</p>
                <button
                    onClick={() => setAtivarPopUp(desafio.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 w-full sm:w-auto"
                >
                    Selecionar
                </button>
                </div>
            ))}
            </div>

            {ativarPopUp && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-96">
                <h2 className="text-xl font-bold text-gray-800">
                    {desafios.find((d) => d.id === ativarPopUp)?.titulo}
                </h2>
                <p className="text-gray-600 mt-2">
                    {desafios.find((d) => d.id === ativarPopUp)?.descricao}
                </p>

                <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progresso</span>
                    <span>{status}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-4">
                    <div
                        className="bg-green-500 h-4 rounded-full"
                        style={{ width: `${status}%` }}
                    ></div>
                    </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-2">
                    <button
                    onClick={handleClose}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg w-full sm:w-auto"
                    >
                    Fechar
                    </button>
                    {status < 100 ? (
                    <button
                        onClick={handleComplete}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full sm:w-auto"
                    >
                        Concluir Desafio
                    </button>
                    ) : (
                    <button
                        className="bg-green-500 text-white py-2 px-4 rounded-lg w-full sm:w-auto cursor-not-allowed"
                        disabled
                    >
                        Desafio Concluído
                    </button>
                    )}
                </div>
                </div>
            </div>
            )}
        </main>
        </div>
    );
}
