import React, { useState, useEffect } from "react";
import "./cart.css";
import Header from "../common/header/Header";

import Heading from "../common/Heading";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    // Fetch cart items from local storage or state management
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const removeFromCart = (index) => {
    // Remove item from cart and update state/local storage
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Header cartItemCount={cartItems.length} />
      <div>
        <br />
        <FiArrowLeftCircle className="arrow-icon" onClick={() => history(-1)} />
        <span className="span" onClick={() => history(-1)}>
          Back
        </span>
        <hr className="line" />
        {cartItems.length === 0 ? (
          <div className="error">
            <h2>Your Cart is Empty</h2>
            <p>Explore our properties and add your favorites to the cart!</p>
            <br />
            <Link to="/services">
              <button className="btn">Continue Searching</button>
            </Link>
          </div>
        ) : (
          <ul>
            <div className="template_container">
              <br />
              <Heading title="Your Listed Properties" />
              {/* <span className="delete"><MdDelete size={20}/></span> */}
              <br />
              <br />
            </div>
            <section>
              {cartItems.map((item, index) => (
                <div className="temp" key={index}>
                  <div className="imgage">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="texts">
                    <div className="categories">
                      <span
                        style={{
                          background:
                            item.category === "For Sale"
                              ? "#25b5791a"
                              : "#ff98001a",
                          color:
                            item.category === "For Sale"
                              ? "#25b579"
                              : "#ff9800",
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                    <h4>{item.name}</h4>
                    <p>
                      <div className="areas">
                        <i className="fa fa-location-dot"></i> {item.location}
                      </div>
                    </p>
                  </div>

                  <div className="button_flex">
                    <div className="per">
                      <button className="btn00">{item.price}</button>
                      <label htmlFor="">
                        {item.category === "For Sale" ? "/total" : "/month"}
                      </label>
                    </div>

                    <span>{item.type}</span>
                  </div>

                  <button
                    className="btn002"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                  <button className="btn003">Contact Owner</button>
                </div>
              ))}
            </section>
          </ul>
        )}
      </div>
      <br />
      <br />

      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to solve your doubts.</p>
            </div>
            <Link to="/contact">
              <button className="btn5">Contact Us Today</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
