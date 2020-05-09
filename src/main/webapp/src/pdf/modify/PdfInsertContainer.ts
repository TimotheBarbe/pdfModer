import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IStoreState} from "../../state/models";
import PdfInsert from "./PdfInsert";
import {pdfSelector} from "../redux/selectors";
import {loadPdfAction} from "../redux/actions";

const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    load: (data: Uint8Array) => dispatch(loadPdfAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PdfInsert);