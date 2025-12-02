import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Hooks de navegação
import { Star, CheckCircle, ArrowLeft, MapPin, Clock, DollarSign, Wrench } from 'lucide-react';
import './ResumoServico.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Importa os dados centralizados
import { mecanicosData } from '../../data/mecanicosData';

const ResumoServico = () => {
  const { id } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();
  const [servico, setServico] = useState(null);

  useEffect(() => {
    // Busca o mecânico pelo ID
    const mecanicoEncontrado = mecanicosData.find(m => m.id === Number(id));

    if (mecanicoEncontrado) {
      // Monta o objeto de serviço com os dados reais do mecânico
      setServico({
        mecanico: mecanicoEncontrado,
        detalhes: {
          servicoSolicitado: "Orçamento / Diagnóstico Geral", // Padrão
          local: mecanicoEncontrado.endereco || "Endereço não informado",
          distancia: mecanicoEncontrado.distancia ? `${mecanicoEncontrado.distancia} km de você` : "Calculando...",
          precoEstimado: mecanicoEncontrado.preco || "A combinar",
          tempoChegada: "Agendamento" 
        }
      });
    } else {
      // Se não achar (ex: id inválido), volta pra lista
      navigate('/mecanicos');
    }
  }, [id, navigate]);

  const handleConfirmar = () => {
    // alert(`Solicitação enviada para ${servico?.mecanico.nome}! Aguarde o contato.`);
    // navigate('/mecanicos'); 
    if (servico && servico.mecanico) {
      navigate(`/pagamento/${servico.mecanico.id}`);
    }
  };

  const renderStars = (nota) => {
    return (
      <div className="estrelas-resumo">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={18}
            className={star <= Math.round(nota) ? 'estrela-preenchida-resumo' : 'estrela-vazia-resumo'}
            fill={star <= Math.round(nota) ? "#ffc107" : "none"}
          />
        ))}
      </div>
    );
  };

  if (!servico) return <div className="loading-resumo">Carregando resumo...</div>;

  return (
    <div className="resumo-servico-page">
      <Header />
      
      <main className="resumo-main">
        {/* Botão Voltar */}
        <div className="resumo-voltar-container">
           <button onClick={() => navigate(-1)} className="btn-voltar-resumo">
              <ArrowLeft size={20} /> Voltar
           </button>
        </div>

        <div className="resumo-container">
          
          {/* Coluna Esquerda: Mecânico */}
          <div className="mecanico-section">
            <div className="circulo-azul">
              <div className="mecanico-card-resumo">
                <img 
                  src={servico.mecanico.foto} 
                  alt={servico.mecanico.nome}
                  className="mecanico-foto-resumo"
                />
                
                <div className="mecanico-info-resumo">
                  <div className="nome-verificado">
                    <h2>{servico.mecanico.nome}</h2>
                    {servico.mecanico.verificado && (
                      <div className="badge-verificado-resumo" title="Verificado">
                        <CheckCircle size={16} />
                      </div>
                    )}
                  </div>
                  <p className="especialidade-resumo">{servico.mecanico.especialidade}</p>
                  
                  <div className="avaliacao-resumo">
                    {renderStars(servico.mecanico.avaliacao)}
                    <span className="nota-resumo">{servico.mecanico.avaliacao}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Detalhes */}
          <div className="detalhes-section">
            <h1 className="titulo-resumo">Resumo da Solicitação</h1>

            <div className="detalhes-lista">
              <div className="detalhe-item">
                <div className="detalhe-icon"><Wrench size={20}/></div>
                <div className="detalhe-info">
                    <span className="detalhe-label">Serviço:</span>
                    <span className="detalhe-valor">{servico.detalhes.servicoSolicitado}</span>
                </div>
              </div>

              <div className="detalhe-item">
                <div className="detalhe-icon"><MapPin size={20}/></div>
                <div className="detalhe-info">
                    <span className="detalhe-label">Local de Atendimento:</span>
                    <span className="detalhe-valor">{servico.detalhes.local}</span>
                    <span className="detalhe-subvalor">({servico.detalhes.distancia})</span>
                </div>
              </div>

              <div className="detalhe-item">
                <div className="detalhe-icon"><DollarSign size={20}/></div>
                <div className="detalhe-info">
                    <span className="detalhe-label">Estimativa de Preço:</span>
                    <span className="detalhe-valor destaque-verde">{servico.detalhes.precoEstimado}</span>
                </div>
              </div>

              <div className="detalhe-item">
                <div className="detalhe-icon"><Clock size={20}/></div>
                <div className="detalhe-info">
                    <span className="detalhe-label">Previsão:</span>
                    <span className="detalhe-valor">{servico.detalhes.tempoChegada}</span>
                </div>
              </div>
            </div>

            <button className="btn-confirmar-chamada" onClick={handleConfirmar}>
              Confirmar Solicitação
            </button>
            <p className="aviso-legal">Ao confirmar, seus dados de contato serão compartilhados com o profissional.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResumoServico;