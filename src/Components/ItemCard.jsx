import "../styles/ItemCard.css"

export default function ItemCard ({ data }) {
    return (
        <div className="shopItem">
            <img src={data.image} className="itemImage" alt="Item" />
            <h3>{data.title}</h3>
            <h4>{data.price}</h4>
            <form className="addToCart">
                <button type="submit" className="addItemBtn">add to cart</button>
                <input className="quantityInput" type="number" max={10}></input>
            </form>
        </div>
    )
}