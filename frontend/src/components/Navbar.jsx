import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Import your new logo file
import logo from '../assets/goldlogo1.png.png'; 

function Navbar() {
  const location = useLocation();

  // This function checks if the current URL matches the link's path
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Replaced the icon with your custom gold logo */}
        <img 
          src={logo} 
          alt="Nexus Builders Logo" 
          style={{ height: '60px', width: 'auto', objectFit: 'contain' }} 
        />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
          <strong style={{ fontSize: '1.4rem', color: 'var(--accent-gold)', letterSpacing: '1px' }}>
            NEXUS BUILDERS
          </strong>
          <small style={{ color: 'white', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '400' }}>
            Engineering Office Information System
          </small>
        </div>
      </Link>
      
      <div className="nav-links" style={{ fontSize: '1.1rem' }}>
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/services" className={isActive('/services')}>Services</Link>
        <Link to="/projects" className={isActive('/projects')}>Projects</Link>
        <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        <Link to="/about" className={isActive('/about')}>About us</Link>
        <Link to="/team" className={isActive('/team')}>Team</Link>
      </div>
    </nav>
  );
}

export default Navbar;