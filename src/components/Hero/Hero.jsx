import React from 'react';
import styles from './Hero.module.css'; 
import opalaImage from '../../assets/opala-hero.png'; 
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Seja Bem-Vindo
          <span className={styles.brandName}>ACARB</span>
        </h1>
        <p className={styles.description}>
          Encontre mecânicos de confiança perto de você ou conecte-se a novos
          clientes de forma rápida e segura.
        </p>
          <Link to="/orcamento" className="ctaButton">
            Preciso de um mecânico
          </Link>
      </div>
      <div className={styles.heroImageContainer}>
        <img src={opalaImage} alt="Opala azul com capô aberto" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default Hero;