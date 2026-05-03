import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    id: 1,
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy on all products. If you\'re not satisfied with your purchase, simply contact us within 30 days of delivery for a full refund or exchange. Items must be in original condition with all packaging intact.'
  },
  {
    id: 2,
    question: 'How long does delivery take?',
    answer: 'We typically deliver within 3-5 business days across Pakistan. Delivery times may vary depending on your location. You\'ll receive a tracking number via WhatsApp once your order is dispatched.'
  },
  {
    id: 3,
    question: 'Are your products authentic?',
    answer: 'Yes, all our products are 100% authentic and sourced directly from authorized distributors. We guarantee the authenticity of every item in our collection. Each product comes with proper documentation and warranty.'
  },
  {
    id: 4,
    question: 'Do you offer bulk orders or corporate gifts?',
    answer: 'Absolutely! We offer special pricing for bulk orders and corporate gifts. Contact us via WhatsApp with your requirements, and our team will provide you with a customized quote and delivery timeline.'
  }
]

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Find answers to common questions</p>
        
        <div className="faq-list">
          {faqs.map(faq => (
            <div key={faq.id} className="faq-item">
              <button
                className={`faq-question ${openId === faq.id ? 'active' : ''}`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="question-text">{faq.question}</span>
                <span className="toggle-icon">+</span>
              </button>
              {openId === faq.id && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
