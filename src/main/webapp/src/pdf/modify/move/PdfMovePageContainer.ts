import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IMoveOption, IPdfInfo, IStoreState} from "../../../state/models";
import {pdfSelector} from "../../redux/pdf/selectors";
import {loadPdfAction} from "../../redux/pdf/actions";
import PdfMovePage from "./PdfMovePage";
import {formMoveSelector} from "../../redux/form/selectors";
import {setFormMoveAction} from "../../redux/form/actions";

const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
    move: formMoveSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    load: (data: IPdfInfo) => dispatch(loadPdfAction(data)),
    setMove: (data: IMoveOption) => dispatch(setFormMoveAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PdfMovePage);