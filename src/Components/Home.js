import React from 'react'
import { Button } from '@material-ui/core';
import "./Home.css";
// import Image from "../images/resume.png"
import { useHistory } from 'react-router-dom';
function Home() {
  const history=useHistory();
    const  openResume=()=>{
        history.push("/gettingStarted")
    }
    return (
        <div className="home">
            
            <h1>Create a Resume that Stands out</h1>
            <h3>Create a Resume that perfectly shows your skill</h3>
            <br></br>
            <Button variant="contained" color="secondary" onClick={openResume} >Get Started for free</Button>
            <img src="/images/resume.png" className="h-34rem"/>
        </div>
    )
}

export default Home
