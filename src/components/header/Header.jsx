// import phoneHeader from '/images/phone-header-bg.png';
import phoneHeader from '../../assets/images/phone-header-bg.png';
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
                        <span>The World's Leading</span>
                        <span>Cross-platform Secure</span>
                        <span>Messaging System</span>
                    </h1>

                    <p className='u-text-small u-text-light'>
                        SocialX is a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="header-cta">
                        <Button text='Get Started' btnClass='btn-dark' href='#faq' />
                        <Button text='How it Works' btnClass='btn-orange' href='#faq' />
                    </div>
                </div>

                <div className="header-right" data-aos='fade-left'>
                    <img src={phoneHeader} alt="Phone" />
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