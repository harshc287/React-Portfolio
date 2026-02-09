import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaperPlane, 
  faUser, 
  faEnvelope, 
  faComment, 
  faPhone,
  faMapMarkerAlt,
  faClock,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      value: "chouhanharsh332@gmail.com",
      link: "mailto:chouhanharsh332@gmail.com",
      color: "primary"
    },
    {
      icon: faPhone,
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210",
      color: "success"
    },
    {
      icon: faMapMarkerAlt,
      title: "Location",
      value: "Pune, Maharashtra",
      color: "warning"
    },
    {
      icon: faClock,
      title: "Response Time",
      value: "Within 24 hours",
      color: "info"
    }
  ];

  const socialLinks = [
    {
      icon: faGithub,
      url: "https://github.com/yourusername",
      label: "GitHub",
      color: "#333"
    },
    {
      icon: faLinkedin,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      color: "#0077B5"
    },
    {
      icon: faWhatsapp,
      url: "https://wa.me/919876543210",
      label: "WhatsApp",
      color: "#25D366"
    }
  ];

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5 fade-in">
          <h6 className="text-gradient-primary mb-2">LET'S CONNECT</h6>
          <h1 className="display-4 fw-bold mb-3">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="lead text-white-80 mx-auto" style={{ maxWidth: "600px" }}>
            Have a project in mind? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="glass-card p-4 p-md-5 fade-in-up">
              {isSubmitted ? (
                <div className="text-center py-5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success fs-1 mb-3" />
                  <h3 className="mb-3">Message Sent Successfully!</h3>
                  <p className="text-white-80 mb-4">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button 
                    className="btn-gradient"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label fw-medium mb-2">
                          <FontAwesomeIcon icon={faUser} className="me-2" />
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label fw-medium mb-2">
                          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label fw-medium mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="Project Inquiry"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label fw-medium mb-2">
                          <FontAwesomeIcon icon={faComment} className="me-2" />
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          rows="5"
                          placeholder="Tell me about your project..."
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn-gradient w-100 py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: "100px" }}>
              {/* Contact Info Cards */}
              <div className="row g-4 mb-4">
                {contactInfo.map((info, index) => (
                  <div className="col-12" key={index}>
                    <div className="card border-0 shadow-sm hover-lift p-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className={`icon-wrapper rounded-circle bg-${info.color} bg-opacity-10 p-3`}>
                          <FontAwesomeIcon 
                            icon={info.icon} 
                            className={`text-${info.color} fs-4`}
                          />
                        </div>
                        <div>
                          <h6 className="mb-1">{info.title}</h6>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="text-decoration-none text-white-80"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-white-80 mb-0">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="glass-card p-4">
                <h5 className="mb-4">Connect with me</h5>
                <div className="d-flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon d-flex align-items-center justify-content-center"
                      style={{ 
                        backgroundColor: `${social.color}20`,
                        color: social.color,
                        border: `1px solid ${social.color}40`
                      }}
                      aria-label={social.label}
                    >
                      <FontAwesomeIcon icon={social.icon} className="fs-5" />
                    </a>
                  ))}
                </div>
                
                {/* Availability */}
                <div className="mt-4 pt-4 border-top border-light border-opacity-25">
                  <h6 className="mb-2">Availability</h6>
                  <div className="d-flex align-items-center gap-2">
                    <div className="availability-dot"></div>
                    <span className="text-white-80">Available for freelance projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;