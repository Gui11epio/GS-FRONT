import Image from "next/image";
import logo from "../image/ITER.png";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="bg-limeGreen flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
      <div className="flex items-center justify-center mb-4 md:mb-0">
        <Image src={logo} alt="logo do iter" className="w-32 h-32 md:w-52 md:h-52" />
      </div>
      <h1 className="text-center font-bold text-lg md:text-2xl">
        PLATAFORMA DE COLETA COM RECOMPENSA
      </h1>
      <nav className="w-full md:w-auto mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <li>
            <Link href={'/'} className="hover:text-gray-400">
              Página inicial
            </Link>
          </li>
          <li>
            <Link href={'/login'} className="hover:text-gray-400">
              Login
            </Link>
          </li>
          <li>
            <Link href={'/desafios'} className="hover:text-gray-400">
              Desafios
            </Link>
          </li>
          <li>
            <Link href={'/loja'} className="hover:text-gray-400">
              Loja
            </Link>
          </li>
          <li>
            <Link href={'/paginaMembro'} className="hover:text-gray-400">
              Membros
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
