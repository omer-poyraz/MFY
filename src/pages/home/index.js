import { useTranslation } from 'react-i18next';
import MFY from '../../components/mfy'
import bg from '../../images/bg.webp'
import offer from '../../images/offer.svg'
import { BsMouse } from 'react-icons/bs';
import logo1 from '../../images/logo1.svg';
import logo2 from '../../images/logo2.svg';
import logo3 from '../../images/logo3.svg';
import logo4 from '../../images/logo4.svg';
import logo5 from '../../images/logo2.svg';
import logo6 from '../../images/logo1.svg';
import logo7 from '../../images/logo4.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Col, Row } from 'reactstrap';
import sector1 from "../../images/sector1.svg";
import sector2 from "../../images/sector2.svg";
import sector3 from "../../images/sector3.svg";
import sector4 from "../../images/sector4.svg";
import sector5 from "../../images/sector5.svg";
import sector6 from "../../images/sector6.svg";
import img1 from '../../images/img1.svg'

const HomePage = () => {
    const { t } = useTranslation();

    return (
        <MFY classname={"home"}>
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

            <div className='mt-5 text-center'>
                <span className='mt-5 text-dark'>{t("text6")}</span>
                <div className="my-5">
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

            <div className='mt-5 w-100 text-center sectors'>
                <div className='w-100 text-center'><span className='text-danger'>{t("text7")}</span></div>
                <div className='w-100 text-center mt-3'><h2>{t("text8")}</h2></div>
                <div className='w-100 text-center mt-3 mb-4'><span>{t("text9")}</span></div>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-5'>
                        <div className='w-100 text-center'>
                            <div><img src={sector1} alt='' /></div>
                            <div className='mt-3'><h4>{t("text10")}</h4></div>
                            <div className='mt-3'><span className='text-dark'>{t("text11")}</span></div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-5'>
                        <div className='w-100 text-center'>
                            <div><img src={sector2} alt='' /></div>
                            <div className='mt-3'><h4>{t("text12")}</h4></div>
                            <div className='mt-3'><span className='text-dark'>{t("text13")}</span></div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-5'>
                        <div className='w-100 text-center'>
                            <div><img src={sector3} alt='' /></div>
                            <div className='mt-3'><h4>{t("text14")}</h4></div>
                            <div className='mt-3'><span className='text-dark'>{t("text15")}</span></div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-5'>
                        <div className='w-100 text-center'>
                            <div><img src={sector4} alt='' /></div>
                            <div className='mt-3'><h4>{t("text16")}</h4></div>
                            <div className='mt-3'><span className='text-dark'>{t("text17")}</span></div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-5'>
                        <div className='w-100 text-center'>
                            <div><img src={sector5} alt='' /></div>
                            <div className='mt-3'><h4>{t("text18")}</h4></div>
                            <div className='mt-3'><span className='text-dark'>{t("text19")}</span></div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-5'>
                        <div className='w-100 text-center'>
                            <div><img src={sector6} alt='' /></div>
                            <div className='mt-3'><h4>{t("text20")}</h4></div>
                            <div className='mt-3'><span className='text-dark'>{t("text21")}</span></div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='w-100 rubber'>
                <div><span className='text-danger'>{t("text37")}</span></div>
                <div className='mt-3'><h3>{t("text38")}</h3></div>
                <div className='mt-4'><span className='text-dark'>{t("text39")}</span></div>
                <Row className='mt-5'>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <div>
                            <div className="border-left border-5 border-danger pl-3 py-4">
                                <div><strong className='text-dark'>{t("text40")}</strong></div>
                                <div className='mt-1'><span className='text-dark'>{t("text41")}</span></div>
                            </div>
                            <div className="border-left border-5 border-secondary pl-3 py-4">
                                <div><strong className='text-dark'>{t("text42")}</strong></div>
                                <div className='mt-1'><span className='text-dark'>{t("text43")}</span></div>
                            </div>
                            <div className="border-left border-5 border-secondary pl-3 py-4">
                                <div><strong className='text-dark'>{t("text44")}</strong></div>
                                <div className='mt-1'><span className='text-dark'>{t("text45")}</span></div>
                            </div>
                            <div className="border-left border-5 border-secondary pl-3 py-4">
                                <div><strong className='text-dark'>{t("text46")}</strong></div>
                                <div className='mt-1'><span className='text-dark'>{t("text47")}</span></div>
                            </div>
                            <div className="border-left border-5 border-secondary pl-3 py-4">
                                <div><strong className='text-dark'>{t("text48")}</strong></div>
                                <div className='mt-1'><span className='text-dark'>{t("text49")}</span></div>
                            </div>
                            <div className="border-left border-5 border-secondary pl-3 py-4">
                                <div><strong className='text-dark'>{t("text50")}</strong></div>
                                <div className='mt-1'><span className='text-dark'>{t("text51")}</span></div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <div><img src={img1} alt='' className='w-100' /></div>
                    </Col>
                </Row>
            </div>
        </MFY>
    )
}

export default HomePage
