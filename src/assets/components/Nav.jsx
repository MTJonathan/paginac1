import '../styles/nav.css'
import { useTranslation } from "react-i18next";
import { Flecha, Logo } from './svg/svg'

const Nav = () => {
  const {t, i18n} = useTranslation("nav");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log(lng)
  }
  return (
    <nav className='nav'>
      <div className="logo"><span><Logo /></span> <span>Rotar AI</span></div>  
      <ul>
        <li><a href="">{t("product")}</a></li>
        <li><a href="">{t('solutions')}</a></li>
        <li><a href="">{t('resources')}</a></li>
        <li><a href="">{t('pricing')}</a></li>
        <li>
          <select onChange={(e) => changeLanguage(e.target.value)}>
            <option value={"es"}>Español</option>
            <option value={"en"}>English</option>
          </select>
        </li>
      </ul>
      <div className="Options">
        <ul>
            <li><a href="">{t('login')}</a></li>
            <li><a href="">{t('book_demo')}<span><Flecha /></span></a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
