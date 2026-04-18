import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // This function checks if the current URL matches the link's path
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <i className="fa-solid fa-building-columns" style={{ fontSize: '1.8rem' }}></i>
        <span>
          <strong style={{ fontSize: '1.4rem' }}>IMPERIUM BUILDERS</strong><br />
          <small style={{ color: 'white', fontSize: '0.85rem', letterSpacing: '1px' }}>
            Engineering Office Information System
          </small>
        </span>
      </div>
      
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