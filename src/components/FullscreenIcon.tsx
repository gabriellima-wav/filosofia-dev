import React, { useState } from "react";
import { FaExpand, FaCompress } from "react-icons/fa";

const FullscreenIcon: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <button
      onClick={toggleFullscreen}
      className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition"
      aria-label={isFullscreen ? "Sair da tela cheia" : "Entrar em tela cheia"}
    >
      {isFullscreen ? <FaCompress size={20} /> : <FaExpand size={20} />}
    </button>
  );
};

export default FullscreenIcon;
