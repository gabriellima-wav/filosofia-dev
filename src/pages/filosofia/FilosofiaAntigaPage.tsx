import React from "react";
import FilosofiaPageLayout from "./FilosofiaPageLayout";

const FilosofiaAntigaPage: React.FC = () => {
  return (
    <FilosofiaPageLayout title="Filosofia Antiga">
      <p>
        A Filosofia Antiga é um período da história da filosofia que se estende
        desde o século VI a.C. até o século VI d.C. Durante este período,
        filósofos como Sócrates, Platão e Aristóteles fundaram as bases do
        pensamento ocidental.
      </p>
      <p>
        A filosofia grega, particularmente, teve um impacto duradouro sobre
        várias tradições filosóficas, e suas influências podem ser vistas até
        hoje nas nossas reflexões sobre ética, política e metafísica.
      </p>

      <div className="mt-8 space-y-4">
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-2">Início da Filosofia</h3>
          <p>
            A Filosofia começou na Grécia antiga com o desenvolvimento do
            pensamento racional e o afastamento das explicações mitológicas.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-2">Pré-Socráticos</h3>
          <p>
            Filósofos como Tales de Mileto e Anaximandro focaram nas explicações
            naturais para a origem do mundo, propondo teorias como a substância
            primordial.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-2">Sócrates</h3>
          <p>
            Sócrates é conhecido por seu método de questionamento, o método
            socrático, e por sua ênfase na busca pelo conhecimento e virtude.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-2">Sofistas</h3>
          <p>
            Os sofistas eram filósofos itinerantes que ensinavam retórica e
            argumentação, com ênfase na relatividade da verdade.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-2">Platão</h3>
          <p>
            Platão foi discípulo de Sócrates e fundou a Academia. Seus diálogos
            exploram temas como a teoria das ideias e a justiça.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-2">Aristóteles</h3>
          <p>
            Aristóteles, discípulo de Platão, fundou o Liceu e é conhecido por
            suas contribuições em lógica, ética, política e metafísica.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-2">Epicurismo</h3>
          <p>
            Epicurismo é uma filosofia que prega a busca pelo prazer como bem
            supremo, enfatizando a moderação e a amizade.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-2">Estoicismo</h3>
          <p>
            O estoicismo é uma filosofia que ensina a viver em harmonia com a
            natureza e a aceitar o destino com serenidade.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-2">Ceticismo</h3>
          <p>
            O ceticismo questiona a possibilidade de conhecimento absoluto,
            defendendo a dúvida como ferramenta para alcançar a sabedoria.
          </p>
        </div>
      </div>
    </FilosofiaPageLayout>
  );
};

export default FilosofiaAntigaPage;
