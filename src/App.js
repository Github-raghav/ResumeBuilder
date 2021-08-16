import './App.css';
import React,{useEffect} from 'react';
import { firebaseDb } from './firebase/firebaseConfig';
import Header from "./Components/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import GettingStarted from "./Components/GettingStarted"
import Contact from './Components/Contact';
import Education from './Components/Education';
import Final from './Components/Final';

function App() {

  useEffect(() => {
    firebaseDb.collection("resumes").get().then(alldocs=>{
      alldocs.forEach(doc =>{
        console.log(doc.data());
      })
    })
  }, [])
  return (
    <div className="App">
      {/* <h1>app</h1> */}
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus"exact component={AboutUs} />
          <Route path="/gettingStarted" exact component={GettingStarted}/>
          <Route path="/contact" exact component={Contact} />
          <Route path="/education" exact component={Education}/>
          <Route path="/final" exact component={Final}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
