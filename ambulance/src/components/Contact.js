import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <div>
      <div className="container">
        <div className="contact-heading">
            <h2>Contact Us</h2>
            <p>Any Queries? We are at your service</p>
        </div>

        <div className="contact-info">
            <div>
                {/* <img src="https://img.icons8.com/fluency/48/000000/home.png" alt="Home"/>
                <span>45 Green Park, New Delhi, Delhi 110016, India</span> */}
            </div>
            <div>
                <img src="https://img.icons8.com/fluency/48/000000/email.png" alt="Email"/>
                <span>ambulancebooking@gmail.com</span>
            </div>
            <div>
                <img src="https://img.icons8.com/fluency/48/000000/phone.png" alt="Phone"/>
                <span>9935567490</span>
            </div>
            
        </div>

        <div className="row justify-content-center">
            <div className="col-lg-8">
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" required/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
                    </div>
                    <div className="mb-3">
                        <label for="subject" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="subject" placeholder="Enter subject" required/>
                    </div>
                    <div className="mb-3">
                        <label for="message" className="form-label">Message/Query</label>
                        <textarea className="form-control" id="message" rows="5" placeholder="Enter your message or Query" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-custom w-100">Send Message</button>
                </form>
            </div>
        </div>
    </div>

    </div>
  )
}
