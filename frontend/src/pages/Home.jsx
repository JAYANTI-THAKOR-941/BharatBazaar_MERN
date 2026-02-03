import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const categories = [
        {
            id: 1,
            name: 'Traditional Wear',
            icon: '👘',
            description: 'Ethnic clothing & accessories',
            color: '#FF6B35'
        },
        {
            id: 2,
            name: 'Handicrafts',
            icon: '🎨',
            description: 'Handmade artisan products',
            color: '#FFB703'
        },
        {
            id: 3,
            name: 'Spices & Food',
            icon: '🌶️',
            description: 'Authentic Indian flavors',
            color: '#06A77D'
        },
        {
            id: 4,
            name: 'Jewelry',
            icon: '💎',
            description: 'Traditional ornaments',
            color: '#7209B7'
        },
        {
            id: 5,
            name: 'Home Decor',
            icon: '🏮',
            description: 'Beautiful decorative items',
            color: '#E63946'
        },
        {
            id: 6,
            name: 'Ayurveda',
            icon: '🌿',
            description: 'Natural wellness products',
            color: '#06A77D'
        }
    ];

    const featuredProducts = [
        {
            id: 1,
            name: 'Silk Saree',
            price: '₹4,999',
            image: '👗',
            rating: 4.8,
            reviews: 234
        },
        {
            id: 2,
            name: 'Brass Diya Set',
            price: '₹899',
            image: '🪔',
            rating: 4.9,
            reviews: 156
        },
        {
            id: 3,
            name: 'Spice Collection',
            price: '₹599',
            image: '🌶️',
            rating: 4.7,
            reviews: 189
        },
        {
            id: 4,
            name: 'Kundan Necklace',
            price: '₹2,499',
            image: '📿',
            rating: 4.9,
            reviews: 298
        }
    ];

    const features = [
        {
            icon: '🚚',
            title: 'Free Shipping',
            description: 'On orders above ₹999'
        },
        {
            icon: '🔒',
            title: 'Secure Payment',
            description: '100% secure transactions'
        },
        {
            icon: '↩️',
            title: 'Easy Returns',
            description: '7-day return policy'
        },
        {
            icon: '💬',
            title: '24/7 Support',
            description: 'Dedicated customer service'
        }
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-pattern"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <span className="hero-badge">Welcome to Bharat Bazaar</span>
                            <h1 className="hero-title">
                                Discover the
                                <span className="text-gradient"> Vibrant Colors</span>
                                <br />
                                of India
                            </h1>
                            <p className="hero-description">
                                Explore authentic Indian products from traditional wear to handcrafted treasures.
                                Experience the rich heritage and culture of India, delivered right to your doorstep.
                            </p>
                            <div className="hero-actions">
                                <Link to="/products" className="btn btn-primary">
                                    Shop Now
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link to="/about" className="btn btn-outline">
                                    Learn More
                                </Link>
                            </div>
                            <div className="hero-stats">
                                <div className="stat">
                                    <span className="stat-number">10K+</span>
                                    <span className="stat-label">Products</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">50K+</span>
                                    <span className="stat-label">Happy Customers</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">4.9</span>
                                    <span className="stat-label">Rating</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-image">
                            <div className="hero-card">
                                <div className="hero-card-icon">🛍️</div>
                                <h3>Premium Quality</h3>
                                <p>Handpicked products from trusted artisans</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="section categories-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Shop by Category</h2>
                        <p className="section-subtitle">Explore our diverse collection of authentic Indian products</p>
                    </div>
                    <div className="categories-grid">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                to="/products"
                                className="category-card"
                                style={{ '--category-color': category.color }}
                            >
                                <div className="category-icon">{category.icon}</div>
                                <h3 className="category-name">{category.name}</h3>
                                <p className="category-description">{category.description}</p>
                                <span className="category-arrow">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section section-dark featured-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Products</h2>
                        <p className="section-subtitle">Handpicked bestsellers just for you</p>
                    </div>
                    <div className="products-grid">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="product-image">
                                    <span className="product-emoji">{product.image}</span>
                                    <button className="product-wishlist">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <div className="product-rating">
                                        <span className="rating-stars">⭐ {product.rating}</span>
                                        <span className="rating-reviews">({product.reviews})</span>
                                    </div>
                                    <div className="product-footer">
                                        <span className="product-price">{product.price}</span>
                                        <button className="btn-add-cart">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="9" cy="21" r="1" />
                                                <circle cx="20" cy="21" r="1" />
                                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="section-cta">
                        <Link to="/products" className="btn btn-white">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features-section">
                <div className="container">
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Experience Authentic India?</h2>
                        <p className="cta-description">
                            Join thousands of happy customers and start your journey with Bharat Bazaar today
                        </p>
                        <div className="cta-actions">
                            <Link to="/register" className="btn btn-primary btn-lg">
                                Get Started
                            </Link>
                            <Link to="/contact" className="btn btn-outline btn-lg">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
