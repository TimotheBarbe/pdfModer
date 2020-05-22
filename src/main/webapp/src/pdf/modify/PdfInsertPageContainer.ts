import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IPdfInfo, IStoreState} from "../../state/models";
import {pdfSelector} from "../redux/selectors";
import {loadPdfAction} from "../redux/actions";
import PdfInsertPage from "./PdfInsertPage";

const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    load: (data: IPdfInfo) => dispatch(loadPdfAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PdfInsertPage);