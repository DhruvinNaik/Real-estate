import React, {useState, useEffect} from "react"


import Hero from "./hero/Hero"
import Location from "./location/Location"
import  Featured from "./featured/Featured"
import Recent from "./recent/Recent"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  

  useEffect(() => {
    // Fetch cart items from local storage or state management
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  return (
    <>

<Header cartItemCount={cartItems.length} />
    
      <Hero />
      
      <Featured/>
      <Recent />
      
      <Location />

      <Footer />
     
      
    </>
  )
}

export default Home
