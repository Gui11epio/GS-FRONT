import Image from "next/image";
import logo from "../image/ITER.png"
import Link from "next/link"

export default function Cabecalho(){

    return(
        <header className="bg-limeGreen">
            <Image src={logo} alt="logo do iter" className="w-52 h-52"></Image>
            <nav className="flex-1 flex justify-center">
                <ul className="flex space-x-4" >
                    <li><Link href={'/'} className="hover:text-gray-400">Home</Link></li>
                    <li><Link href={'/cadastro'} className="hover:text-gray-400">Cadastro</Link></li>
                    <li><Link href={'/iter'} className="hover:text-gray-400">ITER</Link></li>
                    <li><Link href={'/membros'} className="hover:text-gray-400">Membros do Projeto</Link></li>
                </ul>
            </nav>
        </header>
    )
}