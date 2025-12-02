import React, { useState } from "react";
import "./Pagamento.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
export default function Pagamento() {
  const [metodo, setMetodo] = useState("cartao");
  const navigate = useNavigate();
  const { id } = useParams();
  const total = "R$ 150,00";

  const handleConfirmar = () => {
    navigate(`/servico-andamento/${id}`);
  };

  return (
    <div className="pag-container">
      <Header />

      <div className="pag-conteudo">
        <h1 className="pag-title">Pagamento do Serviço</h1>
        <p className="pag-desc">
          Escolha uma forma de pagamento para concluir sua chamada.
        </p>

        <div className="pagamento-area">
          {/* Escolha do método */}
          <div className="pag-metodos">
            <h3>Formas de Pagamento</h3>

            <div className="metodo-opcao" onClick={() => setMetodo("cartao")}>
              <input
                type="radio"
                name="metodo"
                checked={metodo === "cartao"}
                onChange={() => setMetodo("cartao")}
              />
              <label>Cartão de Crédito</label>
            </div>

            <div className="metodo-opcao" onClick={() => setMetodo("pix")}>
              <input
                type="radio"
                name="metodo"
                checked={metodo === "pix"}
                onChange={() => setMetodo("pix")}
              />
              <label>PIX</label>
            </div>

            <div className="metodo-opcao" onClick={() => setMetodo("boleto")}>
              <input
                type="radio"
                name="metodo"
                checked={metodo === "boleto"}
                onChange={() => setMetodo("boleto")}
              />
              <label>Boleto Bancário</label>
            </div>
          </div>

          {/* Painel que muda dinamicamente */}
          <div className="pag-detalhes">
            {metodo === "cartao" && (
              <div className="cartao-box">
                <h3>Pagamento com cartão de crédito</h3>

                <label>Número do cartão</label>
                <input
                  className="pag-input"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                />

                <div className="linha">
                  <div>
                    <label>Validade</label>
                    <input
                      className="pag-input"
                      type="text"
                      placeholder="MM/AA"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label>CVV</label>
                    <input
                      className="pag-input"
                      type="text"
                      placeholder="123"
                      maxLength={3}
                    />
                  </div>
                </div>

                <label>Nome impresso no cartão</label>
                <input
                  className="pag-input"
                  type="text"
                  placeholder="Seu nome"
                />
              </div>
            )}

            {metodo === "pix" && (
              <div className="pix-box">
                <h3>Pague com PIX</h3>
                <p>Escaneie o QR Code abaixo para finalizar o pagamento:</p>

                <div className="qr-box">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Pagamento ACARB"
                    alt="QR PIX"
                  />
                </div>

                <p className="pix-copia">Chave copia e cola:</p>
                <div className="chave-box">acarb.pagamento@acarb.com</div>
              </div>
            )}

            {metodo === "boleto" && (
              <div className="boleto-box">
                <h3>Boleto bancário</h3>
                <p>Clique abaixo para gerar seu boleto:</p>
                <a className="btn-boleto" href="#">
                  Gerar boleto
                </a>
              </div>
            )}

            <div className="total">
              <span>Total:</span>
              <strong>{total}</strong>
            </div>

            <button className="btn-confirmar" onClick={handleConfirmar}>
              Confirmar Pagamento
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
