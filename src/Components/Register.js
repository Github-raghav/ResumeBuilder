import { Card } from '@material-ui/core';
import React, { useState,useEffect } from 'react'
import { connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as authActions from "../action/authActions"
import "./Register.css";

function Register(props) {
    const history=useHistory();
    console.log(props);
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState("");

    const handleEmail= (e)=>{
        setEmail(e.target.value);
        }
        const handlePassword=(e)=>{
          setPassword(e.target.value);
        }
        useEffect(() => {
          console.log(props.auth);
          if(props.auth?.uid){
            history.push('/')
          }
        }, [props])

    const onsubmit=()=>{
        props.register({email:email,password:password})
    }
    console.log(props.authMine?.ErrorMessage?.message );
    return (
        <div className="register">
            <div className="section">
                <Card className="container">
            <h1> Register Details</h1>

                <div className="email">
                    <label>Email</label>
                    <input type="text" name="email" value={email} onChange={handleEmail} />
                </div>

                <div className="password">
                    <label>Password</label>
                    <input type="text" name="password" value={password} onChange={handlePassword} />
                </div>
            <div className="error">
                {props.authMine?.ErrorMessage?.message? 
                <span> {props.authMine?.ErrorMessage?.message}</span>:<></>
                }
            </div>
            <div className="buttons">
                <button className="button" onClick={onsubmit} type="button">Register</button>
            </div>
                </Card>
            </div>
            
        </div>
    )
}
const mapStateToProps=(state)=>{
     return{
         auth:state.firebase.auth,
         authMine:state.Register
     }
}
const mapDispatchToProps=(dispatch)=>{
 return{
     register:(object)=>{dispatch(authActions.register(object))}
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)
