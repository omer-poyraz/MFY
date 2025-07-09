import { useTranslation } from 'react-i18next';
import img1 from '../../images/img1.svg'
import { Col, Row } from 'reactstrap'

const HomeRubber = () => {
    const { t } = useTranslation();

    return (
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
    )
}

export default HomeRubber
