import { useState } from 'react'
import './Places.css'

const newArrivals = [
  {
    id: 'na1',
    name: 'Luxury Men\'s Chronograph',
    category: 'Watches',
    price: '$349.99',
    emoji: '⌚'
  },
  {
    id: 'na2',
    name: 'Platinum Wedding Band',
    category: 'Rings',
    price: '$449.99',
    emoji: '💍'
  },
  {
    id: 'na3',
    name: 'Diamond Solitaire Necklace',
    category: 'Necklaces',
    price: '$399.99',
    emoji: '✨'
  },
  {
    id: 'na4',
    name: 'Midnight Elegance Perfume',
    category: 'Perfumes',
    price: '$89.99',
    emoji: '🌸'
  },
  {
    id: 'na5',
    name: 'Rose Gold Women\'s Watch',
    category: 'Watches',
    price: '$279.99',
    emoji: '⌚'
  },
  {
    id: 'na6',
    name: 'Sapphire Statement Ring',
    category: 'Rings',
    price: '$399.99',
    emoji: '💍'
  }
]

const bestSellers = [
  {
    id: 'bs1',
    name: 'Classic Men\'s Watch',
    category: 'Watches',
    price: '$199.99',
    originalPrice: '$249.99',
    discount: '20%',
    emoji: '⌚',
    rating: '4.8',
    sold: '2.5K+'
  },
  {
    id: 'bs2',
    name: 'Gold Engagement Ring',
    category: 'Rings',
    price: '$599.99',
    originalPrice: '$699.99',
    discount: '14%',
    emoji: '💍',
    rating: '4.9',
    sold: '1.8K+'
  },
  {
    id: 'bs3',
    name: 'Pearl Pendant Necklace',
    category: 'Necklaces',
    price: '$249.99',
    originalPrice: '$299.99',
    discount: '17%',
    emoji: '✨',
    rating: '4.7',
    sold: '1.2K+'
  },
  {
    id: 'bs4',
    name: 'Gentleman\'s Choice Perfume',
    category: 'Perfumes',
    price: '$79.99',
    originalPrice: '$99.99',
    discount: '20%',
    emoji: '🌸',
    rating: '4.8',
    sold: '3.1K+'
  },
  {
    id: 'bs5',
    name: 'Silver Cross Pendant',
    category: 'Necklaces',
    price: '$129.99',
    originalPrice: '$159.99',
    discount: '19%',
    emoji: '✨',
    rating: '4.6',
    sold: '980+'
  },
  {
    id: 'bs6',
    name: 'Ocean Breeze Perfume',
    category: 'Perfumes',
    price: '$74.99',
    originalPrice: '$94.99',
    discount: '21%',
    emoji: '🌸',
    rating: '4.7',
    sold: '2.2K+'
  }
]

export default function Places() {
  const [bestSellerIndex, setBestSellerIndex] = useState(0)
  const [newArrivalIndex, setNewArrivalIndex] = useState(0)
  const whatsappNumber = '+923479104637'

  const handleWhatsApp = (productName, price) => {
    const message = `Hi, I'm interested in ${productName} (${price})`
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const nextBestSeller = () => {
    setBestSellerIndex((prev) => (prev + 1) % bestSellers.length)
  }

  const prevBestSeller = () => {
    setBestSellerIndex((prev) => (prev - 1 + bestSellers.length) % bestSellers.length)
  }

  const nextNewArrival = () => {
    setNewArrivalIndex((prev) => (prev + 1) % newArrivals.length)
  }

  const prevNewArrival = () => {
    setNewArrivalIndex((prev) => (prev - 1 + newArrivals.length) % newArrivals.length)
  }

  const getVisibleProducts = (index, array, count = 5) => {
    const visible = []
    for (let i = 0; i < count; i++) {
      visible.push(array[(index + i) % array.length])
    }
    return visible
  }

  return (
    <section id="featured" className="featured">
      <div className="featured-container">
        {/* New Arrivals Carousel */}
        <div className="featured-section">
          <h2 className="section-title">🆕 New Arrivals</h2>
          <p className="section-subtitle">Check out our latest products</p>
          <div className="carousel-wrapper">
            <button className="carousel-btn prev-btn" onClick={prevNewArrival}>❮</button>
            <div className="carousel-container">
              <div className="carousel-track">
                {getVisibleProducts(newArrivalIndex, newArrivals, 5).map((product, idx) => (
                  <div key={`${product.id}-${idx}`} className="carousel-item">
                    <div className="carousel-card">
                      <div className="carousel-image">
                        <span className="carousel-emoji">{product.emoji}</span>
                      </div>
                      <h3 className="carousel-name">{product.name}</h3>
                      <p className="carousel-category">{product.category}</p>
                      <p className="carousel-price">{product.price}</p>
                      <button
                        className="carousel-btn-inquire"
                        onClick={() => handleWhatsApp(product.name, product.price)}
                      >
                        💬 Inquire
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-btn next-btn" onClick={nextNewArrival}>❯</button>
          </div>
        </div>

        {/* Best Sellers Carousel */}
        <div className="featured-section">
          <h2 className="section-title">⭐ Best Sellers</h2>
          <p className="section-subtitle">Our most popular products</p>
          <div className="carousel-wrapper">
            <button className="carousel-btn prev-btn" onClick={prevBestSeller}>❮</button>
            <div className="carousel-container">
              <div className="carousel-track">
                {getVisibleProducts(bestSellerIndex, bestSellers, 5).map((product, idx) => (
                  <div key={`${product.id}-${idx}`} className="carousel-item">
                    <div className="carousel-card best-seller">
                      <div className="discount-badge">{product.discount} OFF</div>
                      <div className="carousel-image">
                        <span className="carousel-emoji">{product.emoji}</span>
                      </div>
                      <h3 className="carousel-name">{product.name}</h3>
                      <p className="carousel-category">{product.category}</p>
                      <div className="carousel-price-section">
                        <p className="carousel-price">{product.price}</p>
                        <p className="carousel-original-price">{product.originalPrice}</p>
                      </div>
                      <p className="carousel-sold">{product.sold} sold</p>
                      <button
                        className="carousel-btn-inquire"
                        onClick={() => handleWhatsApp(product.name, product.price)}
                      >
                        💬 Inquire
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-btn next-btn" onClick={nextBestSeller}>❯</button>
          </div>
        </div>
      </div>
    </section>
  )
}
