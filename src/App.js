import Header from './components/Header/Header';
import Section from './components/Section/Section';
import LoadingIcon from './components/Loading/Loading';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, []);

    return loading ? (
        <LoadingIcon />
    ) : (
        <div className="App">
            <Header />
            <div>
                <img
                    src="https://www.anhtuan.info/static/media/footer.052a5d1163d9b90e7617.png"
                    alt="bg"
                    className="w-full h-[150px]"
                />
            </div>
            <Section />
            <Footer />
        </div>
    );
}

export default App;
