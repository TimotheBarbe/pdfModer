import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import App from "./App";
import {IStoreState} from "../state/models";

const mapStateToProps = (state: IStoreState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);