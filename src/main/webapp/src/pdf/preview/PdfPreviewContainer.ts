import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IStoreState} from "../../state/models";
import PdfPreview from "./PdfPreview";
import {pdfSelectedPageSelector, pdfSelector} from "../redux/pdf/selectors";

const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
    selectedPage: pdfSelectedPageSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({});

export default (connect(mapStateToProps, mapDispatchToProps)(PdfPreview));