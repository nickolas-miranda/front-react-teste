import React, { useState } from "react";
import "./ChatModal.css";

export default function ChatModal({ type, close, mecanicoData }) {
  const perfil =
    type === "mecanico"
      ? { nome: mecanicoData.nome, foto: mecanicoData.foto }
      : { nome: "Carby", foto: "/carby.png" };
  const [messages, setMessages] = useState([
    {
      from: "me",
      text:
        type === "mecanico"
          ? `Oi, ${mecanicoData.nome.split(" ")[0]}! Tudo bem?` // Pega o primeiro nome
          : "Oi, Carby! Como faço para agendar um serviço?",
    },
  ]);
  const [input, setInput] = useState("");


  const enviarMsg = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { from: "me", text: input }]);
    setInput("");

    // Resposta automática da IA / mecânico
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: "bot",
          text:
            type === "carby"
              ? "Estou aqui para ajudar! O que você precisa?"
              : "Certo! Vou verificar isso para você.",
        },
      ]);
    }, 900);
  };

  return (
    <div className="chat-overlay">
      <div className="chat-window">
        <div className="chat-header">
          <button className="back-btn" onClick={close}>
            ←
          </button>

          <img src={perfil.foto} className="header-foto" alt="" />
          <h2>{perfil.nome}</h2>
        </div>

        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`msg ${msg.from === "me" ? "me" : "bot"}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-footer">
          <input
            type="text"
            placeholder="Digite uma mensagem..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="send-btn" onClick={enviarMsg}>
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
