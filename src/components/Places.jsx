import './Places.css'

const newArrivals = [
  {
    id: 'na1',
    name: 'Luxury Men\'s Chronograph',
    category: 'Watches',
    price: '$349.99',
    badge: '🆕 New',
    emoji: '⌚'
  },
  {
    id: 'na2',
    name: 'Platinum Wedding Band',
    category: 'Rings',
    price: '$449.99',
    badge: '🆕 New',
    emoji: '💍'
  },
  {
    id: 'na3',
    name: 'Diamond Solitaire Necklace',
    category: 'Necklaces',
    price: '$399.99',
    badge: '🆕 New',
    emoji: '✨'
  },
  {
    id: 'na4',
    name: 'Midnight Elegance Perfume',
    category: 'Perfumes',
    price: '$89.99',
    badge: '🆕 New',
    emoji: '🌸'
  }
]

const bestSellers = [
  {
    id: 'bs1',
    name: 'Classic Men\'s Watch',
    category: 'Watches',
    price: '$199.99',
    badge: '⭐ Best Seller',
    emoji: '⌚',
    rating: '4.8'
  },
  {
    id: 'bs2',
    name: 'Gold Engagement Ring',
    category: 'Rings',
    price: '$599.99',
    badge: '⭐ Best Seller',
    emoji: '💍',
    rating: '4.9'
  },
  {
    id: 'bs3',
    name: 'Pearl Pendant Necklace',
    category: 'Necklaces',
    price: '$249.99',
    badge: '⭐ Best Seller',
    emoji: '✨',
    rating: '4.7'
  },
  {
    id: 'bs4',
    name: 'Gentleman\'s Choice Perfume',
    category: 'Perfumes',
    price: '$79.99',
    badge: '⭐ Best Seller',
    emoji: '🌸',
    rating: '4.8'
  }
]

export default function Places() {
  const whatsappNumber = '+923479104637'

  const handleWhatsApp = (productName, price) => {
    const message = `Hi, I'm interested in ${productName} (${price})`
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="featured" className="featured">
      <div className="featured-container">
        {/* New Arrivals */}
        <div className="featured-section">
          <h2 className="section-title">🆕 New Arrivals</h2>
          <p className="section-subtitle">Check out our latest products</p>
          <div className="featured-grid">
            {newArrivals.map(product => (
              <div key={product.id} className="featured-card">
                <div className="featured-badge">{product.badge}</div>
                <div className="featured-image">
                  <span className="featured-emoji">{product.emoji}</span>
                </div>
                <h3 className="featured-name">{product.name}</h3>
                <p className="featured-category">{product.category}</p>
                <p className="featured-price">{product.price}</p>
                <button
                  className="featured-btn"
                  onClick={() => handleWhatsApp(product.name, product.price)}
                >
                  💬 Inquire
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Best Sellers */}
        <div className="featured-section">
          <h2 className="section-title">⭐ Best Sellers</h2>
          <p className="section-subtitle">Our most popular products</p>
          <div className="featured-grid">
            {bestSellers.map(product => (
              <div key={product.id} className="featured-card">
                <div className="featured-badge">{product.badge}</div>
                <div className="featured-rating">{product.rating} ⭐</div>
                <div className="featured-image">
                  <span className="featured-emoji">{product.emoji}</span>
                </div>
                <h3 className="featured-name">{product.name}</h3>
                <p className="featured-category">{product.category}</p>
                <p className="featured-price">{product.price}</p>
                <button
                  className="featured-btn"
                  onClick={() => handleWhatsApp(product.name, product.price)}
                >
                  💬 Inquire
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
