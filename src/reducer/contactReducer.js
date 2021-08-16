import initialState from "./intialState.json";
import * as actionTypes from "../action/actionTypes";

export  default function contactReducer(state=initialState.contactSection,action){
switch(action.type){
    case actionTypes.ADD_CONTACT:return{ ...action.contactSection}
    case actionTypes.UPDATE_CONTACT:return{...action.contactSection}
    default:{
        return state;
    }
}
}