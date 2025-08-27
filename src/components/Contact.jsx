import React from 'react'
import theme_pattern from "../assets/theme_pattern.svg"
import mail_icon from "../assets/mail_icon.svg"
import location_icon from "../assets/location_icon.svg"
import call_icon from "../assets/call_icon.svg"
import linkdln from "../assets/linkdln.svg"
import "./Contact.css"
function Contact() {
    return (
        <div className='contact' id="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk </h1>
                    <p>i am currently available for any open position</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} />
                           <a href="komaldeshmukh64670@gmail.com" target="_blank" rel="noopener noreferrer">
                                komaldeshmukh64670@gmail.com
                            </a>
                        </div>
                        <div className="contact-detail">
                             {/* <img src={linkdln} /> */}
                            <a href="https://linkedin.com/in/komal-deshmukh-0984b3202" target="_blank" rel="noopener noreferrer">
                                https://linkedin.com/in/komal-deshmukh-0984b3202
                            </a>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Indore (M.P.)</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>9174935969</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter Your Name" name="name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter Your Email" name="email"/>
                    <label htmlFor="">Write Your Message here</label>
                    <textarea type="textarea" rows="8" placeholder="Enter Your Message"/>
                    <button type="submit" className="contact-submit">Submit</button>
                 </form>
            </div>
        </div>
    )
}

export default Contact
