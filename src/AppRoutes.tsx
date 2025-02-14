import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SobrePage from "./pages/SobrePage";
import ContatoPage from "./pages/ContatoPage";
import FilosofiaAntigaPage from "./pages/filosofia/FilosofiaAntigaPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/sobre" element={<SobrePage />} />
      <Route path="/contato" element={<ContatoPage />} />

      {/* Rotas protegidas */}
      <Route
        path="/filosofia-antiga"
        element={
          <ProtectedRoute>
            <FilosofiaAntigaPage />
          </ProtectedRoute>
        }
      />

      {/* Outras rotas que precisam de proteção podem ser adicionadas da mesma forma */}
    </Routes>
  );
};

export default AppRoutes;
