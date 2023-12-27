import './App.css';

import { Navbar, Header, About, Features, Download, Subscribe, Eligibility, Footer } from './components';

function App() {

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
        </main>
    )
}

export default App;
