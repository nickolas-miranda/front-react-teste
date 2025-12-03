import React from 'react';
import { Target, Award, Heart } from 'lucide-react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


export default function Sobre() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
    <Header />
      <main style={{ padding: '3rem 1.5rem', maxWidth: '1152px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'center', maxWidth: '768px', margin: '0 auto 3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
            Oi! Nós somos a ACARB 👋
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#4b5563' }}>
            A gente tá aqui pra facilitar o dia a dia de quem precisa de uma ajuda inesperada.
          </p>
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '1rem', 
          padding: '2.5rem', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #f3f4f6',
          marginBottom: '3rem'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
                Como começou?
              </h2>
              <p style={{ color: '#374151', lineHeight: '1.75', marginBottom: '1rem' }}>
                A ideia da ACARB nasceu quando percebemos que faltava mecânicos em diversos locais.
              </p>
              <p style={{ color: '#374151', lineHeight: '1.75', marginBottom: '1rem' }}>
                A gente queria algo que funcionasse de verdade no dia a dia - sem complicação, sem burocracia.
              </p>
              <p style={{ color: '#374151', lineHeight: '1.75' }}>
                Juntamos tecnologia com serviços de qualidade.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: Target, title: 'Por que existimos', text: 'Para trazer a ajuda necessária em momentos que já não vemos solução' },
                { icon: Award, title: 'Onde queremos chegar', text: 'Ser a primeira plataforma a oferecer este tipo de serviços' },
                { icon: Heart, title: 'No que acreditamos', text: 'Solução rápida e precisa' }
              ].map((item, i) => (
                <div key={i} style={{
                  backgroundColor: '#eff6ff',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  borderLeft: '4px solid #2563eb'
                }}>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <item.icon style={{ width: '24px', height: '24px', color: '#2563eb', flexShrink: 0 }} />
                    <div>
                      <h3 style={{ fontWeight: 'bold', color: '#111827', marginBottom: '0.25rem' }}>{item.title}</h3>
                      <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmin(250px, 1fr))', gap: '1.5rem' }}>
          {[
            { emoji: '🔧', title: 'Solicitar mecânicos', text: 'Base de dados gigante. Só digitar o que precisa e já encontra.' },
            { emoji: '📱', title: 'Funciona em tudo', text: 'Celular, tablet, computador... Onde você tiver acesso à internet.' },
            { emoji: '🎯', title: 'Do seu jeito', text: 'Personalize tudo: metas, alertas, preferências. É seu app.' }
          ].map((feature, i) => (
            <div key={i} style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #f3f4f6'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{feature.emoji}</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>{feature.text}</p>
            </div>
          ))}
        </div>
      </main>
        <Footer />
    </div>
  );
}