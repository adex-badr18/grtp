import './Subscribe.css';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { LuMailQuestion } from "react-icons/lu";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useRef } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {
    const form = useRef();
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then(function (response) {
                if (response.status === 200) {
                    console.log('SUCCESS!', response.status, response.text);

                    toast.success(`Message Sent!`, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000,
                    });

                    form.current.reset();
                }
            }, function (error) {
                console.log('FAILED...', error);
                toast.error(`Error sending message!`, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });
            });
    }

    return (
        <section id='contact'>
            <ToastContainer bodyClassName='toastBody' />
            <div className="container subscribe" data-aos='zoom-in-left'>
                <div className="u-title">
                    <LuMailQuestion color="#fa43fa" size={30} />
                    <h2>Contact Us</h2>
                    <p className="u-text-small">Have questions or need assistance? Our dedicated team is here to help. Fill the form below to send us a message.</p>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-row">
                        <div className="form-input">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id='fullName' name='name' placeholder='Full Name' required />
                        </div>
                        <div className="form-input">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' name='email' placeholder='Email' required />
                        </div>
                    </div>

                    <div className="form-input">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id='subject' name='subject' placeholder='Subject' />
                    </div>

                    <div className="form-input">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="5" placeholder='Compose your message...' required></textarea>
                    </div>

                    <button type='submit'>Submit</button>
                </form>

                {/* <div className="social-icons">
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
                </div> */}
            </div>
        </section>
    )
}

export default Subscribe;