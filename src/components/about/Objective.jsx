import { BsHexagon } from "react-icons/bs";
import './Objective.css';

const Objective = ({ icon, heading, text }) => {
    return (
        <div className="objective">
            <div className="objective-icon">
                <BsHexagon color="orangered" size={55} />
                <div className="inner-icon">{icon}</div>
            </div>

            <div className="objective-text">
                <h3>{heading}</h3>
                <p className="u-text-small u-text-dark">{text}</p>
            </div>
        </div>
    )
}

export default Objective;