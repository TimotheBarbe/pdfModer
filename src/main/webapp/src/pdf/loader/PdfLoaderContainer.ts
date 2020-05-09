import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import PdfLoader from "./PdfLoader";
import {IPdfInfo, IStoreState} from "../../state/models";
import {loadPdfAction} from "../redux/actions";

const mapStateToProps = (state: IStoreState) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    load: (data: IPdfInfo) => dispatch(loadPdfAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PdfLoader);