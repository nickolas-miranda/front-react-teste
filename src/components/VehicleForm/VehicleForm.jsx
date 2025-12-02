import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import styles from './VehicleForm.module.css';
import imgMecanico from '../../assets/fotoMecanico.png';

const VehicleForm = () => {
    // Estados para navegação
        const navigate = useNavigate(); // <-- aqui
    const [currentStep, setCurrentStep] = useState(1);
    
    // Estados do Step 1 (Veículo)
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [brandSearch, setBrandSearch] = useState('');
    const [modelSearch, setModelSearch] = useState('');
    const [yearSearch, setYearSearch] = useState('');
    const [showBrandDropdown, setShowBrandDropdown] = useState(false);
    const [showModelDropdown, setShowModelDropdown] = useState(false);
    const [showYearDropdown, setShowYearDropdown] = useState(false);

    // Estados do Step 2 (Tipo de Serviço)
    const [selectedService, setSelectedService] = useState('');

    // Estados do Step 3 (Detalhes e Contato)
    const [serviceSearch, setServiceSearch] = useState(''); // Usado para buscar o tipo de problema/serviço
    const [showServiceDropdown, setShowServiceDropdown] = useState(false);
    const [serviceDetails, setServiceDetails] = useState('');
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');

    const brands = ['Fiat', 'Volkswagen', 'Chevrolet', 'Ford', 'Toyota', 'Honda', 'Hyundai', 'Renault', 'Nissan', 'Jeep', 'BMW', 'Mercedes-Benz', 'Audi', 'Peugeot', 'Citroën'];
    
    const modelsByBrand = {
        'Fiat': ['Uno', 'Palio', 'Argo', 'Mobi', 'Toro', 'Strada', 'Cronos', 'Pulse', 'Fastback'],
        'Volkswagen': ['Gol', 'Polo', 'T-Cross', 'Nivus', 'Saveiro', 'Virtus', 'Amarok', 'Tiguan'],
        'Chevrolet': ['Onix', 'Tracker', 'S10', 'Spin', 'Montana', 'Cruze', 'Equinox'],
        'Ford': ['Ka', 'Ranger', 'EcoSport', 'Territory', 'Maverick', 'Bronco'],
        'Toyota': ['Corolla', 'Hilux', 'SW4', 'Yaris', 'Etios', 'RAV4'],
        'Honda': ['Civic', 'HR-V', 'City', 'Fit', 'CR-V', 'WR-V'],
        'Hyundai': ['HB20', 'Creta', 'Tucson', 'ix35', 'Elantra'],
        'Renault': ['Kwid', 'Sandero', 'Duster', 'Captur', 'Oroch'],
        'Nissan': ['Kicks', 'Versa', 'Frontier', 'Sentra', 'March'],
        'Jeep': ['Renegade', 'Compass', 'Commander', 'Wrangler'],
        'BMW': ['320i', 'X1', 'X3', 'X5', 'Série 3'],
        'Mercedes-Benz': ['Classe A', 'Classe C', 'GLA', 'GLC'],
        'Audi': ['A3', 'A4', 'Q3', 'Q5', 'Q7'],
        'Peugeot': ['208', '2008', '3008', 'Partner'],
        'Citroën': ['C3', 'C4 Cactus', 'Aircross']
    };

    const serviceTypes = [
        'Revisão Preventiva',
        'Troca de Óleo',
        'Alinhamento e Balanceamento',
        'Freios',
        'Suspensão',
        'Motor',
        'Ar Condicionado',
        'Sistema Elétrico',
        'Embreagem',
        'Bateria',
        'Pneus',
        'Diagnóstico Geral',
        'Funilaria e Pintura',
        'Vidros e Travas',
        'Outro'
    ];

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 30 }, (_, i) => (currentYear - i).toString());

    const filteredBrands = brands.filter(brand => 
        brand.toLowerCase().includes(brandSearch.toLowerCase())
    );

    const filteredModels = selectedBrand && modelsByBrand[selectedBrand] 
        ? modelsByBrand[selectedBrand].filter(model => 
              model.toLowerCase().includes(modelSearch.toLowerCase())
          )
        : [];

    const filteredYears = years.filter(year => 
        year.includes(yearSearch)
    );

    const filteredServiceTypes = serviceTypes.filter(service =>
        service.toLowerCase().includes(serviceSearch.toLowerCase())
    );

    // Handlers
    const handleBrandSelect = (brand) => {
        setSelectedBrand(brand);
        setBrandSearch('');
        setSelectedModel(''); 
        setModelSearch('');
        setShowBrandDropdown(false);
    };

    const handleModelSelect = (model) => {
        setSelectedModel(model);
        setModelSearch('');
        setShowModelDropdown(false);
    };

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setYearSearch('');
        setShowYearDropdown(false);
    };

    const handleServiceSearchSelect = (service) => {
        setServiceSearch(service);
        setShowServiceDropdown(false);
    };

    const handleContinueStep1 = () => {
        if (selectedBrand && selectedModel && selectedYear) {
            setCurrentStep(2);
            // window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            alert('Por favor, preencha todos os campos do veículo.');
        }
    };

    const handleContinueStep2 = () => {
        if (selectedService) {
            setCurrentStep(3);
            // window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            alert('Por favor, selecione o tipo de serviço que você precisa.');
        }
    };

    const handleGoBack = () => {
        setCurrentStep(prevStep => Math.max(1, prevStep - 1));
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = async () => {

    const requestData = {
        veiculo: {
            marca: selectedBrand,
            modelo: selectedModel,
            ano: selectedYear
        },
        servico: {
            tipo: selectedService,
            reparo: serviceSearch,
            detalhes: serviceDetails
        },
        timestamp: new Date().toISOString(),
        status: 'pendente'
    };

    try {
        console.log('Dados da Solicitação:', requestData);

        // Redirecionar
        navigate("/mecanicos");

        // 🔄 Limpar campos
        setSelectedBrand('');
        setSelectedModel('');
        setSelectedYear('');
        setBrandSearch('');
        setModelSearch('');
        setYearSearch('');
        setSelectedService('');
        setServiceSearch('');
        setServiceDetails('');
        setCurrentStep(1);

    } catch (error) {
        console.error('Erro:', error);
        alert('❌ Erro ao enviar solicitação.');
    }
};
    // Estilos compartilhados ou globais??? não sabo
    const circleContainerStyle = {
        background: 'linear-gradient(135deg, #87CEEB 0%, #0099FF 100%)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 2rem)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'clamp(700px, 90vh, 950px)'
    };

    const circleStyle = {
        backgroundColor: '#0099FF',
        borderRadius: '50%',
        width: '100%',
        maxWidth: 'min(900px, 95vw)',
        aspectRatio: '1/1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(3rem, 7vw, 5rem)',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        position: 'relative',
        zIndex: 100 
    };

    const titleStyle = {
        color: 'white',
        fontSize: 'clamp(1.3rem, 4.5vw, 2.3rem)',
        fontWeight: 'bold',
        marginBottom: 'clamp(2rem, 4vw, 3rem)',
        textAlign: 'center',
        lineHeight: '1.3',
        padding: '0 0.5rem',
        position: 'relative',
        zIndex: 10 
    };

    // === 
    const getInputContainerStyle = (orderZIndex) => ({
        width: '100%',
        maxWidth: 'clamp(350px, 85vw, 500px)',
        marginBottom: 'clamp(1.3rem, 3vw, 2rem)',
        position: 'relative', 
        zIndex: orderZIndex 
    });

    const inputWrapperStyle = {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: 'clamp(0.9rem, 2.8vw, 1.2rem) clamp(1.2rem, 3.5vw, 1.7rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
        position: 'relative',
    };

        const inputStyle = {
            border: 'none',
            outline: 'none',
            width: '100%',
            fontSize: 'inherit',
            backgroundColor: 'transparent',
            color: 'black'
        };

    // === 
    const dropdownStyle = {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderRadius: '8px',
        marginTop: '0.5rem',
        maxHeight: 'clamp(150px, 30vh, 220px)',
        overflowY: 'auto',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        zIndex: 2000 
    };

    const buttonStyle = {
        backgroundColor: '#FFD700',
        color: '#333',
        border: 'none',
        padding: 'clamp(1rem, 3vw, 1.3rem) clamp(2.5rem, 6vw, 4rem)',
        fontSize: 'clamp(1.05rem, 3.2vw, 1.3rem)',
        fontWeight: 'bold',
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: 'clamp(350px, 85vw, 500px)',
        transition: 'all 0.3s ease',
        position: 'relative',
        zIndex: 10 
    };

    const backButtonStyle = {
        backgroundColor: '#6c757d', 
        color: 'white',
        border: 'none',
        padding: 'clamp(0.8rem, 2.5vw, 1.1rem) clamp(2rem, 5vw, 3.5rem)',
        fontSize: 'clamp(0.9rem, 2.8vw, 1.15rem)',
        fontWeight: 'bold',
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
        width: '100%',
        maxWidth: 'clamp(350px, 85vw, 500px)',
        transition: 'all 0.3s ease',
        position: 'relative',
        zIndex: 10,
        marginTop: 'clamp(1rem, 3vw, 1.5rem)'
    };

    // Step 1: Informações do Veículo
    const renderStep1 = () => (
        <section style={circleContainerStyle}>
            <div style={circleStyle}>
                <h2 style={titleStyle}>Qual é o seu veículo?</h2>
                
                {/* Marca (Z-index 300) */}
                <div style={getInputContainerStyle(300)}> 
                    <div style={inputWrapperStyle}>
                        <input
                            type="text"
                            placeholder="Marca"
                            value={selectedBrand || brandSearch}
                            onChange={(e) => {
                                setBrandSearch(e.target.value);
                                setSelectedBrand('');
                                setSelectedModel(''); 
                                setModelSearch('');
                                setShowBrandDropdown(true);
                            }}
                            onFocus={() => {
                                setShowBrandDropdown(true);
                                setShowModelDropdown(false);
                                setShowYearDropdown(false);
                            }}
                            onBlur={() => setTimeout(() => setShowBrandDropdown(false), 200)}
                            style={{...inputStyle, color: selectedBrand ? '#333' : '#999'}}
                        />
                        <span onClick={() => setShowBrandDropdown(!showBrandDropdown)} style={{cursor: 'pointer'}}>▼</span>
                    </div>
                    
                    {showBrandDropdown && filteredBrands.length > 0 && (
                        <div style={dropdownStyle}>
                            {filteredBrands.map((brand) => (
                                <div
                                    key={brand}
                                    onClick={() => handleBrandSelect(brand)}
                                    style={{padding: '0.75rem 1rem', cursor: 'pointer', borderBottom: '1px solid #f0f0f0'}}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                >
                                    {brand}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Modelo (Z-index 200) */}
                <div style={getInputContainerStyle(200)}> 
                    <div style={{...inputWrapperStyle, opacity: selectedBrand ? 1 : 0.6}}>
                        <input
                            type="text"
                            placeholder="Modelo"
                            value={selectedModel || modelSearch}
                            onChange={(e) => {
                                if (selectedBrand) {
                                    setModelSearch(e.target.value);
                                    setSelectedModel('');
                                    setShowModelDropdown(true);
                                }
                            }}
                            onFocus={() => {
                                if (selectedBrand) {
                                    setShowModelDropdown(true);
                                    setShowBrandDropdown(false);
                                    setShowYearDropdown(false);
                                }
                            }}
                            onBlur={() => setTimeout(() => setShowModelDropdown(false), 200)}
                            disabled={!selectedBrand}
                            style={{...inputStyle, color: selectedModel ? '#333' : '#999', cursor: selectedBrand ? 'text' : 'not-allowed'}}
                        />
                        <span onClick={() => selectedBrand && setShowModelDropdown(!showModelDropdown)} style={{cursor: selectedBrand ? 'pointer' : 'not-allowed'}}>▼</span>
                    </div>
                    
                    {showModelDropdown && selectedBrand && filteredModels.length > 0 && (
                        <div style={dropdownStyle}>
                            {filteredModels.map((model) => (
                                <div
                                    key={model}
                                    onClick={() => handleModelSelect(model)}
                                    style={{padding: '0.75rem 1rem', cursor: 'pointer', borderBottom: '1px solid #f0f0f0'}}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                >
                                    {model}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Ano (Z-index 100) */}
                <div style={getInputContainerStyle(100)}> 
                    <div style={inputWrapperStyle}>
                        <input
                            type="text"
                            placeholder="Ano"
                            value={selectedYear || yearSearch}
                            onChange={(e) => {
                                setYearSearch(e.target.value);
                                setSelectedYear('');
                                setShowYearDropdown(true);
                            }}
                            onFocus={() => {
                                setShowYearDropdown(true);
                                setShowBrandDropdown(false);
                                setShowModelDropdown(false);
                            }}
                            onBlur={() => setTimeout(() => setShowYearDropdown(false), 200)}
                            style={{...inputStyle, color: selectedYear ? '#333' : '#999'}}
                        />
                        <span onClick={() => setShowYearDropdown(!showYearDropdown)} style={{cursor: 'pointer'}}>▼</span>
                    </div>
                    
                    {showYearDropdown && filteredYears.length > 0 && (
                        <div style={dropdownStyle}>
                            {filteredYears.map((year) => (
                                <div
                                    key={year}
                                    onClick={() => handleYearSelect(year)}
                                    style={{padding: '0.75rem 1rem', cursor: 'pointer', borderBottom: '1px solid #f0f0f0'}}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                >
                                    {year}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <button onClick={handleContinueStep1} style={buttonStyle}>
                    Continuar
                </button>
            </div>
        </section>
    );

    // ---
    
    // Step 2: Tipo de Serviço
    const renderStep2 = () => (
        <section style={circleContainerStyle}>
            <div style={circleStyle}>
                <h2 style={titleStyle}>Qual serviço você precisa?</h2>
                
                {/* Opções de Serviço */}
                <div style={{
                    width: '100%', 
                    maxWidth: 'clamp(350px, 85vw, 540px)', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 'clamp(1rem, 3vw, 1.5rem)',
                    position: 'relative',
                    zIndex: 100 
                }}>
                    {[
                        { label: 'Mecânico', value: 'mecanico' },
                        { label: 'Guincho', value: 'guincho' },
                        { label: 'Oficina', value: 'oficina' }
                    ].map((service) => (
                        <div
                            key={service.value}
                            onClick={() => {
                                setSelectedService(service.value);
                            }}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                padding: 'clamp(1rem, 3.2vw, 1.4rem) clamp(1.3rem, 4vw, 1.8rem)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                fontSize: 'clamp(1rem, 2.8vw, 1.2rem)',
                                color: '#333',
                                boxShadow: selectedService === service.value ? '0 0 0 3px #FFD700' : '0 2px 8px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s',
                                minHeight: 'clamp(55px, 11vw, 65px)',
                            }}
                            onMouseEnter={(e) => {
                                if (selectedService !== service.value) {
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectedService !== service.value) {
                                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }
                            }}
                        >
                            <span>{service.label}</span>
                            <span style={{fontSize: 'clamp(1.1rem, 3.2vw, 1.4rem)', color: '#666'}}>›</span>
                        </div>
                    ))}
                </div>

                <button 
                    onClick={handleContinueStep2} 
                    style={{...buttonStyle, marginTop: 'clamp(1.8rem, 4vw, 2.8rem)'}}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFC700';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFD700';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    Continuar
                </button>
                {/* === Botão Voltar (Step 2) === */}
                <button 
                    onClick={handleGoBack} 
                    style={backButtonStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#5a6268';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#6c757d';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    Voltar
                </button>
            </div>
        </section>
    );

    // ---
    
    // Step 3: Descrição e Contato
    const renderStep3 = () => (
        <section style={circleContainerStyle}>
            <div style={circleStyle}>
                <h2 style={titleStyle}>Detalhes do Reparo e Contato</h2>
                
                {/* Busca de Serviço/Problema (Z-index 300) */}
                <div style={getInputContainerStyle(300)}> 
                    <div style={inputWrapperStyle}>
                        <span style={{marginRight: '0.5rem', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)'}}>🔧</span>
                        <input
                            type="text"
                            placeholder="Pesquise o tipo de reparo (ex: Troca de Pneu)"
                            value={serviceSearch}
                            onChange={(e) => {
                                setServiceSearch(e.target.value);
                                setShowServiceDropdown(true);
                            }}
                            onFocus={() => setShowServiceDropdown(true)}
                            onBlur={() => setTimeout(() => setShowServiceDropdown(false), 200)} 
                            style={inputStyle}
                        />
                        <span 
                            onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                            style={{color:'black', cursor: 'pointer', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'}}
                        >
                            ▼
                        </span>
                    </div>
                    
                    {showServiceDropdown && filteredServiceTypes.length > 0 && (
                        <div style={dropdownStyle}>
                            {filteredServiceTypes.map((service) => (
                                <div
                                    key={service}
                                    onClick={() => handleServiceSearchSelect(service)}
                                    style={{
                                        padding: 'clamp(0.6rem, 2vw, 0.85rem) clamp(0.8rem, 2.5vw, 1.2rem)', 
                                        cursor: 'pointer', 
                                        borderBottom: '1px solid #f0f0f0',
                                        fontSize: 'clamp(0.85rem, 2vw, 1rem)'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                >
                                    {service}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Detalhes do Problema (Z-index 200) */}
                <div style={{...getInputContainerStyle(200), marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)'}}> 
                    <textarea
                        placeholder="Descreva o problema com mais detalhes (Ex: O carro está fazendo um barulho estranho ao frear.)"
                        value={serviceDetails}
                        onChange={(e) => setServiceDetails(e.target.value)}
                        style={{
                            width: '100%',
                            minHeight: 'clamp(80px, 15vw, 120px)',
                            padding: 'clamp(0.8rem, 2.5vw, 1.2rem)',
                            borderRadius: '8px',
                            border: 'none',
                            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                            resize: 'vertical',
                            fontFamily: 'inherit',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>
                


                <button 
                    onClick={handleSubmit} 
                    style={buttonStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFC700';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFD700';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    Enviar Solicitação
                </button>
                {/* === Botão Voltar (Step 3) === */}
                <button 
                    onClick={handleGoBack} 
                    style={backButtonStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#5a6268';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#6c757d';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    Voltar
                </button>
            </div>
        </section>
    );

    // ---
    
    // Renderização Principal
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header /> 
            
            {/* Hero Section */}
            <section style={{
                backgroundColor: '#f5f5f5',
                padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem)',
                display: 'grid',
                gridTemplateColumns: window.innerWidth > 768 ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr',
                gap: 'clamp(1.5rem, 4vw, 3rem)',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0px auto',
                width: '100%'
            }}>
                <div>
                    <h1 style={{
                        fontSize: 'clamp(1.5rem, 5.5vw, 2.8rem)',
                        fontWeight: 'bold',
                        marginBottom: 'clamp(0.8rem, 2vw, 1.2rem)',
                        color: '#333',
                        lineHeight: '1.2'
                    }}>
                        O que você precisa hoje?
                    </h1>
                    <p style={{
                        fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)',
                        color: '#666',
                        marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
                        lineHeight: '1.5'
                    }}>
                        Encontre profissionais de confiança e receba orçamentos sem custo. Rápido, fácil e seguro!
                    </p>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        fontSize: 'clamp(0.85rem, 2.2vw, 1.05rem)'
                    }}>
                        <li style={{ marginBottom: 'clamp(0.6rem, 1.5vw, 0.9rem)', color: '#333' }}>
                            💰 Compare orçamentos sem pagar nada
                        </li>
                        <li style={{ marginBottom: 'clamp(0.6rem, 1.5vw, 0.9rem)', color: '#333' }}>
                            🔧 Encontre especialistas perto de você
                        </li>
                        <li style={{ marginBottom: 'clamp(0.6rem, 1.5vw, 0.9rem)', color: '#333' }}>
                            💡 Atendimento rápido e seguro
                        </li>
                    </ul>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{
                        width: '100%',
                        maxWidth: 'clamp(200px, 60vw, 350px)',
                        aspectRatio: '1/1',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#999',
                        fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                        textAlign: 'center',
                        padding: '1rem'
                    }}>
                        <img src={imgMecanico} alt="Foto do Mecânico" />
                        
                    </div>
                </div>
            </section>

            {/* Progress Indicator */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 'clamp(0.8rem, 2vw, 1.2rem)',
                gap: 'clamp(0.4rem, 1vw, 0.6rem)'
            }}>
                <div style={{
                    width: 'clamp(10px, 2.5vw, 14px)',
                    height: 'clamp(10px, 2.5vw, 14px)',
                    borderRadius: '50%',
                    backgroundColor: currentStep >= 1 ? '#0099FF' : '#ddd',
                    transition: 'all 0.3s'
                }}></div>
                <div style={{
                    width: 'clamp(10px, 2.5vw, 14px)',
                    height: 'clamp(10px, 2.5vw, 14px)',
                    borderRadius: '50%',
                    backgroundColor: currentStep >= 2 ? '#0099FF' : '#ddd',
                    transition: 'all 0.3s'
                }}></div>
                <div style={{
                    width: 'clamp(10px, 2.5vw, 14px)',
                    height: 'clamp(10px, 2.5vw, 14px)',
                    borderRadius: '50%',
                    backgroundColor: currentStep >= 3 ? '#0099FF' : '#ddd',
                    transition: 'all 0.3s'
                }}></div>
            </div>

            {/* Steps Rendering */}
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            
            <Footer />
        </div>
    );
};

export default VehicleForm;

// Estilos de módulo (VehicleForm.module.css)
// Você deve criar este arquivo para aplicar estilos mais complexos ou usar um pré-processador.
/*
.circleContainer {
    // ... estilos
}
.circle {
    // ... estilos
}
// etc.
*/