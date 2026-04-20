import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css'; 

// --- Image Imports (Matched to your latest explorer screenshot) ---
import imgBefore from '../assets/before.jpg';
import imgAfter from '../assets/after.png';

function Projects() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="home-page-container">
      <header className="hero" style={{ paddingBottom: '40px' }}>
        <Navbar />
        <div className="hero-content" style={{ marginTop: '30px', padding: '60px 0' }}>
          <h1 style={{ fontWeight: '800', fontSize: '3.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>PROJECTS</h1>
          <p style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '1.1rem', color: 'var(--accent-gold)' }}>Building the Future</p>
        </div>
      </header>

      <main className="container" style={{ maxWidth: '1200px', marginTop: '80px', marginBottom: '100px' }}>
        
        <section style={projectSectionStyle}>
          {/* Gallery Header: Side-by-Side Comparison */}
          <div style={galleryGridStyle}>
            <div style={imageWrapperStyle}>
              <img src={imgBefore} alt="Under Construction" style={projectImgStyle} />
              <div style={statusBadgeStyle}>Structural Phase</div>
            </div>
            <div style={imageWrapperStyle}>
              <img src={imgAfter} alt="Finished Residence" style={projectImgStyle} />
              <div style={statusBadgeStyle}>Completed</div>
            </div>
          </div>

          {/* Project Narrative */}
          <div style={detailsBoxStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
              <div style={{ height: '3px', width: '60px', background: 'var(--accent-gold)' }}></div>
              <h2 style={{ color: 'var(--primary-blue)', fontSize: '2.2rem', margin: 0, fontWeight: '800' }}>
                VENIEL'S RESIDENCE
              </h2>
            </div>
            
            <p style={{ color: '#475569', fontSize: '1.25rem', lineHeight: '2.1', textAlign: 'justify' }}>
              This modern two-storey home features a clean, sophisticated palette of warm browns, crisp whites, and cool grays. 
              The design uses rich wood textures and slate-gray accents to ground the bright white exterior, creating a balanced 
              look that is both contemporary and organic. With its seamless blend of neutral tones and natural materials, 
              the house offers a calm, professional aesthetic that feels perfectly at home in any landscape.
            </p>

            {/* Technical Specifications Bar */}
            <div style={specsGridStyle}>
              <div style={specItemStyle}>
                <span style={specLabelStyle}>LOCATION:</span>
                <span style={specValueStyle}>METRO MANILA</span>
              </div>
              <div style={specItemStyle}>
                <span style={specLabelStyle}>CATEGORY:</span>
                <span style={specValueStyle}>RESIDENTIAL</span>
              </div>
              <div style={specItemStyle}>
                <span style={specLabelStyle}>SCOPE:</span>
                <span style={specValueStyle}>DESIGN & BUILD</span>
              </div>
            </div>
          </div>

        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '60px 0 40px', borderTop: '2px solid #e2e8f0' }}>
        <p style={{ color: 'var(--primary-blue)', fontSize: '1.2rem', fontWeight: '800' }}>NEXUS BUILDERS</p>
      </footer>
    </div>
  );
}

// --- High-End Styling Objects ---
const projectSectionStyle = {
  background: 'white',
  borderRadius: '30px',
  overflow: 'hidden',
  boxShadow: '0 30px 60px rgba(22, 44, 74, 0.06)',
  border: '1px solid #f1f5f9'
};

const galleryGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '15px',
  padding: '15px',
  background: '#f8fafc'
};

const imageWrapperStyle = {
  position: 'relative',
  height: '500px',
  borderRadius: '20px',
  overflow: 'hidden'
};

const projectImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const statusBadgeStyle = {
  position: 'absolute',
  top: '25px',
  left: '25px',
  background: 'rgba(22, 44, 74, 0.9)',
  color: 'var(--accent-gold)',
  padding: '10px 20px',
  borderRadius: '8px',
  fontSize: '0.85rem',
  fontWeight: '800',
  textTransform: 'uppercase',
  backdropFilter: 'blur(8px)',
  letterSpacing: '1px'
};

const detailsBoxStyle = {
  padding: '70px 100px'
};

const specsGridStyle = {
  marginTop: '50px',
  paddingTop: '35px',
  borderTop: '2px solid #f1f5f9',
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '800px'
};

const specItemStyle = { display: 'flex', flexDirection: 'column', gap: '5px' };
const specLabelStyle = { color: '#94a3b8', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px' };
const specValueStyle = { color: 'var(--primary-blue)', fontSize: '1rem', fontWeight: '700' };

export default Projects;