import { useTranslation } from "react-i18next";
import sector1 from "../../images/sector1.svg";
import sector2 from "../../images/sector2.svg";
import sector3 from "../../images/sector3.svg";
import sector4 from "../../images/sector4.svg";
import sector5 from "../../images/sector5.svg";
import sector6 from "../../images/sector6.svg";
import { Col, Row } from 'reactstrap'

const HomeSector = () => {
    const { t } = useTranslation();

    return (
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
    )
}

export default HomeSector
