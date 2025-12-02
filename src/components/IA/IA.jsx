
import React, { useState, useEffect, useRef } from "react";
import "./IA.css";
import iconcarby from '../../assets/carby-icon.png'; // ✅ Ícone do Carby

export default function IA() {
  const [sessionId, setSessionId] = useState(() => {
    let id = localStorage.getItem("carby_session_id");
    if (!id) {
      try {
        id = "sess-" + crypto.randomUUID();
      } catch {
        id = "sess-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
      }
      localStorage.setItem("carby_session_id", id);
    }
    return id;
  });

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const timer = setTimeout(() => {
        setMessages([{ text: "Olá! Sou o Carby, seu assistente virtual. Como posso ajudar você hoje?", type: "carby" }]);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages]);

  async function enviarMensagem(msg) {
    try {
      const resposta = await fetch("https://gustavocardev.app.n8n.cloud/webhook/acarb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pergunta: msg, sessionId })
      });
      if (!resposta.ok) throw new Error(`Erro ${resposta.status}`);
      return await resposta.text();
    } catch {
      return "Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.";
    }
  }

  async function handleSend() {
    const texto = inputValue.trim();
    if (!texto) return;
    if (texto.length > 500) {
      setMessages(prev => [...prev, { text: "Sua mensagem é muito longa. Limite a 500 caracteres.", type: "carby" }]);
      setInputValue("");
      return;
    }

    setMessages(prev => [...prev, { text: texto, type: "user" }]);
    setInputValue("");
    setIsTyping(true);

    const resposta = await enviarMensagem(texto);
    setIsTyping(false);
    setMessages(prev => [...prev, { text: resposta, type: "carby" }]);
  }

  function toggleMinimizar() {
    setIsMinimized(!isMinimized);
  }

  return (
    <>
      {/* Ícone flutuante para abrir/fechar */}
      {!isOpen && (
        <button className="chat-icon" onClick={() => setIsOpen(true)}>
          <img src={iconcarby} alt="Abrir chat Carby" />
        </button>
      )}

      {isOpen && (
        <div id="carby-widget" className={isMinimized ? "minimized" : ""}>
          {/* ✅ Cabeçalho com ícone + texto */}
          <div id="carby-header">
            <div className="header-left">
              <img src={iconcarby} alt="Carby" className="header-icon" />
              <span>Carby - Assistente</span>
            </div>
            <div className="header-controls">
              <button className="header-btn" title="Minimizar" onClick={toggleMinimizar}>−</button>
              <button className="header-btn" title="Fechar" onClick={() => setIsOpen(false)}>x</button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div id="carby-chat" ref={chatRef}>
                {messages.map((msg, i) => (
                  <div key={i} className={`msg ${msg.type}`}>{msg.text}</div>
                ))}
                {isTyping && (
                  <div className="typing-indicator active">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                )}
              </div>

              <div id="carby-input-area">
                <input
                  id="carby-msg"
                  type="text"
                  placeholder="Fale com o Carby..."
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSend()}
                />
                <button id="carby-send" onClick={handleSend}>Enviar</button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
