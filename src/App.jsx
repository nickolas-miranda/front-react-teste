// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importações dos seus componentes existentes
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import HowItWorksDriver from './components/HowItWorksDriver/HowItWorksDriver';
import MainServices from './components/MainServices/MainServices';
import ServiceAdvantages from './components/ServiceAdvantages/ServiceAdvantages';
import CoverageMap from './components/CoverageMap/CoverageMap';
import PartnerCTA from './components/PartnerCTA/PartnerCTA';
import HowItWorksPartner from './components/HowItWorksPartner/HowItWorksPartner';
import PricingTable from './components/PricingTable/PricingTable';
import PartnerAdvantages from './components/PartnerAdvantages/PartnerAdvantages';

import Footer from './components/Footer/Footer';
import IA from './components/IA/IA';
import AuthPage from './components/AuthPage/AuthPage';
import PerfilMecanico from './components/PerfilMecanico/PerfilMecanico';
import ResumoServico from './components/ResumoServico/ResumoServico';
import Pagamento from './components/Pagamento/Pagamento';
import ServicoAndamento from './components/ServicoAndamento/ServicoAndamento';
import AvaliarMecanico from './components/AvaliarMecanico/AvaliarMecanico';
import VehicleForm from './components/VehicleForm/VehicleForm';
import ListaMecanicos from './components/ListaMecanicos/ListaMecanicos';
import SucessoAvaliacao from './components/pages/SucessoAvaliacao/SucessoAvaliacao';
import Sobre from './components/pages/Sobre';
import Equipe from './components/pages/Equipe';
import Contato from './components/pages/Contato';




const LandingPage = () => {
  return (
    <>
      {/* No Header, você precisará adicionar um Link ou lógica
         para redirecionar para '/login' quando clicar em "Entrar" 
      */}
      <Header />
      <Hero />
      <InfoSection />
      <HowItWorksDriver />
      <MainServices />
      <ServiceAdvantages />
      <CoverageMap />
      <PartnerCTA />
      <HowItWorksPartner />
      <PricingTable />
      <PartnerAdvantages />
      <Footer />
      <IA />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<LandingPage />} />

          <Route path="/login" element={<AuthPage />} />
          <Route path="/cadastro" element={<AuthPage />} />
          <Route path="/perfil-mecanico" element={<PerfilMecanico />} />
          <Route path="/resumo-servico" element={<ResumoServico />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/servico-andamento/:id" element={<ServicoAndamento />} />
          <Route path="/avaliar-mecanico" element={<AvaliarMecanico />} />
          <Route path="/orcamento" element={<VehicleForm />} />
          <Route path="/mecanicos" element={<ListaMecanicos />} />
          <Route path="/mecanico/:id" element={<PerfilMecanico />} />
          <Route path="/resumo/:id" element={<ResumoServico />} />
          <Route path="/pagamento/:id" element={<Pagamento />} />
          <Route path="/avaliar/:id" element={<AvaliarMecanico />} />

          <Route path="/sobre" element={<Sobre />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/avaliacao-sucesso" element={<SucessoAvaliacao />} />





        </Routes>
      </div>
    </Router>
  );
}

export default App;