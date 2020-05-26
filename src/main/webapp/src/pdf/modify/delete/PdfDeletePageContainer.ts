import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IPdfInfo, IStoreState} from "../../../state/models";
import {pdfSelector} from "../../redux/pdf/selectors";
import {loadPdfAction} from "../../redux/pdf/actions";
import PdfDeletePage from "./PdfDeletePage";
import {formRemoveSelector} from "../../redux/form/selectors";
import {setFormRemoveAction} from "../../redux/form/actions";

const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
    remove: formRemoveSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    load: (data: IPdfInfo) => dispatch(loadPdfAction(data)),
    setRemove: (data: string) => dispatch(setFormRemoveAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PdfDeletePage);