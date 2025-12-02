import React from 'react';
import styles from './PartnerAdvantages.module.css';
import checkIcon from '../../assets/icons/check.png'; // Reutilize seu ícone

const PartnerAdvantages = () => {
  return (
    <section className={styles.advantagesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Vantagens</h2>
        <ul className={styles.advantageList}>
          <li>
            <img src={checkIcon} alt="Vantagem" className={styles.icon} />
            Mais clientes sem pagar anúncios.
          </li>
          <li>
            <img src={checkIcon} alt="Vantagem" className={styles.icon} />
            Converse e negocie direto com o cliente.
          </li>
          <li>
            <img src={checkIcon} alt="Vantagem" className={styles.icon} />
            Envie orçamentos e feche serviços no app.
          </li>
          <li>
            <img src={checkIcon} alt="Vantagem" className={styles.icon} />
            Receba pedidos todos os dias.
          </li>
          <li>
            <img src={checkIcon} alt="Vantagem" className={styles.icon} />
            Pagamentos diretos e perfil verificado Premium.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PartnerAdvantages;