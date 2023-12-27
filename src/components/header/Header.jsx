import hero from '../../assets/images/hero-img.png';
import './Header.css';
import Button from '../UI/button/Button';
import '../UI/button/Button.css';
import { BsMouse } from "react-icons/bs";
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    return (
        <section id="header">
            <div className="container header">
                <div className="header-left" data-aos='fade-right'>
                    <h1>
                        <span>Your Gateway to</span>
                        <span>Financial Freedom with</span>
                        <span>Ethical Practices</span>
                    </h1>

                    <p className='u-text-small u-text-light'>
                    Join a cooperative society where each member contributes to a tapestry of mutual growth, elevating lives through interest-free savings, credit, and unwavering community support.
                    </p>

                    <div className="header-cta">
                        <Button text='How it Works' btnClass='btn-orange' href='#faq' />
                    </div>
                </div>

                <div className="header-right" data-aos='fade-left'>
                    <img src={hero} alt="Business man making presentation" />
                </div>
            </div>

            <div className="floating-icon">
                <a href="#features">
                    <BsMouse color='#FFFFFF' size={25} className='mouse' />
                </a>
            </div>
        </section>
    )
}

export default Header;