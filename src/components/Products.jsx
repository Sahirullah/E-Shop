import { useState } from 'react'
import './Products.css'
import watchMale from '../assets/watch for male.jpeg'
import powerWatchMale from '../assets/power watch , male, .jpeg'
import powerWatchFemale from '../assets/power watch for female.jpeg'
import powerFemalWatch from '../assets/power female watch .jpeg'
import perfume1 from '../assets/perfum1.jpeg'
import perfume2 from '../assets/perfum2.jpeg'
import cacsoMale from '../assets/Cacso for male.jpeg'

const productCategories = {
  watches: {
    name: 'Watches',
    icon: '⌚',
    products: [
      {
        id: 'w1',
        name: 'Classic Men\'s Watch',
        category: 'watches',
        subcategory: 'male',
        price: '$199.99',
        description: 'Elegant stainless steel watch with leather strap',
        image: watchMale
      },
      {
        id: 'w2',
        name: 'Luxury Men\'s Chronograph',
        category: 'watches',
        subcategory: 'male',
        price: '$349.99',
        description: 'Premium chronograph with sapphire crystal',
        image: powerWatchMale
      },
      {
        id: 'w3',
        name: 'Women\'s Diamond Watch',
        category: 'watches',
        subcategory: 'female',
        price: '$279.99',
        description: 'Elegant watch with diamond accents',
        image: powerFemalWatch
      },
      {
        id: 'w4',
        name: 'Power Female Watch',
        category: 'watches',
        subcategory: 'female',
        price: '$249.99',
        description: 'Advanced smartwatch with fitness tracking',
        image: powerWatchFemale
      }
    ]
  },
  rings: {
    name: 'Rings',
    icon: '💍',
    products: [
      {
        id: 'r1',
        name: 'Gold Engagement Ring',
        category: 'rings',
        subcategory: 'female',
        price: '$599.99',
        description: '18K gold with 1 carat diamond',
        image: cacsoMale
      },
      {
        id: 'r2',
        name: 'Platinum Wedding Band',
        category: 'rings',
        subcategory: 'male',
        price: '$449.99',
        description: 'Pure platinum classic band',
        image: cacsoMale
      },
      {
        id: 'r3',
        name: 'Sapphire Statement Ring',
        category: 'rings',
        subcategory: 'female',
        price: '$399.99',
        description: 'Blue sapphire with diamond surround',
        image: cacsoMale
      },
      {
        id: 'r4',
        name: 'Silver Signet Ring',
        category: 'rings',
        subcategory: 'male',
        price: '$149.99',
        description: 'Classic sterling silver design',
        image: cacsoMale
      }
    ]
  },
  perfumes: {
    name: 'Perfumes',
    icon: '🌸',
    products: [
      {
        id: 'p1',
        name: 'Midnight Elegance',
        category: 'perfumes',
        subcategory: 'female',
        price: '$89.99',
        description: 'Floral and musky fragrance, 100ml',
        image: perfume1
      },
      {
        id: 'p2',
        name: 'Gentleman\'s Choice',
        category: 'perfumes',
        subcategory: 'male',
        price: '$79.99',
        description: 'Woody and spicy notes, 100ml',
        image: perfume2
      },
      {
        id: 'p3',
        name: 'Ocean Breeze',
        category: 'perfumes',
        subcategory: 'male',
        price: '$74.99',
        description: 'Fresh aquatic fragrance, 100ml',
        image: perfume2
      },
      {
        id: 'p4',
        name: 'Rose Garden',
        category: 'perfumes',
        subcategory: 'female',
        price: '$84.99',
        description: 'Pure rose with vanilla base, 100ml',
        image: perfume1
      }
    ]
  },
  necklaces: {
    name: 'Necklaces',
    icon: '✨',
    products: [
      {
        id: 'n1',
        name: 'Gold Chain Necklace',
        category: 'necklaces',
        subcategory: 'female',
        price: '$199.99',
        description: '18K gold delicate chain',
        image: cacsoMale
      },
      {
        id: 'n2',
        name: 'Pearl Pendant',
        category: 'necklaces',
        subcategory: 'female',
        price: '$249.99',
        description: 'South Sea pearl with gold setting',
        image: cacsoMale
      },
      {
        id: 'n3',
        name: 'Silver Cross Pendant',
        category: 'necklaces',
        subcategory: 'male',
        price: '$129.99',
        description: 'Sterling silver cross design',
        image: cacsoMale
      },
      {
        id: 'n4',
        name: 'Diamond Solitaire',
        category: 'necklaces',
        subcategory: 'female',
        price: '$399.99',
        description: '0.5 carat diamond pendant',
        image: cacsoMale
      }
    ]
  }
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('watches')
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const whatsappNumber = '+923334188395'

  const currentCategory = productCategories[selectedCategory]
  let filteredProducts = currentCategory.products

  if (selectedSubcategory !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.subcategory === selectedSubcategory)
  }

  const getSubcategories = () => {
    const subcats = new Set(currentCategory.products.map(p => p.subcategory))
    return Array.from(subcats)
  }

  const handleWhatsApp = (productName, price) => {
    const message = `Hi, I'm interested in ${productName} (${price})`
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="products" className="products">
      <div className="products-container">
        <h2 className="section-title">Our Collections</h2>
        <p className="section-subtitle">Explore our premium luxury items</p>

        {/* Category Tabs */}
        <div className="category-tabs">
          {Object.entries(productCategories).map(([key, category]) => (
            <button
              key={key}
              className={`category-tab ${selectedCategory === key ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(key)
                setSelectedSubcategory('all')
              }}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Subcategory Filter */}
        <div className="subcategory-filter">
          <button
            className={`filter-btn ${selectedSubcategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedSubcategory('all')}
          >
            All
          </button>
          {getSubcategories().map(subcat => (
            <button
              key={subcat}
              className={`filter-btn ${selectedSubcategory === subcat ? 'active' : ''}`}
              onClick={() => setSelectedSubcategory(subcat)}
            >
              {subcat.charAt(0).toUpperCase() + subcat.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
              <button
                className="product-btn"
                onClick={() => handleWhatsApp(product.name, product.price)}
              >
                <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.082.398-2.847 1.12-.735.71-1.14 1.656-1.14 2.66 0 1.04.415 2.049 1.144 2.81l.002.003c.704.682 1.644 1.078 2.654 1.078h.004c1.01 0 1.95-.396 2.654-1.078l-.002-.003c.73-.761 1.144-1.77 1.144-2.81 0-1.004-.405-1.95-1.14-2.66-.765-.722-1.795-1.12-2.847-1.12M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0"/>
                </svg>
                WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
