import React, { useState,useEffect } from 'react';
import "./ResumePreview.css"
import { fieldCd } from '../constants/typeCodes'
function ResumePreview(props){
    
    const rvContact=(key, valToAppend)=>{
        if(props.contactSection){
          return props.contactSection[key]?props.contactSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

    const rvEducation=(key, valToAppend)=>{
        if(props.educationSection){
          return props.educationSection[key]?props.educationSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

        return (
            <div className={props.skinCd + " resume-preview "}>
                <div className='name_section'>
                    <p className="name"  > {rvContact(fieldCd.FirstName,' ')  + rvContact(fieldCd.LastName)}  </p>
                    <p className=' address'>{rvContact(fieldCd.City,', ') + rvContact(fieldCd.State,', ') +  rvContact(fieldCd.Country,', ') + rvContact(fieldCd.ZipCode,', ')}</p>
                    <p className='email'>{rvContact(fieldCd.Email ) }</p>
                    <p className='phone'>{rvContact(fieldCd.Phone) } </p>
                </div>

                <div className='profSummSection' >                   
                    <p className="heading">PROFESSIONAL SUMMARY</p>
                     <p className="prof_details">{rvContact(fieldCd.ProfSummary)}</p>
                </div>
                     <br></br>

                <div className={'educationSection text-upper'}>                   
                    <p className="heading">EDUCATIONAL DETAILS</p>
                     <div className={'divider'}></div>
                     <p className="schl">
                         <label>School:</label>
                         {rvEducation(fieldCd.SchoolName)}
                         </p>
                         <p className="schCgpa">Class 12th CGPA: { rvEducation(fieldCd.SchoolCGPA)} </p>
                     <p className="college">College:{rvEducation(fieldCd.College)}</p>
                     <p className="course">Course:{rvEducation(fieldCd.Degree)}</p>
                     <p className="Gcgpa">Grad.CGPA: {rvEducation(fieldCd.GraduationCGPA)}</p>
                     <p className="Gyear">Grad.Year:{rvEducation(fieldCd.GraduationYear)}</p>
                     <p className="state">State:{rvEducation(fieldCd.State)}</p>
                     <p className="city">City:{rvEducation(fieldCd.City)}</p>
                </div>
          
            </div>
        )
    }
export default ResumePreview;