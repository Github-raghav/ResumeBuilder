import './App.css';
import React,{useEffect} from 'react';
import { firebaseDb } from './firebase/firebaseConfig';
import Header from "./Components/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import GettingStarted from "./Components/GettingStarted"
import Contact from './Components/Contact';
import Education from './Components/Education';
import Final from './Components/Final';
import Register from './Components/Register';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import LogIn from './Components/LogIn';

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
          <PrivateRoute path="/education" exact component={Education}/>
          <PrivateRoute path="/final" exact component={Final}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/login" exact component={LogIn}/>
        </Switch>
      </Router>
    </div>
  );
}
function PrivateRoute({component:Component, ...rest}){
  const auth=useSelector(state=>state.firebase.auth);
  console.log(auth);
  console.log(Component);
  console.log(rest);
    
  return(
    <Route {...rest} render={(props)=>{
      return(isLoaded(auth) && !isEmpty(auth)?( <Component{...props}></Component>):
      ( <Redirect to="/login"> </Redirect>)
       )
    }   
  }></Route>
  )
       
}
  
export default App;
