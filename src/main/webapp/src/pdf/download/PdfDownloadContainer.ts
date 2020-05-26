import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IStoreState} from "../../state/models";
import PdfDownload from "./PdfDownload";
import {pdfSelector} from "../redux/pdf/selectors";

const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PdfDownload);