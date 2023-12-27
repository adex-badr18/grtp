import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import './Download.css';

import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Download = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    return (
        <section id="download">
            <div className="container download" data-aos='zoom-in-right'>
                <h2>SOCIALX MESSENGER DOWNLOAD</h2>
                <p className="u-text-small u-text-light">
                    Our apps are available for download on all stores.
                </p>

                <IconContext.Provider value={{ size: '15' }}>
                    <div className="download-icons">
                        <div className="download-icon">
                            <FaApple />
                            <p>iOS</p>
                        </div>
                        <div className="download-icon">
                            <GrAndroid />
                            <p>Android</p>
                        </div>
                        <div className="download-icon">
                            <FaWindows />
                            <p>Windows</p>
                        </div>
                    </div>
                </IconContext.Provider>
            </div>
        </section>
    )
}

export default Download;