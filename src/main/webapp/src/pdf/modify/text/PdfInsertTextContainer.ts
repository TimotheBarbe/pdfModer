import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IPdfInfo, IStoreState} from "../../../state/models";
import {pdfSelector} from "../../redux/pdf/selectors";
import {loadPdfAction} from "../../redux/pdf/actions";
import PdfInsertText from "./PdfInsertText";
import {
    formTextColorSelector,
    formTextRotateSelector,
    formTextSelector,
    formTextSizeSelector,
    formTextXSelector,
    formTextYSelector
} from "../../redux/form/selectors";
import {
    setTextAction,
    setTextColorAction,
    setTextRotateAction,
    setTextSizeAction,
    setTextXAction,
    setTextYAction
} from "../../redux/form/actions";

const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
    x: formTextXSelector(state),
    y: formTextYSelector(state),
    rotate: formTextRotateSelector(state),
    color: formTextColorSelector(state),
    size: formTextSizeSelector(state),
    text: formTextSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    load: (data: IPdfInfo) => dispatch(loadPdfAction(data)),
    setTextColor: (data: string) => dispatch(setTextColorAction(data)),
    setTextY: (data: number) => dispatch(setTextYAction(data)),
    setTextX: (data: number) => dispatch(setTextXAction(data)),
    setTextSize: (data: number) => dispatch(setTextSizeAction(data)),
    setTextRotate: (data: number) => dispatch(setTextRotateAction(data)),
    setText: (data: string) => dispatch(setTextAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PdfInsertText);