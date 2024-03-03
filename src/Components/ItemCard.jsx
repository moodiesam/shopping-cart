import { useState } from "react"
import "../styles/ItemCard.css"

export default function ItemCard ({ data, addToCart }) {

    const [quantity, setQuantity] = useState(0)

    return (
        <div className="shopItem">
            <img src={data.image} className="itemImage" alt="Item" />
            <h3>{data.title}</h3>
            <h4>$ {data.price}</h4>
            <form className="addToCart">
                <button type="button" 
                    onClick={() => addToCart(data.id, quantity)} 
                    className="addItemBtn">
                        add to cart
                </button>
                <input 
                    className="quantityInput"   
                    value={quantity} onChange={e => setQuantity(e.target.value)} 
                    type="number" 
                    max={10}
                    min={1}
                    >
                </input>
            </form>
        </div>
    )
}