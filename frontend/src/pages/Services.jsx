import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css'; 

// --- Image Imports (Matched to your latest explorer screenshot) ---
import imgManagement from '../assets/management.png'; 
import imgRenovation from '../assets/renovation.png';
import imgConstruction from '../assets/construction.jpg'; // Note: this one is .jpg

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
      <header className="hero" style={{ paddingBottom: '40px' }}>
        <Navbar />
        <div className="hero-content" style={{ marginTop: '30px', padding: '60px 0' }}>
          <h1 style={{ fontWeight: '800', fontSize: '3.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>SERVICES</h1>
          <p style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '1.1rem', color: 'var(--accent-gold)' }}>Expertise & Excellence</p>
        </div>
      </header>

      <main className="container" style={{ maxWidth: '1200px', marginTop: '80px', marginBottom: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {serviceList.map((service, index) => (
            <div key={index} style={serviceCardStyle}>
              {/* Image Header */}
              <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={iconBadgeStyle}>
                  <i className={service.icon}></i>
                </div>
              </div>

              {/* Text Content */}
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

      <footer style={{ textAlign: 'center', padding: '60px 0 40px', borderTop: '2px solid #e2e8f0' }}>
        <p style={{ color: 'var(--primary-blue)', fontSize: '1.2rem', fontWeight: '800' }}>IMPERIUM BUILDERS</p>
      </footer>
    </div>
  );
}

// --- Styles ---
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