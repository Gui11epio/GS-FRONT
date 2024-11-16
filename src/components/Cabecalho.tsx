import Image from "next/image";
import logo from "../image/ITER.png"
import Link from "next/link"

export default function Cabecalho(){

    return(
        <header className="bg-limeGreen flex justify-between items-center p-4 md:p-6 h-52">
            <Image src={logo} alt="logo do iter" className="w-52 h-52"></Image>
            <h1 className="flex justify-center text-center font-bold">PLATAFORMA DE COLETA COM RECOMPENSA</h1>
            <nav className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                <ul className="flex space-x-4" >
                    <li><Link href={'/'} className="hover:text-gray-400">Página inicial</Link></li>
                    <li><Link href={'/login'} className="hover:text-gray-400">Login</Link></li>
                    <li><Link href={'/desafios'} className="hover:text-gray-400">Desafios</Link></li>
                    <li><Link href={'/loja'} className="hover:text-gray-400">Loja</Link></li>
                    <li><Link href={'/paginaMembro'} className="hover:text-gray-400">Membros</Link></li>
                </ul>
            </nav>
        </header>
    )
}