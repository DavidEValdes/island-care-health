// src/HealthWebsite.js
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Calendar, ArrowRight } from 'lucide-react';
import Card from './components/ui/card/Card';
import Button from './components/ui/button/Button';
import heroBackground from './assets/hero-background.jpg';




const HealthWebsite = () => {
  const services = [
    {
      title: "Holistic Physiotherapy",
      description: "Advanced therapeutic techniques combining traditional and modern approaches",
      icon: "🌿"
    },
    {
      title: "Corrective Massage",
      description: "Precision-focused therapeutic massage for optimal recovery",
      icon: "👐"
    },
    {
      title: "Neurological Rehabilitation",
      description: "Specialized care for neurological recovery and enhancement",
      icon: "🧠"
    },
    {
      title: "Home Health Visits",
      description: "Premium healthcare services delivered to your doorstep",
      icon: "🏠"
    },
    {
      title: "Lymphatic Health",
      description: "Advanced bellicon® rebounding therapy",
      icon: "⚖️"
    },
    {
      title: "Spinal Health",
      description: "Innovative redcord® clinic treatments",
      icon: "🔄"
    }
  ];

  // State for hover effects in navigation links
  const [hoveredNavLink, setHoveredNavLink] = useState(null);

  // State for hover effects in service cards
  const [hoveredService, setHoveredService] = useState(null);

  // State for hover effects in learn more links
  const [hoveredLearnMore, setHoveredLearnMore] = useState(null);

  // State for hover effects in contact links
  const [hoveredContactLink, setHoveredContactLink] = useState(null);

  // State for hover effect on contact button
  const [isContactButtonHovered, setIsContactButtonHovered] = useState(false);

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navLeft}>
          <span style={styles.navBrand}>ISLAND CARE</span>
        </div>
        <div style={styles.navRight}>
          <a
            href="tel:1-345-925-6677"
            style={{
              ...styles.navLink,
              ...(hoveredNavLink === 'phone' ? styles.navLinkHover : {}),
            }}
            onMouseEnter={() => setHoveredNavLink('phone')}
            onMouseLeave={() => setHoveredNavLink(null)}
          >
            +1 345 925 6677
          </a>
          <a href="https://wa.me/13459256677" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Button
              style={{
                ...styles.navButton,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#c53030'; // Hover: bg-red-700
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#e53e3e'; // Normal: bg-red-600
              }}
            >
              <Calendar style={styles.heroButtonIcon} />
              Book Now
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
  {/* Overlay for background image */}
  <div style={styles.heroOverlay}></div>
  <div style={styles.heroContent}>
    <h1 style={styles.heroTitle}>
      Modern Healthcare,
      <br />
      <span style={styles.heroTitleHighlight}>Personalized</span> Approach
    </h1>
    <p style={styles.heroParagraph}>
      Experience exceptional care at our boutique physiotherapy studio, 
      where modern science meets personalized wellness.
    </p>
    <div style={styles.heroButtons}>
      <a href="https://wa.me/13459256677" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <Button
          style={{
            ...styles.heroButton,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#c53030';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e53e3e';
          }}
        >
          Book Consultation
        </Button>
      </a>
      <span style={styles.heroAppointment}>
        By appointment only
      </span>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section style={styles.servicesSection}>
        <div style={styles.servicesHeader}>
          <h2 style={styles.servicesTitle}>Our Services</h2>
          <p style={styles.servicesSubtitle}>
            Comprehensive wellness solutions tailored to your unique needs
          </p>
        </div>

        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <Card
              key={index}
              style={{
                ...styles.serviceCard,
                ...(hoveredService === index ? styles.serviceCardHover : {}),
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div style={styles.serviceIcon}>{service.icon}</div>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
              <div
                style={{
                  ...styles.serviceLearnMore,
                  ...(hoveredLearnMore === index ? styles.serviceLearnMoreHover : {}),
                }}
                onMouseEnter={() => setHoveredLearnMore(index)}
                onMouseLeave={() => setHoveredLearnMore(null)}
              >
                <span>Learn more</span>
                <ArrowRight
                  style={{
                    ...styles.serviceArrow,
                    ...(hoveredLearnMore === index ? styles.serviceArrowHover : {}),
                  }}
                />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section style={styles.locationSection}>
        <div style={styles.locationHeader}>
          <h2 style={styles.locationTitle}>Visit Us</h2>
          <p style={styles.locationSubtitle}>
            Located in the heart of Seven Mile Beach
          </p>
        </div>
        <div style={styles.locationMapContainer}>
          <div style={styles.locationMap}>
            <MapPin style={styles.locationIcon} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <div style={styles.contactHeader}>
          <h2 style={styles.contactTitle}>Get in Touch</h2>
          <p style={styles.contactSubtitle}>
            We're here to help with any questions you may have
          </p>
        </div>
        <form style={styles.contactForm}>
          <input
            type="text"
            placeholder="Name"
            style={styles.contactInput}
            onFocus={(e) => {
              e.target.style.outline = '2px solid #e53e3e'; // focus:ring-red-500
            }}
            onBlur={(e) => {
              e.target.style.outline = 'none';
            }}
          />
          <input
            type="email"
            placeholder="Email"
            style={styles.contactInput}
            onFocus={(e) => {
              e.target.style.outline = '2px solid #e53e3e'; // focus:ring-red-500
            }}
            onBlur={(e) => {
              e.target.style.outline = 'none';
            }}
          />
          <textarea
            rows={4}
            placeholder="Message"
            style={styles.contactTextarea}
            onFocus={(e) => {
              e.target.style.outline = '2px solid #e53e3e'; // focus:ring-red-500
            }}
            onBlur={(e) => {
              e.target.style.outline = 'none';
            }}
          />
          <Button
            style={{
              ...styles.contactButton,
              backgroundColor: isContactButtonHovered ? '#c53030' : '#e53e3e', // Toggle between bg-red-700 and bg-red-600
            }}
            onMouseEnter={() => setIsContactButtonHovered(true)}
            onMouseLeave={() => setIsContactButtonHovered(false)}
          >
            Send Message
          </Button>
        </form>

        <div style={styles.contactInfo}>
          <a
            href="tel:1-345-925-6677"
            style={{
              ...styles.contactLink,
              ...(hoveredContactLink === 'phone' ? styles.contactLinkHover : {}),
            }}
            onMouseEnter={() => setHoveredContactLink('phone')}
            onMouseLeave={() => setHoveredContactLink(null)}
          >
            <Phone style={styles.contactIcon} />
            <span>+1 345 925 6677</span>
          </a>
          <a
            href="https://www.islandcare.ky"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.contactLink,
              ...(hoveredContactLink === 'email' ? styles.contactLinkHover : {}),
            }}
            onMouseEnter={() => setHoveredContactLink('email')}
            onMouseLeave={() => setHoveredContactLink(null)}
          >
            <Mail style={styles.contactIcon} />
            <span>www.islandcare.ky</span>
          </a>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif',
  },
  nav: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '50',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(4px)',
    borderBottom: '1px solid #f7fafc',
    padding: '1rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  navBrand: {
    color: '#e53e3e',
    fontWeight: '300',
    fontSize: '1.25rem',
    letterSpacing: '0.05em',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  navLink: {
    fontSize: '0.875rem',
    letterSpacing: '0.05em',
    color: '#4A5568',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  navLinkHover: {
    color: '#e53e3e',
  },
  navButton: {
    backgroundColor: '#e53e3e',
    color: '#ffffff',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '9999px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroSection: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom right, #f9fafb, #ffffff)',
    paddingTop: '5rem',
    textAlign: 'center',
    padding: '5rem 1.5rem',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${heroBackground})`,
    backgroundColor: 'rgba(255, 0, 0, 0.2)', // Temporary color for visibility testing
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.5,
    zIndex: 0,
  },
  heroContent: {
    maxWidth: '768px',
    margin: '0 auto',
    gap: '2rem',
    position: 'relative',
    zIndex: 1, // Ensures content appears above the overlay
  },
  heroTitle: {
    fontSize: '3.75rem',
    fontWeight: '300',
    lineHeight: '1.25',
    letterSpacing: '-0.025em',
    color: '#1a202c',
  },
  heroTitleHighlight: {
    color: '#e53e3e',
  },
  heroParagraph: {
    fontSize: '1.25rem',
    color: '#718096',
    fontWeight: '300',
    letterSpacing: '0.05em',
    marginBottom: '2rem',
  },
  heroButtons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  heroButton: {
    backgroundColor: '#e53e3e',
    color: '#ffffff',
    padding: '1.5rem 2rem',
    fontSize: '1.125rem',
    borderRadius: '9999px',
    transition: 'background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  heroButtonIcon: {
    marginRight: '0.5rem',
    height: '1rem',
    width: '1rem',
  },
  heroAppointment: {
    fontSize: '0.875rem',
    color: '#a0aec0',
    letterSpacing: '0.05em',
  },
  servicesSection: {
    padding: '8rem 1.5rem', // py-32 px-6
    backgroundColor: '#ffffff',
  },
  servicesHeader: {
    textAlign: 'center',
    marginBottom: '5rem', // mb-20
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  servicesTitle: {
    fontSize: '2.25rem', // text-4xl
    fontWeight: '300', // font-light
    letterSpacing: '-0.025em', // tracking-tight
    color: '#1a202c', // text-gray-900
    marginBottom: '1rem',
  },
  servicesSubtitle: {
    fontSize: '1rem',
    color: '#a0aec0', // text-gray-500
    maxWidth: '32rem', // max-w-xl
    margin: '0 auto',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)', // grid-cols-1
    gap: '3rem', // gap-12
  },
  // Note: Inline styles do not support media queries. For responsive design,
  // consider using JavaScript to adjust styles based on window width or using CSS-in-JS libraries.
  serviceCard: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '1rem', // rounded-2xl
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // shadow-md
    border: '1px solid transparent',
    transition: 'box-shadow 0.5s ease, border-color 0.5s ease',
    textAlign: 'center',
    cursor: 'pointer',
  },
  serviceCardHover: {
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.05)',
    borderColor: '#f7fafc',
  },
  serviceIcon: {
    fontSize: '1.875rem', // text-3xl
    marginBottom: '1.5rem', // mb-6
  },
  serviceTitle: {
    fontSize: '1.25rem', // text-xl
    fontWeight: '500', // font-medium
    color: '#1a202c', // text-gray-900
    marginBottom: '1rem', // mb-4
  },
  serviceDescription: {
    fontSize: '1rem', // text-gray-600
    color: '#718096', // text-gray-600
    marginBottom: '1.5rem', // mb-6
    flexGrow: 1,
  },
  serviceLearnMore: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.875rem', // text-sm
    color: '#a0aec0', // text-gray-500
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  },
  serviceLearnMoreHover: {
    color: '#e53e3e', // text-red-600
  },
  serviceArrow: {
    width: '1rem', // w-4
    height: '1rem', // h-4
    marginLeft: '0.5rem', // mr-2
    transition: 'transform 0.3s ease',
  },
  serviceArrowHover: {
    transform: 'translateX(0.25rem)', // translate-x-1
  },
  locationSection: {
    padding: '8rem 1.5rem', // py-32 px-6
    backgroundColor: '#f7fafc', // bg-gray-50
  },
  locationHeader: {
    textAlign: 'center',
    marginBottom: '5rem', // mb-20
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  locationTitle: {
    fontSize: '2.25rem', // text-4xl
    fontWeight: '300', // font-light
    letterSpacing: '-0.025em', // tracking-tight
    color: '#1a202c', // text-gray-900
    marginBottom: '1rem',
  },
  locationSubtitle: {
    fontSize: '1rem',
    color: '#a0aec0', // text-gray-500
    maxWidth: '32rem', // max-w-xl
    margin: '0 auto',
  },
  locationMapContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '1rem', // rounded-2xl
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', // shadow-sm
    overflow: 'hidden',
  },
  locationMap: {
    height: '500px',
    backgroundColor: '#f7fafc', // bg-gray-100
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationIcon: {
    width: '3rem', // w-12
    height: '3rem', // h-12
    color: '#cbd5e0', // text-gray-400
  },
  contactSection: {
    padding: '8rem 1.5rem', // py-32 px-6
  },
  contactHeader: {
    textAlign: 'center',
    marginBottom: '5rem', // mb-20
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  contactTitle: {
    fontSize: '2.25rem', // text-4xl
    fontWeight: '300', // font-light
    letterSpacing: '-0.025em', // tracking-tight
    color: '#1a202c', // text-gray-900
    marginBottom: '1rem',
  },
  contactSubtitle: {
    fontSize: '1rem',
    color: '#a0aec0', // text-gray-500
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem', // space-y-8
  },
  contactInput: {
    width: '100%',
    padding: '1rem 1.5rem', // px-6 py-4
    backgroundColor: '#f9fafb', // bg-gray-50
    border: 'none',
    borderRadius: '0.75rem', // rounded-xl
    textAlign: 'center',
    transition: 'outline 0.2s ease',
    fontSize: '1rem',
  },
  contactTextarea: {
    width: '100%',
    padding: '1rem 1.5rem', // px-6 py-4
    backgroundColor: '#f9fafb', // bg-gray-50
    border: 'none',
    borderRadius: '0.75rem', // rounded-xl
    textAlign: 'center',
    resize: 'vertical',
    transition: 'outline 0.2s ease',
    fontSize: '1rem',
  },
  contactButton: {
    width: '100%',
    backgroundColor: '#e53e3e', // bg-red-600
    color: '#ffffff', // text-white
    padding: '1.5rem', // py-6
    borderRadius: '0.75rem', // rounded-xl
    fontSize: '1.125rem', // text-lg
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    border: 'none',
  },
  contactInfo: {
    marginTop: '5rem', // mt-20
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem', // space-y-6
    textAlign: 'center',
  },
  contactLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4A5568', // text-gray-600
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontSize: '1rem',
  },
  contactLinkHover: {
    color: '#e53e3e', // text-red-600
  },
  contactIcon: {
    width: '1.25rem', // w-5
    height: '1.25rem', // h-5
    marginRight: '0.75rem', // mr-3
  },
};

export default HealthWebsite;
