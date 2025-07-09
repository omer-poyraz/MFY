import { useTranslation } from 'react-i18next';
import persons from '../../images/persons.svg'
import { Link } from 'react-router-dom'

const HomeStill = () => {
    const { t } = useTranslation();

    return (
        <div className='w-100 still'>
            <div className='text-center'>
                <div className='w-100 text-center'><img src={persons} alt='' /></div>
                <div className='mt-3'><h4>{t("text80")}</h4></div>
                <div className='mt-3'><span className='text-dark'>{t("text81")}</span></div>
                <div className='mt-4 d-flex justify-content-center w-100'>
                    <Link className='text-decoration-none' to="/iletisim"><div className='we-btn'>{t("text82")}</div></Link>
                </div>
            </div>
        </div>
    )
}

export default HomeStill
