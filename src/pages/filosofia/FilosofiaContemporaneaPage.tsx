import React from "react";
import ModuleWrapper from "../../components/ModuleWrapper"; // Importe o ModuleWrapper

const FilosofiaContemporaneaPage: React.FC = () => {
  return (
    <ModuleWrapper
      title="Filosofia Contemporânea"
      description="A Filosofia Contemporânea é um período que se estende do final do século XIX até os dias atuais. Nesse período, as questões sobre a sociedade, linguagem, existência e identidade ganharam maior destaque."
    >
      <p>
        Filósofos como Friedrich Nietzsche, Jean-Paul Sartre, Michel Foucault e
        outros influenciaram profundamente o pensamento contemporâneo,
        principalmente em relação à liberdade, poder e a natureza da realidade.
      </p>
      {/* Mais conteúdo específico sobre Filosofia Contemporânea pode ser adicionado aqui */}
    </ModuleWrapper>
  );
};

export default FilosofiaContemporaneaPage;
