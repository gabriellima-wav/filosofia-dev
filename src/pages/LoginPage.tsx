import React, { useState } from "react";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig ";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`Falha no login: ${err.message}`);
      } else {
        setError("Falha no login. Verifique suas credenciais.");
      }
      console.error("Erro no login:", err);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Por favor, insira seu email para recuperar a senha.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setPopupMessage(
        "Um email de recuperação de senha foi enviado. Verifique sua caixa de entrada."
      );
      setIsPopupOpen(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(`Erro ao enviar email de recuperação: ${err.message}`);
      } else {
        setError("Erro ao enviar email de recuperação. Tente novamente.");
      }
      console.error("Erro na recuperação de senha:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-gray-500"
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Entrar
        </button>
      </form>
      <p className="text-center mt-4">
        Não tem conta?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Cadastre-se
        </span>
      </p>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <p className="text-center mt-4">
        <span
          onClick={handleForgotPassword}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Esqueci minha senha
        </span>
      </p>
      <Popup
        open={isPopupOpen}
        closeOnDocumentClick
        onClose={() => setIsPopupOpen(false)}
      >
        <div className="modal">
          <button className="close" onClick={() => setIsPopupOpen(false)}>
            &times;
          </button>
          <div className="header">Notificação</div>
          <div className="content">{popupMessage}</div>
        </div>
      </Popup>
    </div>
  );
};

export default LoginPage;
