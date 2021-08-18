import React from 'react'
// import Logo from "../images/logo.png"
import "./Header.css";
import { Link, NavLink, useHistory } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import * as authActions from "../action/authActions";
import {isLoaded,isEmpty} from "react-redux-firebase"
function LoggesOut(props){
 return(
     <ul>
         <li>
            <NavLink to="/register">Register</NavLink> 
         </li>
         <li>
             <NavLink to="/login">Sign In</NavLink>
         </li>
     </ul>
 )
}

function Header(props) {

    const history=useHistory();
    const auth=useSelector(state=>state.firebase.auth);
    
    const  openAboutUs=()=>{
        history.push("/aboutUs")
    }
    const  openRegister=()=>{
        history.push("/register")
    }
    const  openLogIn=()=>{
        history.push("/login")
    }
    const handleLogout=()=>{
        props.signOut();
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
            {/* uncomment it later */}
            {/* <ul>
            <li className="header_li">
                Resume Templates
                </li>
                
                <li className="header_li "onClick={openAboutUs} >
                About Us
                </li>
            </ul> */}
            { isLoaded(auth) && !isEmpty(auth)? <>
            
            <ul className="header__links">
                
                <li className="header_li" >
                    <NavLink to="/">
                        Logged in as {auth.email}
                    </NavLink>
                </li>
                <li className="header_li" onClick={handleLogout}> 
                Sign Out
                </li>
                
                
                </ul>
                </>:<LoggesOut/>
            }
    
        </div>
    )
}
const mapStateToProps=(state)=>{
 return{
     auth:state.firebase.auth
 }
}
const mapDispatchToProps=(dispatch)=>{
    return{
 signOut:()=>dispatch(authActions.signOut())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
