import { useTranslation } from 'react-i18next';
import bg from '../../images/bg.webp'
import offer from '../../images/offer.svg'
import { BsMouse } from 'react-icons/bs';

const HomeSlider = () => {
    const { t } = useTranslation();

    return (
        <div className='w-100 h100vh position-relative d-flex justify-content-center align-items-center'>
            <img src={bg} alt='' className='w-100 h100vh cover' />
            <div className='content'>
                <div><span>{t("text1")}</span></div>
                <div className='mt-3'><h1>{t("text2")}</h1></div>
                <div className='mt-3'><span>{t("text3")}</span></div>
                <div className='w-100 d-flex justify-content-center align-items-center mt-4'>
                    <div className='offer-btn'>
                        <img src={offer} alt='' className='mr-2 mb-1' />
                        <span>{t("text4")}</span>
                    </div>
                </div>
            </div>
            <div className='scroll-down'>
                <BsMouse size={20} color='white' />
                <span>{t("text5")}</span>
            </div>
        </div>
    )
}

export default HomeSlider
