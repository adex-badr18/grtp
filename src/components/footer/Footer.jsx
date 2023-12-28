import './Footer.css';
import logo from '../../assets/images/logo.png';
import { navLinks, footerServices, contactInfo } from '../../constants';

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
                        {
                            navLinks.map(link => (
                                <a key={link.id} href={`#${link.id}`}>&bull; {link.name}</a>
                            ))
                        }
                    </div>
                </div>
                <div className="footer-box">
                    <h4>Our Services</h4>
                    <div className="footer-links">
                        {
                            footerServices.map(service => (
                                <a key={service.id} href="#">&bull; {service.name}</a>
                            ))
                        }
                    </div>
                </div>

                <div className="footer-box">
                    <h4>Contact Us</h4>
                    <div className="footer-contact">
                        {
                            contactInfo.map(contact => (
                                <p key={contact.id} className='u-text-small u-text-light'>
                                    {contact.icon}
                                    <span>{contact.info}</span>
                                </p>
                            ))
                        }
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