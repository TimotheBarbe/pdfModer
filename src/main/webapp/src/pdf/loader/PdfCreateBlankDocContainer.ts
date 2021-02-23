import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IPdfInfo, IStoreState} from "../../state/models";
import {loadPdfAction} from "../redux/pdf/actions";
import PdfCreateBlankDoc from "./PdfCreateBlankDoc";


const mapStateToProps = (state: IStoreState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    load: (data: IPdfInfo) => dispatch(loadPdfAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PdfCreateBlankDoc);