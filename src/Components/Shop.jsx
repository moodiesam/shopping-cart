// where the items are displayed

import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function Shop () {
    const [shopItems, setShopItems] = useState([]);
    const [data, setData] = useState(null)
    const [imageURL, setImageURL] = useState(null)
    const [itemDescription, setItemDescription] = useState(null)

    //useEffect function to fetch api of items

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/1`, {mode: "cors"})
            .then((response) => response.json())
            .then((response) => setData(response))
            .catch((error) => console.log(error))
    })

    //function to handle when item is added to cart

    return (
        <section className="shopItems">
            {/* map items to build the cards */}
            <ItemCard 
                imageURL={data.image}
                itemDescription={data.title}
                price={data.price}
            />
        </section>
    )
}