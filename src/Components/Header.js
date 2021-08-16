import React from 'react'
// import Logo from "../images/logo.png"
import "./Header.css";
import { Link, useHistory } from 'react-router-dom';
function Header() {

    const history=useHistory();
    const  openAboutUs=()=>{
        history.push("/aboutUs")
    }
   

    return (
        <div className=" header">
            {/* left  */}
          <div className="logo">
              <img src="/images/logo.png" layout="fill" objectfit="contain" className="image"
              />
              {/* <Logo/> */}
          </div>
            {/* right */}
            <ul className="header__links">
                 <li className="header_li">
                Resume Templates
                </li>
                
                <li className="header_li "onClick={openAboutUs} >
                About Us
                </li>
                <li className="header_li" >
                Register
                </li>
                <li className="header_li">
                Sign In
                </li>
                
                
                </ul>
    
        </div>
    )
}

export default Header