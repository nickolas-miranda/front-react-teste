import React from "react";
import styles from "./PricingTable.module.css";
import checkIcon from "../../assets/icons/check.png";
import checkIcon2 from "../../assets/icons/check2.png";

const PricingTable = () => {
  return (
    <section className={styles.pricingSection}>
      <h2 className={styles.title}>Ganhe mais com cada serviço:</h2>

      <div className={styles.tableContainer}>
        {/* Card Profissional (Grátis) */}
        <div className={styles.planCard}>
          <div className={styles.planHeader}>
            <h3 className={styles.planTitle}>Profissional</h3>
            <p className={styles.planSubtitle}>recursos gratuitos</p>
          </div>
          <div className={styles.planPrice}>
            <span className={styles.currency}>R$</span>
            <span className={styles.amount}>0</span>
            <span className={styles.period}>,00</span>
          </div>
          <ul className={styles.featureList}>
            <li>
              <img src={checkIcon} alt="Incluso" className={styles.icon} /> 
              Até 5 serviços por mês grátis
            </li>
            <li>
              <img src={checkIcon2} alt="Incluso" className={styles.icon} /> 
              5% por serviço
            </li>
            <li>
              <img src={checkIcon2} alt="Incluso" className={styles.icon} /> 
              Receba pedidos todos os dias.
            </li>
          </ul>
          <a href="/selecionar-plano-gratis" className={styles.selectButton}>
            Seleciona Plano
          </a>
        </div>

        {/* Card Profissional PRO (Pago) */}
        <div className={styles.planCard}>
          <div className={styles.planHeader}>
            <h3 className={styles.planTitle}>Profissional PRO</h3>
            <p className={styles.planSubtitle}>mais recurso para você</p>
          </div>
          <div className={styles.planPrice}>
            <span className={styles.currency}>R$</span>
            <span className={styles.amount}>79</span>
            <span className={styles.period}>,90</span>
          </div>
          <ul className={styles.featureList}>
            <li>
              <img src={checkIcon} alt="Incluso" className={styles.icon} />
              Verificado
            </li>
            <li>
              <img src={checkIcon2} alt="Incluso" className={styles.icon} /> 
              Destaque no app
            </li>
            <li>
              <img src={checkIcon2} alt="Incluso" className={styles.icon} /> 
              Sem taxa
            </li>
          </ul>
          <a href="/selecionar-plano-pro" className={styles.selectButton}>
            Seleciona Plano
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
