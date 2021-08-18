import { Card } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import "./Login.css"
import { isLoaded } from 'react-redux-firebase';
import *as authActions from "../action/authActions";
import update from "immutability-helper";

function LogIn(props) {
    console.log(props);
    const history=useHistory();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    console.log(props.auth.uid);
    useEffect(()=>{
     if(props.auth?.uid){
         history.push("/");
     }
    },[props])
    const handleEmail=(e)=>{
      setEmail(e.target.value);
    }
    const handlePassowrd=(e)=>{
        setPassword(e.target.value);
      }
 
      const onSubmit=()=>{
          let obj={email:email, password:password}
          console.log(obj);
          props.signIn(obj);
        //   history.push("/");
        }
        // console.log(props.signIn);
        // console.log(props.auth);
    const openRegister=()=>{
         history.push("/register")
    }
    return (
        <>
        {!isLoaded(props.auth)?<></>:
        <>
        {/* agar loading state m ho .*/}
        {props.authMine.loading?<h4>wait we are logging u in</h4>:
        
            <div className="login">
                <div className="section">
                    <Card className="container">
                        <h1>Enter Login Details</h1>
                        <div className="email">
                            <label>Email</label>
                            <input type="Email" name="email" value={email} onChange={handleEmail} />
                        </div>
    
                        <div className="password">
                            <label>Passsword</label>
                            <input type="password" name="password" value={password} onChange={handlePassowrd}/>
                        </div>
                       <div className="error__message">
                           <h1>erre</h1>
                        {props.authMine?.ErrorMessage?.message?
                      <div>{props.authMine?.ErrorMessage?.message}</div>:<></>    
                    }
                       </div>
                        <div className="buttons">
    
                            <button className="button" type="button" onClick={onSubmit} >Login</button>

                            {/* <button className="button" type="button" onClick={openRegister} >Register</button> */}
                        </div>
                    </Card>
                </div>
    
            </div>
        }
        </>
        }
        </>
    )
}

const mapStateToProps=(state)=>{
  return{
    //   firebase object 
      auth:state.firebase.auth,
    //   loading or error state
      authMine:state.auth
  }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signIn:
        (userData)=>{dispatch(authActions.signIn(userData))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LogIn);
