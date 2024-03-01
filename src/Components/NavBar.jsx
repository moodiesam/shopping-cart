// a navagation bar to sit at the top of the page with links to welcome, shop, and checkout

import "../styles/NavBar.css"

export default function NavBar() {
    return (
        <nav className="navBar">
            <button><a className="navLink">Welcome</a></button>
            <button><a className="navLink">Shop</a></button>
            <button><a className="navLink">Checkout</a></button>
        </nav>
    )
}