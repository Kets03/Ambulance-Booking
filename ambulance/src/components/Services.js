import React from 'react'
import './services.css'

export default function Services() {
  return (
    <div>
      <div className="container my-5">
        <h1 className="text-center mb-4">Our Services</h1>

        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <img src="https://img.icons8.com/ios/100/000000/ambulance.png" alt="Advance Life Support (ALS)"/>
                    <h5 className="card-title">Advance Life Support (ALS)</h5>
                    <p className="card-text">Our ALS ambulances are equipped with advanced medical equipment and staffed by highly trained paramedics to handle critical emergencies and provide comprehensive care during transportation.</p>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <img src="https://img.icons8.com/ios/100/000000/ambulance.png" alt="Basic Life Support (BLS)"/>
                    <h5 className="card-title">Basic Life Support (BLS)</h5>
                    <p className="card-text">BLS ambulances offer essential care and transportation for patients who require non-invasive support. Our BLS services are ideal for non-critical situations that still demand professional medical attention.</p>
                </div>
            </div>


            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <img src="https://img.icons8.com/ios/100/000000/ambulance.png" alt="Patient Transport"/>
                    <h5 className="card-title">Patient Transport</h5>
                    <p className="card-text">We provide safe and comfortable transportation for patients who need to travel between healthcare facilities or to and from home. Our patient transport services ensure a smooth journey with compassionate care.</p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <img src="https://img.icons8.com/ios/100/000000/chat.png" alt="Real Time Chat"/>
                    <h5 className="card-title">Real Time Chat</h5>
                    <p className="card-text">Connect instantly with our support team via our real-time chat feature. Get immediate assistance, ask questions, and stay informed about your ambulance's status and location.</p>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <img src="https://img.icons8.com/ios/100/000000/globe.png" alt="Service Area Coverage"/>
                    <h5 className="card-title">Service Area Coverage</h5>
                    <p className="card-text">Our service area covers a wide range of locations, ensuring that no matter where you are, emergency medical services are just a call away. Check our coverage map for more details.</p>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <img src="https://img.icons8.com/ios/100/000000/sos.png" alt="SOS Button"/>
                    <h5 className="card-title">SOS Button</h5>
                    <p className="card-text">In case of an emergency, press the SOS button for immediate assistance. Our system will prioritize your request and dispatch the nearest available ambulance to your location without delay.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
