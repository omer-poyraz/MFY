import { FiMapPin } from "react-icons/fi";
import { Col, Row } from 'reactstrap'
import logo from '../images/footer_logo.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { BiMailSend, BiPhone } from "react-icons/bi";
import { BsClock } from "react-icons/bs";

const Footer = () => {
    const { lang } = useSelector((state) => state.lang);
    const { t } = useTranslation();

    return (
        <div className='footer'>
            <Row>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='mb-5 text-center'>
                    <div>
                        <img src={logo} alt='' />
                    </div>
                </Col>

                <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='mb-5'>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='mb-3'>
                            <div>
                                <ul>
                                    <li><Link to={lang === "tr" ? "/kurumsal" : "/corporate"}>{t("corporate")}</Link></li>
                                    <li className='mt-2'><Link to={lang === "tr" ? "/hizmetler" : "/services"}>{t("services")}</Link></li>
                                    <li className='mt-2'><Link to={lang === "tr" ? "/iletisim" : "/contact"}>{t("contact")}</Link></li>
                                    <li className='mt-2'><Link to={lang === "tr" ? "/blog" : "/blog"}>{t("blog")}</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} className='mb-3'>
                            <div>
                                <ul>
                                    <li><Link to="#">{t("text22")}</Link></li>
                                    <li className='mt-2'><Link to="#">{t("text23")}</Link></li>
                                    <li className='mt-2'><Link to="#">{t("text24")}</Link></li>
                                    <li className='mt-2'><Link to="#">{t("text25")}</Link></li>
                                    <li className='mt-2'><Link to="#">{t("text26")}</Link></li>
                                    <li className='mt-2'><Link to="#">{t("text27")}</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='mb-5'>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='mb-3'>
                            <div>
                                <ul>
                                    <li><Link to="#">{t("text28")}</Link></li>
                                    <li className="mt-2"><Link to="#">{t("text29")}</Link></li>
                                    <li className="mt-2"><Link to="#">{t("text30")}</Link></li>
                                    <li className="mt-2"><Link to="#">{t("text31")}</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} className='mb-3'>
                            <div>
                                <ul>
                                    <li><FiMapPin size={20} color="red" className="mr-2" /><Link to="#">{t("text32")}</Link></li>
                                    <li className='mt-2'><BiPhone size={20} color="red" className="mr-2" /><Link to="#">{t("text33")}</Link></li>
                                    <li className='mt-2'><BiMailSend size={20} color="red" className="mr-2" /><Link to="#">{t("text34")}</Link></li>
                                    <li className='mt-2'><BsClock size={20} color="red" className="mr-2" /><Link to="#">{t("text35")}</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="w-100 text-center">
                <span className='fw300'>{t("text36")}</span>
            </div>
        </div>
    )
}

export default Footer
