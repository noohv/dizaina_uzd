
import "../App.css"
import { TEXTS } from "../constants"

export function Footer({language, setLanguage}) {
  return (
    <footer className="footer">
      <div className="container flex">
        <p>{language === "en" ? TEXTS.en.madeBy : TEXTS.lv.madeBy}</p>
      </div>
    </footer>
  )
}
