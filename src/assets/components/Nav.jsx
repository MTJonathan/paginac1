import '../styles/nav.css'
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Flecha, Logo } from './svg/svg'

const Nav = () => {
  const [idioma, setIdioma] = useState("es");
  const {t, i18n} = useTranslation("nav");
  
  useEffect(() => {
    const idiomaGuardar = localStorage.getItem("idioma");
    if (idiomaGuardar) {
      i18n.changeLanguage(idiomaGuardar);
      setIdioma(idiomaGuardar);
    }
  }, [])
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIdioma(lng);
    localStorage.setItem("idioma", lng);
  }
  return (
    <nav className='nav'>
      <div className="logo"><span><Logo /></span> <span>Rotar AI</span></div>  
      <ul>
        <li><a href="">{t("product")}</a></li>
        <li><a href="">{t('solutions')}</a></li>
        <li><a href="">{t('resources')}</a></li>
        <li><a href="">{t('pricing')}</a></li>
      </ul>
      <div className="Options">
        <ul>
            <li><a href="">{t('login')}</a></li>
            <li>
              <select value={idioma} onChange={(e) => changeLanguage(e.target.value)}>
                <option value={"es"}>Español</option>
                <option value={"en"}>English</option>
                <option disabled>{t('soon')}</option>
              </select>
            </li>
            <li><a href="">{t('book_demo')}<span><Flecha /></span></a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
