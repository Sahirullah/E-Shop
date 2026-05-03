import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">Your Trusted Partner for Quality Products</p>
          
          <div className="about-text">
            <p>
              We are committed to providing the highest quality products at responsible prices. With years of experience in the industry, we've built a reputation for excellence and customer satisfaction.
            </p>
            <p>
              Our mission is to make premium products accessible to everyone. We carefully curate our collection to ensure every item meets our strict quality standards.
            </p>
          </div>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Quality Assured</h3>
              <p>Every product is carefully selected and tested</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing without compromising quality</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to your location</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>24/7 Support</h3>
              <p>Always here to help with your questions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
