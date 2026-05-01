import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css'; 

// --- Brand Logo ---
import logo from '../assets/goldlogo.png'; 

// --- Image Imports ---
// Project 1: Veniel's Residence
import imgBefore from '../assets/before.jpg'; 
import imgAfter from '../assets/after.png';  

// Project 2: The Horizon Residences
import proj1 from '../assets/projects1.png'; 
import proj2 from '../assets/projects2.png';
import proj3 from '../assets/projects3.png';
import proj4 from '../assets/projects4.png';

function Projects() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="home-page-container">
      {/* 
        THE FIX: Added minHeight: '40vh' to override the default huge hero size. 
      */}
      <header className="hero" style={{ minHeight: '40vh', paddingBottom: '40px' }}>
        <Navbar />
        {/* Adjusted padding and margins to bring the text closer to the center/bottom */}
        <div className="hero-content" style={{ marginTop: '20px', padding: '40px 0' }}>
          <h1 style={{ fontWeight: '800', fontSize: '3.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)', marginBottom: '10px' }}>
            PROJECTS
          </h1>
          <p style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '1.1rem', color: 'var(--accent-gold)', margin: '0' }}>
            Building the Future
          </p>
        </div>
      </header>

      {/* --- Main Content --- */}
      {/* Reduced marginTop from 80px to 50px to bring the cards right under the header */}
      <main className="container" style={{ maxWidth: '1200px', marginTop: '50px', marginBottom: '100px' }}>
        
        {/* --- PROJECT 1: VENIEL'S RESIDENCE --- */}
        <section style={projectSectionStyle}>
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

          <div style={detailsBoxStyle}>
            <div style={titleHeaderStyle}>
              <div style={goldLineStyle}></div>
              <h2 style={titleStyle}>VENIEL'S RESIDENCE</h2>
            </div>
            
            <p style={descriptionStyle}>
              This modern two-storey home features a clean, sophisticated palette of warm browns, crisp whites, and cool grays. 
              The design uses rich wood textures and slate-gray accents to ground the bright white exterior, creating a balanced 
              look that is both contemporary and organic.
            </p>

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

        {/* --- PROJECT 2: THE HORIZON RESIDENCES --- */}
        <section style={{ ...projectSectionStyle, marginTop: '80px' }}>
          <div style={{ ...galleryGridStyle, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {[proj1, proj2, proj3, proj4].map((img, i) => (
              <div key={i} style={{ ...imageWrapperStyle, height: '300px' }}>
                <img src={img} alt={`Horizon Block ${i + 1}`} style={projectImgStyle} />
              </div>
            ))}
          </div>

          <div style={detailsBoxStyle}>
            <div style={titleHeaderStyle}>
              <div style={goldLineStyle}></div>
              <h2 style={titleStyle}>THE HORIZON RESIDENCES</h2>
            </div>
            
            <p style={descriptionStyle}>
              This modern housing development features a striking palette of crisp whites and vibrant red accents, 
              creating a bold and energetic community identity. The design utilizes clean, geometric lines to 
              elevate the traditional "Pabahay" concept into a sophisticated residential space.
            </p>

            <div style={specsGridStyle}>
              <div style={specItemStyle}>
                <span style={specLabelStyle}>LOCATION:</span>
                <span style={specValueStyle}>LAGUNA, PHILIPPINES</span>
              </div>
              <div style={specItemStyle}>
                <span style={specLabelStyle}>CATEGORY:</span>
                <span style={specValueStyle}>COMMUNITY HOUSING</span>
              </div>
              <div style={specItemStyle}>
                <span style={specLabelStyle}>UNITS:</span>
                <span style={specValueStyle}>MULTIPLE BLOCKS</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '80px 0 40px', borderTop: '2px solid #e2e8f0', marginTop: '60px' }}>
        <img src={logo} alt="Nexus Logo" style={{ height: '45px', marginBottom: '15px', opacity: '0.9' }} />
        <p style={{ color: 'var(--primary-blue)', fontSize: '1.5rem', fontWeight: '800', marginBottom: '10px' }}>NEXUS BUILDERS</p>
        <p style={{ color: '#94a3b8', fontSize: '1rem' }}>&copy; 2026 • Engineering Office Information System • Manila, Philippines</p>
      </footer>
    </div>
  );
}

// --- Styles remain exactly the same ---
const projectSectionStyle = { background: 'white', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(22, 44, 74, 0.06)', border: '1px solid #f1f5f9' };
const galleryGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '15px', padding: '15px', background: '#f8fafc' };
const imageWrapperStyle = { position: 'relative', height: '500px', borderRadius: '20px', overflow: 'hidden' };
const projectImgStyle = { width: '100%', height: '100%', objectFit: 'cover' };
const statusBadgeStyle = { position: 'absolute', top: '25px', left: '25px', background: 'rgba(22, 44, 74, 0.9)', color: 'var(--accent-gold)', padding: '10px 20px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', backdropFilter: 'blur(8px)', letterSpacing: '1px' };
const detailsBoxStyle = { padding: '60px 100px' };
const titleHeaderStyle = { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' };
const goldLineStyle = { height: '3px', width: '60px', background: 'var(--accent-gold)' };
const titleStyle = { color: 'var(--primary-blue)', fontSize: '2.2rem', margin: 0, fontWeight: '800' };
const descriptionStyle = { color: '#475569', fontSize: '1.25rem', lineHeight: '2.1', textAlign: 'justify' };
const specsGridStyle = { marginTop: '50px', paddingTop: '35px', borderTop: '2px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', maxWidth: '800px' };
const specItemStyle = { display: 'flex', flexDirection: 'column', gap: '5px' };
const specLabelStyle = { color: '#94a3b8', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px' };
const specValueStyle = { color: 'var(--primary-blue)', fontSize: '1rem', fontWeight: '700' };

export default Projects;