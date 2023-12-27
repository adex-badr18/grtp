import { BsBookmarkStarFill } from "react-icons/bs";
import servicesImg from '../../assets/images/services.png';
import './Features.css';
import Feature from "./Feature";
import { featureList } from "../../constants";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    return (
        <section id="services">
            <div className="container features">
                <div className="u-title" data-aos='fade-down'>
                    <BsBookmarkStarFill color="orangered" size={30} />
                    <h2>Core Services</h2>
                    <p className="u-text-small u-text-dark">
                    Discover a suite of tailored services at GRT-PRISTINE designed to elevate your financial experience. From interest-free credit solutions to specialized savings plans.
                    </p>
                </div>

                <div className="features-content">
                    <div className="features-left" data-aos='fade-right'>
                        {
                            featureList.map((feature) => (
                                <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text} />
                            ))
                        }
                    </div>

                    <div className="features-right" data-aos='fade-left'>
                        <img src={servicesImg} alt="services" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;