
import "../App.css"
import hambuger from"../items/menu.svg"
import { Link } from 'react-router-dom';
import { LANGUAGES } from "../constants";


export function NavBar({langauge, setLanguage}) {



  return (
    <nav class="header">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/road">Road</Link></li>
            <li><Link to="/road#liepaja">Liepaja</Link></li>
            <li><Link to="/road#grobina">Grobina</Link></li>
            <li><a href="#contact">Tris</a></li>
            <li><a href="#contact">Cetri</a></li>
            <li><a href="#contact">Pieci</a></li>
            <li><a href="#contact">Sesi</a></li>
            <li><a href="#contact">Septini</a></li>
            <li>
                <select defaultValue={"es"}>
                    {LANGUAGES.map(({ code, label }) => (
                    <option key={code} value={code}>
                        {label}
                    </option>
                    ))}
                </select>
            </li>
        </ul>
    </nav>
  )
}
