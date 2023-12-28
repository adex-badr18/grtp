import { BsHexagon } from "react-icons/bs";
import './Feature.css';

const Feature = ({ icon, heading, text }) => {
    return (
        <div className="feature">
            <div className="feature-icon">
                <BsHexagon color="#fa43fa" size={55} />
                <div className="inner-icon">{icon}</div>
            </div>

            <div className="feature-text">
                <h3>{heading}</h3>
                <p className="u-text-small u-text-dark">{text}</p>
            </div>
        </div>
    )
}

export default Feature