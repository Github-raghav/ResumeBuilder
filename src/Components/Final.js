import React from "react";
import ResumePreview from "./ResumePreview";
import * as documentActions from '../action/documentActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';



   function Finalize(props) {
     
    let educationSection= props.educationSection;
    let contactSection=props.contactSection;
    

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
                    <a style={{cursor:'pointer'}}    >Save to Database</a>
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
      
  }
}

const mapDispatchToProps=(dispatch)=>{
      return{
         documentActions:bindActionCreators(documentActions, dispatch)
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(Finalize)