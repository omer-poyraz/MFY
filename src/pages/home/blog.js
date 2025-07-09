import { useTranslation } from 'react-i18next'
import blog1 from '../../images/blog1.svg'
import blog2 from '../../images/blog2.svg'
import blog3 from '../../images/blog3.svg'
import person from '../../images/person.avif'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

const HomeBlog = () => {
    const { t } = useTranslation();

    return (
        <div className='w-100 main-blog'>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <div><span className='text-danger'>{t("text67")}</span></div>
                    <div className='mt-2'><h4>{t("text68")}</h4></div>
                </div>
                <div>
                    <Link className='text-decoration-none' to={"/blog"}><div className='see-allbtn'>{t("text69")}</div></Link>
                </div>
            </div>
            <div className='mt-2'><span className='text-secondary'>{t("text70")}</span></div>
            <Row className='mt-5'>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mt-5'>
                    <div>
                        <div className='w-100'><img src={blog1} alt='' className='w-100 cover' /></div>
                        <div className='mt-3'><h5>{t("text71")}</h5></div>
                        <div className='mt-3'><span className='text-dark'>{t("text72")}</span></div>
                        <div className='mt-1 pointer'><small className='text-danger'>{t("text73")}</small></div>

                        <div className='d-flex justify-content-start align-items-center mt-3'>
                            <div><img src={person} alt='' className='w40 h40 cover rounded-20' /></div>
                            <div className='ml-2'>
                                <div><strong className='text-dark f14'>Fatmanur Yumrukaya</strong></div>
                                <div><span className='text-secondary f12'>12 Temmuz 2025</span></div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mt-5'>
                    <div>
                        <div className='w-100'><img src={blog2} alt='' className='w-100 cover' /></div>
                        <div className='mt-3'><h5>{t("text74")}</h5></div>
                        <div className='mt-3'><span className='text-dark'>{t("text72")}</span></div>
                        <div className='mt-1 pointer'><small className='text-danger'>{t("text73")}</small></div>

                        <div className='d-flex justify-content-start align-items-center mt-3'>
                            <div><img src={person} alt='' className='w40 h40 cover rounded-20' /></div>
                            <div className='ml-2'>
                                <div><strong className='text-dark f14'>Fatmanur Yumrukaya</strong></div>
                                <div><span className='text-secondary f12'>12 Temmuz 2025</span></div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mt-5'>
                    <div>
                        <div className='w-100'><img src={blog3} alt='' className='w-100 cover' /></div>
                        <div className='mt-3'><h5>{t("text75")}</h5></div>
                        <div className='mt-3'><span className='text-dark'>{t("text72")}</span></div>
                        <div className='mt-1 pointer'><small className='text-danger'>{t("text73")}</small></div>

                        <div className='d-flex justify-content-start align-items-center mt-3'>
                            <div><img src={person} alt='' className='w40 h40 cover rounded-20' /></div>
                            <div className='ml-2'>
                                <div><strong className='text-dark f14'>Fatmanur Yumrukaya</strong></div>
                                <div><span className='text-secondary f12'>12 Temmuz 2025</span></div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HomeBlog
