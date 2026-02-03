import React from 'react';

const About = () => {
    const values = [
        {
            icon: '🎯',
            title: 'Our Mission',
            description: 'To bring the authentic essence of India to every household, preserving traditional craftsmanship while embracing modern convenience.'
        },
        {
            icon: '👁️',
            title: 'Our Vision',
            description: 'To become the world\'s most trusted platform for authentic Indian products, empowering artisans and connecting cultures.'
        },
        {
            icon: '💎',
            title: 'Our Values',
            description: 'Authenticity, Quality, Sustainability, and Cultural Preservation guide everything we do at Bharat Bazaar.'
        }
    ];

    const team = [
        { name: 'Rajesh Kumar', role: 'Founder & CEO', image: '👨‍💼' },
        { name: 'Priya Sharma', role: 'Head of Operations', image: '👩‍💼' },
        { name: 'Amit Patel', role: 'Product Manager', image: '👨‍💻' },
        { name: 'Sneha Reddy', role: 'Marketing Director', image: '👩‍💻' }
    ];

    const milestones = [
        { year: '2018', title: 'Founded', description: 'Bharat Bazaar was born with a vision to connect India to the world' },
        { year: '2019', title: '1000+ Products', description: 'Expanded our catalog to over 1000 authentic Indian products' },
        { year: '2020', title: '50K Customers', description: 'Reached 50,000 happy customers across the globe' },
        { year: '2023', title: 'Global Expansion', description: 'Expanded shipping to 25+ countries worldwide' }
    ];

    const stats = [
        { number: '10,000+', label: 'Products' },
        { number: '50,000+', label: 'Happy Customers' },
        { number: '500+', label: 'Artisan Partners' },
        { number: '25+', label: 'Countries Served' }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-background">
                    <div className="about-hero-pattern"></div>
                </div>
                <div className="container">
                    <div className="about-hero-content">
                        <span className="about-badge">About Us</span>
                        <h1 className="about-hero-title">
                            Bringing India's Rich Heritage
                            <span className="text-gradient"> To Your Doorstep</span>
                        </h1>
                        <p className="about-hero-description">
                            Since 2018, Bharat Bazaar has been on a mission to preserve and promote India's
                            rich cultural heritage by connecting authentic artisans with customers worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section story-section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-image">
                            <div className="story-card">
                                <div className="story-icon">🏛️</div>
                                <h3>Our Story</h3>
                                <p>A journey of passion, culture, and authenticity</p>
                            </div>
                        </div>
                        <div className="story-text">
                            <h2 className="section-title">The Bharat Bazaar Story</h2>
                            <p className="story-paragraph">
                                Bharat Bazaar was founded in 2018 with a simple yet powerful vision: to create a
                                bridge between India's talented artisans and customers around the world who
                                appreciate authentic, handcrafted products.
                            </p>
                            <p className="story-paragraph">
                                What started as a small collection of handpicked items has grown into a thriving
                                marketplace featuring over 10,000 products from more than 500 artisan partners
                                across India. Each product tells a story of tradition, skill, and cultural heritage.
                            </p>
                            <p className="story-paragraph">
                                We believe in fair trade, sustainable practices, and preserving traditional
                                craftsmanship for future generations. Every purchase you make supports local
                                artisans and helps keep ancient traditions alive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section section-dark values-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-subtitle">The principles that guide everything we do</p>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section timeline-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Journey</h2>
                        <p className="section-subtitle">Milestones that shaped Bharat Bazaar</p>
                    </div>
                    <div className="timeline">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <span className="timeline-year">{milestone.year}</span>
                                    <h3 className="timeline-title">{milestone.title}</h3>
                                    <p className="timeline-description">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section team-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Meet Our Team</h2>
                        <p className="section-subtitle">The passionate people behind Bharat Bazaar</p>
                    </div>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="team-image">
                                    <span className="team-emoji">{member.image}</span>
                                </div>
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                                <div className="team-social">
                                    <a href="#" className="team-social-link">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
                <div className="container">
                    <div className="about-cta-content">
                        <h2 className="about-cta-title">Join Our Journey</h2>
                        <p className="about-cta-description">
                            Be part of our mission to preserve India's cultural heritage and support local artisans
                        </p>
                        <div className="about-cta-actions">
                            <a href="/products" className="btn btn-primary">
                                Explore Products
                            </a>
                            <a href="/contact" className="btn btn-white">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
