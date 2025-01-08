import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilosofiaAntigaPage from "./pages/filosofia/FilosofiaAntigaPage";
import FilosofiaMedievalPage from "./pages/filosofia/FilosofiaMedievalPage";
import FilosofiaModernaPage from "./pages/filosofia/FilosofiaModernaPage";
import FilosofiaContemporaneaPage from "./pages/filosofia/FilosofiaContemporaneaPage";
import SobrePage from "./pages/SobrePage";
import ContatoPage from "./pages/ContatoPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<SobrePage />} />
      <Route path="/contato" element={<ContatoPage />} />
      <Route path="/filosofia-antiga" element={<FilosofiaAntigaPage />} />
      <Route path="/filosofia-medieval" element={<FilosofiaMedievalPage />} />
      <Route path="/filosofia-moderna" element={<FilosofiaModernaPage />} />
      <Route
        path="/filosofia-contemporanea"
        element={<FilosofiaContemporaneaPage />}
      />
    </Routes>
  );
};

export default AppRoutes;
