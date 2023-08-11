import React,{useState, useEffect} from "react"
import Heading from "../common/Heading"
import "../houses/houses.css"
import ApartmentsCard from "./FarmhousesCard"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
const Farmhouses = () => {
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
          <Heading title='Find Farm-Houses' 
          subtitle=' Stay in harmony  and get relaxed with nature at our eco-friendly Farmhouses and plan your vacation trips.' />
        </div>
      <ApartmentsCard />
      <Footer />
    </>
  )
}

export default Farmhouses