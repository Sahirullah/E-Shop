import { useState } from 'react'
import './Places.css'
import watchImg from '../assets/watch_Hero-Section.jpg'
import ringImg from '../assets/ring_Hero-Section.jpg'
import perfumeImg from '../assets/perfume_Hero-Section.jpg'

const newArrivals = [
  {
    id: 'na1',
    name: 'Luxury Men\'s Chronograph',
    price: '$349.99',
    image: watchImg
  },
  {
    id: 'na2',
    name: 'Platinum Wedding Band',
    price: '$449.99',
    image: ringImg
  },
  {
    id: 'na3',
    name: 'Diamond Solitaire Necklace',
    price: '$399.99',
    image: perfumeImg
  },
  {
    id: 'na4',
    name: 'Midnight Elegance Perfume',
    price: '$89.99',
    image: perfumeImg
  },
  {
    id: 'na5',
    name: 'Rose Gold Women\'s Watch',
    price: '$279.99',
    image: watchImg
  }
]

const bestSellers = [
  {
    id: 'bs1',
    name: 'Classic Men\'s Watch',
    price: '$199.99',
    originalPrice: '$249.99',
    image: watchImg
  },
  {
    id: 'bs2',
    name: 'Gold Engagement Ring',
    price: '$599.99',
    originalPrice: '$699.99',
    image: ringImg
  },
  {
    id: 'bs3',
    name: 'Pearl Pendant Necklace',
    price: '$249.99',
    originalPrice: '$299.99',
    image: perfumeImg
  },
  {
    id: 'bs4',
    name: 'Gentleman\'s Choice Perfume',
    price: '$79.99',
    originalPrice: '$99.99',
    image: perfumeImg
  },
  {
    id: 'bs5',
    name: 'Silver Cross Pendant',
    price: '$129.99',
    originalPrice: '$159.99',
    image: ringImg
  }
]

export default function Places() {
  const [activeTab, setActiveTab] = useState('best-sellers')
  const [showDropdown, setShowDropdown] = useState(false)
  const whatsappNumber = '+923479104637'

  const handleWhatsApp = (productName, price) => {
    const message = `Hi, I'm interested in ${productName} (${price})`
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const scroll = (direction) => {
    const container = document.querySelector('.carousel-track')
    if (container) {
      const scrollAmount = 300
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  const currentProducts = activeTab === 'best-sellers' ? bestSellers : newArrivals

  return (
    <section id="featured" className="featured">
      <div className="featured-container">
        {/* Dropdown Header */}
        <div className="dropdown-header">
          <span className="header-text">You are in</span>
          <div className="dropdown-wrapper">
            <button 
              className="dropdown-button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="dropdown-label">
                {activeTab === 'best-sellers' ? 'best sellers' : 'new arrivals'}
              </span>
              <span className={`dropdown-icon ${showDropdown ? 'open' : ''}`}>▼</span>
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <button
                  className={`dropdown-item ${activeTab === 'best-sellers' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('best-sellers')
                    setShowDropdown(false)
                  }}
                >
                  best sellers
                </button>
                <button
                  className={`dropdown-item ${activeTab === 'new-arrivals' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('new-arrivals')
                    setShowDropdown(false)
                  }}
                >
                  new arrivals
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Carousel Section */}
        <div className="carousel-section">
          <div className="carousel-wrapper">
            <button className="carousel-arrow left" onClick={() => scroll('left')}>❮</button>
            <div className="carousel-track">
              {currentProducts.map((product) => (
                <div key={product.id} className="carousel-product">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="price-section">
                    <p className="product-price">{product.price}</p>
                    {product.originalPrice && (
                      <p className="original-price">{product.originalPrice}</p>
                    )}
                  </div>
                  <button
                    className="product-btn"
                    onClick={() => handleWhatsApp(product.name, product.price)}
                  >
                    💬 Inquire
                  </button>
                </div>
              ))}
            </div>
            <button className="carousel-arrow right" onClick={() => scroll('right')}>❯</button>
          </div>
        </div>
      </div>
    </section>
  )
}
