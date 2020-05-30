import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IPdfInfo, IStoreState} from "../../../state/models";
import {pdfSelector} from "../../redux/pdf/selectors";
import {loadPdfAction} from "../../redux/pdf/actions";
import PdfInsertPage from "./PdfInsertPage";
import {formInsertSelector} from "../../redux/form/selectors";
import {setFormInsertAction} from "../../redux/form/actions";

const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
    insert: formInsertSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    load: (data: IPdfInfo) => dispatch(loadPdfAction(data)),
    setInsert: (data: string) => dispatch(setFormInsertAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PdfInsertPage);