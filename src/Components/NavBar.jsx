// a navagation bar to sit at the top of the page with links to welcome, shop, and checkout

import "../styles/NavBar.css"

export default function NavBar() {
    return (
        <nav className="navBar">
            <div><a className="navLink">Welcome</a></div>
            <div><a className="navLink">Shop</a></div>
            <div><a className="navLink">Checkout</a></div>
        </nav>
    )
}