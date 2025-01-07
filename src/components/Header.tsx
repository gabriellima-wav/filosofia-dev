export default function Header() {
  return (
    <header className="bg-emerald-700 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">FilosofiaDev</h1>
        <nav className="flex gap-4">
          <a href="#" className="hover:text-emerald-300">
            Início
          </a>
          <a href="sobre" className="hover:text-emerald-300">
            Sobre
          </a>
          <a href="#contato" className="hover:text-emerald-300">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
