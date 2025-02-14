import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-dark py-4 fixed bottom-0 left-0 right-0 select-none">
      <div className="container mx-auto px-4">
        <p className="text-left">
          &copy; 2025 FilosofiaDev. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
