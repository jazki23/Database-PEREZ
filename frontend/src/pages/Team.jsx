import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css'; 

// --- Image Imports (Matched to your explorer screenshot) ---
import photoAvril from '../assets/avril.jpg'; 
import photoFatima from '../assets/fatima.jpg';
import photoArjay from '../assets/arjay.jpg';
import photoErnest from '../assets/ernest.jpg';
import photoIvy from '../assets/ivy.jpg';
import photoMila from '../assets/mila.jpg';
import photoLove from '../assets/love.jpg'; // Filename matches love.jpg

function Team() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const teamMembers = [
    { name: "Engr. Avril Perez", role: "Project Manager", photo: photoAvril },
    { name: "Engr. Fatima Marie Herrera", role: "Project Manager", photo: photoFatima },
    { name: "Engr. Arjay Ocfemia", role: "Site Engineer", photo: photoArjay },
    { name: "Engr. Ernest Baldio", role: "Site Engineer", photo: photoErnest },
    { name: "Engr. Ivy Parrocho", role: "Quantity Surveyor", photo: photoIvy },
    { name: "Engr. Mila Bolante", role: "Safety Officer", photo: photoMila },
    { name: "Engr. Lovely Dela Rosa", role: "Safety Officer", photo: photoLove }
  ];

  // Layout Styles
  const cardStyle = {
    background: 'white',
    padding: '40px 25px',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 12px 30px rgba(22, 44, 74, 0.08)',
    borderBottom: '4px solid var(--accent-gold)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '1 1 22%',
    minWidth: '280px'
  };

  const secondRowCardStyle = {
    ...cardStyle,
    flex: '0 1 30%' 
  };

  return (
    <div className="home-page-container">
      <header className="hero" style={{ paddingBottom: '40px' }}>
        <Navbar />
        <div className="hero-content" style={{ marginTop: '30px', padding: '60px 0' }}>
          <h1 style={{ fontWeight: '800', fontSize: '3.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>OUR TEAM</h1>
          <p style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '1.1rem', color: 'var(--accent-gold)' }}>Project Development & Engineering</p>
        </div>
      </header>

      <main className="container" style={{ maxWidth: '1400px', marginTop: '60px' }}>
        <h2 className="section-title" style={{ fontSize: '1.6rem', textAlign: 'center', marginBottom: '40px' }}>Development Board</h2>
        
        {/* Row 1: 4 Members */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginBottom: '20px' }}>
          {teamMembers.slice(0, 4).map((member, index) => (
            <div key={index} style={cardStyle}>
              <div style={imgContainerStyle}>
                <img src={member.photo} alt={member.name} style={imgStyle} />
              </div>
              <h3 style={nameStyle}>{member.name}</h3>
              <p style={roleStyle}>{member.role}</p>
            </div>
          ))}
        </div>

        {/* Row 2: 3 Members */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginBottom: '80px' }}>
          {teamMembers.slice(4, 7).map((member, index) => (
            <div key={index} style={secondRowCardStyle}>
              <div style={imgContainerStyle}>
                <img src={member.photo} alt={member.name} style={imgStyle} />
              </div>
              <h3 style={nameStyle}>{member.name}</h3>
              <p style={roleStyle}>{member.role}</p>
            </div>
          ))}
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '60px 0 40px', borderTop: '2px solid #e2e8f0' }}>
        <p style={{ color: 'var(--primary-blue)', fontSize: '1.2rem', fontWeight: '800' }}>NEXUS BUILDERS</p>
      </footer>
    </div>
  );
}

const imgContainerStyle = { width: '130px', height: '130px', borderRadius: '50%', margin: '0 auto 20px', border: '4px solid var(--accent-gold)', padding: '5px', background: 'white', overflow: 'hidden' };
const imgStyle = { width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' };
const nameStyle = { color: 'var(--primary-blue)', fontSize: '1.4rem', marginBottom: '5px' };
const roleStyle = { color: 'var(--accent-gold)', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '5px' };

export default Team;