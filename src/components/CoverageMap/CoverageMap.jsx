import React from 'react';
import styles from './CoverageMap.module.css';
import mapaBrasil from '../../assets/mapa-brasil.svg';

const CoverageMap = () => {
  return (
    <section className={styles.coverageSection}>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>Atendemos em todo território nacional</h2>
        <p className={styles.description}>
          Atendemos vários estados atualmente, e aceitamos cadastros de
          profissionais de todas as regiões do país. Acesse nossa página de
          regiões atendidas e veja onde você pode começar a atuar agora mesmo.
        </p>
        <a href="/regioes" className={styles.button}>
          Ver todas as regiões atendidas
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img src={mapaBrasil} alt="Mapa do Brasil" className={styles.mapImage} />
      </div>
    </section>
  );
};

export default CoverageMap;