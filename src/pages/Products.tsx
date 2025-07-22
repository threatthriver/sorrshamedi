import { useState } from 'react';
import './pages.css';
import '../styles/design-system.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const productCategories = [
    'all',
    'surgical',
    'diagnostic',
    'therapeutic',
    'disposables'
  ];
  
  const products = [
    {
      id: 1,
      name: 'Advanced Surgical Stapler',
      category: 'surgical',
      description: 'Precision stapling device for minimally invasive procedures',
      features: ['Ergonomic design', 'Multi-fire capability', 'Visual indicator']
    },
    {
      id: 2,
      name: 'Portable Ultrasound System',
      category: 'diagnostic',
      description: 'High-resolution imaging with wireless connectivity',
      features: ['15" touchscreen', 'Battery powered', 'DICOM compatible']
    },
    {
      id: 3,
      name: 'Infusion Pump System',
      category: 'therapeutic',
      description: 'Smart pump with dose error reduction software',
      features: ['Wireless monitoring', 'Multi-channel', 'Drug library']
    },
    {
      id: 4,
      name: 'Sterile Surgical Gowns',
      category: 'disposables',
      description: 'AAMI Level 4 protection with comfort design',
      features: ['Fluid resistant', 'Breathable', 'Multiple sizes']
    },
    {
      id: 5,
      name: 'Arthroscopy System',
      category: 'surgical',
      description: '4K visualization for orthopedic procedures',
      features: ['Integrated shaver', 'LED light source', 'Compact design']
    },
    {
      id: 6,
      name: 'Patient Monitor',
      category: 'diagnostic',
      description: 'Multi-parameter vital signs monitoring',
      features: ['12.1" display', 'Modular design', 'Network capable']
    }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="products-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Our <span className="highlight">Products</span></h1>
          <p className="hero-subtitle">
            High-quality medical equipment for healthcare professionals
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Product Catalog</h2>
            <p>Browse our comprehensive range of medical equipment</p>
          </div>
          
          <div className="category-filters">
            {productCategories.map(category => (
              <button
                key={category}
                className={`category-filter ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="card product-card">
                <div className="product-image">
                  <div className="product-category">{product.category}</div>
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <ul className="product-features">
                    {product.features.map((feature, index) => (
                      <li key={index}>
                        <svg viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-primary">
                    Request Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
