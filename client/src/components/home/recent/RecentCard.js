import React, {useState} from "react"
import { list } from "../../data/Data"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const RecentCard = () => {
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
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { id, cover, category, location, name, price, type } = val
          const isItemAdded = cartItems.some((item) => item.id === id);
          return (
            
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <p onClick={() => addToCart(val)}>
                    {isItemAdded ? <AiFillHeart size={20} className="color"/> : <AiOutlineHeart size={20} className="clr"/>}
                  </p>
                </div>
                <h4>{name}</h4>

                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>

              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> 
                  <label htmlFor="">{category === "For Sale" ?"/total":"/month"}</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard