// a navagation bar to sit at the top of the page with links to welcome, shop, and checkout

import { Link } from "react-router-dom"
import "../styles/NavBar.css"

export default function NavBar() {
    return (
        <nav className="navBar">
            <button><Link to={`homepage`} className="navLink">Welcome</Link></button>
            <button><Link to={`shop`} className="navLink">Shop</Link></button>
            <button><Link to={`checkout`} className="navLink">Checkout</Link></button>
        </nav>
    )
}