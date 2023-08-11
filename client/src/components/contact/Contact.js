import React, {useState, useEffect} from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"
const Contact = () => {
  const [cartItems, setCartItems] = useState([]);
  

  useEffect(() => {
    // Fetch cart items from local storage or state management
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  return (
    <>

<Header cartItemCount={cartItems.length} />
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10' placeholder="Type your problems..."></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact