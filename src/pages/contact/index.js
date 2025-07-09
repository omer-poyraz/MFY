import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import MFY from '../../components/mfy'
import { useTranslation } from 'react-i18next';
import { FiMapPin } from 'react-icons/fi';
import { GrMapLocation } from "react-icons/gr";
import { BiMailSend, BiPhone } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <MFY classname={"contact-page"}>
            <div>
                <div className='text-center'>
                    <div><strong className='text-danger'>{t("contact")}</strong></div>
                    <div className='mt-4'><h1>{t("text83")}</h1></div>
                    <div className='mt-4'><span className='text-secondary'>{t("text84")}</span></div>
                </div>
                <Row className='mt-5'>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='mt-4'>
                        <div>
                            <div>
                                <Link to={"#"} className='text-decoration-none d-flex justify-content-start'>
                                    <div className='w40 h40 rounded-20 bg-s d-flex justify-content-center align-items-center'>
                                        <FiMapPin size={20} className='text-secondary' />
                                    </div>
                                    <div className='ml-2 w-75'>
                                        <span className='text-secondary f14'>{t("text85")}</span>
                                    </div>
                                    <div className='ml-2'>
                                        <div className='w150 py-2 pointer rounded-20 bg-s d-flex justify-content-center align-items-center'>
                                            <GrMapLocation size={20} className='text-danger' />
                                            <div className='ml-2'>
                                                <span className='f14 text-danger'>{t("text86")}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className='d-flex justify-content-start mt-4'>
                                    <Link to={""} className='text-decoration-none'>
                                        <div className='d-flex pointer justify-content-start align-items-center'>
                                            <div className='w40 h40 rounded-20 bg-s d-flex justify-content-center align-items-center'>
                                                <BiPhone size={20} className='text-secondary' />
                                            </div>
                                            <div className='ml-2'>
                                                <span className='text-secondary f14'>{t("text87")}</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to={""} className='text-decoration-none ml-4'>
                                        <div className='d-flex pointer justify-content-start align-items-center'>
                                            <div className='w40 h40 rounded-20 bg-s d-flex justify-content-center align-items-center'>
                                                <BiMailSend size={20} className='text-secondary' />
                                            </div>
                                            <div className='ml-2'>
                                                <span className='text-secondary f14'>{t("text88")}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24489.86552969032!2d32.8630272!3d39.89141105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fa20e21b04f%3A0x3371802aff0b427d!2sKu%C4%9Fulu%20Park!5e0!3m2!1str!2str!4v1752091692486!5m2!1str!2str"
                                width="100%"
                                height="450"
                                className='border-0 mt-5'
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='mt-4'>
                        <div className='form-container'>
                            <Form>
                                <FormGroup className='mb-3'>
                                    <Label for="namesurname" className='f15 text-secondary'>{t("text89")}</Label>
                                    <Input type="text" id="namesurname" className='form-control' />
                                </FormGroup>
                                <FormGroup className='mb-3'>
                                    <Label for="mail" className='f15 text-secondary'>{t("text90")}</Label>
                                    <Input type="text" id="mail" className='form-control' />
                                </FormGroup>
                                <FormGroup className='mb-3'>
                                    <Label for="phone" className='f15 text-secondary'>{t("text91")}</Label>
                                    <Input type="text" id="phone" className='form-control' />
                                </FormGroup>
                                <FormGroup className='mb-3'>
                                    <Label for="copmany" className='f15 text-secondary'>{t("text92")}</Label>
                                    <Input type="text" id="copmany" className='form-control' />
                                </FormGroup>
                                <FormGroup className='mb-3'>
                                    <Label for="subject" className='f15 text-secondary'>{t("text93")}</Label>
                                    <Input type="textarea" id="subject" className='form-control' />
                                </FormGroup>
                                <Button className='btn btn-danger border-0 rounded-20 w-100 f15 mt-4'>{t("text94")}</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </MFY>
    )
}

export default ContactPage
