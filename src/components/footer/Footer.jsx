import './Footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe } from 'react-icons/fa';
// import logo from '/images/logo.png';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container footer">
                <div className="footer-box">
                    <div className="footer-brand">
                        <img src={logo} alt="GRTP logo" />
                        <h4>GRT-Pristine</h4>
                        <p className='u-text-small'><span className='motto'>Motto:</span> Help one another in goodness and piety</p>
                    </div>
                </div>

                <div className="footer-box">
                    <h4>Useful Links</h4>
                    <div className="footer-links">
                        <a href="#header">&bull; Home</a>
                        <a href="#about">&bull; About</a>
                        <a href="#eligibility">&bull; Eligibility</a>
                        <a href="#services">&bull; Services</a>
                        <a href="#contact">&bull; Contact</a>
                    </div>
                </div>
                <div className="footer-box">
                    <h4>Our Services</h4>
                    <div className="footer-links">
                        <a href="#">&bull; Target Savings</a>
                        <a href="#">&bull; Consumer Facility</a>
                        <a href="#">&bull; Islamic Financial Products</a>
                        <a href="#">&bull; Monthly Savings</a>
                        <a href="#">&bull; Credit Facility</a>
                    </div>
                </div>

                <div className="footer-box">
                    <h4>Contact Us</h4>
                    <div className="footer-contact">
                        <p className='u-text-small u-text-light'>
                            <FaMapMarkerAlt />
                            <span>73, Rijiyar Zaki Kudu Ibrahim Khalil Street, Gwarzo Road Kano.</span>
                        </p>
                        <p className='u-text-small u-text-light'>
                            <FaPhoneAlt />
                            <span>07032317688 | 08060340986</span>
                        </p>
                        <p className='u-text-small u-text-light'>
                            <FaEnvelope /> 
                            <span>grtpristinemulticoop@gmail.com</span>
                        </p>
                        <p className='u-text-small u-text-light'>
                            <FaGlobe /> 
                            <span>www.grtpristine.com</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p className="u-text-small">
                    &copy; Copyright {new Date().getFullYear()} GRT-PRISTINE. All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer;