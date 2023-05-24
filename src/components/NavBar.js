
import { useEffect } from "react";
import "../App.css"
import { Link } from 'react-router-dom';
import { TEXTS } from "../constants";

export function NavBar({language, setLanguage}) {

  const clickHandler = () => {
    if(language === "lv") {
      setLanguage("en")
      localStorage.setItem("lang", "en")
    } else {
      setLanguage("lv")
      localStorage.setItem("lang", "lv")
    }
  }

  useEffect(()=>{},[language])

  return (
    <nav className="header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <div className="menu-language">
          <button onClick={clickHandler}>{language == "en" ? "🇱🇻" : "ENG"}</button>
        </div>

        <ul className="menu">
            <li><Link to="/">{language === "en" ? TEXTS.en.home : TEXTS.lv.home}</Link></li>
            <li><Link to="/road">{language === "en" ? TEXTS.en.road : TEXTS.lv.road}</Link></li>
            <li><Link to="/road/liepaja">{language === "en" ? TEXTS.en.liepaja : TEXTS.lv.liepaja}</Link></li>
            <li><Link to="/road/grobina">{language === "en" ? TEXTS.en.grobina : TEXTS.lv.grobina}</Link></li>
            <li><Link to="/road/saldus">{language === "en" ? TEXTS.en.saldus : TEXTS.lv.saldus}</Link></li>
            <li><Link to="/road/riga">{language === "en" ? TEXTS.en.riga : TEXTS.lv.riga}</Link></li>
            <li><Link to="/road/tramvajs">{language === "en" ? TEXTS.en.tram : TEXTS.lv.tram}</Link></li>
            <li><Link to="/road/biblioteka">{language === "en" ? TEXTS.en.library : TEXTS.lv.library}</Link></li>
            <li><Link to="/road/universitate">{language === "en" ? TEXTS.en.university : TEXTS.lv.university}</Link></li>
        </ul>
    </nav>
  )
}
