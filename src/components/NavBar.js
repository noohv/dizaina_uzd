
import { useEffect, useState } from "react";
import "../App.css"
import { Link } from 'react-router-dom';
import { TEXTS } from "../constants";

export function NavBar({language, setLanguage}) {

  const[checked, setChecked] = useState(false)

  const clickHandler = () => {
    if(language === "lv") {
      setLanguage("en")
      setChecked(true)
      localStorage.setItem("lang", "en")
    } else {
      setLanguage("lv")
      setChecked(false)
      localStorage.setItem("lang", "lv")
    }
  }

  useEffect(()=>{
    if(language === "lv") {
      setChecked(false)
    } else {
      setChecked(true)
    }
  },[language])

  return (
    <nav className="header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <div className="menu-language">
            <div class="switch">
                <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox" checked={checked} onChange={clickHandler} />
                <label for="language-toggle"></label>
                <span class="on">LV</span>
                <span class="off">EN</span>
            </div>
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
