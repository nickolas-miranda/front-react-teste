import React, { useState } from 'react';
import { Mail, Phone, MapPin} from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


export default function Contato() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
    <Header />
      <main style={{ padding: '3rem 1.5rem', maxWidth: '1152px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '768px', margin: '0 auto 2.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>
            Bora conversar?
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#4b5563' }}>
            Manda uma mensagem pra gente. Pode ser sugestão, dúvida, crítica ou só um "oi" mesmo.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #f3f4f6'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>
                Manda uma mensagem
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#374151', fontWeight: '500', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    Seu nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #e5e7eb',
                      outline: 'none',
                      fontSize: '1rem'
                    }}
                    placeholder="Como você se chama?"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#374151', fontWeight: '500', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #e5e7eb',
                      outline: 'none',
                      fontSize: '1rem'
                    }}
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#374151', fontWeight: '500', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #e5e7eb',
                      outline: 'none',
                      fontSize: '1rem',
                      resize: 'none'
                    }}
                    placeholder="O que você quer falar com a gente?"
                  />
                </div>
                <button style={{
                  width: '100%',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  fontWeight: '500',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Enviar mensagem
                </button>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #f3f4f6'
            }}>
              <h3 style={{ fontWeight: 'bold', color: '#111827', marginBottom: '1rem', fontSize: '1.125rem' }}>
                Outras formas de contato
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: Mail, label: 'Email', value: 'ola@acarb.com.br' },
                  { icon: Phone, label: 'WhatsApp', value: '(11) 98765-4321' },
                  { icon: MapPin, label: 'Onde estamos', value: 'São Paulo, SP' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <item.icon style={{ width: '20px', height: '20px', color: '#2563eb', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <p style={{ fontWeight: '500', color: '#111827', fontSize: '0.875rem' }}>{item.label}</p>
                      <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(to bottom right, #2563eb, #1e40af)',
              borderRadius: '1rem',
              padding: '1.5rem',
              color: 'white',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.125rem' }}>Redes sociais</h3>
              <p style={{ color: '#bfdbfe', fontSize: '0.875rem', marginBottom: '1rem' }}>
                Cola lá pra ver os bastidores e novidades
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="#" style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  
                  <FaInstagram style={{ width: '20px', height: '20px' }} />
                </a>
                <a href="#" style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <FaLinkedin style={{ width: '20px', height: '20px' }} />

                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
        <Footer />
    </div>
  );
}