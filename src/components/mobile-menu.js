import { RiCloseFill } from 'react-icons/ri';
import img1 from "../images/pencil.svg"
import img2 from "../images/recycle.svg"
import img3 from "../images/eraser.svg"
import img4 from "../images/settings.svg"
import { useDispatch, useSelector } from 'react-redux';
import logo from "../images/logo.svg"
import { Link } from 'react-router-dom';
import { changeMenuOpen } from '../redux/slices/menuOpenSlice';
import { BiChevronDown } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const MobileMenu = () => {
    const { open } = useSelector((state) => state.menuOpen);
    const { lang } = useSelector((state) => state.lang);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${open ? 'd-block mobile-menu' : 'd-none'}`}>
            <div className='d-flex justify-content-between align-items-center'>
                <div><Link to="/" onClick={() => dispatch(changeMenuOpen())}><img src={logo} alt='' /></Link></div>
                <div className='pointer'><RiCloseFill size={30} onClick={() => dispatch(changeMenuOpen())} /></div>
            </div>
            <div className='mt-4'>
                <ul>
                    <li><Link to={"/"}>{t("homepage")}</Link></li>
                    <li><Link to={lang === "tr" ? "/kurumsal" : "/corporate"}>{t("corporate")}</Link></li>
                    <li>
                        <Link to={"#"} onClick={() => setIsOpen(!isOpen)} className='d-flex align-items-center justify-content-between'>
                            <span className='text-dark'>{t("services")}</span>
                            <BiChevronDown size={25} color="black" style={{ marginBottom: 5, marginLeft: 5 }} />
                        </Link>
                        <ul className={isOpen ? 'd-block' : 'd-none'}>
                            <li className="d-flex justify-content-start">
                                <img src={img1} alt="" />
                                <Link to={lang === "tr" ? "/servisler/tasarim-hizmetleri" : "/services/design-services"}>{t("design_services")}</Link>
                            </li>
                            <li className="d-flex justify-content-start">
                                <img src={img2} alt="" />
                                <Link to={lang === "tr" ? "/servisler/kalip-imalati" : "/services/mold-manufacturing"}>{t("mold_manufacturing")}</Link>
                            </li>
                            <li className="d-flex justify-content-start">
                                <img src={img3} alt="" />
                                <Link to={lang === "tr" ? "/servisler/plastik-imalati" : "/services/plastic-manufacturing"}>{t("plastic_manufacturing")}</Link>
                            </li>
                            <li className="d-flex justify-content-start">
                                <img src={img4} alt="" />
                                <Link to={lang === "tr" ? "/servisler/kaucuk-imalati" : "/services/rubber-manufacturing"}>{t("rubber_manufacturing")}</Link>
                            </li>
                        </ul>
                    </li>
                    <li><Link to={lang === "tr" ? "/hizmetler" : "/services"}>{t("services")}</Link></li>
                    <li><Link to={lang === "tr" ? "/blog" : "/blog"}>{t("blog")}</Link></li>
                    <li><Link to={lang === "tr" ? "/iletisim" : "/contact"}>{t("contact")}</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu
