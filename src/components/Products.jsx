import { useState } from 'react'
import './Products.css'

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
        image: '⌚'
      },
      {
        id: 'w2',
        name: 'Luxury Men\'s Chronograph',
        category: 'watches',
        subcategory: 'male',
        price: '$349.99',
        description: 'Premium chronograph with sapphire crystal',
        image: '⌚'
      },
      {
        id: 'w3',
        name: 'Women\'s Diamond Watch',
        category: 'watches',
        subcategory: 'female',
        price: '$279.99',
        description: 'Elegant watch with diamond accents',
        image: '⌚'
      },
      {
        id: 'w4',
        name: 'Women\'s Rose Gold Watch',
        category: 'watches',
        subcategory: 'female',
        price: '$249.99',
        description: 'Sophisticated rose gold timepiece',
        image: '⌚'
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
        image: '💍'
      },
      {
        id: 'r2',
        name: 'Platinum Wedding Band',
        category: 'rings',
        subcategory: 'male',
        price: '$449.99',
        description: 'Pure platinum classic band',
        image: '💍'
      },
      {
        id: 'r3',
        name: 'Sapphire Statement Ring',
        category: 'rings',
        subcategory: 'female',
        price: '$399.99',
        description: 'Blue sapphire with diamond surround',
        image: '💍'
      },
      {
        id: 'r4',
        name: 'Silver Signet Ring',
        category: 'rings',
        subcategory: 'male',
        price: '$149.99',
        description: 'Classic sterling silver design',
        image: '💍'
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
        image: '🌸'
      },
      {
        id: 'p2',
        name: 'Gentleman\'s Choice',
        category: 'perfumes',
        subcategory: 'male',
        price: '$79.99',
        description: 'Woody and spicy notes, 100ml',
        image: '🌸'
      },
      {
        id: 'p3',
        name: 'Ocean Breeze',
        category: 'perfumes',
        subcategory: 'male',
        price: '$74.99',
        description: 'Fresh aquatic fragrance, 100ml',
        image: '🌸'
      },
      {
        id: 'p4',
        name: 'Rose Garden',
        category: 'perfumes',
        subcategory: 'female',
        price: '$84.99',
        description: 'Pure rose with vanilla base, 100ml',
        image: '🌸'
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
        image: '✨'
      },
      {
        id: 'n2',
        name: 'Pearl Pendant',
        category: 'necklaces',
        subcategory: 'female',
        price: '$249.99',
        description: 'South Sea pearl with gold setting',
        image: '✨'
      },
      {
        id: 'n3',
        name: 'Silver Cross Pendant',
        category: 'necklaces',
        subcategory: 'male',
        price: '$129.99',
        description: 'Sterling silver cross design',
        image: '✨'
      },
      {
        id: 'n4',
        name: 'Diamond Solitaire',
        category: 'necklaces',
        subcategory: 'female',
        price: '$399.99',
        description: '0.5 carat diamond pendant',
        image: '✨'
      }
    ]
  }
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('watches')
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const whatsappNumber = '+923479104637'

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
                <span className="product-emoji">{product.image}</span>
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
              <button
                className="product-btn"
                onClick={() => handleWhatsApp(product.name, product.price)}
              >
                💬 Inquire on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
