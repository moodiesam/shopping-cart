// checkout page that will display everything added to the cart, allow for edits and checkout button

import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";


export default function Checkout() {
    const [shoppingCart, setShoppingCart] = useOutletContext();

    return (
        <div>
            <h2>Your Cart</h2>
            {shoppingCart.map(item => {
                <CartItem 
                    data={item}
                />
            })}
        </div>

    )
}