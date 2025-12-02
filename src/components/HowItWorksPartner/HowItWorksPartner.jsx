import React from 'react';
import styles from './HowItWorksPartner.module.css';

// Importe os ícones
import icon1 from '../../assets/icons/partner-icon-1.png';
import icon2 from '../../assets/icons/partner-icon-2.png';
import icon3 from '../../assets/icons/partner-icon-3.png';

const HowItWorksPartner = () => {
  return (
    <section className={styles.howItWorksSection}>
      <h2 className={styles.title}>Como funciona</h2>

      <div className={styles.stepsContainer}>
        {/* Passo 1 */}
        <div className={styles.step}>
          <div className={styles.iconContainer}>
            <img src={icon1} alt="Cadastre-se" className={styles.icon} />
          </div>
          <p className={styles.description}>
            Cadastre-se grátis e ative seu perfil.
          </p>
        </div>

        {/* Passo 2 */}
        <div className={styles.step}>
          <div className={styles.iconContainer}>
            <img src={icon2} alt="Veja os pedidos" className={styles.icon} />
          </div>
          <p className={styles.description}>
            Veja os pedidos na sua região e converse com o cliente pelo chat.
          </p>
        </div>

        {/* Passo 3 */}
        <div className={styles.step}>
          <div className={styles.iconContainer}>
            <img src={icon3} alt="Envie sua proposta" className={styles.icon} />
          </div>
          <p className={styles.description}>
            Envie sua proposta de orçamento e combine o atendimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPartner;