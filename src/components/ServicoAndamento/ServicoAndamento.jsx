import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChatModal from "../ChatModal/ChatModal";
import "./ServicoAndamento.css";
import MapRealtime from "../MapRealtime/MapRealtime";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { mecanicosData } from "../../data/mecanicosData";

export default function ServicoAndamento() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);
  const [chatType, setChatType] = useState("mecanico");

  const [status, setStatus] = useState(1);
  const [mecanico, setMecanico] = useState(null);

  const TEMPO_ENTRE_STATUS = 3000;

  useEffect(() => {
    const mecanicoEncontrado = mecanicosData.find((m) => m.id === Number(id));
    if (mecanicoEncontrado) {
      setMecanico(mecanicoEncontrado);
    } else {
      navigate("/mecanicos");
    }
  }, [id, navigate]);

  useEffect(() => {
    if (status >= 5) return;
    const avancarStatus = () => {
      setStatus((prevStatus) => prevStatus + 1);
    };
    const timer = setTimeout(avancarStatus, TEMPO_ENTRE_STATUS);
    return () => clearTimeout(timer);
  }, [status]);

  const abrirChat = (tipo) => {
    setChatType(tipo);
    setChatOpen(true);
  };

  function formatarTempo(segundos) {
    const min = Math.floor(segundos / 60);
    const sec = segundos % 60;
    return `${min} min ${sec < 10 ? "0" + sec : sec}`;
  }

  const getTempoLabel = () => {
    switch (status) {
      case 1:
        return "Aguardando...";
      case 2:
        return formatarTempo(60);
      case 3:
        return "Chegou!";
      case 4:
        return "Em serviço...";
      default:
        return "";
    }
  };

  // --- NOVA FUNÇÃO PARA RENDERIZAR A ÁREA SUPERIOR ---
  const renderMapArea = () => {
    // Status 2: Mostra o Mapa
    if (status === 2) {
      return <MapRealtime />;
    }

    // Outros Status: Mostra um Banner Bonito
    let icon = "";
    let title = "";
    let sub = "";
    let bgClass = "status-hero-gradient"; // Classe padrão (Azul)

    switch (status) {
      case 1:
        icon = "🔍"; // Ou use um ícone SVG/Lib aqui
        title = "Solicitando Mecânico";
        sub = "Aguardando confirmação do parceiro...";
        break;
      case 3:
        icon = "📍";
        title = "O Mecânico Chegou";
        sub = "Encontre-o no local indicado.";
        bgClass = "status-hero-success"; // Pode criar variantes de cor
        break;
      case 4:
        icon = "🔧";
        title = "Serviço em Andamento";
        sub = "O mecânico está trabalhando no seu veículo.";
        break;
      case 5:
        icon = "✅";
        title = "Serviço Finalizado";
        sub = "Tudo pronto! Não esqueça de avaliar.";
        bgClass = "status-hero-success";
        break;
      default:
        break;
    }

    return (
      <div className={`status-hero ${bgClass}`}>
        <div className="hero-content">
          <span className="hero-icon">{icon}</span>
          <h2>{title}</h2>
          <p>{sub}</p>
        </div>
        {/* Adiciona um efeito de onda ou padrão de fundo opcional aqui */}
        <div className="hero-pattern"></div>
      </div>
    );
  };

  if (!mecanico) return <div className="loading-andamento">Carregando...</div>;

  return (
    <div className="andamento-container">
      <Header />

      {/* ÁREA DO MAPA / STATUS HERO */}
      <div className="map-container">{renderMapArea()}</div>

      {/* PAINEL BRANCO */}
      <div className="white-box">
        {/* BARRA DE PROGRESSO */}
        <div className="progress-bar">
          {["Solicitação", "A Caminho", "Chegou", "Serviço", "Finalizado"].map(
            (etapa, index) => (
              <div key={index} className="step">
                <div
                  className={index + 1 <= status ? "circle active" : "circle"}
                />
                <p className={index + 1 <= status ? "active-text" : ""}>
                  {etapa}
                </p>
              </div>
            )
          )}
        </div>

        {/* RESTO DO CONTEÚDO (CARD, BOTÕES) MANTIDO IGUAL... */}
        <div className="mec-card">
          <img src={mecanico.foto} alt={mecanico.nome} className="mec-foto" />
          <div className="info">
            <h2>{mecanico.nome}</h2>
            <p className="stars">⭐ {mecanico.avaliacao}</p>
            <p className="mec-detalhe">{mecanico.especialidade}</p>
          </div>
          {status !== 5 ? (
            <div className="tempo-container">
              <p className="tempo-label">Status:</p>
              <p className="tempo-valor">{getTempoLabel()}</p>
            </div>
          ) : (
            <div className="tempo-container">
              <p className="finalizado">Concluído</p>
            </div>
          )}
          {status === 5 && (
            <button
              className="btn-avaliar"
              onClick={() => navigate(`/avaliar/${mecanico.id}`)}
            >
              Avaliar
            </button>
          )}
        </div>

        <div className="bottom-buttons">
          <button
            className="btn-mensagem"
            onClick={() => abrirChat("mecanico")}
          >
            Mensagem
          </button>
          <button className="btn-suporte" onClick={() => abrirChat("carby")}>
            Suporte Carby 24h
          </button>
        </div>
      </div>

      {chatOpen && (
        <ChatModal
          type={chatType}
          close={() => setChatOpen(false)}
          mecanicoData={mecanico}
        />
      )}
      <Footer />
    </div>
  );
}