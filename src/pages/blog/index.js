import { useTranslation } from "react-i18next";
import MFY from "../../components/mfy"
import blog1 from "../../images/bloglist1.svg"
import blog2 from "../../images/bloglist2.svg"
import blog3 from "../../images/bloglist3.svg"
import blog4 from "../../images/bloglist4.svg"
import person from '../../images/person.avif'
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const BlogPage = () => {
    const { t } = useTranslation();

    return (
        <MFY classname={"blog-page"}>
            <div className="text-center">
                <div><strong className="text-danger">{t("blog")}</strong></div>
                <div className="mt-3"><h1 className="fw200 f70">{t("text95")}</h1></div>
                <div className="mt-3"><span className="text-secondary">{t("text96")}</span></div>
            </div>
            <div className="mt-4">
                <img src={blog1} alt="" className="w-100 rounded-20 cover" />
            </div>
            <Row className="mt-4">
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="mt-5">
                    <Link className="text-decoration-none" to={"/blog/plastik-enjeksiyon-nedir"}>
                        <div><img src={blog2} alt="" className="w-100 rounded-20 cover" /></div>
                        <div className="mt-2"><h4 className="text-dark">{t("text101")}</h4></div>
                        <div className="mt-2"><span className="text-secondary">{t("text102")}</span></div>
                        <div className="mt-1"><small className="text-danger f12">{t("text103")}</small></div>
                        <div className='d-flex justify-content-start align-items-center mt-3'>
                            <div><img src={person} alt='' className='w40 h40 cover rounded-20' /></div>
                            <div className='ml-2'>
                                <div><strong className='text-dark f14'>Fatmanur Yumrukaya</strong></div>
                                <div><span className='text-secondary f12'>12 Temmuz 2025</span></div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="mt-5">
                    <Link className="text-decoration-none" to={"/blog/plastik-enjeksiyon-nedir"}>
                        <div><img src={blog3} alt="" className="w-100 rounded-20 cover" /></div>
                        <div className="mt-2"><h4 className="text-dark">{t("text101")}</h4></div>
                        <div className="mt-2"><span className="text-secondary">{t("text102")}</span></div>
                        <div className="mt-1"><small className="text-danger f12">{t("text103")}</small></div>
                        <div className='d-flex justify-content-start align-items-center mt-3'>
                            <div><img src={person} alt='' className='w40 h40 cover rounded-20' /></div>
                            <div className='ml-2'>
                                <div><strong className='text-dark f14'>Fatmanur Yumrukaya</strong></div>
                                <div><span className='text-secondary f12'>12 Temmuz 2025</span></div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="mt-5">
                    <Link className="text-decoration-none" to={"/blog/plastik-enjeksiyon-nedir"}>
                        <div><img src={blog4} alt="" className="w-100 rounded-20 cover" /></div>
                        <div className="mt-2"><h4 className="text-dark">{t("text101")}</h4></div>
                        <div className="mt-2"><span className="text-secondary">{t("text102")}</span></div>
                        <div className="mt-1"><small className="text-danger f12">{t("text103")}</small></div>
                        <div className='d-flex justify-content-start align-items-center mt-3'>
                            <div><img src={person} alt='' className='w40 h40 cover rounded-20' /></div>
                            <div className='ml-2'>
                                <div><strong className='text-dark f14'>Fatmanur Yumrukaya</strong></div>
                                <div><span className='text-secondary f12'>12 Temmuz 2025</span></div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="mt-5">
                    <Link className="text-decoration-none" to={"/blog/plastik-enjeksiyon-nedir"}>
                        <div><img src={blog4} alt="" className="w-100 rounded-20 cover" /></div>
                        <div className="mt-2"><h4 className="text-dark">{t("text101")}</h4></div>
                        <div className="mt-2"><span className="text-secondary">{t("text102")}</span></div>
                        <div className="mt-1"><small className="text-danger f12">{t("text103")}</small></div>
                        <div className='d-flex justify-content-start align-items-center mt-3'>
                            <div><img src={person} alt='' className='w40 h40 cover rounded-20' /></div>
                            <div className='ml-2'>
                                <div><strong className='text-dark f14'>Fatmanur Yumrukaya</strong></div>
                                <div><span className='text-secondary f12'>12 Temmuz 2025</span></div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="mt-5">
                    <Link className="text-decoration-none" to={"/blog/plastik-enjeksiyon-nedir"}>
                        <div><img src={blog2} alt="" className="w-100 rounded-20 cover" /></div>
                        <div className="mt-2"><h4 className="text-dark">{t("text101")}</h4></div>
                        <div className="mt-2"><span className="text-secondary">{t("text102")}</span></div>
                        <div className="mt-1"><small className="text-danger f12">{t("text103")}</small></div>
                        <div className='d-flex justify-content-start align-items-center mt-3'>
                            <div><img src={person} alt='' className='w40 h40 cover rounded-20' /></div>
                            <div className='ml-2'>
                                <div><strong className='text-dark f14'>Fatmanur Yumrukaya</strong></div>
                                <div><span className='text-secondary f12'>12 Temmuz 2025</span></div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="mt-5">
                    <Link className="text-decoration-none" to={"/blog/plastik-enjeksiyon-nedir"}>
                        <div><img src={blog3} alt="" className="w-100 rounded-20 cover" /></div>
                        <div className="mt-2"><h4 className="text-dark">{t("text101")}</h4></div>
                        <div className="mt-2"><span className="text-secondary">{t("text102")}</span></div>
                        <div className="mt-1"><small className="text-danger f12">{t("text103")}</small></div>
                        <div className='d-flex justify-content-start align-items-center mt-3'>
                            <div><img src={person} alt='' className='w40 h40 cover rounded-20' /></div>
                            <div className='ml-2'>
                                <div><strong className='text-dark f14'>Fatmanur Yumrukaya</strong></div>
                                <div><span className='text-secondary f12'>12 Temmuz 2025</span></div>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
        </MFY>
    )
}

export default BlogPage
