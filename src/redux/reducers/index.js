import { combineReducers } from "redux";
import loginValidator from "./loginValidator";
import login from "./login";

const rootReducer = combineReducers({
    loginValidator,
    login
});

export default rootReducer;