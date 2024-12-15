// src/HealthWebsite.js
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Calendar, ArrowRight, ChevronDown } from 'lucide-react';
import Card from './components/ui/card/Card';
import Button from './components/ui/button/Button';
import heroBackground from './assets/hero-background.jpg';

// Modal component
const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;
  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button style={styles.modalCloseButton} onClick={onClose}>Close</button>
        {content}
      </div>
    </div>
  );
};

const HealthWebsite = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [hoveredNavLink, setHoveredNavLink] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredLearnMore, setHoveredLearnMore] = useState(null);
  const [hoveredContactLink, setHoveredContactLink] = useState(null);
  const [isContactButtonHovered, setIsContactButtonHovered] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const cliniciansSection = document.querySelector('#clinicians-section');
      if (cliniciansSection) {
        const rect = cliniciansSection.getBoundingClientRect();
        setShowScrollIndicator(rect.top > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTeam = () => {
    const cliniciansSection = document.querySelector('#clinicians-section');
    if (cliniciansSection) {
      cliniciansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              Experience exceptional care at our state-of-the-art clinic,
              where modern & holistic science meets personalized wellness.
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
              <div style={styles.appointmentInfo}>
                <span style={styles.heroHomeVisit}>🏠 Home visits available across Grand Cayman</span>
              </div>
            </div>
          </div>
          <div
            style={{
              ...styles.scrollIndicator,
              opacity: showScrollIndicator ? 1 : 0,
              pointerEvents: showScrollIndicator ? 'auto' : 'none',
            }}
            onClick={scrollToTeam}
          >
            <ChevronDown style={styles.scrollArrow} />
            <span style={styles.scrollText}>Meet Our Team</span>
          </div>
        </div>
      </section>

      {/* Clinicians Section */}
      <section id="clinicians-section" style={styles.cliniciansSection}>
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
              onClick={() => openModal(
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p>Additional details about {service.title}...</p>
                </div>
              )}
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.1234567890123!2d-81.38666655!3d19.3429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f258910b7367a83%3A0x4347d823929f0544!2sIsland+Care+Health!5e0!3m2!1sen!2sus!4v1701893547372!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>
        <div style={styles.locationAddress}>
          <p>Island Care Health</p>
          <p>Countryside Shopping Village</p>
          <p>33 Hirst Rd, Savannah KY1-1506</p>
          <p>Cayman Islands</p>
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

      {/* Modal for service details */}
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
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
    borderBottom: '1px solid #e2e8f0',
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
    fontWeight: 'normal',
    fontSize: '1.5rem',
    letterSpacing: '0.05em',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  navLink: {
    fontSize: '1rem',
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
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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
    fontSize: '3.5rem',
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
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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
    animation: 'bounce 2s infinite',
  },
  scrollArrow: {
    color: '#e53e3e',
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
    padding: '3rem 1.5rem',
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
    fontSize: '2.5rem',
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
    padding: '2rem 1rem',
    backgroundColor: '#ffffff',
  },
  servicesHeader: {
    textAlign: 'center',
    marginBottom: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  servicesTitle: {
    fontSize: '2.5rem',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#f0f0f0',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    width: '100%',
    height: 'auto',
    minHeight: '180px',
    maxWidth: '100%',
    boxSizing: 'border-box',
    position: 'relative',
  },
  serviceCardHover: {
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-5px)',
    borderColor: '#e53e3e',
    height: 'auto',
  },
  serviceCardExpanded: {
    transform: 'scale(1.1)',
    transition: 'transform 0.5s ease',
    zIndex: 1,
  },
  serviceIcon: {
    fontSize: '1.75rem',
    marginBottom: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '35px',
    width: '35px',
  },
  serviceTitle: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#1a202c',
    marginBottom: '0.25rem',
    width: '100%',
  },
  serviceDescription: {
    fontSize: '0.875rem',
    color: '#718096',
    lineHeight: '1.4',
    marginBottom: '0.75rem',
    width: '100%',
    flex: '1 1 auto',
    opacity: 1,
  },
  serviceLearnMore: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    color: '#718096',
    transition: 'all 0.3s ease',
    gap: '0.25rem',
    marginTop: '0.5rem',
    width: 'auto',
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
    padding: '4rem 1.5rem',
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
    fontSize: '2.5rem',
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
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    height: '500px',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative'
  },
  locationMap: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  locationAddress: {
    textAlign: 'center',
    marginTop: '2rem',
    color: '#4A5568',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    padding: '1rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  contactSection: {
    padding: '3rem 1rem',
    backgroundColor: '#f9fafb',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  contactHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  contactTitle: {
    fontSize: '2.25rem',
    fontWeight: '500',
    color: '#1a202c',
    marginBottom: '0.5rem',
  },
  contactSubtitle: {
    fontSize: '1.1rem',
    color: '#4A5568',
    maxWidth: '500px',
    margin: '0 auto',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  contactInput: {
    width: '100%',
    maxWidth: '400px',
    padding: '1rem',
    backgroundColor: '#f9fafb',
    border: '1px solid #e2e8f0',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    textAlign: 'center',
    transition: 'outline 0.2s ease',
  },
  contactTextarea: {
    width: '100%',
    maxWidth: '400px',
    padding: '1rem',
    backgroundColor: '#f9fafb',
    border: '1px solid #e2e8f0',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    textAlign: 'center',
    resize: 'vertical',
    minHeight: '120px',
    transition: 'outline 0.2s ease',
  },
  contactButton: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#e53e3e',
    color: '#ffffff',
    padding: '1rem',
    borderRadius: '0.5rem',
    fontSize: '1.125rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    border: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  contactInfo: {
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  contactLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4A5568',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontSize: '1.1rem',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    borderRadius: '0.75rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
  },
  contactLinkHover: {
    color: '#e53e3e',
  },
  contactIcon: {
    width: '1.25rem',
    height: '1.25rem',
    marginRight: '0.75rem',
  },
  appointmentInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    alignItems: 'center',
  },
  heroHomeVisit: {
    fontSize: '1rem',
    color: 'black',
    letterSpacing: '0.05em',
    fontStyle: 'italic',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
    position: 'relative',
  },
  modalCloseButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer',
  },
};

export default HealthWebsite;
