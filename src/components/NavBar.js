
import "../App.css"
import { Link } from 'react-router-dom';

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
            <li><Link to="/road/saldus">Saldus</Link></li>
            <li><Link to="/road/riga">Rīga</Link></li>
            <li><Link to="/road/tramvajs">Tramvajs</Link></li>
            <li><Link to="/road/biblioteka">Bibliotēka</Link></li>
            <li><Link to="/road/universitate">Universitāte</Link></li>
        </ul>
    </nav>
  )
}
