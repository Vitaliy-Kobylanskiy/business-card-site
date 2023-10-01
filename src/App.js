import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Layout from './components/Layout/Layout';
import cl from './App.module.scss';

function App() {
    return (
        <div className={cl.app}>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='aboutMe' element={<AboutMe />} />
                    <Route path='portfolio' element={<Portfolio />} />
                    <Route path='contact' element={<Contact />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
