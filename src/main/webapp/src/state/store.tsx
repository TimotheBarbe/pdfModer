import {applyMiddleware, combineReducers, createStore} from "redux";
import {setPdfReducer} from "../pdf/redux/pdf/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {setFormReducer} from "../pdf/redux/form/reducers";

const rootReducer = combineReducers({
    pdf: setPdfReducer,
    form: setFormReducer
})

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware()
))