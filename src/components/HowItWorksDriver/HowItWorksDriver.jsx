import React from 'react';
import styles from './HowItWorksDriver.module.css';

// Importe as imagens que você exportou
import step1Image from '../../assets/passo-1.png';
import step2Image from '../../assets/passo-2.png';
import step3Image from '../../assets/passo-3.png';

const HowItWorksDriver = () => {
  return (
    // 'id' para o link "Saiba mais" da seção anterior
    <section id="como-funciona" className={styles.howItWorks}>
      
      {/* Títulos da seção */}
      <h2 className={styles.title}>
        ACARB: Serviços Automotivos Simples e Confiáveis
      </h2>
      <p className={styles.subtitle}>
        A ACARB conecta motoristas a oficinas, guinchos e mecânicos de
        confiança, permitindo pedir ajuda, comparar orçamentos e acompanhar
        tudo pelo app, de forma rápida e segura.
      </p>

      {/* Container dos 3 passos */}
      <div className={styles.stepsContainer}>
        
        {/* Passo 1 */}
        <div className={styles.stepCard}>
          <img src={step1Image} alt="Escolha quem vai te atender" className={styles.stepImage} />
          <h3 className={styles.stepTitle}>Escolha quem vai te atender.</h3>
        </div>

        {/* Passo 2 */}
        <div className={styles.stepCard}>
          <img src={step2Image} alt="Receba proposta em minutos" className={styles.stepImage} />
          <h3 className={styles.stepTitle}>Receba proposta em minutos.</h3>
        </div>

        {/* Passo 3 */}
        <div className={styles.stepCard}>
          <img src={step3Image} alt="Peça ajuda agora mesmo" className={styles.stepImage} />
          <h3 className={styles.stepTitle}>Peça ajuda agora mesmo!</h3>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksDriver;