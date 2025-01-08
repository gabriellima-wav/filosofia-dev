import { useNavigate } from "react-router-dom"; // Importando useNavigate

export default function HomePage() {
  const navigate = useNavigate(); // Função para navegar entre páginas

  const handleCardClick = (page: string) => {
    navigate(`/${page}`); // Redireciona para a página de Filosofia específica
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Bem-vindo ao Filosofia
          <span className="text-green-900">Dev</span>!
        </h1>
        <p className="text-center mb-8">
          Explore ideias, conceitos e textos que transformaram a história do
          pensamento humano.
        </p>

        <div className="flex flex-col gap-6">
          <div
            className="text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-[400px] md:w-[600px] lg:w-[1000px]"
            style={{
              backgroundImage: "url('/atenas.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
            }}
            onClick={() => handleCardClick("filosofia-antiga")} // Navega para Filosofia Antiga
          >
            <h2
              className="text-xl font-semibold mb-2"
              style={{ userSelect: "none" }}
            >
              Filosofia Antiga
            </h2>
          </div>
          <div
            className="text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-[400px] md:w-[600px] lg:w-[1000px]"
            style={{
              backgroundImage: "url('/castelo.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
            }}
            onClick={() => handleCardClick("filosofia-medieval")} // Navega para Filosofia Medieval
          >
            <h2
              className="text-xl font-semibold mb-2"
              style={{ userSelect: "none" }}
            >
              Filosofia Medieval
            </h2>
          </div>
          <div
            className="text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-[400px] md:w-[600px] lg:w-[1000px]"
            style={{
              backgroundImage: "url('/quadros.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
            }}
            onClick={() => handleCardClick("filosofia-moderna")} // Navega para Filosofia Moderna
          >
            <h2
              className="text-xl font-semibold mb-2"
              style={{ userSelect: "none" }}
            >
              Filosofia Moderna
            </h2>
          </div>

          {/* Card Filosofia Contemporânea com imagem de museu */}
          <div
            className="text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-[400px] md:w-[600px] lg:w-[1000px]"
            style={{
              backgroundImage: "url('/museu.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
            }}
            onClick={() => handleCardClick("filosofia-contemporanea")} // Navega para Filosofia Contemporânea
          >
            <h2
              className="text-xl font-semibold mb-2"
              style={{ userSelect: "none" }}
            >
              Filosofia Contemporânea
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
