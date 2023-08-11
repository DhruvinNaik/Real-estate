import React, { useState, useEffect } from "react";
import "../villas/searchbar.css";
import { data } from "../data/Data";
import { BrowserRouter as Router, Routes, Route, useHistory, Link} from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  

  const addToCart = (item) => {
    
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    window.location.reload();
    if (!existingCartItem) {
      const updatedCartItems = [...cartItems, item];
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
     
    } else {
      const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
    
  };
  return (
    <>
   
      <div className="templateContainer">
        <div className="searchInput_Container">
          <img src="../images/hero/h1.png" className="im1" alt=""></img>
          <input
            id="searchInput"
            type="text"
            placeholder="Search area...."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <i className="fa fa-search"></i>
        </div>
        
        <div className="template_Container">
          {data
            .filter((val) => {
              if (searchTerm == "") {
                return true;
              } else if (
                val.location.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return true;
              }
              return false;
            })

            .map((val) => {
              const { id, cover, category, location, name, price, type } = val;
              const isItemAdded = cartItems.some((item) => item.id === id);
              return (
                <div className="template" key={val.id}>
                 
                 <Link to={`/details/${id}`}>
                  <div className="img">
                    <img src={cover} alt="" />
                  </div>
                </Link>

                  <div className="text">
                    <div className="category flex">
                      <span
                        style={{
                          background:
                            category === "For Sale" ? "#25b5791a" : "#ff98001a",
                          color:
                            category === "For Sale" ? "#25b579" : "#ff9800",
                        }}
                      >
                        {category}
                      </span>
                      <p onClick={() => addToCart(val)}>
                    {isItemAdded ? <AiFillHeart size={20} className="color" />  : <AiOutlineHeart size={20} className="clr" />}
                  </p>
                      {/* <button className="bt" onClick={() => addToCart(val)}>
                        +Add
                      </button> */}
                    </div>
                    <h4>{name}</h4>
                    <p>
                      <div className="area">
                        <i className="fa fa-location-dot"></i> {location}
                      </div>
                    </p>
                    <div className="horizontal-line"></div>
                  </div>
                  <div className="button flex">
                    <div>
                      <button className="btn2">{price}</button>
                      <label htmlFor="">
                        {category === "For Sale" ? "/total" : "/month"}
                      </label>
                      {/* <label htmlFor=""></label> */}
                      {/* {condition && <p>Rendered if condition is true</p>} */}
                    </div>
                    <span>{type}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SearchBar;


// import React, { useState } from "react";
// import "../villas/searchbar.css";
// import { data } from "../data/Data";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const SearchBar = ({ val }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const addToCart = (item) => {
//     // Check if the item is already in the cart
//     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);
  
//     if (!isItemInCart) {
//       // If the item is not in the cart, add it
//       cartItems.push(item);
//       localStorage.setItem("cartItems", JSON.stringify(cartItems));
//       alert("Item added to cart!");
//     } else {
//       alert("Item is already in the cart!");
//     }
//   };
  // const addToCart = (item) => {
 
  //   // Logic to add the current product to the cart
  //   // You can use local storage or state management library for this
  //   // For simplicity, let's assume you're using local storage
  //   const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  //   cartItems.push(item);
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // };