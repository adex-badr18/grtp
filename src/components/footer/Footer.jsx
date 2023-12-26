import './Footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe } from 'react-icons/fa';
// import logo from '/images/logo.png';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container footer">
                <div className="footer-box">
                    <h4>Useful Links</h4>
                    <div className="footer-links">
                        <a href="#">&bull; Support</a>
                        <a href="#">&bull; About</a>
                        <a href="#">&bull; Learn</a>
                        <a href="#">&bull; Hosting</a>
                        <a href="#">&bull; Messenger</a>
                    </div>
                </div>
                <div className="footer-box">
                <h4>Support</h4>
                    <div className="footer-links">
                        <a href="#">&bull; Support</a>
                        <a href="#">&bull; About</a>
                        <a href="#">&bull; Learn</a>
                        <a href="#">&bull; Hosting</a>
                        <a href="#">&bull; Messenger</a>
                    </div>
                </div>
                <div className="footer-box">
                    <h4>Contact Us</h4>
                    <div className="footer-contact">
                        <p className='u-text-small u-text-light'>
                            <FaMapMarkerAlt /> &#160; Address: United States. 
                        </p>
                        <p className='u-text-small u-text-light'>
                            <FaPhoneAlt /> &#160; Phone: +234 806 484 4004  
                        </p>
                        <p className='u-text-small u-text-light'>
                            <FaFax /> &#160; Fax: +1234567890
                        </p>
                        <p className='u-text-small u-text-light'>
                            <FaEnvelope /> &#160; Email: info@socialx.com
                        </p>
                        <p className='u-text-small u-text-light'>
                            <FaGlobe /> &#160; website: www.socialx.com 
                        </p>
                    </div>
                </div>
                <div className="footer-box">
                    <img src={logo} alt="SocialX logo" />
                    <p className="u-text-small">
                        &copy; Copyright {new Date().getFullYear()}. SocialX.com
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;