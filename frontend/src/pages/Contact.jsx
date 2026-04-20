import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css'; 

function Services() { // Rename this to Projects or Contact for the other files
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="home-page-container">
      <header className="hero" style={{ paddingBottom: '40px' }}>
        <Navbar />
        <div className="hero-content" style={{ marginTop: '30px', padding: '60px 0' }}>
          <h1 style={{ fontWeight: '800', fontSize: '3.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>SERVICES</h1>
          <p style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '1.1rem', color: 'var(--accent-gold)' }}>What We Offer</p>
        </div>
      </header>

      <main className="container" style={{ maxWidth: '1200px', marginTop: '60px', minHeight: '50vh' }}>
        <h2 className="section-title">Professional Solutions</h2>
        <div style={{ background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <p style={{ color: '#475569', fontSize: '1.1rem' }}> Content for this section goes here...</p>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '60px 0 40px', borderTop: '2px solid #e2e8f0' }}>
        <p style={{ color: 'var(--primary-blue)', fontSize: '1.2rem', fontWeight: '800' }}>NEXUS BUILDERS</p>
      </footer>
    </div>
  );
}

export default Services;