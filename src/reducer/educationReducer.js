import { switchCase } from "@babel/types";
import * as actionTypes from "../action/actionTypes"
import initialState from "./intialState.json";

export default function educationReducer(state=initialState.educationSection,action){
  switch(action.type){
      case actionTypes.ADD_EDUCATION: return{...action.educationSection}
      case actionTypes.UPDATE_EDUCATION:return{...action.educationSection}

      default:{
          return state;
      }
  }
}