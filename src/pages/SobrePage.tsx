import React from "react";

const SobrePage: React.FC = () => {
  return (
    <main className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-emerald-700 mb-8">
          Sobre a FilosofiaDev
        </h1>
        <div className="space-y-6">
          <p className="text-lg leading-7 text-gray-800">
            O FilosofiaDev é um espaço dedicado ao estudo e à disseminação do
            pensamento filosófico, integrando ideias do passado e do presente em
            uma abordagem clara e acessível. Nosso objetivo é tornar a filosofia
            uma ferramenta prática para todos, promovendo o autoconhecimento e o
            desenvolvimento intelectual.
          </p>
          <p className="text-lg leading-7 text-gray-800">
            Aqui, você encontrará conteúdos sobre as principais correntes e
            períodos da filosofia, desde a Filosofia Antiga até as reflexões
            contemporâneas. Acreditamos que o pensamento crítico é essencial
            para enfrentar os desafios do mundo moderno e buscamos inspirar
            nossos visitantes a explorar novas perspectivas.
          </p>
          <p className="text-lg leading-7 text-gray-800">
            Seja você um estudante, um profissional ou alguém curioso por novas
            ideias, o FilosofiaDev é o lugar certo para mergulhar em questões
            profundas, aprender com os grandes filósofos e aplicar esse
            conhecimento na sua vida e na sua carreira.
          </p>
        </div>
      </div>
    </main>
  );
};

export default SobrePage;
