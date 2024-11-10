// src/HealthWebsite.js
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Calendar, ArrowRight, ChevronDown } from 'lucide-react';
import Card from './components/ui/card/Card';
import Button from './components/ui/button/Button';
import heroBackground from './assets/hero-background.jpg';




const HealthWebsite = () => {


const [showScrollIndicator, setShowScrollIndicator] = useState(true);



  const clinicians = [
    {
      name: "Dr. Sarah Johnson",
      title: "Lead Physical Therapist",
      description: "Specializing in neurological rehabilitation and sports medicine with over 10 years of experience.",
      credentials: "DPT, OCS, CSCS"
    },
    {
      name: "Dr. Michael Chen",
      title: "Senior Physical Therapist",
      description: "Expert in manual therapy and corrective exercise, focusing on long-term rehabilitation solutions.",
      credentials: "DPT, CMPT, FMS"
    }
  ];



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
                e.currentTarget.style.backgroundColor = '#c53030';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#e53e3e';
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
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroTextBubble}>
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
          <div style={styles.scrollIndicator}>
            <ChevronDown 
              size={40}
              style={styles.scrollArrow}
            />
            <span style={styles.scrollText}>Meet Our Team</span>
          </div>
        </div>
      </section>

      {/* New Clinicians Section */}
      <section style={styles.cliniciansSection}>
        <div style={styles.cliniciansHeader}>
          <h2 style={styles.cliniciansTitle}>Our Expert Clinicians</h2>
          <p style={styles.cliniciansSubtitle}>
            Dedicated professionals committed to your recovery and well-being
          </p>
        </div>

        <div style={styles.cliniciansGrid}>
          {clinicians.map((clinician, index) => (
            <div key={index} style={styles.clinicianCard}>
              <div style={styles.clinicianImageContainer}>
                <img
                  src={`/api/placeholder/300/300`}
                  alt={clinician.name}
                  style={styles.clinicianImage}
                />
              </div>
              <div style={styles.clinicianInfo}>
                <h3 style={styles.clinicianName}>{clinician.name}</h3>
                <p style={styles.clinicianCredentials}>{clinician.credentials}</p>
                <h4 style={styles.clinicianTitle}>{clinician.title}</h4>
                <p style={styles.clinicianDescription}>{clinician.description}</p>
              </div>
            </div>
          ))}
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
              e.target.style.outline = '2px solid #e53e3e';
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
              e.target.style.outline = '2px solid #e53e3e';
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
              e.target.style.outline = '2px solid #e53e3e';
            }}
            onBlur={(e) => {
              e.target.style.outline = 'none';
            }}
          />
          <Button
            style={{
              ...styles.contactButton,
              backgroundColor: isContactButtonHovered ? '#c53030' : '#e53e3e',
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
  heroButtonIcon: {
    marginRight: '0.5rem',
    width: '1.25rem',
    height: '1.25rem',
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
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.5,
    zIndex: 0,
  },
  heroContent: {
    maxWidth: '768px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    justifyContent: 'center',
  },
  heroTextBubble: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    display: 'inline-block',
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
    color: '#2d3748',
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
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
  },
  heroAppointment: {
    fontSize: '0.875rem',
    color: '#a0aec0',
    letterSpacing: '0.05em',
  },
  scrollIndicator: {
    position: 'fixed',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'opacity 0.3s ease',
  },
  scrollArrow: {
    color: '#e53e3e',
    animation: 'bounce 2s infinite',
    width: '40px',
    height: '40px',
},
scrollText: {
  color: '#4A5568',
  fontSize: '0.875rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
},
  cliniciansSection: {
    padding: '8rem 1.5rem',
    backgroundColor: '#f7fafc',
  },
  cliniciansHeader: {
    textAlign: 'center',
    marginBottom: '5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  cliniciansTitle: {
    fontSize: '2.25rem',
    fontWeight: '300',
    letterSpacing: '-0.025em',
    color: '#1a202c',
    marginBottom: '1rem',
  },
  cliniciansSubtitle: {
    fontSize: '1rem',
    color: '#a0aec0',
    maxWidth: '32rem',
    margin: '0 auto',
  },
  cliniciansGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  clinicianCard: {
    backgroundColor: '#ffffff',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    },
  },
  clinicianImageContainer: {
    width: '100%',
    height: '300px',
    overflow: 'hidden',
  },
  clinicianImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  clinicianInfo: {
    padding: '2rem',
  },
  clinicianName: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#1a202c',
    marginBottom: '0.5rem',
  },
  clinicianCredentials: {
    fontSize: '0.875rem',
    color: '#e53e3e',
    fontWeight: '500',
    marginBottom: '0.5rem',
  },
  clinicianTitle: {
    fontSize: '1rem',
    color: '#4A5568',
    fontWeight: '500',
    marginBottom: '1rem',
  },
  clinicianDescription: {
    fontSize: '0.875rem',
    color: '#718096',
    lineHeight: '1.5',
  },
  servicesSection: {
    padding: '8rem 1.5rem',
    backgroundColor: '#ffffff',
  },
  servicesHeader: {
    textAlign: 'center',
    marginBottom: '5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  servicesTitle: {
    fontSize: '2.25rem',
    fontWeight: '300',
    letterSpacing: '-0.025em',
    color: '#1a202c',
    marginBottom: '1rem',
  },
  servicesSubtitle: {
    fontSize: '1rem',
    color: '#a0aec0',
    maxWidth: '32rem',
    margin: '0 auto',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid transparent',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  serviceCardHover: {
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-5px)',
    borderColor: '#e53e3e',
  },
  serviceIcon: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
  },
  serviceTitle: {
    fontSize: '1.25rem',
    fontWeight: '500',
    color: '#1a202c',
    marginBottom: '1rem',
  },
  serviceDescription: {
    fontSize: '1rem',
    color: '#718096',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  serviceLearnMore: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.875rem',
    color: '#a0aec0',
    transition: 'all 0.3s ease',
    gap: '0.5rem',
    marginTop: 'auto',
  },
  serviceLearnMoreHover: {
    color: '#e53e3e',
  },
  serviceArrow: {
    width: '1rem',
    height: '1rem',
    transition: 'transform 0.3s ease',
  },
  serviceArrowHover: {
    transform: 'translateX(5px)',
  },
  locationSection: {
    padding: '8rem 1.5rem',
    backgroundColor: '#f7fafc',
  },
  locationHeader: {
    textAlign: 'center',
    marginBottom: '5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  locationTitle: {
    fontSize: '2.25rem',
    fontWeight: '300',
    letterSpacing: '-0.025em',
    color: '#1a202c',
    marginBottom: '1rem',
  },
  locationSubtitle: {
    fontSize: '1rem',
    color: '#a0aec0',
    maxWidth: '32rem',
    margin: '0 auto',
  },
  locationMapContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
  },
  locationMap: {
    height: '500px',
    backgroundColor: '#f7fafc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationIcon: {
    width: '3rem',
    height: '3rem',
    color: '#cbd5e0',
  },
  contactSection: {
    padding: '8rem 1.5rem',
  },
  contactHeader: {
    textAlign: 'center',
    marginBottom: '5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  contactTitle: {
    fontSize: '2.25rem',
    fontWeight: '300',
    letterSpacing: '-0.025em',
    color: '#1a202c',
    marginBottom: '1rem',
  },
  contactSubtitle: {
    fontSize: '1rem',
    color: '#a0aec0',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  contactInput: {
    width: '100%',
    padding: '1rem 1.5rem',
    backgroundColor: '#f9fafb',
    border: 'none',
    borderRadius: '0.75rem',
    textAlign: 'center',
    transition: 'outline 0.2s ease',
    fontSize: '1rem',
  },
  contactTextarea: {
    width: '100%',
    padding: '1rem 1.5rem',
    backgroundColor: '#f9fafb',
    border: 'none',
    borderRadius: '0.75rem',
    textAlign: 'center',
    resize: 'vertical',
    transition: 'outline 0.2s ease',
    fontSize: '1rem',
  },
  contactButton: {
    width: '100%',
    backgroundColor: '#e53e3e',
    color: '#ffffff',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    fontSize: '1.125rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    border: 'none',
  },
  contactInfo: {
    marginTop: '5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    textAlign: 'center',
  },
  contactLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4A5568',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontSize: '1rem',
  },
  contactLinkHover: {
    color: '#e53e3e',
  },
  contactIcon: {
    width: '1.25rem',
    height: '1.25rem',
    marginRight: '0.75rem',
  },
};


export default HealthWebsite;
