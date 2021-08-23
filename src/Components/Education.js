import React from 'react'
import { Card } from '@material-ui/core'
import { fieldCd } from '../constants/typeCodes'
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import* as educationActions from "../action/educationActions";
import { useState } from 'react';
import ResumePreview from './ResumePreview';


function Education(props) {
        const[education,setEducation]=useState(props.educationSection);
        const[contact,setContact]=useState(props.contactSection);
        const history=useHistory();
        
        const OnChange=(e)=>{
            let key=e.target.name;
            let val=e.target.value;
        
            setEducation({...education,[key]:val});
        }
// console.log(education);
        const getFieldData=(key)=>{
        if(education && education[key]){
            return education[key];
        }else{
            return "";        }
        }

        const nextPageHandler=()=>{
            props.updateEducation(education);
            history.push("/final");
        }

        const PreviousPageHandler=()=>{
            props.updateEducation(education);
            history.push("/contact");
        }

        const onSubmit=async()=>{
            if(props.educationSection!=null){
                props.updateEducation(education)
            }else{
                props.addEducation(education);
            }
            history.push("/final")
        }
    return (
        <div className="education" style={{position:"absolute",display:"grid",placeItems:"center",top: "150px", left: "61px"}}>
            <section className="contact__section">
                <Card className="Container">


                    <div className="contact__header">
                        <h1>Educational Details</h1>
                    </div>
                    <form className="Form">
                        <div className="grp1">

                            <div className="input__grp">
                                <label>School name</label>
                                <div className="inputText"> <input type="text"
                                name={fieldCd.SchoolName} value={getFieldData(fieldCd.SchoolName)} 
                                onChange={OnChange}
                                /> </div>
                                <div className="error"></div>
                            </div>

                            <div className="input__grp">
                                <label>class 12th cgpa</label>
                                <div className="inputText"> <input type="text" 
                                name={fieldCd.SchoolCGPA} value={getFieldData(fieldCd.SchoolCGPA)}
                                onChange={OnChange}
                                /> </div>
                                <div className="error"></div>
                            </div>
                        </div>
                        {/* 
              <div className="input__grp">
                  <label className="pfu__text"> Professional Summary</label>
                  <div className="pfu"> <input type="text"className="pfu__input"  
                   /> </div>
                  <div className="error"></div>
              </div> */}

                        <div className="grp1">

                            <div className="input__grp">
                                <label>college name</label>
                                <div className="inputText"> <input type="text"
                               name={fieldCd.College} value={getFieldData(fieldCd.College)}
                               onChange={OnChange}
                                /> </div>
                                <div className="error"></div>
                            </div>

                            <div className="input__grp">
                                <label>Graduation cgpa</label>
                                <div className="inputText"> <input type="text" 
                                name={fieldCd.GraduationCGPA} value={getFieldData(fieldCd.GraduationCGPA)}
                                onChange={OnChange}
                                /> </div>
                                <div className="error"></div>
                            </div>
                        </div>

                        <div className="grp1">
                            <div className="input__grp">
                                <label>Graduation Year</label>
                                <div className="inputText" > <input type="text"
                                name={fieldCd.GraduationYear} value={getFieldData(fieldCd.GraduationYear)}
                                onChange={OnChange}
                                /> </div>
                                <div className="error"></div>
                            </div>

                            <div className="input__grp">
                                <label>Course</label>
                                <div className="inputText"> <input type="text"
                               name={fieldCd.Degree} value={getFieldData(fieldCd.Degree)}
                               onChange={OnChange}
                                /> </div>
                                <div className="error"></div>
                            </div>
                        </div>

                        <div className="grp1">
                            <div className="input__grp">
                                <label>State</label>
                                <div className="inputText"> <input type="text"
                             name={fieldCd.State} value={getFieldData(fieldCd.State)}
                             onChange={OnChange}
                                /> </div>
                                <div className="error"></div>
                            </div>

                            <div className="input__grp">
                                <label>CITY</label>
                                <div className="inputText"> <input type="text"
                                 name={fieldCd.City} value={getFieldData(fieldCd.City)}
                                 onChange={OnChange}
                                /> </div>
                                <div className="error"></div>
                            </div>
                        </div>
                    </form>
                    <button className="nextButton" onClick={nextPageHandler}>Next</button>
                    <br></br>
                    <button className="nextButton" onClick={PreviousPageHandler}>Back</button>
                </Card>
                
                <div className="view_section">
                <Card className="card2" >
              <ResumePreview contactSection={contact} educationSection={education} skinCd={props?.document?.skinCd}></ResumePreview>
                </Card>
            </div>
            
            </section>

        </div>
    )
}
 const mapStateToProps=(state)=>{
  return{
      contactSection:state.contactSection,
      educationSection:state.educationSection,
      document:state.document
  }
 }
 const mapDispatchToProps=dispatch=>{
     return{
         addEducation:(education)=>dispatch(educationActions.add(education)),
         updateEducation:(education)=>dispatch(educationActions.update(education))
     }
 }
export default connect(mapStateToProps,mapDispatchToProps)(Education)
