import { Link } from "react-router-dom";
import FullscreenIcon from "./FullscreenIcon";

export default function Header() {
  return (
    <header className="bg-emerald-700 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-emerald-50">
          Filosofia
          <span className="text-green-900">Dev</span>
        </Link>
        <nav className="flex gap-4 ml-auto">
          <a href="sobre" className="text-lg hover:text-emerald-300">
            Sobre
          </a>
          <a href="contato" className="text-lg hover:text-emerald-300">
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
