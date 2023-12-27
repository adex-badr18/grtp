import './Eligibility.css';
import { BsPersonCheck } from "react-icons/bs";
import Criterion from './Criterion';
import { criteria } from '../../constants';

import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Eligibility = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    return (
        <section id="eligibility">
            <div className="container eligibility">
                <div className="u-title" data-aos='zoom-in-down'>
                    <BsPersonCheck color="white" size={30} />
                    <h2 className='eligibility-title'>Eligibility</h2>
                    <p className="u-text-small u-text-light">
                        To become a member of GRT-PRISTINE's ethical financial community, you need to meet all the eligibility criteria below.
                    </p>
                </div>

                <div className="criteria">
                    {
                        criteria.map(criterion => (
                            <Criterion key={criterion.id} title={criterion.title} details={criterion.details} animation={criterion.animation} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Eligibility;