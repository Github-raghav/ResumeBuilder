import React from "react";
import ResumePreview from "./ResumePreview";
import * as documentActions from '../action/documentActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {useFirestore} from "react-redux-firebase";




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
        resumeIds:newObj
      })
    }
    

    return (
      <div className="container full finalize-page" >
      <div className="funnel-section ">
          <div className="finalize-preview-card " id="resumePreview">
            <ResumePreview contactSection={contactSection} educationSection={educationSection} skinCd={props.document.skinCd}></ResumePreview>   
          </div>
          <div className="finalize-settings center">                    
              <div className=" download-resume resume-options">
                <p className="no-margin"  >
                  Download Resume As PdF
                </p>
                    <a style={{cursor:'pointer'}}    >download Resume</a>
             </div>
             <div className=" download-resume resume-options">
                <p className="no-margin"  >
                 Save to Database
                </p>
                    <a style={{cursor:'pointer'}} onClick={saveToDatabase}  >Save to Database</a>
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