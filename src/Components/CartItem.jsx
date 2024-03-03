// display each item in the user's shopping cart on the checkout page

export default function CartItem({ data }) {
    console.log(data)
    return (
        <>
            <h3>item title</h3>
            <div>$ cost</div>
        </>
    )
}