// src/pages/Login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      toast.error("Preencha todos os campos!");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      toast.success("Login realizado com sucesso!");
      navigate("/chamados");
    } catch (error) {
      toast.error("Erro ao fazer login. Verifique seu email e senha.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
