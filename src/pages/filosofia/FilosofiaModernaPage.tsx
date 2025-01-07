import React from "react";
import FilosofiaPageLayout from "./FilosofiaPageLayout";

const FilosofiaModernaPage: React.FC = () => {
  return (
    <FilosofiaPageLayout title="Filosofia Moderna">
      <p>
        A Filosofia Moderna surgiu no século XVII e se estendeu até o século
        XIX. Esse período é marcado por uma busca pela razão, pela ciência e
        pela liberdade humana. Filósofos como René Descartes, Immanuel Kant e
        John Locke são algumas das figuras mais importantes dessa época.
      </p>
      <p>
        A filosofia moderna trouxe à tona temas como empirismo, racionalismo e o
        questionamento sobre a existência de Deus, abrindo caminho para a
        ciência moderna e a teoria política.
      </p>
    </FilosofiaPageLayout>
  );
};

export default FilosofiaModernaPage;
