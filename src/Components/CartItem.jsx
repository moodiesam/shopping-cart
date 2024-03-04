// display each item in the user's shopping cart on the checkout page

export default function CartItem({ data, deleteFromCart }) {
    
    return (
        <>
            <h3>{data.product.title}</h3>
            <div>$ {data.product.price}</div>
            <div>Quantity: {data.quantity}</div>
            <button onClick={() => deleteFromCart(data.product.id)} >Delete Item</button>
        </>
    )
}