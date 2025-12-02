import React from 'react';
import styles from './PartnerCTA.module.css';
import parceiroImage from '../../assets/parceiro-acarb.png';

// 1. Importe o seu wave-blue.svg
import waveSvg from '../../assets/wave-blue.svg'; 

const PartnerCTA = () => {
  return (
    <section id="seja-parceiro" className={styles.partnerSection}>
      
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>Seja Parceiro ACARB</h2>
        <p className={styles.text}>
          Mais clientes. Mais serviços. Mais visibilidade.
        </p>
        <p className={styles.text}>
          Receba novos clientes com a ACARB, sua oficina, guincho ou serviço
          mecânico ganha mais visibilidade e chega direto a quem precisa.
        </p>
        <p className={styles.text}>
          Você cuida do atendimento a gente cuida de levar o cliente até você.
        </p>
        <a href="/cadastro-parceiro" className={styles.button}>
          Cadastre-se
        </a>
      </div>

      <div className={styles.imageContainer}>
        <img src={parceiroImage} alt="Mecânico parceiro ACARB" className={styles.partnerImage} />
      </div>

      {/* 2. Adicione a tag <img> para o SVG da onda */}
      {/* <img src={waveSvg} alt="Decoração de onda" className={styles.waveDecoration} /> */}
      
      {/* 3. Remova a div da onda CSS (se você a adicionou) */}
      {/* <div className={styles.waveBackground}></div> */}

    </section>
  );
};

export default PartnerCTA;