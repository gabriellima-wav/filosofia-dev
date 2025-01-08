import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import AppRoutes from "./AppRoutes";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Breadcrumbs />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
