import {applyMiddleware, combineReducers, createStore} from "redux";
import {setPdfReducer} from "../pdf/redux/pdf/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {setFormReducer} from "../pdf/redux/form/reducers";
import {setDisplayReducer} from "../pdf/redux/display/reducers";

const rootReducer = combineReducers({
    pdf: setPdfReducer,
    form: setFormReducer,
    display: setDisplayReducer
})

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware()
))