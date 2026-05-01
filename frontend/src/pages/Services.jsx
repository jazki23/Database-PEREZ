import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css'; 

// --- Brand Logo ---
import logo from '../assets/goldlogo1.png.png'; 

// --- Image Imports ---
import imgManagement from '../assets/management.png'; 
import imgRenovation from '../assets/renovation.png';
import imgConstruction from '../assets/construction.jpg'; 

function Services() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const serviceList = [
    {
      title: "General Construction",
      desc: "Full-scale structural development and civil engineering works tailored for industrial and residential needs.",
      icon: "fa-solid fa-helmet-safety",
      img: imgConstruction
    },
    {
      title: "Project Management",
      desc: "Strategic planning, technical coordination, and site supervision to ensure projects are delivered on time and within budget.",
      icon: "fa-solid fa-list-check",
      img: imgManagement
    },
    {
      title: "Renovation & Fit-out",
      desc: "High-quality architectural interior works, structural modifications, and specialized fit-out services for modern spaces.",
      icon: "fa-solid fa-tools",
      img: imgRenovation
    }
  ];

  return (
    <div className="home-page-container">
      {/* 
        THE FIX: Added minHeight: '40vh' to override the 80vh from HomePage.css.
        This shrinks the dark blue hero section to a normal "sub-page" header size. 
      */}
      <header className="hero" style={{ minHeight: '40vh', paddingBottom: '40px' }}>
        <Navbar />
        
        <div className="hero-content" style={{ marginTop: '20px', padding: '40px 0' }}>
          <h1 style={{ fontWeight: '800', fontSize: '3.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)', marginBottom: '10px' }}>
            SERVICES
          </h1>
          <p style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '1.1rem', color: 'var(--accent-gold)', margin: '0' }}>
            Expertise & Excellence
          </p>
        </div>
      </header>

      {/* --- Main Content --- */}
      {/* Reset to a normal, clean top margin of 50px */}
      <main className="container" style={{ maxWidth: '1200px', marginTop: '50px', marginBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {serviceList.map((service, index) => (
            <div key={index} style={serviceCardStyle}>
              <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={iconBadgeStyle}>
                  <i className={service.icon}></i>
                </div>
              </div>

              <div style={{ padding: '30px' }}>
                <h3 style={{ color: 'var(--primary-blue)', fontSize: '1.6rem', marginBottom: '15px', borderBottom: '2px solid var(--accent-gold)', display: 'inline-block', paddingBottom: '5px' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.8' }}>
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- Footer Section --- */}
      <footer style={{ textAlign: 'center', padding: '60px 0 40px', borderTop: '2px solid #e2e8f0' }}>
        <img src={logo} alt="Nexus Logo" style={{ height: '45px', marginBottom: '15px', opacity: '0.9' }} />
        <p style={{ color: 'var(--primary-blue)', fontSize: '1.5rem', fontWeight: '800', marginBottom: '5px' }}>
          NEXUS BUILDERS
        </p>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
          &copy; 2026 • Engineering Office Information System • Manila, Philippines
        </p>
      </footer>
    </div>
  );
}

const serviceCardStyle = {
  background: 'white',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 15px 35px rgba(22, 44, 74, 0.08)',
  transition: 'transform 0.3s ease',
  border: '1px solid #e2e8f0'
};

const iconBadgeStyle = {
  position: 'absolute',
  bottom: '-25px',
  right: '30px',
  background: 'var(--accent-gold)',
  color: 'var(--primary-blue)',
  width: '60px',
  height: '60px',
  borderRadius: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  boxShadow: '0 10px 20px rgba(198, 162, 84, 0.3)',
  zIndex: '2'
};

export default Services;