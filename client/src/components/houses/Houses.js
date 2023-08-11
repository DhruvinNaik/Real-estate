import React, {useState, useEffect} from "react"
import Heading from "../common/Heading"
import "./houses.css"
import {BrowserRouter as Router, Routes} from "react-router-dom";
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import HousesCard from "./HousesCard"
import cartItems from "../cart/Cart";

const Houses = () => {
  const [cartItems, setCartItems] = useState([]);
  

  useEffect(() => {
    // Fetch cart items from local storage or state management
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  return (
    <>

<Header cartItemCount={cartItems.length} />
      <br/>
        <div className='container'>
          <Heading title='Find your future Houses' subtitle='Find new houses for your family to settle with full comfort and safety in your favourite areas and create your lifetime joy.' />
        </div>
        <HousesCard/>
      <Footer />
    </>
  )
}

export default Houses