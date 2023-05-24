import latvija from "./images/latvija.png"
import portrait from "./images/profile_picture.png"
import "./App.css";
import { TEXTS } from "./constants/index";
import { useEffect } from "react";

function MainPage({language, id}) {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = language === "en" ? "Homepage" : "Sākumlapa"
  }, [language])

  return (
    <div className="mainPage" id="home">
      <section className="latvia">
        <div className="container grid">
            <div className="text-center">
                <h1 className="xxl">{language === "en" ? TEXTS.en.mansCels : TEXTS.lv.mansCels}</h1>
            </div>
            <img src={latvija} alt={language === "en" ? TEXTS.en.altMap : TEXTS.lv.altMap} />
        </div>
      </section>
      
      <section className="latvia-text">
        <div className="container grid">
            <div className="text-center">
                <h1 className="md">{language === "en" ? TEXTS.en.aboutWebsiteTitle : TEXTS.lv.aboutWebsiteTitle}</h1>
            </div>
            <div className="text-left">
                <p>{language === "en" ? TEXTS.en.latviaText1 : TEXTS.lv.latviaText1}</p>
                <p>{language === "en" ? TEXTS.en.latviaText2 : TEXTS.lv.latviaText2} <a href="https://netlify.com">netlify.com</a></p>

            </div>
        </div>
      </section>

      <section className="about">
        <div className="container grid">
            <img src={portrait} alt={language === "en" ? TEXTS.en.altPortrait : TEXTS.lv.altPortrait} />
            <div className="text-center">
                <h1 className="md">Valters Hūns</h1>
                <h1 className="sm">{language === "en" ? TEXTS.en.aboutText : TEXTS.lv.aboutText}</h1>
            </div>
        </div>
      </section>

    </div>
  )
}

export default MainPage;
