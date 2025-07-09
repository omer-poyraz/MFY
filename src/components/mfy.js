import Header from './header'
import Footer from './footer'
import MobileMenu from './mobile-menu'

const MFY = ({ children, classname }) => {
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
