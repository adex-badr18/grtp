import './Criterion.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Criterion = ({title, details, animation}) => {
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    function handleClick() {
        setShowDetails(!showDetails);
    }

    return (
        <div className='criterion' data-aos={animation}>
            <div className="criterion-title">
                <h4>{title}</h4>
                <button className="criterion-icon" onClick={handleClick}>
                    {
                        showDetails ? 
                        <AiOutlineMinus color='red' /> :
                        <AiOutlinePlus color='#1F93FF' />
                    }
                </button>
            </div>

            <div className="criterion-details">
                {
                    showDetails &&
                    <p className="u-text-small u-text-light">{details}</p>
                }
            </div>
        </div>
    )
}

export default Criterion;