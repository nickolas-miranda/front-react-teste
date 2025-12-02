import React from 'react';
import styles from './InfoSection.module.css';
import mecanicoClienteImg from '../../assets/mecanico-cliente.png'; // Importe sua imagem

const InfoSection = () => {
  return (
    // Usamos um 'id' aqui para que o botão do Hero possa pular para cá
    <section id="preciso-mecanico" className={styles.section}>
      <div className={styles.card}>
        {/* Coluna da Imagem */}
        <div className={styles.imageContainer}>
          <img src={mecanicoClienteImg} alt="Mecânico e cliente apertando as mãos" className={styles.image} />
        </div>

        {/* Coluna do Conteúdo */}
        <div className={styles.content}>
          <h2 className={styles.title}>Precisa de um mecânico agora?</h2>
          <p className={styles.text}>
            A ACARB conecta você aos melhores profissionais perto de onde estiver
            rápido, seguro e sem complicação.
          </p>
          <p className={styles.text}>
            Seja na estrada ou na sua cidade, o socorro certo está a um clique.
          </p>
          <p className={styles.text}>Quer entender como funciona?</p>
          <a href="#como-funciona" className={styles.button}>
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;