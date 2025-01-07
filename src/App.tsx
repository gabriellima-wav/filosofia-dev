import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilosofiaAntigaPage from "./pages/filosofia/FilosofiaAntigaPage";
import FilosofiaMedievalPage from "./pages/filosofia/FilosofiaMedievalPage";
import FilosofiaModernaPage from "./pages/filosofia/FilosofiaModernaPage";
import FilosofiaContemporaneaPage from "./pages/filosofia/FilosofiaContemporaneaPage";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/antiga" element={<FilosofiaAntigaPage />} />
        <Route path="/medieval" element={<FilosofiaMedievalPage />} />
        <Route path="/moderna" element={<FilosofiaModernaPage />} />
        <Route path="/contemporanea" element={<FilosofiaContemporaneaPage />} />
      </Routes>
    </Router>
  );
};

export default App;
