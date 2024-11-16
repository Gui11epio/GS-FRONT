"use client";
import Image from "next/image";
import placaSol from "../../image/solar_panel_3d_render_89.jpg";
import lampada from "../../image/lampada.jpg"
import tomada from "../../image/tomada-inteligente.jpg"

export default function Loja(){

    return(
        <div>
            <main className="flex space-x-16">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-black flex flex-col items-center">
                    <div className="flex justify-center">
                        <Image
                            src={placaSol}
                            alt="foto placa solar"
                            className="h-64 w-52 object-cover rounded-lg"
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <h1 className="text-xl font-semibold">
                            Placa Solar <br /> <br />Especificações Elétricas:
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

                <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-black flex flex-col items-center">
                    <div className="flex justify-center">
                        <Image
                            src={lampada}
                            alt="foto lamapda"
                            className="h-64 w-52 object-cover rounded-lg"
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <h1 className="text-xl font-semibold">
                            Lampada Led <br /> <br />Especificações Elétricas:
                            <br />-Potência: 9 Watts
                            <br />-Tensão: 100V - 240V (Bivolt)
                            <br />-Corrente elétrica: ~0.08 A
                            <br />-Frequência: 50/60 Hz
                            <br />-Eficiência energética: Classe A
                        </h1>
                    </div>
                </div>


                <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-black flex flex-col items-center">
                    <div className="flex justify-center">
                        <Image
                            src={tomada}
                            alt="foto tomada"
                            className="h-64 w-52 object-cover rounded-lg"
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <h1 className="text-xl font-semibold">
                            Placa Solar <br /> <br />Especificações Elétricas:
                            <br />-Potência máxima suportada: <br />3680W (em 230V) ou 2200W (em 110V)
                            <br />-Corrente máxima: 16A
                            <br />-Tensão: 100V - 240V (Bivolt)
                            <br />-Frequência: 50/60 Hz
                        </h1>
                    </div>
                </div>
                
            </main>
        </div>
    )
}