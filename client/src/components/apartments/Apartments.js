import React,{useEffect, useState} from "react"
import Heading from "../common/Heading"
import "../houses/houses.css"
import ApartmentsCard from "./ApartmentsCard"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
const Apartments = () => {
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
          <Heading title='Find perfect apartments' 
          subtitle=' Find your perfect, modern apartment with convenient community and safety where city living meets comfort and style."' />
        </div>
      <ApartmentsCard />
      <Footer />
    </>
  )
}

export default Apartments