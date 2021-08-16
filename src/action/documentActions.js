import * as actionTypes from "./actionTypes"
const { v4: uuidv4 } = require('uuid');

export const setSkin=(skinCd)=>{
    let id =uuidv4();
    console.log(id);
    return {type:actionTypes.SET_SKIN,document:{skinCd:skinCd,id:id}}
}
export const updateSkinCd=(skinCd)=>{
    return {type:actionTypes.UPDATE_SKIN,document:{skinCd:skinCd}}
}