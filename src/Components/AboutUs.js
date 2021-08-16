import React from 'react'
// import Image from "../images/aboutUs.jpg"
import "./AboutUs.css";

function AboutUs() {
    return (
        <div className="about__us">
          <div className="left__part">
            <p>
                Do you have any comments or questions? Our team will be happy to assist you. Send us a message.
            </p>

            <h2 className="email text-large">
                support@pepcoding.com
            </h2>

            <p className="happy-to-help">
                We are here to answer any questions regarding our resume generator, do not hesitate to contact us for
                any reason. We will respond in less than 24 hours from receipt of the email. Thanks for trusting us
            </p>
          </div>
          <div className="right__part">
         <img className="aboutUs__image" src="/images/aboutus.jpg" />

          </div>
        </div>
    )
}

export default AboutUs
