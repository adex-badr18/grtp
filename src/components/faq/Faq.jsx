import './Faq.css';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import Question from './Question';
import { questions } from './data';

import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    return (
        <section id="faq">
            <div className="container faq">
                <div className="u-title" data-aos='zoom-in-down'>
                    <MdOutlineLibraryBooks color="orangered" size={30} />
                    <h2>FAQS</h2>
                    <p className="u-text-small u-text-dark">
                        SocialX Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium doloremque laudantium.
                    </p>
                </div>

                <div className="questions">
                    {
                        questions.map(question => (
                            <Question key={question.id} title={question.title} answer={question.answer} animation={question.animation} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Faq;