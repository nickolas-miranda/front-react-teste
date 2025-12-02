import React, { useState } from 'react';
import styles from './Header.module.css';
import logoAcarb from '../../assets/texto_ACARB_sem_fundo.png'; 
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  // Função para fechar o menu ao clicar em um link
  const fecharMenu = () => {
    setMenuAberto(false);
  };
  

  return (
    
    <header className={styles.header}>
      <nav className={styles.nav}>
        
        {/* Logo apontando para a Home */}
        <Link to="/" className={styles.logoLink} onClick={fecharMenu}>
          <img src={logoAcarb} alt="ACARB Logo" className={styles.logoImage} />
        </Link>

        {/* Botão Hambúrguer */}
        <button 
          className={`${styles.menuToggle} ${menuAberto ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Menu de navegação"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Lista de Links de Navegação */}
        <ul className={`${styles.navList} ${menuAberto ? styles.active : ''}`}>
          <li>
            <Link to="/" className={styles.navLink} onClick={fecharMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/sobre" className={styles.navLink} onClick={fecharMenu}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/mapa" className={styles.navLink} onClick={fecharMenu}>
              Mapa
            </Link>
          </li>
          <li>
            <Link to="/equipe" className={styles.navLink} onClick={fecharMenu}>
              Equipe
            </Link>
          </li>
          <li>
            <Link to="/contato" className={styles.navLink} onClick={fecharMenu}>
              Contato
            </Link>
          </li>

          {/* Botão de Login dentro do menu mobile */}
          <Link to="/login" className={styles.loginButton} onClick={fecharMenu}>
            Entrar
          </Link>
        </ul>

      </nav>
    </header>
  );
};

export default Header;