import { useEffect } from 'react';
import Header from './header'
import Footer from './footer'
import MobileMenu from './mobile-menu'

const MFY = ({ children, classname }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    return (
        <div className='main'>
            <Header />
            <MobileMenu />
            <div className={classname}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MFY
