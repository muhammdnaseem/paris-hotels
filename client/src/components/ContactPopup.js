// InputField.js
import React from 'react';
import '../css/contact.css';
import InputField from './InputField';


const ContactPopup = ({ type, name, id, placeholder, required }) => {
  return (
    <React.Fragment>
       <div className="container" data-aos="fade-up">
        <div className="row">
          
          <div className="col-lg-12 mt-lg-0">
            <form className="php-email-form">
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
                  rows="3"
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
    </React.Fragment>
  );
};

export default ContactPopup;
