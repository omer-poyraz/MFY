import { useTranslation } from 'react-i18next';
import '../../css/rubber.css';
import { rubberImages } from '../../images/rubberImages'
import { Col, Row } from 'reactstrap'
import { useState } from 'react';

const HomeRubber = () => {
    const { t } = useTranslation();

    const items = [
        { title: t("text40"), desc: t("text41") },
        { title: t("text42"), desc: t("text43") },
        { title: t("text44"), desc: t("text45") },
        { title: t("text46"), desc: t("text47") },
        { title: t("text48"), desc: t("text49") },
        { title: t("text50"), desc: t("text51") },
    ];
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <div className='w-100 rubber'>
            <div><span className='text-danger'>{t("text37")}</span></div>
            <div className='mt-3'><h3>{t("text38")}</h3></div>
            <div className='mt-4'><span className='text-dark'>{t("text39")}</span></div>
            <Row className='mt-5'>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <div>
                        {items.map((item, idx) => (
                            <div
                                key={idx}
                                className={`border-left border-5 pl-3 py-4 rubber-item ${activeIdx === idx ? 'border-danger' : 'border-secondary'}`}
                                style={{ cursor: 'pointer', background: activeIdx === idx ? '#f8f9fa' : 'transparent' }}
                                onClick={() => setActiveIdx(idx)}
                            >
                                <div><strong className='text-dark'>{item.title}</strong></div>
                                <div className='mt-1'><span className='text-dark'>{item.desc}</span></div>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <div><img src={rubberImages[activeIdx]} alt='' className='w-100' /></div>
                </Col>
            </Row>
        </div>
    )
}

export default HomeRubber
