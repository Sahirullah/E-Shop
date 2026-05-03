import './Reviews.css'

const reviews = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO, Tech Company',
    text: 'Exceptional service and outstanding quality. Highly recommended!',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Marketing Manager',
    text: 'Best experience ever. The team was professional and responsive.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    id: 3,
    name: 'Mike Davis',
    role: 'Entrepreneur',
    text: 'Great products and excellent customer support. Worth every penny!',
    rating: 5,
    avatar: '👨‍🔬'
  }
]

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="reviews-container">
        <h2 className="section-title">Client Reviews</h2>
        <p className="section-subtitle">What our clients say about us</p>
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <span className="review-avatar">{review.avatar}</span>
                <div className="review-info">
                  <h3 className="review-name">{review.name}</h3>
                  <p className="review-role">{review.role}</p>
                </div>
              </div>
              <div className="review-rating">
                {'⭐'.repeat(review.rating)}
              </div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
