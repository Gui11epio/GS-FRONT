"use client";
import Image from "next/image";
import placaSol from "../../image/solar_panel_3d_render_89.jpg";
import lampada from "../../image/lampada.jpg";
import tomada from "../../image/tomada-inteligente.jpg";

export default function Loja() {
  return (
    <div className="bg-gray-300 py-8">
      {/* Contêiner principal com fundo cinza e padding de 8 (py-8) */}
      <main className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 px-4">
        {/* Main contém uma estrutura flexível que será coluna em dispositivos móveis e linha em dispositivos maiores (md) */}

        {/* Placa Solar */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-black flex flex-col items-center w-full md:w-96">
          <div className="flex justify-center">
            <Image
              src={placaSol}
              alt="foto placa solar"
              className="h-64 w-52 object-cover rounded-lg"
            />
          </div>
          <div className="mt-4 text-center">
            {/* informações como nome e especificações*/}
            <h1 className="text-xl font-semibold">
              Placa Solar <br /> <br />
              Especificações Elétricas:
              <br /> - Potência máxima (Pmax): 385 W
              <br /> - Tensão em Pmax (Vmp): 34,6 V
              <br /> - Corrente em Pmax (Imp): 11,13 A
              <br /> - Tensão de circuito aberto (Voc): 41,4 V
              <br /> - Corrente de curto-circuito (Isc): 11,74 A
              <br /> - Eficiência do módulo: 20,7%
              <br /> - Tolerância de potência: 0~+5 W
            </h1>
          </div>
        </div>

        {/* Lâmpada LED */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-black flex flex-col items-center w-full md:w-96">
          <div className="flex justify-center">
            <Image
              src={lampada}
              alt="foto lamapda"
              className="h-64 w-52 object-cover rounded-lg"
            />
          </div>
          <div className="mt-4 text-center">
            {/* informações como nome e especificações */}
            <h1 className="text-xl font-semibold">
              Lampada Led <br /> <br />
              Especificações Elétricas:
              <br /> - Potência: 9 Watts
              <br /> - Tensão: 100V - 240V (Bivolt)
              <br /> - Corrente elétrica: ~0.08 A
              <br /> - Frequência: 50/60 Hz
              <br /> - Eficiência energética: Classe A
            </h1>
          </div>
        </div>

        {/* Tomada Inteligente */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-black flex flex-col items-center w-full md:w-96">
          <div className="flex justify-center">
            <Image
              src={tomada}
              alt="foto tomada"
              className="h-64 w-52 object-cover rounded-lg"
            />
          </div>
          <div className="mt-4 text-center">
            {/* informações como nome e especificações */}
            <h1 className="text-xl font-semibold">
              Tomada Inteligente <br /> <br />
              Especificações Elétricas:
              <br /> - Potência máxima suportada: 3680W (em 230V) ou 2200W (em 110V)
              <br /> - Corrente máxima: 16A
              <br /> - Tensão: 100V - 240V (Bivolt)
              <br /> - Frequência: 50/60 Hz
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
