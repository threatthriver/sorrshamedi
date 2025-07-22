import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield, FiActivity, FiPackage, FiClock } from 'react-icons/fi';
import './pages.css';

const Home: React.FC = () => {
  const featuredCategories = [
    {
      icon: <FiShield size={40} />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control to ensure the highest standards in medical equipment.'
    },
    {
      icon: <FiActivity size={40} />,
      title: 'Advanced Technology',
      description: 'Cutting-edge medical technology for accurate diagnostics and effective treatments.'
    },
    {
      icon: <FiPackage size={40} />,
      title: 'Global Distribution',
      description: 'Reliable worldwide shipping and logistics for all your medical supply needs.'
    },
    {
      icon: <FiClock size={40} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and technical support for healthcare professionals.'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Portable Ultrasound System',
      category: 'Diagnostic Imaging',
      image: 'https://images.unsplash.com/photo-1631549916768-4119c258c7f3?q=80&w=2940&auto=format&fit=crop',
      description: 'High-resolution imaging with exceptional clarity for accurate diagnostics.'
    },
    {
      id: 2,
      name: 'Patient Monitor',
      category: 'Critical Care',
      image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2940&auto=format&fit=crop',
      description: 'Comprehensive patient monitoring with real-time data and alerts.'
    },
    {
      id: 3,
      name: 'Surgical Lights',
      category: 'Operating Room',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2940&auto=format&fit=crop',
      description: 'Advanced LED surgical lighting for optimal visibility during procedures.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Advancing Healthcare Through <span className="highlight">Innovation</span>
            </h1>
            <p className="hero-subtitle">
              Your trusted partner in providing high-quality medical equipment and solutions to healthcare professionals worldwide.
            </p>
            <div className="hero-cta">
              <Link to="/products" className="btn btn-primary">
                Explore Products <FiArrowRight className="icon" />
              </Link>
              <a href="#contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-cards">
              {[1, 2, 3].map((item) => (
                <div key={item} className={`floating-card card-${item}`}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose SorrshaMedical</h2>
            <p>Delivering excellence in medical equipment and healthcare solutions</p>
          </div>
          <div className="features-grid">
            {featuredCategories.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Discover our latest and most popular medical equipment</p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
                  <span className="product-category">{product.category}</span>
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link to={`/products#${product.id}`} className="product-link">
                    Learn More <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Enhance Your Healthcare Facility?</h2>
            <p>Contact our team of experts to find the perfect medical solutions for your needs.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-light">
                Get a Quote
              </Link>
              <a href="tel:+18886896277" className="btn btn-outline-light">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
