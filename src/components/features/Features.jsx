import { BsBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from '/images/phone-features.png';
import './Features.css';
import Feature from "./Feature";
import { featureList } from "./data";
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
        <section id="features">
            <div className="container features">
                <div className="u-title" data-aos='fade-down'>
                    <BsBookmarkStarFill color="orangered" size={30} />
                    <h2>Core Features</h2>
                    <p className="u-text-small u-text-dark">
                        SocialX Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium doloremque laudantium.
                    </p>
                </div>

                <div className="features-content">
                    <div className="features-left" data-aos='fade-right'>
                        <img src={phoneFeatures} alt="phone" />
                    </div>

                    <div className="features-right" data-aos='fade-left'>
                        {
                            featureList.map((feature) => (
                                <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;