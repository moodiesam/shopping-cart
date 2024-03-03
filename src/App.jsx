import { useState } from "react";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  const [shoppingCart, setShoppingCart] = useState([])

  return (
    <>
      <NavBar />
      <Outlet context={[shoppingCart, setShoppingCart]} />
    </>
  )
}

export default App;
