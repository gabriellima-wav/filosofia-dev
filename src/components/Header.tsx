import { Link } from "react-router-dom";
import FullscreenIcon from "./FullscreenIcon";

export default function Header() {
  return (
    <header className="bg-emerald-700 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-emerald-50">
          FilosofiaDev
        </Link>
        <nav className="flex gap-4">
          <a href="sobre" className="hover:text-emerald-300">
            Sobre
          </a>
          <a href="contato" className="hover:text-emerald-300">
            Contato
          </a>
        </nav>
        <div className="ml-4">
          <FullscreenIcon />
        </div>
      </div>
    </header>
  );
}
