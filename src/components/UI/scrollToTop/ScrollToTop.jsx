import './ScrollToTop.css';
import { FaArrowUp } from "react-icons/fa6";


const ScrollToTop = () => {
    const handleScrollToTop = (e) => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <button className='scroll-to-top-btn' onClick={handleScrollToTop}>
            <FaArrowUp color='white' size={18} />
        </button>
    )
}

export default ScrollToTop;