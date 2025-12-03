import React from "react";
import "./SucessoAvaliacao.css";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";

export default function SucessoAvaliacao() {
  const navigate = useNavigate();

  return (
    <div className="sucesso-container">
      <Header />

      <div className="sucesso-content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
          alt="Sucesso"
          className="sucesso-icon"
        />

        <h1>Avaliação enviada com sucesso!</h1>

        <p>
          Obrigado pelo seu feedback. Sua avaliação ajuda outros usuários a
          escolherem os melhores mecânicos.
        </p>

        <button className="btn-voltar" onClick={() => navigate("/")}>
          Voltar
        </button>
      </div>

    </div>
  );
}
