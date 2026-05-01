import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css'; 

// --- Brand Logo ---
// Updated to the latest gold logo file
import logo from '../assets/goldlogo1.png.png'; 

function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const contactDetails = [
    {
      label: "HEADQUARTERS",
      info: "14th Floor, Nexus Corporate Center, Katipunan Avenue, Quezon City, Philippines",
      icon: "fa-solid fa-location-dot"
    },
    {
      label: "EMAIL US",
      info: "info@nexusbuilders.com.ph",
      icon: "fa-solid fa-envelope"
    },
    {
      label: "PHONE NUMBER",
      info: "(+63) 2 8845 6721",
      icon: "fa-solid fa-phone-volume"
    }
  ];

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
            CONTACT US
          </h1>
          <p style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '1.1rem', color: 'var(--accent-gold)', margin: '0' }}>
            Get in Touch with our Engineering Team
          </p>
        </div>
      </header>

      {/* --- Main Content --- */}
      {/* Reduced marginTop from 80px to 50px to bring the content directly under the header */}
      <main className="container" style={{ maxWidth: '1100px', marginTop: '50px', marginBottom: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          {/* Contact Information Cards */}
          <div style={{ gridColumn: 'span 1' }}>
            <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Corporate Directory</h2>
            {contactDetails.map((item, index) => (
              <div key={index} style={infoCardStyle}>
                <div style={iconCircleStyle}>
                  <i className={item.icon}></i>
                </div>
                <div>
                  <p style={labelStyle}>{item.label}</p>
                  <p style={infoTextStyle}>{item.info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Inquiry Form */}
          <div style={formContainerStyle}>
            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '25px', fontWeight: '800' }}>Project Inquiry</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Your Name" style={inputStyle} />
              <input type="email" placeholder="Professional Email" style={inputStyle} />
              <textarea placeholder="Tell us about your project scope..." rows="5" style={inputStyle}></textarea>
              <button style={submitButtonStyle}>Send Inquiry</button>
            </div>
          </div>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '80px 0 40px', borderTop: '2px solid #e2e8f0', marginTop: '60px' }}>
        <img 
          src={logo} 
          alt="Nexus Logo" 
          style={{ height: '45px', marginBottom: '15px', opacity: '0.9' }} 
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

// --- Contact Page Styles ---
const infoCardStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '20px',
  marginBottom: '35px',
  background: 'white',
  padding: '25px',
  borderRadius: '12px',
  boxShadow: '0 10px 25px rgba(22, 44, 74, 0.05)',
  borderLeft: '5px solid var(--accent-gold)'
};

const iconCircleStyle = {
  background: '#f8fafc',
  color: 'var(--primary-blue)',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.2rem',
  flexShrink: 0,
  border: '1px solid #e2e8f0'
};

const labelStyle = { color: 'var(--accent-gold)', fontWeight: '800', fontSize: '0.75rem', letterSpacing: '1.5px', marginBottom: '5px' };
const infoTextStyle = { color: 'var(--primary-blue)', fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.5' };
const formContainerStyle = { background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(22, 44, 74, 0.08)', border: '1px solid #f1f5f9' };
const inputStyle = { width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', outline: 'none', background: '#fcfdfe' };
const submitButtonStyle = { background: 'var(--primary-blue)', color: 'var(--accent-gold)', padding: '15px', borderRadius: '8px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', border: 'none', cursor: 'pointer', marginTop: '10px' };

export default Contact;