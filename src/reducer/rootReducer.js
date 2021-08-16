import {combineReducers} from "redux";
import contactReducer from "./contactReducer";
import documentReducer from "../reducer/documentReducer";
import educationReducer from "./educationReducer";
import initialState from "../reducer/intialState.json"
import  * as actionTypes  from "../action/actionTypes";
import { firebaseReducer, firestoreReducer } from "react-redux-firebase";

// const rootReducer =combineReducer({
//     firestore:firestoreReducer,
//     firebase:firebaseReducer,
//     contactSection:contactReducer,
//     educationSection:educationReducer,
//     document:documentReducer
// })
// export default rootReducer;

const appReducer = combineReducers({
    firestore: firestoreReducer,
    firebase:firebaseReducer,
    contactSection:contactReducer,
    educationSection:educationReducer,
    document:documentReducer
  })
  const rootReducer = (state=initialState, action) => {
    if (action.type === actionTypes.SIGN_OUT) {
      state = undefined
    }
    return appReducer(state, action)
  }
  export default rootReducer;