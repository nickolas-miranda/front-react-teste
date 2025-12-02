// src/components/AuthPage/AuthPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa'; // Ícones
import './AuthPage.css';
import carroLogo from '../../assets/carro_da_logo.png';
import imgLogin from '../../assets/imgLogin.png'; // Imagem de fundo do lado direito

// Importe sua imagem do logo do carro aqui se tiver, ou use um placeholder
// import carLogo from '../../assets/car-logo.png'; 

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Controla se é Login ou Cadastro
  const [showPassword, setShowPassword] = useState(false); // Controla visibilidade da senha
  const navigate = useNavigate();

  // Função para alternar visualização da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Função fictícia de submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const type = isLogin ? 'Login' : 'Cadastro';
    alert(`${type} realizado com sucesso! (Lógica de backend aqui)`);
    // navigate('/dashboard'); // Exemplo de redirecionamento
  };

  return (
    <div className="auth-container">
      {/* Botão para voltar para a Home */}
      <button className="back-button" onClick={() => navigate('/')}>
        <FaArrowLeft /> Voltar
      </button>

      {/* Lado Esquerdo: Formulário */}
      <div className="auth-left">
        <div className="auth-card">
          {/* Logo do Carro (Use uma tag img se tiver o arquivo) */}
          <div className="car-logo-container">
            {/* Exemplo com CSS puro simulando o carro azul da imagem, ou substitua por <img> */}
            <div className="car-logo-placeholder">
              <img src="{carroLogo}" alt="Carro da Logo" />
            </div>
          </div>

          {/* Abas de Navegação */}
          <div className="auth-tabs">
            <button 
              className={`tab-btn ${isLogin ? 'active' : ''}`} 
              onClick={() => setIsLogin(true)}
            >
              Já tenho conta
            </button>
            <button 
              className={`tab-btn ${!isLogin ? 'active' : ''}`} 
              onClick={() => setIsLogin(false)}
            >
              Criar conta
            </button>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="auth-form">
            
            {/* Campo E-mail (Comum aos dois) */}
            <div className="input-group">
              <label>E-MAIL</label>
              <input type="email" placeholder="Digite aqui o seu email" required />
            </div>

            {/* Campos exclusivos de Cadastro */}
            {!isLogin && (
              <>
                <div className="input-group">
                  <label>CONFIRME SEU E-MAIL</label>
                  <input type="email" placeholder="Agora confirme o seu email" required />
                </div>
                <div className="input-group">
                  <label>TELEFONE</label>
                  <div className="phone-input">
                    <div className="country-code">
                      <span>🇧🇷 +55</span>
                    </div>
                    <input type="tel" placeholder="(00) 00000-0000" required />
                  </div>
                </div>
              </>
            )}

            {/* Campo Senha (Comum aos dois) */}
            <div className="input-group">
              <label>SENHA</label>
              <div className="password-wrapper">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder={isLogin ? "Digite aqui a sua senha" : "Agora crie sua senha"} 
                  required 
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Link Esqueceu Senha (Apenas Login) */}
            {isLogin && (
              <div className="forgot-password">
                <a href="#">Esqueceu sua senha?</a>
              </div>
            )}

            {/* Botão de Ação */}
            <button type="submit" className="submit-btn">
              {isLogin ? 'ENTRAR' : 'CRIAR CONTA'}
            </button>
          </form>
        </div>
      </div>

      {/* Lado Direito: Imagem de Fundo */}
      <div className="auth-right">
        <div className="image-overlay"></div>
        {/* A imagem de fundo é definida no CSS */}
      </div>
    </div>
  );
};

export default AuthPage;