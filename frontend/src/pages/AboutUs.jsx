import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
// Updated to the latest gold logo file
import logo from '../assets/goldlogo1.png.png'; 
import './HomePage.css'; 

function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="home-page-container">
      {/* 
        THE FIX: Added minHeight: '40vh' to standardize the sub-page header size 
      */}
      <header className="hero" style={{ minHeight: '40vh', paddingBottom: '40px' }}>
        <Navbar />
        {/* Adjusted padding and margins to bring the text closer to the center/bottom */}
        <div className="hero-content" style={{ marginTop: '20px', padding: '40px 0' }}>
          <h1 style={{ fontWeight: '800', fontSize: '3.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)', marginBottom: '10px' }}>
            ABOUT US
          </h1>
          <p style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '1.1rem', color: 'var(--accent-gold)', margin: '0' }}>
            Our Legacy & Vision
          </p>
        </div>
      </header>

      {/* --- Main Content --- */}
      {/* Reduced marginTop from 80px to 50px to bring the content directly under the header */}
      <main className="container" style={{ maxWidth: '1000px', marginTop: '50px', marginBottom: '100px' }}>
        <section style={{ background: 'white', padding: '60px', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
          <h2 style={{ color: 'var(--primary-blue)', borderBottom: '3px solid var(--accent-gold)', display: 'inline-block', marginBottom: '30px' }}>
            Our Story
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '2', color: '#334155', textAlign: 'justify' }}>
            Founded in 2015 by <strong>Engineer Percival Archer Riego</strong>, Nexus Builders emerged from a vision to integrate rigorous engineering standards with modern data management. What began as a boutique consultancy has grown into a premier engineering firm known for its precision in residential and community developments.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '2', color: '#334155', marginTop: '20px', textAlign: 'justify' }}>
            Our headquarters in Quezon City serves as the hub for our strategic planning and coordination, ensuring that every project—from custom residences to large-scale housing—is delivered with construction integrity.
          </p>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '80px 0 40px', borderTop: '2px solid #e2e8f0', marginTop: '60px' }}>
        <img src={logo} alt="Nexus Logo" style={{ height: '45px', marginBottom: '15px', opacity: '0.9' }} />
        <p style={{ color: 'var(--primary-blue)', fontSize: '1.5rem', fontWeight: '800', marginBottom: '10px' }}>
          NEXUS BUILDERS
        </p>
        <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
          &copy; 2026 • Engineering Office Information System • Manila, Philippines
        </p>
      </footer>
    </div>
  );
}

export default About;