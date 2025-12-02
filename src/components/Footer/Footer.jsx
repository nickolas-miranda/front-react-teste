import React from 'react';
import styles from './Footer.module.css';
import footerWave from '../../assets/footer-wave.svg'; // Onda branca
import logoACARB from '../../assets/logo_ACARB_sem_fundo.png'; // Logo Carby
import IconLinkedin from '../../assets/icons/icon-linkedin.svg';
import IconInstagram from '../../assets/icons/icon-instagram.svg';
import IconWhatsapp from '../../assets/icons/icon-whatsapp.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>


      {/* A onda branca fica por cima do fundo azul */}
      {/* <img src={footerWave} alt="Decoração" className={styles.wave} /> */}

      {/* Conteúdo do rodapé com fundo mais escuro */}
      <div className={styles.content}>
        <div className={styles.topSection}>
          <div className={styles.brandInfo}>
            <img src={logoACARB} alt="ACARB logo" className={styles.logo} />
            <a href="mailto:acarb.br@gmail.com" className={styles.email}>
              acarb.br@gmail.com
            </a>
          </div>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Entre em contato" className={styles.contactInput} />
            <button type="submit" className={styles.contactButton}>→</button>
          </form>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomSection}>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="LinkedIn"><img src={IconLinkedin} alt="LinkedIn" /></a>
            <a href="#" aria-label="Instagram"><img src={IconInstagram} alt="Instagram" /></a>
            <a href="#" aria-label="WhatsApp"><img src={IconWhatsapp} alt="WhatsApp" /></a>
          </div>
          <div className={styles.copyright}>
            {/* Você pode adicionar o mini-logo 'Uma produção de ACARB' aqui se tiver ele */}
            <span>© 2025 ACARB. Todos os direitos reservados</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;