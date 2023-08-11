import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";

import { nav } from "../../data/Data"
import { Link, useNavigate } from "react-router-dom"


const Footer = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    navigate('/');
    alert("you are logout")
  };
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to solve your doubts.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="logo" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                You can Sign In to receive updates, hot deals, tutorials,
                discounts sent straignt in your inbox every month
              </p>

              <div className="input flex">
              {isAuthenticated ? (
         // Show Logout button when user is authenticated
         <button type="submit" onClick={handleLogout}>Logout</button>
       ) : (
         // Show Register and Sign In buttons when user is not authenticated
         <>
          
           <Link to="/login"><button type="submit">Sign In</button></Link>
        </>
      )}
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="bar">
      <span>&copy; 2023 Rent up.</span>
        <span> Thank you for visiting.</span>
      </div>
    </>
  );
};

export default Footer;
