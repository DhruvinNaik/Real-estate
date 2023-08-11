import React,{useState, useEffect} from "react"
import Heading from "../common/Heading"
import "../houses/houses.css"
import VillasCard from "./VillasCard"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"

const Villas = () => {
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
          <Heading title='Find new Villas' 
          subtitle='Find royal villas of your choices that provides you luxurious and heavenly environment and uncover your your luxurious life.' />
        </div>
      <VillasCard />
      <Footer />
    </>
  )
}

export default Villas