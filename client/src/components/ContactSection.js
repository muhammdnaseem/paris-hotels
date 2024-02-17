// ContactSection.js
import React from 'react';
import InputField from './InputField';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    // For example, you can fetch data or handle form submission using Axios or other methods
  };

  return (
    <section id="contact" className="contact">
      {/* ... */}
      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <div className="col-lg-4">
            {/* ... */}
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <InputField
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <InputField
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <InputField
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="8"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                {/* ... */}
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
