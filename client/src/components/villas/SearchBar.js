import React, {useState} from "react";
import '../villas/searchbar.css';
import {villas_data} from "../data/Data";
import {Link} from 'react-router-dom';


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <img src='../images/hero/h2.png' className="im1" alt=''></img>
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
                  <button className='bt'>+Add</button>
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
                <div>
                  <button className='btn2'>{price}</button>
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