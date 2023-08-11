import React, {useState} from "react";
import '../villas/searchbar.css';
import {villas_data} from "../data/Data";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const SearchBar=({val})=>{
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
        <img src='../images/hero/h1.png' className="im1" alt=''></img>
          <input id="searchInput" type="text" placeholder="Search area...." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} /><i className="fa fa-search"></i>
        </div>
        <div className="template_Container">
          {
            villas_data 
              .filter((val) => {
                
                if(searchTerm == ""){
                  return val;
                }else if(val.location.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                const { id, cover, category, location, name, price, type } = val
                const isItemAdded = cartItems.some((item) => item.id === id);
                return(
                  <div className="template" key={val.id}>
               <Link to={`/details/${id}`}>
                  <div className="img">
                    <img src={cover} alt="" />
                  </div>
                </Link>
                     
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <p onClick={() => addToCart(val)}>
                    {isItemAdded ? <AiFillHeart size={20} className="color" /> : <AiOutlineHeart size={20} className="clr" />}
                  </p>
                </div>
                <h4>{name}</h4>
                <p>
                  <div className="area">
                  <i className='fa fa-location-dot'></i> {location}
                  </div>
                </p>
               
                <div className="horizontal-line"></div>
              
              </div>
              <div className='button flex'>
                <div className="per">
                  <button className='btn2'>{price}</button>

                  <label htmlFor="">{category === "For Sale" ?"/total":"/month"}</label>
                  {/* <label htmlFor=""></label> */}
                  {/* {condition && <p>Rendered if condition is true</p>} */}
                </div>
                <span>{type}</span>
              </div>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default SearchBar;
// import React from "react"
// import {villas_data} from "../data/Data"

// const VillasCard = () => {
//   return (
//     <>
//       <div className='content grid3 mtop'>
//         {villas_data.map((val, index) => {
//           const { cover, category, location, name, price, type } = val
//           return (
//             <div className='box shadow' key={index}>
//               <div className='img'>
//                 <img src={cover} alt='' />
//               </div>
//               <div className='text'>
//                 <div className='category flex'>
//                   <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
//                   <button className='bt'>+Add</button>
//                 </div>
//                 <h4>{name}</h4>
//                 <p>
//                   <i className='fa fa-location-dot'></i> {location}
//                 </p>
//               </div>
//               <div className='button flex'>
//                 <div>
//                   <button className='btn2'>{price}</button>                   
//                   <label htmlFor="">{category === "For Sale" ?"/total":"/month"}</label>
//                 </div>
//                 <span>{type}</span>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }

// export default VillasCard