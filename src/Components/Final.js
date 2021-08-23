import React from "react";
import ResumePreview from "./ResumePreview";
import * as documentActions from '../action/documentActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {useFirestore} from "react-redux-firebase";
import { Card } from "@material-ui/core";
import  jsPDF  from "jspdf";
import html2canvas from 'html2canvas';
  import "./Final.css"


   function Finalize(props) {
    const firestore = useFirestore();
    let documentId=props.document;
    let educationSection= props.educationSection;
    let contactSection=props.contactSection;

    const saveToDatabase= async()=>{
      console.log(props.auth.uid)
      let user = await firestore.collection('users').doc(props.auth.uid).get();
      user = user.data();
      console.log(user);
      let newObj =null;
      if(user.resumeIds!=undefined)
      newObj = {...user.resumeIds,[documentId.id]:{educationSection:educationSection,contactSection:contactSection,document:documentId}}
      else
      newObj={[document.id]:{educationSection:educationSection,contactSection:contactSection,document:document}}
      await firestore.collection('users').doc(props.auth.uid).update({
        resumeIds:{...newObj}
      })
      console.log(newObj);
    }
       const downloadResume=()=> {
       const input = document.getElementById('resumePreview');
      console.log(document)
       html2canvas(input)
         .then((canvas) => {
           const imgData = canvas.toDataURL('image/png');
           const pdf = new jsPDF("p", "mm", "a4");
           const width = pdf.internal.pageSize.getWidth();
           const height = pdf.internal.pageSize.getHeight();
           pdf.addImage(imgData, 'JPEG', 0, 0,width,height);
           // pdf.output('dataurlnewwindow');
           pdf.save("resume.pdf");
         }).catch(function(error){
           console.log(error)
         })
     }

    return (
      <div className="container full finalize-page" >
      <div className="funnel-section ">
          <div className="finalize "id="resumePreview">
            <Card className="card">
            <ResumePreview contactSection={contactSection} educationSection={educationSection} skinCd={props.document.skinCd}></ResumePreview>   
            </Card>
          </div>
          <div className="finalize-settings ">                    
              <div className=" download-resume ">
               
                    <a  className="buttonss" 
                    // style={{cursor:'pointer',marginBottom:"14px",position:"relative",top:"-15rem",marginLeft:"14rem" }}   onClick={downloadResume} 
                     >download Resume</a>
             </div>
             <br></br>
             <div className=" download-resume">
               
                    <a className="buttonss" 
                    // style={{cursor:'pointer',position:"relative",top:"-15rem",marginLeft:"14rem"}} onClick={saveToDatabase} 
                     >Save to Database</a>
             </div>
    </div>
    </div>
    </div>
    )    
}
let mapStateToProps=(state)=>{
  return {
      contactSection:state.contactSection,
      educationSection:state.educationSection,
      document:state.document,
      auth:state.firebase.auth
      
  }
}

const mapDispatchToProps=(dispatch)=>{
      return{
         documentActions:bindActionCreators(documentActions, dispatch)
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(Finalize)