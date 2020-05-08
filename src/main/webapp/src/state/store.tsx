import {applyMiddleware, createStore, combineReducers} from "redux";
import {setTestReducer} from "../redux/reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    pdf: setTestReducer
})

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware()
))