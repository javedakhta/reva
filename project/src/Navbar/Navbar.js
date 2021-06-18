import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Logo from "./Logo.png";


const Navbar = ()  => {
    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
            <NavLink className="navbar-brand 
            navbar-logo" to="/" exact>
                 <img className="RevaLogo" src={Logo} alt="Reva Logo" />
     
     </NavLink>  
     
     {/* <button className="navebar-togler"
     type="button"
     data-toggle="collapse"
     data-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent"
     aria-expanded="false"
     aria-label="Toggle navigation">
         <i className="fas fa-barstext-white"></i>
     </button> */}
     
     <div className="collapse navbar-collapse justify-content-end"
     id="navbabSupportedContent">
         <ul className="navbar-nav ml-auto">
         <div security="hori-selector">
                 <div className="left"></div>
                     <div className="right"></div>
                 
            </div>
             <li className="nav-item active">
                 <NavLink className="nav-link" to="/Home" exact>
                     home
                 </NavLink>
             </li>
             <li className="nav-item active">
                 <NavLink className="nav-link" to="/Login" exact>
                      Login
                 </NavLink>
             </li>
             <li className="nav-item active">
                 <NavLink className="nav-link" to="/Calendar" exact>
                      
                 calendar
                 </NavLink>
             </li>

         </ul>
     </div>
 
 
      </nav>
      
      
    )
  }
  
  export default Navbar;