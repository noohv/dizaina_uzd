
import "../App.css"
import hambuger from"../items/menu.svg"

export function NavBar() {
  return (
    <nav role="navigation">
        <div id="menuToggle">
            <input type="checkbox" />

            <div id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul id="menu">
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Info</li></a>
            <a href="#"><li>Contact</li></a>
            <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
            </ul>
        </div>
    </nav>
  )
}
