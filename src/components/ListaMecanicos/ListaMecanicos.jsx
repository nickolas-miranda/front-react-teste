import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, CheckCircle, ChevronDown } from "lucide-react";
import "./ListaMecanicos.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { mecanicosData } from "../../data/mecanicosData";

const ListaMecanicos = () => {
  const navigate = useNavigate();

  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 8; // quantidade por página

  const [filtros, setFiltros] = useState({
    ordenacao: "distancia",
    distanciaValor: 20,
    tipoServico: "",
    precoCategoria: "",
    avaliacaoMin: 0,
    verificados: false,
  });

  const [dropdownAberto, setDropdownAberto] = useState(null);

  const abrirDrop = (menu) => {
    setDropdownAberto((prev) => (prev === menu ? null : menu));
  };

  const fecharDrop = () => setDropdownAberto(null);

  const mecanicos = mecanicosData;

  // ---------------- FILTRAGEM COMBINADA ---------------- //
  let filtrados = [...mecanicos];

  if (typeof filtros.distanciaValor === "number") {
    filtrados = filtrados.filter((m) => m.distancia <= filtros.distanciaValor);
  }

  if (filtros.tipoServico.trim() !== "") {
    const term = filtros.tipoServico.toLowerCase();
    filtrados = filtrados.filter((m) =>
      m.especialidade.toLowerCase().includes(term)
    );
  }

  if (filtros.precoCategoria) {
    filtrados = filtrados.filter((m) => {
      const faixa = m.preco.replace("R$", "").split(" - ");
      const min = Number(faixa[0].trim());
      if (filtros.precoCategoria === "baixo") return min <= 30;
      if (filtros.precoCategoria === "medio") return min > 30 && min <= 50;
      if (filtros.precoCategoria === "alto") return min > 50;
      return true;
    });
  }

  if (filtros.avaliacaoMin > 0) {
    filtrados = filtrados.filter(
      (m) => m.avaliacao >= Number(filtros.avaliacaoMin)
    );
  }

  if (filtros.verificados) {
    filtrados = filtrados.filter((m) => m.verificado === true);
  }

  if (filtros.ordenacao === "avaliacao") {
    filtrados.sort((a, b) => b.avaliacao - a.avaliacao);
  } else if (filtros.ordenacao === "preco") {
    filtrados.sort((a, b) => {
      const aMin = Number(a.preco.replace("R$", "").split(" - ")[0]);
      const bMin = Number(b.preco.replace("R$", "").split(" - ")[0]);
      return aMin - bMin;
    });
  } else if (filtros.ordenacao === "distancia") {
    filtrados.sort((a, b) => a.distancia - b.distancia);
  }

  // ---------------- PAGINAÇÃO REAL ---------------- //
  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / itensPorPagina));

  // garante que nunca fique em página inexistente
  if (paginaAtual > totalPaginas) {
    setPaginaAtual(1);
  }

  const indexInicial = (paginaAtual - 1) * itensPorPagina;
  const indexFinal = indexInicial + itensPorPagina;

  const itensDaPagina = filtrados.slice(indexInicial, indexFinal);

  const irParaPagina = (pagina) => {
    if (pagina >= 1 && pagina <= totalPaginas) {
      setPaginaAtual(pagina);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const aplicarTipoServico = (tipo) => {
    setFiltros((prev) => ({ ...prev, tipoServico: tipo }));
    fecharDrop();
  };

  const aplicarPreco = (categoria) => {
    setFiltros((prev) => ({ ...prev, precoCategoria: categoria }));
    fecharDrop();
  };

  const aplicarAvaliacao = (nota) => {
    setFiltros((prev) => ({ ...prev, avaliacaoMin: nota }));
    fecharDrop();
  };

  const toggleVerificados = () => {
    setFiltros((prev) => ({ ...prev, verificados: !prev.verificados }));
    fecharDrop();
  };

  const limparFiltros = () => {
    setFiltros({
      ordenacao: "distancia",
      distanciaValor: 20,
      tipoServico: "",
      precoCategoria: "",
      avaliacaoMin: 0,
      verificados: false,
    });
    fecharDrop();
  };

  return (
    <div className="lista-mecanicos">
      <Header />

      <div className="main-container">
        <h1 className="titulo-principal">Encontre o profissional ideal para você</h1>

        <div className="filtros-container">
          {/* ---- TODOS OS FILTROS (MESMOS QUE VOCÊ ENVIOU) ---- */}
          {/* Não removi nada — apenas mantive igual */}

          {/* Ordenação */}
          <div className="filtro-drop">
            <button
              className={`filtro-btn ${dropdownAberto === "ordenacao" ? "filtro-ativo" : ""}`}
              onClick={() => abrirDrop("ordenacao")}
            >
              Ordenar por <ChevronDown />
            </button>
            {dropdownAberto === "ordenacao" && (
              <div className="drop-conteudo">
                <p className="drop-item" onClick={() => { setFiltros((p) => ({ ...p, ordenacao: "distancia" })); fecharDrop(); }}>Distância</p>
                <p className="drop-item" onClick={() => { setFiltros((p) => ({ ...p, ordenacao: "avaliacao" })); fecharDrop(); }}>Melhor avaliação</p>
                <p className="drop-item" onClick={() => { setFiltros((p) => ({ ...p, ordenacao: "preco" })); fecharDrop(); }}>Menor preço</p>
              </div>
            )}
          </div>

          {/* Distância */}
          <div className="filtro-drop">
            <button
              className={`filtro-btn ${dropdownAberto === "distancia" ? "filtro-ativo" : ""}`}
              onClick={() => abrirDrop("distancia")}
            >
              Distância <ChevronDown />
            </button>
            {dropdownAberto === "distancia" && (
              <div className="drop-conteudo">
                <label>Distância máxima: {filtros.distanciaValor} km</label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={filtros.distanciaValor}
                  onChange={(e) =>
                    setFiltros((prev) => ({
                      ...prev,
                      distanciaValor: Number(e.target.value),
                    }))
                  }
                />

                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  <button className="paginacao-btn" onClick={() => { setFiltros((p) => ({ ...p, distanciaValor: 5 })); fecharDrop(); }}>5 km</button>
                  <button className="paginacao-btn" onClick={() => { setFiltros((p) => ({ ...p, distanciaValor: 15 })); fecharDrop(); }}>15 km</button>
                  <button className="paginacao-btn" onClick={() => { setFiltros((p) => ({ ...p, distanciaValor: 30 })); fecharDrop(); }}>30 km</button>
                </div>
              </div>
            )}
          </div>

          {/* Tipo de serviço */}
          <div className="filtro-drop">
            <button
              className={`filtro-btn ${dropdownAberto === "tipo" ? "filtro-ativo" : ""}`}
              onClick={() => abrirDrop("tipo")}
            >
              Tipo de serviço <ChevronDown />
            </button>
            {dropdownAberto === "tipo" && (
              <div className="drop-conteudo">
                <p className="drop-item" onClick={() => aplicarTipoServico("")}>Todos</p>
                <p className="drop-item" onClick={() => aplicarTipoServico("mecânica")}>Mecânica</p>
                <p className="drop-item" onClick={() => aplicarTipoServico("freios")}>Freios</p>
                <p className="drop-item" onClick={() => aplicarTipoServico("elétrica")}>Elétrica</p>
                <p className="drop-item" onClick={() => aplicarTipoServico("climatização")}>Climatização</p>
              </div>
            )}
          </div>

          {/* Preço */}
          <div className="filtro-drop">
            <button
              className={`filtro-btn ${dropdownAberto === "preco" ? "filtro-ativo" : ""}`}
              onClick={() => abrirDrop("preco")}
            >
              Preço <ChevronDown />
            </button>
            {dropdownAberto === "preco" && (
              <div className="drop-conteudo">
                <p className="drop-item" onClick={() => aplicarPreco("")}>Todos</p>
                <p className="drop-item" onClick={() => aplicarPreco("baixo")}>Mais barato</p>
                <p className="drop-item" onClick={() => aplicarPreco("medio")}>Médio</p>
                <p className="drop-item" onClick={() => aplicarPreco("alto")}>Mais caro</p>
              </div>
            )}
          </div>

          {/* Avaliação */}
          <div className="filtro-drop">
            <button
              className={`filtro-btn ${dropdownAberto === "avaliacao" ? "filtro-ativo" : ""}`}
              onClick={() => abrirDrop("avaliacao")}
            >
              Avaliação <ChevronDown />
            </button>
            {dropdownAberto === "avaliacao" && (
              <div className="drop-conteudo">
                <p className="drop-item" onClick={() => aplicarAvaliacao(0)}>Todos</p>
                <p className="drop-item" onClick={() => aplicarAvaliacao(4.5)}>4.5+</p>
                <p className="drop-item" onClick={() => aplicarAvaliacao(4.7)}>4.7+</p>
                <p className="drop-item" onClick={() => aplicarAvaliacao(4.9)}>4.9+</p>
              </div>
            )}
          </div>

          {/* Verificados */}
          <div className="filtro-drop">
            <button
              className={`filtro-btn ${dropdownAberto === "verificados" ? "filtro-ativo" : ""}`}
              onClick={() => abrirDrop("verificados")}
            >
              Verificados <ChevronDown />
            </button>
            {dropdownAberto === "verificados" && (
              <div className="drop-conteudo">
                <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <input type="checkbox" checked={filtros.verificados} onChange={toggleVerificados} />
                  Apenas verificados
                </label>
                <button
                  style={{ marginTop: 8 }}
                  className="paginacao-btn"
                  onClick={() => {
                    setFiltros((p) => ({ ...p, verificados: false }));
                    fecharDrop();
                  }}
                >
                  Remover filtro
                </button>
              </div>
            )}
          </div>

          <button className="filtro-btn" onClick={limparFiltros}>
            Limpar
          </button>
        </div>

        {/* ---------- INFO ---------- */}
        <div className="info-container" style={{ marginTop: 12 }}>
          <p className="contador">
            Mostrando {filtrados.length} profissionais próximos
          </p>
        </div>

        {/* ---------- GRID ---------- */}
        <div className="mecanicos-grid" style={{ marginTop: 12 }}>
          {itensDaPagina.map((mecanico) => (
            <div
              key={mecanico.id}
              className="mecanico-card"
              onClick={() => navigate(`/mecanico/${mecanico.id}`)}
            >
              <div className="card-header">
                <img src={mecanico.foto} alt={mecanico.nome} className="mecanico-foto" />
                <div className="mecanico-info">
                  <div className="nome-container">
                    <h3 className="mecanico-nome">{mecanico.nome}</h3>
                    {mecanico.verificado && <CheckCircle className="icone-verificado" />}
                  </div>
                  <p className="mecanico-especialidade">{mecanico.especialidade}</p>
                  <div className="distancia-container">
                    <MapPin className="icone-pin" />
                    <span>{mecanico.distancia} km</span>
                  </div>
                </div>
              </div>

              <p className="mecanico-descricao">{mecanico.descricao}</p>

              <div className="card-footer">
                <div className="avaliacao-container">
                  <div className="avaliacao">
                    <Star className="icone-star" />
                    <span className="nota">{mecanico.avaliacao}</span>
                    <span className="total-avaliacoes">
                      ({mecanico.totalAvaliacoes} avaliações)
                    </span>
                  </div>
                  <span className="preco">{mecanico.preco}</span>
                </div>
                <p className="experiencia">
                  Experiência: {mecanico.experiencia} anos
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- PAGINAÇÃO REAL ---------- */}
        <div className="paginacao" style={{ marginTop: 18 }}>
          <button
            className="paginacao-link"
            onClick={() => irParaPagina(paginaAtual - 1)}
            disabled={paginaAtual === 1}
          >
            ← Anterior
          </button>

          {[...Array(totalPaginas)].map((_, i) => {
            const numero = i + 1;
            return (
              <button
                key={numero}
                className={`paginacao-btn ${paginaAtual === numero ? "ativo" : ""}`}
                onClick={() => irParaPagina(numero)}
              >
                {numero}
              </button>
            );
          })}

          <button
            className="paginacao-link"
            onClick={() => irParaPagina(paginaAtual + 1)}
            disabled={paginaAtual === totalPaginas}
          >
            Próximo →
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ListaMecanicos;
