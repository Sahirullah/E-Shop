import './Hero.css'

export default function Hero() {
  const whatsappNumber = '+923479104637'
  const message = 'Hi! I would like to know more about your products and services.'

  const handleShopNow = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleLearnMore = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Get All Types of Stuff</h1>
        <p className="hero-subtitle">High Quality Products on Responsible Prices</p>
        <p className="hero-description">Discover our exclusive collection of premium products at unbeatable prices. Quality you can trust, prices you'll love.</p>
        <div className="hero-buttons">
          <button className="hero-btn primary" onClick={handleShopNow}>Shop Now</button>
          <button className="hero-btn secondary" onClick={handleLearnMore}>Learn More</button>
        </div>
      </div>
    </section>
  )
}
