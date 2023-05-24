import latvija from "./images/latvija.png"
import portrait from "./images/profile_picture.png"
import "./App.css";
import { TEXTS } from "./constants/index";

function MainPage({language}) {

  return (
    <div className="mainPage">
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
                <p>{language === "en" ? TEXTS.en.latviaText : TEXTS.lv.latviaText}</p>
            </div>
        </div>
      </section>

      <section className="about">
        <div className="container grid">
            <img src={portrait} alt={language === "en" ? TEXTS.en.altPortrait : TEXTS.lv.altPortrait} />
            <div className="text-center">
                <h1 className="md">Valters Hūns</h1>
            </div>
        </div>
      </section>

    </div>
  )
}

export default MainPage;
