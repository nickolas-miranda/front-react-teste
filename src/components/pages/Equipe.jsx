import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


export default function Equipe() {
  const teamMembers = [
    { name: "Jeniffer Quadros", role: "PO/Full Stack", bio: "Apaixonada por Tecnologia", linkedin: "https://www.linkedin.com/in/jeniffer-q-893052205/" },
    { name: "Bernardo Almeida", role: "SM/Full Stack", bio: "Café, código e muito React", linkedin: "https://www.linkedin.com/in/bernardoaoliveira/" },
    { name: "Nickolas Mirando", role: "Full Stack", bio: "Transformando ideias em códigos", linkedin: "https://www.linkedin.com/in/nickolasmirandalopes/" },
    { name: "Julia Soares", role: "Back End/Financeiro", bio: "Me deixe atrás da tela", linkedin: "https://www.linkedin.com/in/juliasoaressantos/" },
    { name: "Ryan Leonardo", role: "UI/UX e Front End", bio: "A vida é mais feliz com uma risada", linkedin: "https://www.linkedin.com/in/ryanleonardosantos/" },
    { name: "Mariana Oliveira", role: "UI/UX e Front End", bio: "A cor traz vida a tudo.", linkedin: "https://www.linkedin.com/in/mariana-oliveira23/" },
    { name: "Gustavo Cardoso", role: "Back End", bio: "O mundo dos códigos é mais legal.", linkedin: "https://www.linkedin.com/in/gustavocardosomachado/" },
    { name: "Emile", role: "Financeiro/BD", bio: "A paz é a solução pra tudo.", linkedin: "https://www.linkedin.com/in/emile-neres-batista/" }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
    <Header />
      <main style={{ padding: '3rem 1.5rem', maxWidth: '1152px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '768px', margin: '0 auto 2.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>
            A galera por trás disso tudo
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#4b5563' }}>
            Somos um time pequeno mas dedicado. A gente trabalha duro (e se diverte também) pra fazer a ACARB cada dia melhor.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {teamMembers.map((member, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #f3f4f6',
              padding: '1.5rem',
              display: 'flex',
              gap: '1.5rem'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#e5e7eb',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                👤
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.25rem' }}>
                  {member.name}
                </h3>
                <p style={{ color: '#2563eb', fontWeight: '500', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  {member.role}
                </p>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.75rem', fontStyle: 'italic' }}>
                  "{member.bio}"
                </p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280', transition: 'color 0.2s' }}>
                  <FaLinkedin style={{ width: '20px', height: '20px' }} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: '#eff6ff',
          borderRadius: '1rem',
          padding: '2rem',
          border: '1px solid #dbeafe',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>
            Quer fazer parte? 🚀
          </h3>
          <p style={{ color: '#374151', marginBottom: '1rem' }}>
            Entre em contato conosco
          </p>
          <button style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.5rem 1.5rem',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '500'
          }}>
            Ver vagas abertas
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}