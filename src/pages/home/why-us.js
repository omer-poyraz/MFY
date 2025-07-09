import { useTranslation } from 'react-i18next'
import who1 from '../../images/who1.svg'
import who2 from '../../images/who2.svg'
import who3 from '../../images/who3.svg'
import who4 from '../../images/who4.svg'
import who5 from '../../images/who5.svg'
import who6 from '../../images/who6.svg'
import { Col, Row } from 'reactstrap'

const HomeWhyus = () => {
    const { t } = useTranslation();

    return (
        <div className='w-100 text-center why-us'>
            <div><span className='text-danger'>{t("text52")}</span></div>
            <div className='mt-3'><h3>{t("text53")}</h3></div>
            <div className='mt-3'><span className='text-dark'>{t("text54")}</span></div>
            <Row className='mt-5'>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-5'>
                    <div className='w-100 text-center'>
                        <div className='w-100 text-center'><img src={who1} alt='' /></div>
                        <div className='mt-3'><strong className='text-dark'>{t("text55")}</strong></div>
                        <div className='mt-3'><span className='text-dark'>{t("text56")}</span></div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-5'>
                    <div className='w-100 text-center'>
                        <div className='w-100 text-center'><img src={who2} alt='' /></div>
                        <div className='mt-3'><strong className='text-dark'>{t("text57")}</strong></div>
                        <div className='mt-3'><span className='text-dark'>{t("text58")}</span></div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-5'>
                    <div className='w-100 text-center'>
                        <div className='w-100 text-center'><img src={who3} alt='' /></div>
                        <div className='mt-3'><strong className='text-dark'>{t("text59")}</strong></div>
                        <div className='mt-3'><span className='text-dark'>{t("text60")}</span></div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-5'>
                    <div className='w-100 text-center'>
                        <div className='w-100 text-center'><img src={who4} alt='' /></div>
                        <div className='mt-3'><strong className='text-dark'>{t("text61")}</strong></div>
                        <div className='mt-3'><span className='text-dark'>{t("text62")}</span></div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-5'>
                    <div className='w-100 text-center'>
                        <div className='w-100 text-center'><img src={who5} alt='' /></div>
                        <div className='mt-3'><strong className='text-dark'>{t("text63")}</strong></div>
                        <div className='mt-3'><span className='text-dark'>{t("text64")}</span></div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-5'>
                    <div className='w-100 text-center'>
                        <div className='w-100 text-center'><img src={who6} alt='' /></div>
                        <div className='mt-3'><strong className='text-dark'>{t("text65")}</strong></div>
                        <div className='mt-3'><span className='text-dark'>{t("text66")}</span></div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HomeWhyus
