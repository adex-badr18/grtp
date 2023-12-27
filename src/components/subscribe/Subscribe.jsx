import './Subscribe.css';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    return (
        <section id='contact'>
            <div className="container subscribe" data-aos='zoom-in-left'>
                <div className="u-title">
                    <h2>Contact Us</h2>
                    <p className="u-text-small">Have questions or need assistance? Our dedicated team is here to help. Fill the form below to send us a message.</p>
                </div>
                <form action="">
                    <div className="form-row">
                        <div className="form-input">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id='fullName' name='fullName' placeholder='Full Name' />
                        </div>
                        <div className="form-input">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' name='email' placeholder='Email' />
                        </div>
                    </div>

                    <div className="form-input">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id='subject' name='subject' placeholder='Subject' />
                    </div>

                    <div className="form-input">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="5" placeholder='Compose your message...'></textarea>
                    </div>

                    <button type='submit'>Submit</button>
                </form>

                <div className="social-icons">
                    <div className="social-icon">
                        <TiSocialGooglePlus />
                    </div>
                    <div className="social-icon">
                        <FaFacebookF />
                    </div>
                    <div className="social-icon">
                        <FaTwitter />
                    </div>
                    <div className="social-icon">
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;