
import "../App.css"
import hambuger from"../items/menu.svg"
import { Link } from 'react-router-dom';
import { LANGUAGES } from "../constants";


export function NavBar({langauge, setLanguage}) {



  return (
    <nav className="header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/road">Road</Link></li>
            <li><Link to="/road/liepaja">Liepāja</Link></li>
            <li><Link to="/road/grobina">Grobiņa</Link></li>
            <li><Link to="/road/riga">Rīga</Link></li>
            <li><Link to="/road/tramvajs">Tramvajs</Link></li>
            <li><Link to="/road/latvijas_universitate">Latvijas Universitāte</Link></li>
        </ul>
    </nav>
  )
}
