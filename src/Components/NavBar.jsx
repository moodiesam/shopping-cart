// a navagation bar to sit at the top of the page with links to welcome, shop, and checkout

import { Link } from "react-router-dom"
import "../styles/NavBar.css"

export default function NavBar({ shoppingCart }) {
    let total = 0;

    function totalItems() {
        shoppingCart.map(item => (
            total = total + Number(item.quantity)
        ))
    }
    totalItems()

    return (
        <header className="header">
            <h1 className="shopTitle">Shop Some Stuff</h1>
            <nav className="navBar">
                <Link to={`homepage`} className="navLink">Welcome</Link>
                <Link to={`shop`} className="navLink">Shop</Link>
                <Link to={`checkout`} className="navLink">Checkout({total}) </Link>
            </nav>
        </header>
    )
}