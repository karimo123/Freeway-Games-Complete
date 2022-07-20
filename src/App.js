import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import { games } from "./data"
import Games from "./Pages/Games";
import React, { useEffect, useState } from "react";
import GamesInfo from "./Pages/GamesInfo";
import Cart from "./Pages/Cart";
import Confirmation from "./Pages/Confirmation";
import AboutUs from "./Pages/AboutUs";
import FAQ from "./Pages/FAQ";



function App() {

  const [cart, setCart] = useState([])
  const [copyCart, setCopyCart] = useState([])
  const [name,setName] = useState("")
  

  function changeName(inputtedName){
    setName(inputtedName)
  }

  function addToCart(game) {
    setCart([...cart, { ...game, quantity: 1 }])
  }

  function numberOfItems(){
    let counter  = 0
    cart.forEach(item => {
      counter += item.quantity 
    })
    return counter
  }

  function changeQuantity(game, quantity) {
    setCart(cart.map(item => {
      if (item.id === game.id) {
        return {
          ...item,
          quantity: +quantity
        }
      } else {
        return item
      }
    }))
  }

  function removeItem(item) {
    setCart(cart.filter(game => game.id !== item.id))
  }

  function emptyCart(){
    setCopyCart(cart)
    setCart([])
  }


  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games games={games} />} />
          <Route path="/games/:id" element={<GamesInfo games={games} addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" element={<Cart name={name} cart={cart} removeItem={removeItem} changeQuantity={changeQuantity} changeName={changeName} emptyCart={emptyCart} />} />
          <Route path="/confirmation" element={<Confirmation name={name} copyCart={copyCart} />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/FAQ" element={<FAQ />} />

        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
