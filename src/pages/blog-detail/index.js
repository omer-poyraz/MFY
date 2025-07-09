import { useTranslation } from "react-i18next";
import MFY from "../../components/mfy"
import blogimg from "../../images/bloglist4.svg"
import person from '../../images/person.avif'

const BlogDetailPage = () => {
    const { t } = useTranslation();

    return (
        <MFY classname={"blog-detail-page"}>
            <div><img src={blogimg} alt="" className="w-100 h50vh cover" /></div>
            <div className="content">
                <div><h1>{t("text101")}</h1></div>
                <div className="mt-3"><p>{t("text104")}</p></div>
                <div className="mt-3"><p>{t("text104")}</p></div>
                <div className='d-flex justify-content-start align-items-center mt-3'>
                    <div><img src={person} alt='' className='w40 h40 cover rounded-20' /></div>
                    <div className='ml-2'>
                        <div><strong className='text-dark f14'>Fatmanur Yumrukaya</strong></div>
                        <div><span className='text-secondary f12'>12 Temmuz 2025</span></div>
                    </div>
                </div>
            </div>
        </MFY>
    )
}

export default BlogDetailPage
