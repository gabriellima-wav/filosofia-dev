import React from "react";
import ModuleWrapper from "../../components/ModuleWrapper"; // Importe o ModuleWrapper

const FilosofiaMedievalPage: React.FC = () => {
  return (
    <ModuleWrapper
      title="Filosofia Medieval"
      description="A Filosofia Medieval é uma fase da filosofia que se desenvolveu principalmente durante a Idade Média. Filósofos como Santo Agostinho e Tomás de Aquino foram figuras centrais nesta época, tentando reconciliar a fé cristã com o pensamento filosófico grego."
    >
      <p>
        A filosofia medieval é marcada por um forte enfoque em questões
        teológicas, como a relação entre razão e fé.
      </p>
    </ModuleWrapper>
  );
};

export default FilosofiaMedievalPage;
