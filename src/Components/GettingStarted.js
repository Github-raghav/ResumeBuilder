import React from 'react'
import { skinCodes } from '../constants/typeCodes';
import {connect} from "react-redux";
import * as docummentActions from "../action/documentActions";
import {useHistory} from "react-router-dom";
import "./GettingStarted.css";
function GettingStarted(props) {
    const history=useHistory();

    const onChange=  (skinCd)=>{
    if(props.document.id){ // means id was already there so user is updating id
        props.updateDocument(skinCd);
    }else{
        props.setDocument(skinCd); 
    }
    history.push("/contact");
    }
    return (
        <div className="resume">
        
        <div className="upperPart">
     <h1>Select Resume Template to Get Started</h1>
       <h3>you will be able to edit and change this template later</h3>
        </div>
        <div className="lowerPart">
              {/* 4 divs with different template */}

              {
              skinCodes.map((value,index)=> 
                  ( <div key={index} className="template">
                      <i></i>
                      <img className="template__img" src={'/images/' + value + '.svg'}/>
                      <button className="template__button" type="button" onClick={()=>onChange(value)} >USE TEMPLATE</button>
                  </div>)
              )
              }

        </div>
    </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        document:state.document,
    }
}
const mapDispatchToProps=dispatch=>{
  return{
      setDocument:(skinCd)=>dispatch(docummentActions.setSkin(skinCd)),
      updateDocument:(skinCd=>dispatch(docummentActions.updateSkinCd(skinCd)))
  }   
}

export default connect(mapStateToProps,mapDispatchToProps) (GettingStarted)
