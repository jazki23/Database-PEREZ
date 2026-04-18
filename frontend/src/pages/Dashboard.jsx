import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Dashboard() {
  return (
    <div className="dashboard-page">
      <header className="hero">
        <nav className="navbar">
          <div className="nav-logo">
             <i className="fa-solid fa-cube"></i>
             <span>RTU ENGINEERING OFFICE</span>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/dashboard" className="active">Dashboard</Link>
          </div>
        </nav>
        <div className="hero-content">
          <h1>SYSTEM MODULES</h1>
          <p>MANAGE DATABASE RECORDS</p>
        </div>
      </header>

      <main className="container">
        <h2 className="section-title">Database Navigation</h2>
        <div className="sheets-grid">
          {['Employees', 'Projects', 'Contractors', 'Permits', 'Equipment', 'Budget'].map(module => (
            <div className="sheet-card" key={module}>
              <div className="sheet-info">
                <h3>{module}</h3>
                <p>Manage {module.toLowerCase()} data</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;