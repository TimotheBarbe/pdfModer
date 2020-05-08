import {applyMiddleware, createStore, combineReducers} from "redux";
import {setPdfReducer} from "../pdf/redux/reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    pdf: setPdfReducer
})

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware()
))