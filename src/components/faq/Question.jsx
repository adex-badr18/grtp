import './Question.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Question = ({title, answer, animation}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    function handleClick() {
        setShowAnswer(!showAnswer);
    }

    return (
        <div className='question' data-aos={animation}>
            <div className="question-title">
                <h4>{title}</h4>
                <button className="question-icon" onClick={handleClick}>
                    {
                        showAnswer ? 
                        <AiOutlineMinus color='red' /> :
                        <AiOutlinePlus color='#1F93FF' />
                    }
                </button>
            </div>

            <div className="question-answer">
                {
                    showAnswer &&
                    <p className="u-text-small u-text-dark">{answer}</p>
                }
            </div>
        </div>
    )
}

export default Question;