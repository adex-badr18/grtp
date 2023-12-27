import './App.css';

import { Navbar, Header, About, Features, Download, Subscribe, Faq, Footer } from './components';

function App() {

    return (
        <main>
            <header className='header-bg'>
                <Navbar />
                <Header />
            </header>
            <About />
            <Features />
            <Download />
            <Subscribe />
            <Faq />
            <Footer />
        </main>
    )
}

export default App;
