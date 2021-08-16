import { Card } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { fieldCd } from '../constants/typeCodes'
import * as contactAction from "../action/contactActions";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import "./Contact.css";
import {Button} from "@material-ui/core"
import* as educationActions from "../action/educationActions";
import ResumePreview from './ResumePreview';
import Education from './Education';


function Contact(props) {
    const history=useHistory();
    const [contact, setContact] = useState(props.contactSection);
    const[education,setEducation]=useState(props.educationSection);
    const OnChange = (e) => {
        let key = e.target.name;
        let val = e.target.value;
        setContact({ ...contact, [key]: val })
    }
    console.log(contact);
    //  handling the authentication if document ,doc id or user id is missing 
    // dont allow to access this m page.
    useEffect(() => {
        if (!props.document.id || !props.document) {
            history.push("/gettingStarted");
        }
    }, [])

    // handle is already some of inputs are filled ,data should be there if accessed again
    const getFieldData = (key) => {
        if (contact && contact[key]) {
            return contact[key];
        } else {
            return "";
        }
    }
    const onSubmit=async()=>{
        if(props.contactSection!=null){  // means already something is there in its objects so just have to update
            props.updateContact(contact);
        }else{
            props.addContact(contact);  // if null then add.
        }
        history.push("/education");
    }

    return (
        <div className="contact">
            <div className="contact__section">
                <Card className="Container">


                    <div className="contact__header">
                    <h1>Personal Details</h1>
                    </div>
                <form className="Form">
                    <div className="grp1">

                    <div className="input__grp">
                        <label>First Name</label>
                        <div className="inputText"> <input type="text" name={fieldCd.FirstName}
                         value={getFieldData(fieldCd.FirstName)} onChange={OnChange}
                          /> </div>
                        <div className="error"></div>
                    </div>

                    <div className="input__grp">
                        <label>Last Name</label>
                        <div className="inputText"> <input type="text" name={fieldCd.LastName}
                         value={getFieldData(fieldCd.LastName)} onChange={OnChange} 
                         /> </div>
                        <div className="error"></div>
                    </div>
                    </div>

                    <div className="input__grp">
                        <label className="pfu__text"> Professional Summary</label>
                        <div className="pfu"> <input type="text"className="pfu__input" name={fieldCd.ProfSummary}
                         value={getFieldData(fieldCd.ProfSummary)} onChange={OnChange} 
                         /> </div>
                        <div className="error"></div>
                    </div>


                   <div className="grp1">
                    <div className="input__grp">
                        <label>Email</label>
                        <div className="inputText" > <input type="Email" name={fieldCd.Email}
                         value={getFieldData(fieldCd.Email)} onChange={OnChange} 
                         /> </div>
                        <div className="error"></div>
                    </div>

                    <div className="input__grp">
                        <label>Phone</label>
                        <div className="inputText"> <input type="text" name={fieldCd.Phone} 
                        value={getFieldData(fieldCd.Phone)} onChange={OnChange} 
                        /> </div>
                        <div className="error"></div>
                    </div>
                   </div>
                   
                   <div className="grp1">
                    <div className="input__grp">
                        <label>Pin Code</label>
                        <div className="inputText"> <input type="text" name={fieldCd.ZipCode}
                         value={getFieldData(fieldCd.ZipCode)} onChange={OnChange}
                          /> </div>
                        <div className="error"></div>
                    </div>

                    <div className="input__grp">
                        <label>Country</label>
                        <div className="inputText"> <input type="text" name={fieldCd.Country} 
                        value={getFieldData(fieldCd.Country)} onChange={OnChange}
                         /> </div>
                        <div className="error"></div>
                    </div>
                   </div>
                </form>
                    <button className="nextButton" onClick={onSubmit}>Next</button>
                </Card>
            <div className="view_section">
                <Card className="card2">
              <ResumePreview contactSection={contact}
              educationSection={education}
              skinCd={props?.document?.skinCd}></ResumePreview>
                </Card>
            </div>
            </div>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        contactSection: state.contactSection,
        document: state.document,
        educationSection:state.educationSection
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addContact: (contact) => dispatch(contactAction.add(contact)),
        updateContact: (contact) => dispatch(contactAction.update
            (contact))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact)
