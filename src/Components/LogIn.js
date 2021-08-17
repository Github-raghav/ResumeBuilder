import { Card } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Login.css"

function LogIn() {
    const history=useHistory();
    const openRegister=()=>{
         history.push("/register")
    }
    return (
        <div className="login">
            <div className="section">
                <Card className="container">
                    <h1>Enter Login Details</h1>
                    <div className="email">
                        <label>Email</label>
                        <input type="Email" name="email" />
                    </div>

                    <div className="password">
                        <label>Passsword</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="buttons">

                        <button className="button" type="button" >Login</button>
                        <button className="button" type="button" onClick={openRegister} >Register</button>
                    </div>
                </Card>
            </div>

        </div>
    )
}

export default LogIn
