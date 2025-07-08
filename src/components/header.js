import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import logo from "../images/logo.svg"
import { BiChevronDown } from "react-icons/bi";
import img1 from "../images/pencil.svg"
import img2 from "../images/recycle.svg"
import img3 from "../images/eraser.svg"
import img4 from "../images/settings.svg"
import tr from "../images/tr.svg"
import en from "../images/en.svg"
import { useState, useRef, useEffect } from "react";
import { changeLang } from "../redux/slices/langSlice";

const Header = () => {
    const dispatch = useDispatch();
    const { lang } = useSelector((state) => state.lang);
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 150);
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={`header${scrolled ? ' active' : ''}`}>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="d-flex justify-content-end align-items-center">
                <div className="menus">
                    <ul>
                        <li><Link to={"/"}>{t("homepage")}</Link></li>
                        <li><Link to={lang === "tr" ? "/kurumsal" : "/corporate"}>{t("corporate")}</Link></li>
                        <li>
                            <Link to={"#"}>
                                <span>{t("services")}</span>
                                <BiChevronDown size={25} color="white" style={{ marginBottom: 5, marginLeft: 5 }} />
                            </Link>
                            <ul>
                                <li className="d-flex justify-content-start">
                                    <img src={img1} alt="" />
                                    <Link to={lang === "tr" ? "/servisler/tasarım-hizmetleri" : "/services/design-services"}>{t("design_services")}</Link>
                                </li>
                                <li className="d-flex justify-content-start">
                                    <img src={img2} alt="" />
                                    <Link to={lang === "tr" ? "/servisler/kalip-imalatı" : "/services/mold-manufacturing"}>{t("mold_manufacturing")}</Link>
                                </li>
                                <li className="d-flex justify-content-start">
                                    <img src={img3} alt="" />
                                    <Link to={lang === "tr" ? "/servisler/plastik-imalatı" : "/services/plastic-manufacturing"}>{t("plastic_manufacturing")}</Link>
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
                <div className="right ml-3">
                    <div className="lang-dropdown" ref={dropdownRef}>
                        <button className="lang-selected" onClick={() => setOpen((v) => !v)}>
                            <img src={lang === "tr" ? tr : en} alt="" />
                            <span style={{ marginLeft: 6, fontWeight: 600 }}>{lang === "tr" ? "TR" : "EN"}</span>
                            <svg style={{ marginLeft: 6 }} width="16" height="16" viewBox="0 0 24 24"><path fill="#222" d="M7 10l5 5 5-5z" /></svg>
                        </button>
                        {open && (
                            <ul className="lang-menu">
                                <li>
                                    <button className={lang === "tr" ? "active" : ""} onClick={() => { dispatch(changeLang('tr')); setOpen(false); }} style={{background:'none',border:'none',width:'100%',textAlign:'left',padding:0}}>
                                        <img src={tr} alt="" /> TR
                                    </button>
                                </li>
                                <li>
                                    <button className={lang === "en" ? "active" : ""} onClick={() => { dispatch(changeLang('en')); setOpen(false); }} style={{background:'none',border:'none',width:'100%',textAlign:'left',padding:0}}>
                                        <img src={en} alt="" /> EN
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
