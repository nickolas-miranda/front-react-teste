import React from 'react';
import Header from './components/Header/Header';
// Importe aqui seus outros componentes da Home (Hero, InfoSection, etc.)

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* O resto do conteúdo da sua página virá aqui */}
      {/* <Hero />
        <InfoSection />
        ...
      */}
      
      {/* Conteúdo de exemplo para ver o header fixo rolando */}
      <div style={{ height: '200vh', paddingTop: '100px' }}>
        <h1>Conteúdo da Página Home</h1>
        <p>Role para baixo...</p>
      </div>
    </div>
  );
}

export default App;