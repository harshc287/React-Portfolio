import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h6 className="text-gradient-primary mb-2">GET IN TOUCH</h6>
            <h1 className="display-4 fw-bold mb-3">
              Let's <span className="text-gradient">Work Together</span>
            </h1>
            <p className="lead text-muted">
              Have a project in mind? Let's discuss how we can create something amazing together. 
              I'm always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="card border-0 shadow-lg p-4 p-md-5">
            <form onSubmit={handleSubmit}>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label fw-medium mb-2">
                      <FontAwesomeIcon icon={faUser} className="me-2" />
                      Your Name
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
                      Email Address
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
                      <FontAwesomeIcon icon={faComment} className="me-2" />
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      rows="6"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="col-12 text-center mt-4">
                  <button
                    type="submit"
                    className="btn-gradient px-5 py-3"
                    disabled={isSubmitting}
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="row g-4 mt-5">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-4 text-center hover-lift">
                <div className="icon-wrapper bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary fs-4" />
                </div>
                <h5 className="fw-bold">Email</h5>
                <p className="text-muted mb-0">harsh@example.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-4 text-center hover-lift">
                <div className="icon-wrapper bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                  <FontAwesomeIcon icon={faUser} className="text-success fs-4" />
                </div>
                <h5 className="fw-bold">Location</h5>
                <p className="text-muted mb-0">Pune, Maharashtra</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-4 text-center hover-lift">
                <div className="icon-wrapper bg-warning bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                  <FontAwesomeIcon icon={faComment} className="text-warning fs-4" />
                </div>
                <h5 className="fw-bold">Response Time</h5>
                <p className="text-muted mb-0">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;