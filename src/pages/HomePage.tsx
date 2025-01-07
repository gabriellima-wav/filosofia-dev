import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-green-800">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Filosofia Dev!</h1>
      <p className="text-lg mb-2">
        Explore ideias, textos, e imagens sobre filosofia.
      </p>
      <p className="text-sm text-green-600">
        <strong>
          Esta é uma página inicial básica criada com React e Vite.
        </strong>
      </p>
    </div>
  );
};

export default HomePage;
