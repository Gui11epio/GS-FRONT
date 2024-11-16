export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <main className="w-full max-w-4xl px-4 py-8">

        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-limeGreen mb-4">A ideia do ITER</h1>
          <p className="text-gray-700 leading-relaxed">
            Percebemos que muitas empresas que realizam a coleta e reciclagem desses materiais possuem dificuldade em fazer com que as pessoas doem esses materiais para elas. Com isso, pensamos em uma solução onde ajudamos na coleta desses materiais e recompensamos os usuários que realizarem as doações.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-limeGreen mb-4">A proposta do nosso site</h1>
          <p className="text-gray-700 leading-relaxed">
            Nosso objetivo é conectar empresas recicladoras a pessoas que desejam doar materiais recicláveis, criando um sistema eficiente e incentivador. Dessa forma, buscamos contribuir para a sustentabilidade ambiental e social.
          </p>
        </div>

      </main>
    </div>
  );
}
