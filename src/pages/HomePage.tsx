import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Bem-vindo!</h1>
        <p className="text-center mb-8">
          Explore ideias, conceitos e textos que transformaram a história do
          pensamento humano.
        </p>

        <div className="flex flex-col gap-6">
          {/* Card Filosofia Antiga com imagem e efeito de hover */}
          <div
            className="text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: "url('/atenas.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
            }}
          >
            <h2 className="text-xl font-semibold mb-2">Filosofia Antiga</h2>
          </div>

          {/* Card Filosofia Medieval com imagem de fundo do castelo e efeito de hover */}
          <div
            className="text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: "url('/castelo.jpg')", // Aqui substitua '/castelo.jpg' pelo caminho correto da imagem
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
            }}
          >
            <h2 className="text-xl font-semibold mb-2">Filosofia Medieval</h2>
          </div>

          {/* Outros cards */}
          <div className="bg-emerald-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-xl font-semibold mb-2">Filosofia Moderna</h2>
          </div>

          <div className="bg-emerald-400 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-xl font-semibold mb-2">
              Filosofia Contemporânea
            </h2>
            <p>
              A Filosofia Contemporânea lida com questões sobre existencialismo,
              estruturalismo e pós-modernismo, com pensadores como Sartre e
              Foucault.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
