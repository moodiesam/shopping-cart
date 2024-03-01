// where the items are displayed

import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "../styles/Shop.css"

export default function Shop () {
    const [shopItems, setShopItems] = useState([]);
    

    //useEffect function to fetch api of items

    useEffect(() => {
        async function getShopItems() {
            try {
                const items = []
                for (let i=1; i<7; i++) {
                    const response = await fetch(`https://fakestoreapi.com/products/${i}`, {mode: "cors"})
                    const data = await response.json();
                    items.push(data)
                }
                setShopItems(items)
                console.log(items)
            } catch (error) {
                console.log(error)
            }
        }
        getShopItems();
    }, []);

    //function to handle when item is added to cart
    

    

    return (
        <section className="shopItems">
            {shopItems.map(item => (
                <ItemCard 
                key={item.id}
                data={item}
            />
            ))}
            
        </section>
    )
}