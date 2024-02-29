import { useState } from "react";
import Homepage from "./Components/Homepage";
import NavBar from "./Components/NavBar";
import Shop from "./Components/Shop";

function App() {
  const [shoppingCart, setShoppingCart] = useState([])

  return (
    <>
      <NavBar />
      <Shop
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </>
  )
}

export default App;
