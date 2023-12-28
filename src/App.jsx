import './App.css';
import { useEffect, useState } from 'react';

import { Navbar, Header, About, Features, Download, Subscribe, Eligibility, Footer, ScrollToTop } from './components';

function App() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        function handleScrollButtonVisibility() {
            window.scrollY > 300 ? setShowScrollToTop(true) : setShowScrollToTop(false);
        }

        window.addEventListener('scroll', handleScrollButtonVisibility);

        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisibility);
        };
    }, []);

    return (
        <main>
            <header className='header-bg'>
                <Navbar />
                <Header />
            </header>
            <About />
            <Eligibility />
            <Features />
            {/* <Download /> */}
            <Subscribe />
            <Footer />

            {showScrollToTop && <ScrollToTop />}

        </main>
    )
}

export default App;
