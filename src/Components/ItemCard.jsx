import "../styles/ItemCard.css"

export default function ItemCard ({ imageURL, itemDescription, price }) {
    return (
        <div className="shopItem">
            <img src={imageURL} className="itemImage" alt="Item" />
            <h3>{itemDescription}</h3>
            <h4>{price}</h4>
            <div>add to cart</div>
        </div>
    )
}