import './index.css';

function App() {
  return (
    <>
      <header className="hero">
        <nav className="navbar">
          <div className="nav-logo">
            <i className="fa-solid fa-cube"></i>
            <span>RYT TZUIZ ENGIN<br /><small style={{ color: '#94a3b8', fontSize: '0.7rem' }}>Information System Database</small></span>
          </div>
          <div className="nav-links">
            <a href="#" className="active">Home</a>
            <a href="#">Overview</a>
            <a href="#">Objectives</a>
            <a href="#">Themes</a>
            <a href="#">Components</a>
            <a href="#">Dashboard</a>
          </div>
        </nav>

        <div className="hero-content">
          <i className="fa-solid fa-layer-group hero-icon"></i>
          <h1>SYSTEM DATABASE</h1>
          <h2>Engineering Office Information System</h2>
          <p>MANILA, PHILIPPINES • FINAL PROJECT</p>
        </div>
      </header>

      <main className="container">
        <h2 className="section-title">System Information</h2>
        <section className="info-section">
          <table className="info-table">
            <tbody>
              <tr>
                <th>System Name</th>
                <td>Manila EOIS (Engineering Office Info System)</td>
              </tr>
              <tr>
                <th>Coverage</th>
                <td>LGU Engineering Office + Design-Build Firms</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>City of Manila, Metro Manila, Philippines</td>
              </tr>
              <tr>
                <th>Database Model</th>
                <td>Relational (3NF Normalized)</td>
              </tr>
              <tr>
                <th>Sheets Included</th>
                <td>Employees, Projects, Contractors, Permits, Equipment, Budget</td>
              </tr>
            </tbody>
          </table>
        </section>

        <h2 className="section-title">Database Modules</h2>
        <section className="sheets-section">
          <div className="sheet-nav-title">
            <i className="fa-solid fa-compass" style={{ color: 'var(--accent-cool)' }}></i> System Navigation
          </div>

          <div className="sheets-grid">
            <div className="sheet-card">
              <div className="sheet-icon"><i className="fa-solid fa-users"></i></div>
              <div className="sheet-info">
                <h3>Employees</h3>
                <p>All engineering staff records</p>
              </div>
            </div>
            <div className="sheet-card">
              <div className="sheet-icon"><i className="fa-solid fa-building"></i></div>
              <div className="sheet-info">
                <h3>Projects</h3>
                <p>Active and completed construction projects</p>
              </div>
            </div>
            <div className="sheet-card">
              <div className="sheet-icon"><i className="fa-solid fa-helmet-safety"></i></div>
              <div className="sheet-info">
                <h3>Contractors</h3>
                <p>Licensed contractors and firms</p>
              </div>
            </div>
            <div className="sheet-card">
              <div className="sheet-icon"><i className="fa-regular fa-file-lines"></i></div>
              <div className="sheet-info">
                <h3>Permits</h3>
                <p>Building and engineering permits</p>
              </div>
            </div>
            <div className="sheet-card">
              <div className="sheet-icon"><i className="fa-solid fa-toolbox"></i></div>
              <div className="sheet-info">
                <h3>Equipment</h3>
                <p>Office and field equipment inventory</p>
              </div>
            </div>
            <div className="sheet-card">
              <div className="sheet-icon"><i className="fa-solid fa-sack-dollar"></i></div>
              <div className="sheet-info">
                <h3>Budget</h3>
                <p>Project budget and expenditure tracking</p>
              </div>
            </div>
            <div className="sheet-card">
              <div className="sheet-icon"><i className="fa-solid fa-chart-simple"></i></div>
              <div className="sheet-info">
                <h3>Dashboard</h3>
                <p>Summary statistics and KPIs</p>
              </div>
            </div>
          </div>
        </section>

        <h2 className="section-title">Project Report Sections</h2>
        <section className="reports-grid">
          <div className="report-card">
            <div className="report-icon"><i className="fa-solid fa-file-alt"></i></div>
            <h3>Project Overview</h3>
            <p>Organization context and information needs</p>
          </div>
          <div className="report-card">
            <div className="report-icon"><i className="fa-solid fa-bullseye"></i></div>
            <h3>Project Objectives</h3>
            <p>Learning outcomes and goals</p>
          </div>
          <div className="report-card">
            <div className="report-icon"><i className="fa-solid fa-border-all"></i></div>
            <h3>Project Themes</h3>
            <p>Application context options</p>
          </div>
          <div className="report-card">
            <div className="report-icon"><i className="fa-solid fa-gear"></i></div>
            <h3>Project Components</h3>
            <p>Parts 1-4: Full technical report</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;