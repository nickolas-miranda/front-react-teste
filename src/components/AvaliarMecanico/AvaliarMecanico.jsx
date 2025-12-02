import React, { useState } from "react";
import "./AvaliarMecanico.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { mecanicosData } from "../../data/mecanicosData";
import { useNavigate } from "react-router-dom";

export default function AvaliarMecanico() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comentario, setComentario] = useState("");

  const { id } = useParams();
  const mecanico = mecanicosData.find((m) => m.id === Number(id));

  if (!mecanico) {
    return <div className="loading">Carregando mecânico...</div>;
  }
  const navigate = useNavigate();

  const enviarAvaliacao = () => {
    // (aqui você pode salvar no backend ou localStorage depois)
    navigate("/avaliacao-sucesso");
  };

  const reviewsAnteriores = [
    {
      id: 1,
      nome: "Lucas Andrade",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      tempo: "Hoje",
      nota: 5,
      texto:
        "O atendimento foi excelente! O mecânico chegou rápido e resolveu o problema rápido.",
    },
    {
      id: 2,
      nome: "Mariana Costa",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
      tempo: "2 dias atrás",
      nota: 4,
      texto: "Serviço bem feito. Preço um pouco alto, mas valeu a pena.",
    },
  ];

  return (
    <div className="avaliar-page">
      <Header />

      <div className="conteudo-central">
        <section className="hero-avaliacao">
          <div className="perfil-mecanico">
            <div className="foto-container">
              <img
                src={mecanico.foto}
                alt={mecanico.nome}
                className="foto-grande"
              />
            </div>

            <div className="nome-area">
              <h1>{mecanico.nome}</h1>
              <span className="verificado-icon">✔</span>
            </div>

            <div className="nota-geral">
              <div className="estrelas-fixas">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < Math.floor(mecanico.avaliacao)
                        ? "star filled"
                        : "star"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              <span className="nota-numero">
                {mecanico.avaliacao.toFixed(1).replace(".", ",")}
              </span>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <div className="form-avaliacao">
            <h2>Avaliar Mecânico</h2>

            {/* Estrelas interativas */}
            <div className="star-input">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;

                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />

                    <span
                      className="star-grande"
                      style={{
                        color:
                          ratingValue <= (hover || rating)
                            ? "#ffc107"
                            : "#e4e5e9",
                      }}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    >
                      ★
                    </span>
                  </label>
                );
              })}
            </div>

            <textarea
              placeholder="Comentário opcional"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            ></textarea>

            <button className="btn-enviar" onClick={enviarAvaliacao}>Enviar avaliação</button>
          </div>
        </section>

        {/* LISTA DE AVALIAÇÕES */}
        <section className="lista-avaliacoes">
          <h3>Avaliações anteriores</h3>

          <div className="grid-reviews">
            {reviewsAnteriores.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="review-user">
                    <img src={review.foto} alt={review.nome} />
                    <strong>{review.nome}</strong>
                  </div>

                  <span className="review-date">{review.tempo}</span>
                </div>

                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      style={{ color: i < review.nota ? "#ff9100" : "#ddd" }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="review-text">{review.texto}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
