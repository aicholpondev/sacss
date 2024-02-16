import React from 'react';
import logo from "../../assests/img/logo.svg"
const Header = () => {
    return (

     <div id="header">
         <div className="container">
             <div className="header">

                 <div className="header__logo">
                     <img src={logo} alt="img"/>
                     <h1>Artificial Intelligence</h1>
                 </div>

                 <nav className="header__nav">
                     <a href="#">Home</a>
                     <a href="#">About</a>
                     <a href="#">Services</a>
                     <a href="#">Blog</a>
                     <a href="#">Contact</a>
                 </nav>
                 <button>Sign In</button>
             </div>
         </div>
     </div>
    );
};

export default Header;