import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {  farms_data } from "../../data/Data";
import "../../villas/searchbar.css";
import "./itemdetails.css";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import {IoCallSharp} from "react-icons/io5";
import { FiArrowLeftCircle } from "react-icons/fi";
const ItemDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  // Find the item details based on the item ID
  const item = farms_data.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <>
      <Header />
      <FiArrowLeftCircle className="arrow-icon" onClick={() => history(-1)} />
        <span className="span" onClick={() => history(-1)}>
          Back
        </span>
        
      <div className="about-container">
        <div className="image">
          <img src={item.cover} alt="" />
        </div>
        <div className="category_flex">
          <span
            className="category-badge"
            style={{
              background:
                item.category === "For Sale" ? "#25b5791a" : "#ff98001a",
              color: item.category === "For Sale" ? "#25b579" : "#ff9800",
            }}
          >
            {item.category}
          </span>
          
        <div className="item-details">
          <h4 className="name">{item.name}</h4>
    
            <div className="area">
              <i className="fa fa-location-dot"></i> {item.location}
            </div>
          <div className="btn02">
          <button>{item.price}</button>
        </div>
        </div>

        </div>
        <div className="type">
          <span>{item.address}</span><br/>
          <span>{item.city}</span><br/>
          <span>{item.pin}</span><br/>
          <p className="pr">Contact Now ...</p>
        </div>
        <div className="btn02">
        <IoCallSharp className="call" size={25}/>
        </div>
        
        <br />

        {/* <div className="button_flex">
       <div>
         
         <label htmlFor="">
           {item.category === "For Sale" ? "/total" : "/month"}
         </label>
         <label htmlFor=""></label> 
         {condition && <p>Rendered if condition is true</p>}
       </div>
       
     </div> */}
        {/* <p onClick={() => addToCart(val)}>
       {isItemAdded ? <AiFillHeart size={20} className="color" />  : <AiOutlineHeart size={20} className="clr" />}
     </p> 
         {/* <button className="bt" onClick={() => addToCart(val)}>
           +Add
         </button> */}
         
      </div>

      <Footer />
    </>
  );
};

export default ItemDetails;
