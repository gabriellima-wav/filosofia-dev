import React from "react";
import { Link } from "react-router-dom"; // Importa o Link do react-router-dom
import ModuleWrapper from "../../components/ModuleWrapper";

const FilosofiaAntigaPage: React.FC = () => {
  return (
    <ModuleWrapper
      title="Filosofia Antiga"
      description="A Filosofia Antiga é um período da história da filosofia que se estende desde o século VI a.C. até o século VI d.C. Durante este período, filósofos como Sócrates, Platão e Aristóteles fundaram as bases do pensamento ocidental. A filosofia grega, particularmente, teve um impacto duradouro sobre várias tradições filosóficas, e suas influências podem ser vistas até hoje nas nossas reflexões sobre ética, política e metafísica."
    >
      <div className="mt-8 space-y-6">
        <Link
          to="/filosofia-antiga/inicio"
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition-all block max-w-xl"
        >
          <h3 className="text-xl font-bold mb-4">1- Início da Filosofia</h3>
          <p>
            A Filosofia começou na Grécia antiga com o desenvolvimento do
            pensamento racional e o afastamento das explicações mitológicas.
          </p>
        </Link>
        <Link
          to="/filosofia-antiga/pre-socraticos"
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition-all block max-w-xl"
        >
          <h3 className="text-xl font-bold mb-4">2- Pré-Socráticos</h3>
          <p>
            Filósofos como Tales de Mileto e Anaximandro focaram nas explicações
            naturais para a origem do mundo, propondo teorias como a substância
            primordial.
          </p>
        </Link>
        <Link
          to="/filosofia-antiga/socrates"
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition-all block max-w-xl"
        >
          <h3 className="text-xl font-bold mb-4">3- Sócrates</h3>
          <p>
            Sócrates é conhecido por seu método de questionamento, o método
            socrático, e por sua ênfase na busca pelo conhecimento e virtude.
          </p>
        </Link>
        <Link
          to="/filosofia-antiga/sofistas"
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition-all block max-w-xl"
        >
          <h3 className="text-xl font-bold mb-4">4- Sofistas</h3>
          <p>
            Os sofistas eram filósofos itinerantes que ensinavam retórica e
            argumentação, com ênfase na relatividade da verdade.
          </p>
        </Link>
        <Link
          to="/filosofia-antiga/mapa"
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition-all block max-w-xl"
        >
          <h3 className="text-xl font-bold mb-4">5- O Mapa da Filosofia</h3>
          <p>
            O Mapa da Filosofia é uma ferramenta visual que organiza e conecta
            diferentes correntes filosóficas ao longo da história, permitindo
            uma compreensão clara das influências e das transformações no
            pensamento filosófico.
          </p>
        </Link>
        <Link
          to="/filosofia-antiga/platao"
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition-all block max-w-xl"
        >
          <h3 className="text-xl font-bold mb-4">6- Platão</h3>
          <p>
            Platão foi discípulo de Sócrates e fundou a Academia. Seus diálogos
            exploram temas como a teoria das ideias e a justiça.
          </p>
        </Link>
        <Link
          to="/filosofia-antiga/aristoteles"
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition-all block max-w-xl"
        >
          <h3 className="text-xl font-bold mb-4">7- Aristóteles</h3>
          <p>
            Aristóteles, discípulo de Platão, fundou o Liceu e é conhecido por
            suas contribuições em lógica, ética, política e metafísica.
          </p>
        </Link>
        <Link
          to="/filosofia-antiga/epicurismo"
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition-all block max-w-xl"
        >
          <h3 className="text-xl font-bold mb-4">8- Epicurismo</h3>
          <p>
            Epicurismo é uma filosofia que prega a busca pelo prazer como bem
            supremo, enfatizando a moderação e a amizade.
          </p>
        </Link>
        <Link
          to="/filosofia-antiga/estoicismo"
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition-all block max-w-xl"
        >
          <h3 className="text-xl font-bold mb-4">9- Estoicismo</h3>
          <p>
            O estoicismo é uma filosofia que ensina a viver em harmonia com a
            natureza e a aceitar o destino com serenidade.
          </p>
        </Link>
        <Link
          to="/filosofia-antiga/ceticismo"
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition-all block max-w-xl"
        >
          <h3 className="text-xl font-bold mb-4">10- Ceticismo</h3>
          <p>
            O ceticismo questiona a possibilidade de conhecimento absoluto,
            defendendo a dúvida como ferramenta para alcançar a sabedoria.
          </p>
        </Link>
      </div>
    </ModuleWrapper>
  );
};

export default FilosofiaAntigaPage;
