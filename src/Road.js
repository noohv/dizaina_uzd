import "./App.css";
import { useEffect } from "react";
import liepajaImg from "./images/liepaja.png"
import grobinaImg from "./images/grobina.png"
import saldusImg from "./images/saldus_aplis.png"
import rigaImg from "./images/riga.png"
import tramvajsImg from "./images/tramvajs.png"
import bibliotekaImg from "./images/biblioteka.png"
import universitateImg from "./images/universitate.png"
import { TEXTS } from "./constants";

function Road({language, id}) {

  useEffect(() => {
    const element = document.getElementById(id);
    if(id === "road") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [id]);


  return (
    <div className="roadPage">
    
      <section className="liepaja" id="liepaja">
        <div className="container">
          <img src={liepajaImg} alt={language === "en" ? TEXTS.en.altBeach : TEXTS.lv.altBeach} />
        </div>
      </section>

      <section className="liepaja-text">
        <div className="container grid">
          <div className="text-center">
            <h1 className="lg">{language === "en" ? TEXTS.en.driveStart : TEXTS.lv.driveStart}</h1>
          </div>

          <div className="text-left">
            <p>{language === "en" ? TEXTS.en.liepajaText : TEXTS.lv.liepajaText}</p>
          </div>
        </div>
      </section>

      <section className="grobina" id="grobina">
        <div className="container grid">
            <div className="text-center">
                <h1 className="xl">{language === "en" ? TEXTS.en.grobinaTitle : TEXTS.lv.grobinaTitle}</h1>
            </div>
            <img src={grobinaImg} alt={language === "en" ? TEXTS.en.altGrobina : TEXTS.lv.altGrobina} />
        </div>
      </section>

      <section className="grobina-text">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">{language === "en" ? TEXTS.en.grobinaTextTitle : TEXTS.lv.grobinaTextTitle}</h1>
            </div>
            <div className="text-left">
            <p>{language === "en" ? TEXTS.en.grobinaText : TEXTS.lv.grobinaText}</p>
            </div>
        </div>
      </section>

      <section className="saldus" id="saldus">
        <div className="container grid">
            <div className="text-center">
                <h1 className="xl">{language === "en" ? TEXTS.en.saldusTitle : TEXTS.lv.saldusTitle}</h1>
            </div>
            <img src={saldusImg} alt={language === "en" ? TEXTS.en.altSaldus : TEXTS.lv.altSaldus} />
        </div>
      </section>

      <section className="saldus-text">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">{language === "en" ? TEXTS.en.halfWay : TEXTS.lv.halfWay}</h1>
            </div>
            <div className="text-left">
            <p>{language === "en" ? TEXTS.en.saldusText : TEXTS.lv.saldusText}</p>
            </div>
        </div>
      </section>

      <section className="riga" id="riga">
        <div className="container grid">
            <div className="text-center">
                <h1 className="xl">{language === "en" ? TEXTS.en.rigaTitle : TEXTS.lv.rigaTitle}</h1>
            </div>
            <img src={rigaImg} alt={language === "en" ? TEXTS.en.altRiga : TEXTS.lv.altRiga} />
        </div>
      </section>

      <section className="riga-text">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">{language === "en" ? TEXTS.en.closerDestination : TEXTS.lv.closerDestination}</h1>
            </div>
            <div className="text-left">
            <p>{language === "en" ? TEXTS.en.rigaText : TEXTS.lv.rigaText}</p>
            </div>
        </div>
      </section>

      <section className="tramvajs" id="tramvajs">
        <div className="container grid">
            <div className="text-center">
                <h1 className="xl">{language === "en" ? TEXTS.en.tramTitle : TEXTS.lv.tramTitle}</h1>
            </div>
            <img src={tramvajsImg} alt={language === "en" ? TEXTS.en.altTram : TEXTS.lv.altTram} />
        </div>
      </section>

      <section className="tramvajs-text">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">{language === "en" ? TEXTS.en.everydayTransport : TEXTS.lv.everydayTransport}</h1>
            </div>
            <div className="text-left">
            <p>{language === "en" ? TEXTS.en.tramvajsText : TEXTS.lv.tramvajsText}</p>
            </div>
        </div>
      </section>

      <section className="biblioteka" id="biblioteka">
        <div className="container grid">
            <div className="text-center">
                <h1 className="xl">{language === "en" ? TEXTS.en.libraryTitle : TEXTS.lv.libraryTitle}</h1>
            </div>
            <img src={bibliotekaImg} alt={language === "en" ? TEXTS.en.altLibrary : TEXTS.lv.altLibrary} />
        </div>
      </section>

      <section className="biblioteka-text">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">{language === "en" ? TEXTS.en.biblTextTitle : TEXTS.lv.biblTextTitle}</h1>
            </div>
            <div className="text-left">
            <p>{language === "en" ? TEXTS.en.libraryText : TEXTS.lv.libraryText}</p>
            </div>
        </div>
      </section>

      <section className="universitate" id="universitate">
        <div className="container grid">
            <div className="text-center">
                <h1 className="xl">{language === "en" ? TEXTS.en.uniTitle : TEXTS.lv.uniTitle}</h1>
            </div>
            <img src={universitateImg} alt={language === "en" ? TEXTS.en.altUni : TEXTS.lv.altUni} />
        </div>
      </section>

      <section className="universitate-text">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">{language === "en" ? TEXTS.en.destination : TEXTS.lv.destination}</h1>
            </div>
            <div className="text-left">
            <p>{language === "en" ? TEXTS.en.uniText : TEXTS.lv.uniText}</p>
            </div>
        </div>
      </section>

    </div>
  )
}

export default Road;
