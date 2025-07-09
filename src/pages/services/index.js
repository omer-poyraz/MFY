import { useTranslation } from "react-i18next";
import MFY from "../../components/mfy"
import { useEffect, useState } from "react";
import design1 from "../../images/design1.svg";
import design2 from "../../images/design2.svg";
import icon1 from '../../images/companyicon1.svg';
import icon2 from '../../images/companyicon2.svg';
import designicon1 from '../../images/designicon1.svg';
import designicon2 from '../../images/designicon2.svg';
import designicon3 from '../../images/designicon3.svg';
import { Col, Row } from "reactstrap";

const ServicesPage = () => {
    const { t } = useTranslation();
    const path = window.location?.pathname?.split("/")[2];
    const [data, setData] = useState()

    const whichData = () => {
        if (path === "tasarim-hizmetleri") {
            setData(t("text127"))
        }
        if (path === "kalip-imalati") {
            setData(t("text128"))
        }
        if (path === "plastik-imalati") {
            setData(t("text129"))
        }
        if (path === "kaucuk-imalati") {
            setData(t("text130"))
        }
    }

    useEffect(() => whichData(), [])

    return (
        <MFY classname={"services-page"}>
            <div className="text-center">
                <div><strong className="text-danger">{t("text131")}</strong></div>
                <div className="mt-3"><h1 className="fw200 f70">{data || t("text127")}</h1></div>
                <div className="mt-3"><span className="text-secondary">{t("text132")}</span></div>
            </div>

            <Row className="mt-5 align-items-center">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="mt-4">
                    <div>
                        <div><img src={icon1} alt="" /></div>
                        <div className="mt-3"><h4>{t("text133")}</h4></div>
                        <div className="mt-3"><p className="text-secondary">{t("text134")}</p></div>
                        <div className="mt-3"><p className="text-secondary">{t("text135")}</p></div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="mt-4">
                    <div>
                        <img src={design1} alt="" className="w-100 cover rounded-20" />
                    </div>
                </Col>
            </Row>
            <Row className="mt-5 align-items-center">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="mt-4">
                    <div>
                        <img src={design2} alt="" className="w-100 cover rounded-20" />
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="mt-4">
                    <div>
                        <div><img src={icon2} alt="" /></div>
                        <div className="mt-3"><h4>{t("text136")}</h4></div>
                        <div className="mt-3"><p className="text-secondary">{t("text137")}</p></div>
                        <div className="mt-3"><p className="text-secondary">{t("text138")}</p></div>
                    </div>
                </Col>
            </Row>

            <div className="mt-5 text-center">
                <div><h1 className="fw200 f70">{t("text139")}</h1></div>
            </div>
            <Row className="align-items-center mt-4">
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="mt-5">
                    <div className="design-special">
                        <div className="bg-white rounded-20 position-relative z10 d-block p-3">
                            <div className="w-100"><img src={designicon1} alt="" className="w25 h25" /></div>
                            <div className="mt-3"><h5>{t("text140")}</h5></div>
                            <div className="mt-3"><span className="text-dark">{t("text141")}</span></div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="mt-5">
                    <div className="design-special">
                        <div className="bg-white rounded-20 position-relative z10 d-block p-3">
                            <div className="w-100"><img src={designicon2} alt="" className="w25 h25" /></div>
                            <div className="mt-3"><h5>{t("text142")}</h5></div>
                            <div className="mt-3"><span className="text-dark">{t("text143")}</span></div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="mt-5">
                    <div className="design-special">
                        <div className="bg-white rounded-20 position-relative z10 d-block p-3">
                            <div className="w-100"><img src={designicon3} alt="" className="w25 h25" /></div>
                            <div className="mt-3"><h5>{t("text144")}</h5></div>
                            <div className="mt-3"><span className="text-dark">{t("text145")}</span></div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="mt-5">
                    <div className="design-special">
                        <div className="bg-white rounded-20 position-relative z10 d-block p-3">
                            <div className="w-100"><img src={designicon1} alt="" className="w25 h25" /></div>
                            <div className="mt-3"><h5>{t("text146")}</h5></div>
                            <div className="mt-3"><span className="text-dark">{t("text147")}</span></div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="mt-5">
                    <div className="design-special">
                        <div className="bg-white rounded-20 position-relative z10 d-block p-3">
                            <div className="w-100"><img src={designicon2} alt="" className="w25 h25" /></div>
                            <div className="mt-3"><h5>{t("text148")}</h5></div>
                            <div className="mt-3"><span className="text-dark">{t("text149")}</span></div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="mt-5">
                    <div className="design-special">
                        <div className="bg-white rounded-20 position-relative z10 d-block p-3">
                            <div className="w-100"><img src={designicon3} alt="" className="w25 h25" /></div>
                            <div className="mt-3"><h5>{t("text150")}</h5></div>
                            <div className="mt-3"><span className="text-dark">{t("text1")}</span></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </MFY>
    )
}

export default ServicesPage
