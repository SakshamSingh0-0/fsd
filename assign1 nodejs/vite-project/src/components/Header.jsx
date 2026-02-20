import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">AC</div>
          <span className="logo-text">ABES</span>
        </div>
        
        <nav className="nav-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#work" className="nav-link">Work</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
