"use client";
import Image from "next/image";
import guiFoto from "../../image/Guillherme.jpeg";
import pedroFoto from "../../image/Pedro.jpeg";
import ferFoto from "../../image/Fernando.jpeg";

export default function PaginaMembros() {
    return (
        <div className="bg-gray-300">
            {/* Contêiner principal com fundo cinza */}
            <main className="bg-gray-300">
                {/* Subcontêiner com fundo branco, sombra e bordas arredondadas */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    {/* Título centralizado e com estilo personalizado */}
                    <h1 className="text-3xl font-bold text-limeGreen mb-4 text-center">MEMBROS</h1>
                </div>

                {/* Seção Pedro */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-black flex items-center">
                    <Image src={pedroFoto} alt="foto pedro" className="h-64 w-52 object-cover rounded-lg" />
                    <div className="ml-6">
                        <h1 className="text-xl font-semibold">
                            Nome: Pedro Manzo Yokoo <br />RM: 556115 <br />Turma: 1tdspi
                        </h1>
                        <h2><br />LINK DO LINKEDIN <br /> <br /></h2>
                        <a href="https://www.linkedin.com/in/pedro-yokoo-36291a319/" className="bg-blue-200 shadow-lg rounded-lg border-2 border-black px-2 py-1">LINKEDIN</a>
                        <h2><br />LINK DO GITHUB <br /><br /> </h2>
                        <a href="https://github.com/Pedro-sugoy" className="bg-slate-300 shadow-lg rounded-lg border-2 border-black px-2 py-1">GIT HUB</a>
                    </div>
                </div>

                {/* Seção Guilherme */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-black flex items-center">
                    <Image src={guiFoto} alt="foto guilherme" className="h-64 w-52 object-cover rounded-lg" />
                    <div className="ml-6">
                        <h1 className="text-xl font-semibold">
                            Nome: Guilherme Camasmie Laiber de Jesus <br />RM: 554894 <br />Turma: 1tdspi
                        </h1>
                        <h2><br />LINK DO LINKEDIN <br /><br /></h2>
                        <a href="https://www.linkedin.com/in/guilherme-camasmie-laiber-de-jesus-6111a82b6/" className="bg-blue-200 shadow-lg rounded-lg border-2 border-black px-2 py-1">LINKEDIN</a>
                        <h2><br />LINK DO GITHUB <br /><br /></h2>
                        <a href="https://github.com/Gui11epio" className="bg-slate-300 shadow-lg rounded-lg border-2 border-black px-2 py-1">GIT HUB</a>
                    </div>
                </div>

                {/* Seção Fernando */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-black flex items-center">
                    <Image src={ferFoto} alt="foto fernando" className="h-64 w-52 object-cover rounded-lg" />
                    <div className="ml-6">
                        <h1 className="text-xl font-semibold">
                            Nome: Fernando Fernando Prado <br />RM: 557982 <br />Turma: 1tdspi
                        </h1>
                        <h2><br />LINK DO LINKEDIN <br /><br /></h2>
                        <a href="https://www.linkedin.com/in/fernando-prado-41b61524b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bg-blue-200 shadow-lg rounded-lg border-2 border-black px-2 py-1">LINKEDIN</a>
                        <h2><br />LINK DO GITHUB <br /><br /></h2>
                        <a href="https://github.com/fehunterbr" className="bg-slate-300 shadow-lg rounded-lg border-2 border-black px-2 py-1">GIT HUB</a>
                    </div>
                </div>
            </main>
        </div>
    );
}