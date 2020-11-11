import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IPdfInfo, IStoreState} from "../../../state/models";
import PdfRotationPage from "./PdfRotationPage";
import {pdfSelector} from "../../redux/pdf/selectors";
import {loadPdfAction} from "../../redux/pdf/actions";

const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    load: (data: IPdfInfo) => dispatch(loadPdfAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PdfRotationPage);