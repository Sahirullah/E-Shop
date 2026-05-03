import './Navbar.css'
import logoImg from '../assets/logo.png'

export default function Navbar() {
  const whatsappNumber = '+923479104637'
  
  const handleContactClick = () => {
    const message = 'Hi! I would like to contact you.'
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logoImg} alt="Logo" className="logo-image" />
          <span className="logo-text">ApnaShop</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#products" className="nav-link">Products</a>
          </li>
          <li className="nav-item">
            <a href="#reviews" className="nav-link">Client Reviews</a>
          </li>
          <li className="nav-item">
            <a href="#featured" className="nav-link">Featured</a>
          </li>
          <li className="nav-item">
            <button 
              onClick={handleContactClick}
              className="nav-link contact-btn"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
