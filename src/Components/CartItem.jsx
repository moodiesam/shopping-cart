// display each item in the user's shopping cart on the checkout page

export default function CartItem({ data }) {
    
    return (
        <>
            <h3>{data.product.title}</h3>
            <div>$ {data.product.price}</div>
            <div>Quantity: {data.quantity}</div>
        </>
    )
}