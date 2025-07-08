import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../pages/home';
import ContactPage from '../pages/contact';
import CorporatePage from '../pages/corporate';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes key={location.pathname} location={location}>
                <Route path='/' element={<HomePage />} />
                <Route path='/iletisim' element={<ContactPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/kurumsal' element={<CorporatePage />} />
                <Route path='/corporate' element={<CorporatePage />} />
                <Route path='/*' element={<HomePage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;