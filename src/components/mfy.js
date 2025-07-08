import Header from './header'
import Footer from './footer'

const MFY = ({ children, classname }) => {
    return (
        <div className='main'>
            <Header />
            <div className={classname}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MFY
