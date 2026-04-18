import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css'; 

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page-container">
      {/* --- Header & Navigation --- */}
      <header className="hero" style={{ paddingBottom: '40px' }}>
        <Navbar />

        <div className="hero-content" style={{ marginTop: '30px', padding: '60px 0' }}>
          <h1 style={{ fontWeight: '800', fontSize: '3.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            ABOUT US
          </h1>
          <p style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '1.1rem', color: 'var(--accent-gold)' }}>
            Corporate Identity & Philosophy
          </p>
        </div>
      </header>

      {/* --- Main Content Section --- */}
      <main className="container" style={{ maxWidth: '1000px', marginTop: '60px' }}>
        
        <section id="history" style={{ marginBottom: '60px' }}>
          <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Company History</h2>
          <div className="history-card" style={{
            background: 'white',
            padding: '50px',
            borderRadius: '15px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            borderTop: '5px solid var(--primary-blue)'
          }}>
            <p style={{ fontSize: '1.25rem', lineHeight: '2.1', color: '#334155', marginBottom: '25px' }}>
              Founded in 2015 by <strong>Engr. Percival Archer Riego</strong>, our firm began with a simple but powerful goal: to fix the communication gaps and inefficiencies that often derail construction projects. Having seen firsthand how fragmented information could slow down progress, Engr. Riego built the company on the belief that smart, data-driven planning is just as important as the physical build.
            </p>
            <p style={{ fontSize: '1.25rem', lineHeight: '2.1', color: '#334155' }}>
              We started as a small, tight-knit group of engineers and have since grown into a full-service contractor trusted by both private and public sector clients. Today, we remain focused on that original vision, delivering high-quality, reliable results through a seamless, honest, and highly organized approach to every project we take on.
            </p>
          </div>
        </section>

        {/* Mission & Vision Side-by-Side */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginBottom: '80px' }}>
          <section>
            <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Mission</h2>
            <div style={{ background: 'var(--primary-blue)', color: 'white', padding: '45px 35px', borderRadius: '15px', height: '100%', boxShadow: '0 15px 30px rgba(22, 44, 74, 0.2)' }}>
              <p style={{ fontSize: '1.3rem', lineHeight: '1.8', fontStyle: 'italic' }}>
                "To eliminate construction inefficiencies through data-driven planning and seamless communication, delivering high-quality, honest results that bridge the gap between complex designs and a perfect build."
              </p>
            </div>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Vision</h2>
            <div style={{ background: 'white', border: '3px solid var(--primary-blue)', padding: '45px 35px', borderRadius: '15px', height: '100%', boxShadow: '0 15px 30px rgba(0,0,0,0.05)' }}>
              <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: 'var(--primary-blue)', fontWeight: '600' }}>
                "To be the industry gold standard for organized construction, transforming the landscape through engineering integrity and smarter, more reliable project execution."
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '60px 0 30px', borderTop: '2px solid #e2e8f0', marginTop: '40px' }}>
        <p style={{ color: 'var(--primary-blue)', fontSize: '1.3rem', fontWeight: '800', marginBottom: '5px' }}>IMPERIUM BUILDERS</p>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>&copy; 2026 • Corporate Identity Portal • Manila, Philippines</p>
      </footer>
    </div>
  );
}

export default AboutUs;