import './WhatsAppButton.css'
import chatbtnImg from '../assets/chatbtn.png'

export default function WhatsAppButton() {
  const whatsappNumber = '+923334188395'
  const message = 'Hi! I would like to know more about your products and services.'

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button 
      className="whatsapp-chat-btn"
      onClick={handleWhatsAppClick}
      title="Chat with us on WhatsApp"
      aria-label="Open WhatsApp chat"
    >
      <img src={chatbtnImg} alt="WhatsApp Chat" className="chatbtn-image" />
    </button>
  )
}
