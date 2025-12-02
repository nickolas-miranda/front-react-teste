import React from 'react';
import styles from './MainServices.module.css';

// 1. Importe os 6 ícones que você exportou
import IconGuincho from '../../assets/icons/icon-guincho.svg';
import Icon24h from '../../assets/icons/icon-24h.svg';
import IconMecanicoMovel from '../../assets/icons/icon-mecanico-movel.svg';
import IconAgendar from '../../assets/icons/icon-agendar.svg';
import IconOrcamento from '../../assets/icons/icon-orcamento.svg';
import IconFalar from '../../assets/icons/icon-falar.svg';

const MainServices = () => {
  return (
    <section className={styles.mainServices}>
      <h2 className={styles.title}>Principais serviços</h2>

      <div className={styles.servicesGrid}>
        {/* Item 1 */}
        <div className={styles.serviceCard}>
          <img src={IconGuincho} alt="Guincho Imediato" className={styles.icon} />
          <h3 className={styles.serviceTitle}>GUINCHO IMEDIATO</h3>
        </div>

        {/* Item 2 */}
        <div className={styles.serviceCard}>
          <img src={Icon24h} alt="Atendimento 24h" className={styles.icon} />
          <h3 className={styles.serviceTitle}>ATENDIMENTO 24H</h3>
        </div>

        {/* Item 3 */}
        <div className={styles.serviceCard}>
          <img src={IconMecanicoMovel} alt="Mecânico Móvel" className={styles.icon} />
          <h3 className={styles.serviceTitle}>MECÂNICO MÓVEL</h3>
        </div>

        {/* Item 4 */}
        <div className={styles.serviceCard}>
          <img src={IconAgendar} alt="Agendar Atendimento" className={styles.icon} />
          <h3 className={styles.serviceTitle}>AGENDAR ATENDIMENTO PRESENCIAL</h3>
        </div>

        {/* Item 5 */}
        <div className={styles.serviceCard}>
          <img src={IconOrcamento} alt="Solicitar Orçamento" className={styles.icon} />
          <h3 className={styles.serviceTitle}>SOLICITAR ORÇAMENTO ONLINE</h3>
        </div>

        {/* Item 6 */}
        <div className={styles.serviceCard}>
          <img src={IconFalar} alt="Falar com Mecânico" className={styles.icon} />
          <h3 className={styles.serviceTitle}>FALAR COM MECÂNICO</h3>
        </div>
      </div>
    </section>
  );
};

export default MainServices;