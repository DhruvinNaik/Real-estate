import React, { useState, useEffect } from "react"
import "../header/header.css"
import { nav } from "../../data/Data"
import { Link, useNavigate } from "react-router-dom"
import Cart from "../../cart/Cart"
const Header = ({cartItemCount}) => {
  const [navList, setNavList] = useState(false);
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
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
          <h4 className="list">
              
                          <Link to="/Cart">
                   My List : <span className="clr1">{cartItemCount}</span>
                 </Link>
                          </h4>

   {isAuthenticated ? (
         // Show Logout button when user is authenticated
         <button type="submit" onClick={handleLogout}>Logout</button>
       ) : (
         // Show Register and Sign In buttons when user is not authenticated
         <>
           <Link to="/signup"><button type="submit">Register</button></Link>
           <Link to="/login"><button type="submit">Sign In</button></Link>
        </>
      )}
           </div>     
               </div>
      </header>
    </>
  )
}

export default Header

// import React, { useState, useEffect } from "react"
// import "../header/header.css"
// import { nav } from "../../data/Data"
// import { Link, useNavigate } from "react-router-dom"
// import Cart from "../../cart/Cart"
// const Header = ({cartItemCount}) => {
//   const [navList, setNavList] = useState(false);
//   const isAuthenticated = !!localStorage.getItem('token');
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
    
//     navigate('/');
//     alert("you are logout")
//   };

//   return (
//     <>
      
//         <div className='container flex'>
//           <div className='logo'>
//             <img src='./images/logo.png' alt='logo' />
//           </div>

//           <div className='nav'>
//             <ul className={navList ? "small" : "flex"}>
//               {nav.map((list, index) => (
//                 <li key={index}>
//                   <Link to={list.path}>{list.text}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className='button flex'>
//             <h4 className="list">
              
//             <Link to="/Cart">
//     My List : <span className="clr1">{cartItemCount}</span>
//   </Link>
//             </h4>
//             {isAuthenticated ? (
//         // Show Logout button when user is authenticated
//         <button type="submit" onClick={handleLogout}>Logout</button>
//       ) : (
//         // Show Register and Sign In buttons when user is not authenticated
//         <>
//           <Link to="/signup"><button type="submit">Register</button></Link>
//           <Link to="/login"><button type="submit">Sign In</button></Link>
//         </>
//       )}
//           </div>
//         </div>
      
//     </>
//   )
// }

// export default Header;

// //'mongodb+srv://dhruvin31:dhff2RooGpRVV3tW@cluster0.qd4hik2.mongodb.net/?retryWrites=true&w=majority';