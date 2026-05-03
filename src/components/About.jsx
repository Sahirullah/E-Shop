import './About.css'
import logoImg from '../assets/logo.png'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-wrapper">
          {/* Left Side - Text Content */}
          <div className="about-content">
            <h2 className="section-title">About Apna Shop</h2>
            <p className="section-subtitle">Your Trusted Partner for Quality Products</p>
            
            <div className="about-text">
              <p>
                Welcome to Apna Shop, your one-stop destination for premium rings, stylish watches, and long-lasting perfumes. We believe that quality and affordability should go hand in hand.
              </p>
              <p>
                With years of experience in the luxury goods industry, we've built a reputation for excellence and customer satisfaction. Our mission is to make premium products accessible to everyone by offering competitive prices without compromising on quality.
              </p>
              <p>
                Every product in our collection is carefully curated and tested to ensure it meets our strict quality standards. We take pride in delivering not just products, but an experience of trust and convenience.
              </p>
            </div>
          </div>

          {/* Right Side - Logo Image */}
          <div className="about-image">
            <img src={logoImg} alt="Apna Shop Logo" className="about-logo" />
          </div>
        </div>
      </div>
    </section>
  )
}
