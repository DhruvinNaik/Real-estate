import React, {useState,useEffect} from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"

const About = () => {
  const [cartItems, setCartItems] = useState([]);
  

  useEffect(() => {
    // Fetch cart items from local storage or state management
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  return (
    <>

<Header cartItemCount={cartItems.length} />
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome to 'Rent Up', where we turn dreams into reality. As a leading real estate agency, we take pride in helping our clients find their perfect homes, investment properties, and lucrative opportunities in the real estate market.</p>
            <p className="head">Our Mission :</p>
            <p>At 'Rent Up', our mission is to provide exceptional service and personalized solutions to meet the unique needs of each client. Whether you are a first-time buyer, seasoned investor, or looking to sell your property, our dedicated team of experienced agents is committed to guiding you through every step of the process.</p>
            <p className="head">Why Choose Us ?</p>
            <ol>
              <li>Expertise: With years of experience in the industry, our skilled agents possess in-depth knowledge of the local market and trends. We stay updated on the latest real estate developments, ensuring you make informed decisions.</li><br/>
            <li>Personalized Approach: We believe that every client is unique, and so are their requirements. Our team takes the time to understand your preferences and tailor our services to match your specific needs.</li><br/>
            <li>Extensive Listings: As a well-established agency, we have an extensive portfolio of properties, ranging from cozy apartments to luxurious villas and prime commercial spaces. We offer an array of options to suit various budgets and lifestyles.</li><br/>
            <li>Smooth Transactions: Buying or selling property can be complex, but with our seamless and transparent processes, we make the journey stress-free and efficient, ensuring successful transactions.</li><br/>
            <li>Client Satisfaction: Our ultimate goal is your satisfaction. We measure our success by the smiles on our clients' faces when they find the perfect property or achieve their real estate goals.</li><br/>
            <li>Integrity and Trust: We value integrity and honesty above all else. You can trust us to provide accurate information and act in your best interest throughout the entire process.</li><br/>
            <li>After-Sales Support: Our services don't end at closing the deal. We provide continued support and assistance even after the transaction is complete, ensuring a smooth transition into your new property.</li><br/>
            </ol>
            <div className="horizontal-line"></div>
            <br/>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About