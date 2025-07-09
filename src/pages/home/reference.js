import logo1 from '../../images/logo1.svg';
import logo2 from '../../images/logo2.svg';
import logo3 from '../../images/logo3.svg';
import logo4 from '../../images/logo4.svg';
import logo5 from '../../images/logo2.svg';
import logo6 from '../../images/logo1.svg';
import logo7 from '../../images/logo4.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTranslation } from 'react-i18next';

const HomeReference = () => {
    const { t } = useTranslation();
    
    return (
        <div className='mt-5 text-center'>
            <span className='mt-5 text-dark'>{t("text6")}</span>
            <div className="my-3">
                <Swiper
                    spaceBetween={24}
                    slidesPerView={4}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    style={{ maxWidth: 1100, margin: '0 auto' }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        600: { slidesPerView: 2 },
                        900: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 }
                    }}
                >
                    <SwiperSlide><img src={logo1} alt="logo1" style={{ height: 60, margin: '0 auto' }} /></SwiperSlide>
                    <SwiperSlide><img src={logo2} alt="logo2" style={{ height: 60, margin: '0 auto' }} /></SwiperSlide>
                    <SwiperSlide><img src={logo3} alt="logo3" style={{ height: 60, margin: '0 auto' }} /></SwiperSlide>
                    <SwiperSlide><img src={logo4} alt="logo4" style={{ height: 60, margin: '0 auto' }} /></SwiperSlide>
                    <SwiperSlide><img src={logo5} alt="logo5" style={{ height: 60, margin: '0 auto' }} /></SwiperSlide>
                    <SwiperSlide><img src={logo6} alt="logo6" style={{ height: 60, margin: '0 auto' }} /></SwiperSlide>
                    <SwiperSlide><img src={logo7} alt="logo7" style={{ height: 60, margin: '0 auto' }} /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeReference
