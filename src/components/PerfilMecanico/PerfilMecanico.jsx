import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Hooks de rota
import { Star, MapPin, CheckCircle, ArrowLeft } from "lucide-react"; // Ícones
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Mapa
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Correção de ícones do Leaflet para React
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import "./PerfilMecanico.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// IMPORTANTE: Importando os dados do "Banco de Dados" fictício
import { mecanicosData } from "../../data/mecanicosData";

const PerfilMecanico = () => {
  const { id } = useParams(); // Pega o ID da URL (ex: /mecanico/1 -> id = "1")
  const navigate = useNavigate(); // Hook para navegação

  const [mecanico, setMecanico] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mostrarTodasAvaliacoes, setMostrarTodasAvaliacoes] = useState(false);

  // --- EFEITO: Carrega os dados quando a página abre ou o ID muda ---
  useEffect(() => {
    // Simula uma busca no banco de dados
    const encontrarMecanico = () => {
      const idNumero = Number(id); // Converte string da URL para número
      const resultado = mecanicosData.find((m) => m.id === idNumero);

      setMecanico(resultado);
      setLoading(false);
    };

    encontrarMecanico();
  }, [id]);

  // --- MOCK DE AVALIAÇÕES (Pode ser movido para o data.js futuramente) ---
  const todasAvaliacoes = [
    {
      id: 1,
      nome: "Lucas Andrade",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      nota: 5,
      data: "Hoje",
      comentario:
        "O atendimento foi excelente! O mecânico chegou rápido e resolveu o problema em menos de uma hora.",
    },
    {
      id: 2,
      nome: "Mariana Costa",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      nota: 4,
      data: "2 dias atrás",
      comentario:
        "Serviço bem feito e dentro do prazo. Só achei o valor um pouco alto, mas a qualidade compensou.",
    },
    {
      id: 3,
      nome: "Rafael Oliveira",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      nota: 3,
      data: "3 dias atrás",
      comentario: "O conserto ficou bom, mas demorou mais do que o combinado.",
    },
    {
      id: 4,
      nome: "Bianca Souza",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      nota: 5,
      data: "6 dias atrás",
      comentario: "Profissional muito educado e prestativo! Explicou tudo.",
    },
    {
      id: 5,
      nome: "Carlos Mendes",
      foto: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop",
      nota: 4,
      data: "1 semana atrás",
      comentario: "Tive um pequeno atraso, mas foi resolvido.",
    },
  ];

  const avaliacoesVisiveis = mostrarTodasAvaliacoes
    ? todasAvaliacoes
    : todasAvaliacoes.slice(0, 4);

  // --- CONFIGURAÇÃO DO MAPA (ÍCONES) ---
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  });

  // --- RENDERIZAR ESTRELAS ---
  const renderStars = (nota) => {
    return (
      <div className="estrelas">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={star <= nota ? "estrela-preenchida" : "estrela-vazia"}
          />
        ))}
      </div>
    );
  };

  // --- CASO DE CARREGAMENTO OU ERRO ---
  if (loading)
    return <div className="loading-screen">Carregando perfil...</div>;

  if (!mecanico) {
    return (
      <div
        className="error-screen"
        style={{ textAlign: "center", padding: "50px" }}
      >
        <h2>Mecânico não encontrado</h2>
        <button className="btn-voltar" onClick={() => navigate("/mecanicos")}>
          Voltar para a lista
        </button>
      </div>
    );
  }

  // --- RENDERIZAÇÃO PRINCIPAL ---
  return (
    <div className="perfil-mecanico-page">
      <Header />

      {/* Botão flutuante ou fixo para voltar */}
      <div className="voltar-container" style={{ padding: "20px 5% 0" }}>
        <button
          onClick={() => navigate("/mecanicos")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "1rem",
            color: "#666",
          }}
        >
          <ArrowLeft size={20} /> Voltar para busca
        </button>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-imagem">
            <img src={mecanico.foto} alt={mecanico.nome} />
          </div>

          <div className="hero-info">
            <div className="hero-header">
              <h1>{mecanico.nome}</h1>
              {mecanico.verificado && (
                <div className="badge-verificado">
                  <CheckCircle /> Verificado
                </div>
              )}
            </div>

            <p className="especialidade">{mecanico.especialidade}</p>

            <div className="avaliacao-hero">
              {renderStars(Math.round(mecanico.avaliacao))}
              <span className="nota-numero">{mecanico.avaliacao}</span>
              <span className="total-avaliacoes-hero">
                ({mecanico.totalAvaliacoes} avaliações)
              </span>
            </div>

            <p className="distancia-hero">
              <MapPin size={16} style={{ marginRight: 4 }} />
              {mecanico.distanciaTexto || `${mecanico.distancia} km de você`}
            </p>

            <div className="endereco-container">
              <p>{mecanico.endereco}</p>
            </div>

            <div className="mapa-preview">
              <div className="mapa-placeholder">
                {/* O atributo KEY força o mapa a atualizar quando o ID muda */}
                <MapContainer
                  key={mecanico.id}
                  center={[
                    mecanico.latitude || -23.55052,
                    mecanico.longitude || -46.633308,
                  ]}
                  zoom={14}
                  style={{ height: "100%", width: "100%" }}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                  />
                  <Marker
                    position={[
                      mecanico.latitude || -23.55052,
                      mecanico.longitude || -46.633308,
                    ]}
                  >
                    <Popup>{mecanico.nome}</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>

            <button
              className="btn-chamar"
              onClick={() => navigate(`/resumo/${mecanico.id}`)}
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <div className="conteudo-principal">
        {/* Sobre */}
        <section className="secao-sobre">
          <h2>Sobre</h2>
          <p>{mecanico.sobre || mecanico.descricao}</p>
        </section>

        {/* Serviços e Formação (Lado a Lado) */}
        <div className="secao-dupla">
          <div className="secao-servicos">
            <h2>Serviços oferecidos</h2>
            <ul>
              {mecanico.servicos && mecanico.servicos.length > 0 ? (
                mecanico.servicos.map((servico, index) => (
                  <li key={index}>{servico}</li>
                ))
              ) : (
                <li>Manutenção Geral</li>
              )}
            </ul>
          </div>

          <div className="secao-formacao">
            <h2>Formação e Certificações</h2>
            <ul>
              {mecanico.formacoes && mecanico.formacoes.length > 0 ? (
                mecanico.formacoes.map((formacao, index) => (
                  <li key={index}>{formacao}</li>
                ))
              ) : (
                <li>Mecânico Profissional Verificado</li>
              )}
            </ul>
          </div>
        </div>

        {/* Avaliações */}
        <section className="secao-avaliacoes">
          <div className="avaliacoes-header">
            <div>
              <h2>Avaliações</h2>
              <p className="total-avaliacoes">
                Baseado em {todasAvaliacoes.length} experiências
              </p>
            </div>
            {!mostrarTodasAvaliacoes && todasAvaliacoes.length > 4 && (
              <button
                className="btn-ver-todas"
                onClick={() => setMostrarTodasAvaliacoes(true)}
              >
                Ver todas &gt;
              </button>
            )}
          </div>

          <div className="avaliacoes-grid">
            {avaliacoesVisiveis.map((avaliacao) => (
              <div key={avaliacao.id} className="avaliacao-card">
                <div className="avaliacao-header">
                  <img
                    src={avaliacao.foto}
                    alt={avaliacao.nome}
                    className="avaliacao-foto"
                  />
                  <div className="avaliacao-info">
                    <h4>{avaliacao.nome}</h4>
                    <span className="avaliacao-data">{avaliacao.data}</span>
                  </div>
                </div>

                {renderStars(avaliacao.nota)}

                <p className="avaliacao-comentario">{avaliacao.comentario}</p>
              </div>
            ))}
          </div>

          {mostrarTodasAvaliacoes && (
            <button
              className="btn-ver-menos"
              onClick={() => setMostrarTodasAvaliacoes(false)}
            >
              Ver menos
            </button>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PerfilMecanico;
