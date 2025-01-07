import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilosofiaAntigaPage from "./pages/filosofia/FilosofiaAntigaPage";
import FilosofiaMedievalPage from "./pages/filosofia/FilosofiaMedievalPage";
import FilosofiaModernaPage from "./pages/filosofia/FilosofiaModernaPage";
import FilosofiaContemporaneaPage from "./pages/filosofia/FilosofiaContemporaneaPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filosofia-antiga" element={<FilosofiaAntigaPage />} />
        <Route path="/filosofia-medieval" element={<FilosofiaMedievalPage />} />
        <Route path="/filosofia-moderna" element={<FilosofiaModernaPage />} />
        <Route
          path="/filosofia-contemporanea"
          element={<FilosofiaContemporaneaPage />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
