// checkout page that will display everything added to the cart, allow for edits and checkout button

import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";
import { useState } from "react";


export default function Checkout() {
    const [shoppingCart, setShoppingCart] = useOutletContext();
    const [cartTotal, setCartTotal] = useState(0)

    let total = 0;

    function getCartTotal() {
        

        shoppingCart.map(item => (
            total = total + (item.product.price * item.quantity)
        ))
    }

    getCartTotal()

    // function to erase item from cart

    function deleteFromCart(item) {
        let filteredCart = shoppingCart.filter(a => a.product.id !== item);
        setShoppingCart(filteredCart);
    }
    

    return (
        <div>
            <h2>Your Cart</h2>
            {shoppingCart.map(item => (
                <CartItem 
                    key={item.product.id}
                    data={item}
                    deleteFromCart={deleteFromCart}
                />
            ))}
            <h3>Total: ${total}</h3>
        </div>

    )
}