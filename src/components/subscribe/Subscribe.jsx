import './Subscribe.css';
import {TiSocialGooglePlus} from 'react-icons/ti';
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
        <section id='subscribe'>
            <div className="container subscribe" data-aos='zoom-in-left'>
                <h2>Subscribe Now!</h2>
                <form action="">
                    <div className="form-control">
                        <input type="text" placeholder='Enter Your Email...' />
                        <button>Subscribe</button>
                    </div>
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