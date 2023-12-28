import { BsInfoSquare } from "react-icons/bs";
import objectivesImg from '../../assets/images/objectives.png';
import './About.css';
import Objective from "./Objective";
import { objectives } from "../../constants";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    return (
        <section id="about">
            <div className="container about">
                <div className="u-title" data-aos='fade-down'>
                    <BsInfoSquare color="#fa43fa" size={30} />
                    <h2>About Us</h2>
                    <p className="u-text-small u-text-dark">
                        Gwarzo Road Teachers' Pristine Multipurpose Cooperative Society Limited (GRT-PRISTINE) is more than a financial institution; it's a commitment to ethical finance tailored to meet the diverse needs of the Muslim Ummah.
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-left" data-aos='fade-right'>
                        <img src={objectivesImg} alt="phone" />
                    </div>

                    <div className="about-right" data-aos='fade-left'>
                        {
                            objectives.map((objective) => (
                                <Objective key={objective.id} icon={objective.icon} heading={objective.heading} text={objective.text} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;