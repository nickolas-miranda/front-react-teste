import React from 'react';
import styles from './ServiceAdvantages.module.css';

// Importe as imagens
import imgMecanico from '../../assets/vantagem-mecanico.png';
import imgGuincho from '../../assets/vantagem-guincho.png';
import imgOficina from '../../assets/vantagem-oficina.png';

const ServiceAdvantages = () => {
  return (
    <section className={styles.advantagesSection}>
      
      {/* Títulos */}
      <h2 className={styles.title}>Vantagens para quem chama pela ACARB</h2>
      <p className={styles.subtitle}>
        Rápido, confiável e transparente — escolha o serviço que precisa e
        acompanhe tudo pelo app.
      </p>

      {/* Grid de Vantagens */}
      <div className={styles.advantagesGrid}>
        
        {/* Card Mecânico */}
        <div className={styles.advantageCard}>
          <img src={imgMecanico} alt="Mecânico" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Mecânico</h3>
            <ul className={styles.cardList}>
              <li>Atendimento no local: troca de óleo, bateria, diagnóstico rápido.</li>
              <li>Preço transparente: orçamento antes do aceite.</li>
              <li>Agilidade: serviço no mesmo dia, quando possível.</li>
            </ul>
          </div>
        </div>

        {/* Card Guincho */}
        <div className={styles.advantageCard}>
          <img src={imgGuincho} alt="Guincho" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Guincho</h3>
            <ul className={styles.cardList}>
              <li>Resgate rápido: rota otimizada e ETA em tempo real.</li>
              <li>Opções flexíveis: serviço local, intermunicipal ou transporte até oficina parceira.</li>
              <li>Segurança: profissionais avaliados e segurados.</li>
            </ul>
          </div>
        </div>

        {/* Card Oficina */}
        <div className={styles.advantageCard}>
          <img src={imgOficina} alt="Oficina" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Oficina</h3>
            <ul className={styles.cardList}>
              <li>Serviços completos: manutenção, funilaria, elétrica avançada.</li>
              <li>Garantia: serviço com garantia e histórico no app.</li>
              <li>Atendimento agendado: preço e prazo combinados antecipadamente.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className={styles.buttonContainer}>
        <a href="#como-funciona" className={styles.buttonPrimary}>
          Como funciona
        </a>
        <a href="#seja-parceiro" className={styles.buttonSecondary}>
          Sou profissional
        </a>
      </div>
    </section>
  );
};

export default ServiceAdvantages;