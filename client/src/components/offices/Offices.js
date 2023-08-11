import React,{useState, useEffect} from "react"
import Heading from "../common/Heading"
import "../houses/houses.css"
import OfficesCard from "./OfficesCard"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
const Offices = () => {
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
          <Heading title='Find Offices For Work' 
          subtitle='
          Find your ideal workplace, unlocking potential and fostering growth in a space that suits your needs ' />
        </div>
      <OfficesCard />
      <Footer />
    </>
  )
}

export default Offices