import './Navbar.css';
import { useState } from 'react';
import { SiAnaconda } from "react-icons/si";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Button from '../UI/button/Button';
import '../UI/button/Button.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(prev => !prev);
    }

    return (
        <nav className='navbar container'>
            <div className="logo">
                <SiAnaconda color='#FFFFFF' size={30} />
                <p className="logo-text">
                    GRT-<span>Pristine</span>
                </p>
            </div>

            <menu>
                <ul className="nav-links" id={showMenu ? 'nav-links-mobile' : 'nav-links-mobile-hide'}>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#download">Download</a></li>
                    <li><a href="#subscribe">Subscribe</a></li>
                    <li className='nav-btn'>
                        {/* <a href="#" className='btn btn-dark'>Get Started</a> */}
                        <Button text='Get Started' btnClass='btn-dark' href='#faq' />
                    </li>
                </ul>
            </menu>

            <div className="menu-icons" onClick={toggleMenu}>
                {
                    showMenu ?
                        <RiCloseLine color='#FFFFFF' size={30} /> : <AiOutlineBars color='#FFFFFF' size={30} />
                }
            </div>
        </nav>
    )
}

export default Navbar;