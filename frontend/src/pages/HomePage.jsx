import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
// Official updated gold logo file
import logo from '../assets/goldlogo1.png.png'; 
import './HomePage.css'; 

function HomePage() {
  useEffect(() => {
    // Ensures the user starts at the top of the page on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page-container">
      {/* --- Header & Navigation --- */}
      <header className="hero">
        <Navbar />

        <div className="hero-content" style={{ padding: '80px 0' }}>
          {/* Logo with NO backdrop as requested */}
          <div style={{ display: 'inline-block', marginBottom: '20px' }}>
            <img 
              src={logo} 
              alt="Nexus Builders Gold Logo" 
              style={{ 
                height: '140px', 
                width: 'auto', 
                display: 'block',
                /* Subtle gold glow to help the logo pop against the background */
                filter: 'drop-shadow(0px 0px 12px rgba(198, 162, 84, 0.4))' 
              }} 
            />
          </div>
          
          <h1 style={{ fontWeight: '800', fontSize: '3.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)', marginBottom: '15px' }}>
            NEXUS BUILDERS
          </h1>
          <h2 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1.8rem', color: 'white' }}>
            Information System Database
          </h2>
          <p style={{ fontSize: '1.1rem', marginTop: '10px' }}>MANILA, PHILIPPINES</p>
        </div>
      </header>

      {/* --- Main Content Section --- */}
      <main className="container" style={{ maxWidth: '1200px' }}>
        
        <section className="about-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
          gap: '50px', 
          marginTop: '60px',
          alignItems: 'stretch'
        }}>
          
          {/* Left Column: Mission & Values */}
          <div className="profile-column">
            <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Our Commitment</h2>
            <div className="commitment-card" style={{
              background: 'white',
              padding: '50px 40px',
              borderRadius: '15px',
              borderLeft: '10px solid var(--accent-gold)',
              boxShadow: '0 20px 40px rgba(22, 44, 74, 0.1)',
              position: 'relative',
              height: '100%'
            }}>
              <i className="fa-solid fa-quote-left" style={{ color: '#f1f5f9', fontSize: '4.5rem', position: 'absolute', top: '15px', left: '15px' }}></i>
              <p style={{ fontSize: '1.6rem', color: 'var(--primary-blue)', fontWeight: '600', lineHeight: '1.7', fontStyle: 'italic', position: 'relative', zIndex: '2' }}>
                "Nexus Builders is committed to delivering engineered solutions that meet the highest standards of quality, efficiency, and construction integrity."
              </p>

              <div className="values-container" style={{ display: 'flex', gap: '15px', marginTop: '40px' }}>
                {['Precision', 'Accountability', 'Excellence'].map(value => (
                  <span key={value} style={{ background: 'var(--primary-blue)', color: 'var(--accent-gold)', padding: '10px 22px', borderRadius: '30px', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Profile */}
          <div className="profile-column">
            <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Corporate Profile</h2>
            <div className="history-card" style={{
              background: 'white',
              padding: '50px 40px',
              borderRadius: '15px',
              boxShadow: '0 20px 40px rgba(22, 44, 74, 0.1)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginBottom: '35px' }}>
                {/* Backdrop removed here by deleting background and border properties */}
                <div style={{ 
                  width: '100px',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={logo} 
                    alt="Nexus Gold Logo" 
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }} 
                  />
                </div>
                <div>
                  <h3 style={{ margin: 0, color: 'var(--primary-blue)', fontSize: '1.8rem' }}>Established 2015</h3>
                </div>
              </div>
              <p style={{ fontSize: '1.2rem', lineHeight: '2.0', color: '#334155' }}>
                Founded by <strong>Engineer Percival Archer Riego</strong>, Nexus Builders was established to revolutionize construction through data-driven planning and strategic coordination.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer Section --- */}
      <footer style={{ textAlign: 'center', padding: '80px 0 40px', borderTop: '2px solid #e2e8f0', marginTop: '60px' }}>
        <img 
          src={logo} 
          alt="Nexus Gold Logo" 
          style={{ height: '50px', marginBottom: '15px' }} 
        />
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

export default HomePage;