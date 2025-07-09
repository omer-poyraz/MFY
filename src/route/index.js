import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../pages/home';
import ContactPage from '../pages/contact';
import CorporatePage from '../pages/corporate';
import BlogPage from '../pages/blog';
import BlogDetailPage from '../pages/blog-detail';
import ServicesPage from '../pages/services';

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
                <Route path='/blog' element={<BlogPage />} />
                <Route path='/blog/:slug' element={<BlogDetailPage />} />
                <Route path='/servisler/tasarim-hizmetleri' element={<ServicesPage />} />
                <Route path='/servisler/kalip-imalati' element={<ServicesPage />} />
                <Route path='/servisler/plastik-imalati' element={<ServicesPage />} />
                <Route path='/servisler/kaucuk-imalati' element={<ServicesPage />} />
                <Route path='/*' element={<HomePage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;