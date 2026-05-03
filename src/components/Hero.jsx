import { useState, useEffect } from 'react'
import './Hero.css'
import perfumeImg from '../assets/perfume_Hero-Section.jpg'
import ringImg from '../assets/ring_Hero-Section.jpg'
import watchImg from '../assets/watch_Hero-Section.jpg'

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const whatsappNumber = '+923479104637'
  const message = 'Hi! I would like to know more about your products and services.'

  const heroImages = [
    { id: 1, src: watchImg, alt: 'Watch Collection' },
    { id: 2, src: ringImg, alt: 'Ring Collection' },
    { id: 3, src: perfumeImg, alt: 'Perfume Collection' }
  ]

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const handleShopNow = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleLearnMore = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="hero">
      <div className="hero-carousel-wrapper">
        <button className="carousel-nav prev" onClick={prevImage}>❮</button>
        
        <div className="hero-carousel-container">
          <div className="hero-carousel-track" style={{
            transform: `translateX(-${currentImageIndex * 100}%)`
          }}>
            {heroImages.map((image) => (
              <div key={image.id} className="hero-carousel-slide">
                <img src={image.src} alt={image.alt} className="hero-carousel-image" />
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-nav next" onClick={nextImage}>❯</button>
      </div>

      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">Your Style, Your Choice – Only at Apna Shop</h1>
        <p className="hero-subtitle">Discover premium rings, stylish watches, and long-lasting perfumes — all in one place.</p>
        <p className="hero-description">We deliver quality products right to your doorstep with trust and convenience.</p>
        <div className="hero-buttons">
          <button className="hero-btn primary" onClick={handleShopNow}>Shop Now</button>
          <button className="hero-btn secondary" onClick={handleLearnMore}>Explore Collection</button>
        </div>
      </div>

      <div className="carousel-indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}
