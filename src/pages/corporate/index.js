import { useTranslation } from 'react-i18next';
import MFY from '../../components/mfy'
import HomeReference from '../home/reference';
import { Col, Row } from 'reactstrap';
import icon1 from '../../images/companyicon1.svg';
import icon2 from '../../images/companyicon2.svg';
import icon3 from '../../images/companyicon3.svg';
import icon4 from '../../images/companyicon4.svg';
import icon5 from '../../images/companyicon5.svg';
import corporate1 from '../../images/corporate1.svg';
import corporate2 from '../../images/corporate2.svg';
import corporate3 from '../../images/corporate3.svg';
import corporate4 from '../../images/corporate4.svg';
import corporate5 from '../../images/corporate5.svg';

const CorporatePage = () => {
    const { t } = useTranslation();

    return (
        <MFY classname={"corporate-page"}>
            <div className='text-center mb-3'>
                <div><strong className='text-danger'>{t("text105")}</strong></div>
                <div className='mt-3'><h1 className='fw200 f70'>{t("text106")}</h1></div>
                <div className='mt-3'><span className='text-secondary f14'>{t("text107")}</span></div>
            </div>

            <HomeReference />

            <div className='mt-5'>
                <div><strong className='text-danger'>{t("text109")}</strong></div>
                <div className='mt-3'><h2>{t("text110")}</h2></div>
                <div className='mt-3'><span className='text-secondary'>{t("text111")}</span></div>
            </div>

            <Row className='align-items-center mt-5'>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='mt-4'>
                    <div>
                        <div><img src={icon1} alt='' /></div>
                        <div className='mt-3'><h4>{t("text112")}</h4></div>
                        <div className='mt-3'><p className='text-secondary'>{t("text113")}</p></div>
                        <div className='mt-3'><p className='text-secondary'>{t("text114")}</p></div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='mt-4'>
                    <div>
                        <img src={corporate1} alt='' className='w-100 cover rounded-20' />
                    </div>
                </Col>
            </Row>
            <Row className='align-items-center mt-5'>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='mt-4'>
                    <div>
                        <img src={corporate2} alt='' className='w-100 cover rounded-20' />
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='mt-4'>
                    <div>
                        <div><img src={icon2} alt='' /></div>
                        <div className='mt-3'><h4>{t("text115")}</h4></div>
                        <div className='mt-3'><p className='text-secondary'>{t("text116")}</p></div>
                        <div className='mt-3'><p className='text-secondary'>{t("text117")}</p></div>
                    </div>
                </Col>
            </Row>
            <Row className='align-items-center mt-5'>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='mt-4'>
                    <div>
                        <div><img src={icon3} alt='' /></div>
                        <div className='mt-3'><h4>{t("text118")}</h4></div>
                        <div className='mt-3'><p className='text-secondary'>{t("text119")}</p></div>
                        <div className='mt-3'><p className='text-secondary'>{t("text120")}</p></div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='mt-4'>
                    <div>
                        <img src={corporate3} alt='' className='w-100 cover rounded-20' />
                    </div>
                </Col>
            </Row>
            <Row className='align-items-center mt-5'>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='mt-4'>
                    <div>
                        <img src={corporate4} alt='' className='w-100 cover rounded-20' />
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='mt-4'>
                    <div>
                        <div><img src={icon4} alt='' /></div>
                        <div className='mt-3'><h4>{t("text121")}</h4></div>
                        <div className='mt-3'><p className='text-secondary'>{t("text122")}</p></div>
                        <div className='mt-3'><p className='text-secondary'>{t("text123")}</p></div>
                    </div>
                </Col>
            </Row>
            <Row className='align-items-center mt-5'>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='mt-4'>
                    <div>
                        <div><img src={icon5} alt='' /></div>
                        <div className='mt-3'><h4>{t("text124")}</h4></div>
                        <div className='mt-3'><p className='text-secondary'>{t("text125")}</p></div>
                        <div className='mt-3'><p className='text-secondary'>{t("text126")}</p></div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='mt-4'>
                    <div>
                        <img src={corporate5} alt='' className='w-100 cover rounded-20' />
                    </div>
                </Col>
            </Row>
        </MFY>
    )
}

export default CorporatePage
