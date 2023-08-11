import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";

import About from "../about/About";

import Services from "../services/Services";
import Contact from "../contact/Contact";
import ItemDetails from "../houses/details/ItemDetails";
import Signup from "../register/signup/Signup";
import Login from "../register/login/Login";
import Houses from "../houses/Houses";
import Apartments from "../apartments/Apartments";
import Villas from "../villas/Villas";
import Offices from "../offices/Offices";
import Farmhouses from "../farmhouses/Farmhouses";
import Cart from "../cart/Cart";

const Pages = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/farmhouses" element={<Farmhouses/>} />
          <Route exact path="/houses" element={<Houses/>}/>
          <Route exact path="/apartments" element={<Apartments/>} />
          <Route exact path="/villas" element={<Villas/>} />
          <Route exact path="/offices" element={<Offices/>} />
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/details/:id" element={<ItemDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default Pages;
