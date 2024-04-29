import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import axios from "axios";
import rootReducer from "./reducers";
import rootLogic from "./logic";
import { createLogicMiddleware } from "redux-logic";

const deps = {
    httpClient: axios,
}

// Create middleware
const logicMiddleware = createLogicMiddleware(rootLogic, deps);

// Prepare middleware to ensure redux can use it
const composedMiddleware = compose(applyMiddleware(logicMiddleware));

// Our Redux Store is where application state is held
// Create store with reducers and all our logic
export default createStore(rootReducer, composedMiddleware);