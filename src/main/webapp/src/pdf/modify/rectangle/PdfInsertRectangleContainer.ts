import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IPdfInfo, IStoreState} from "../../../state/models";
import {pdfSelector} from "../../redux/pdf/selectors";
import {loadPdfAction} from "../../redux/pdf/actions";
import PdfInsertRectangle from "./PdfInsertRectangle";
import {
    formRectangleColorSelector,
    formRectangleHeightSelector, formRectangleOpacitySelector,
    formRectangleRotateSelector,
    formRectangleWidthSelector,
    formRectangleXSelector,
    formRectangleYSelector
} from "../../redux/form/selectors";
import {
    setRectangleColorAction,
    setRectangleHeightAction, setRectangleOpacityAction,
    setRectangleRotateAction,
    setRectangleWidthAction,
    setRectangleXAction,
    setRectangleYAction
} from "../../redux/form/actions";

const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
    x: formRectangleXSelector(state),
    y: formRectangleYSelector(state),
    rotate: formRectangleRotateSelector(state),
    width: formRectangleWidthSelector(state),
    height: formRectangleHeightSelector(state),
    color: formRectangleColorSelector(state),
    opacity: formRectangleOpacitySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    load: (data: IPdfInfo) => dispatch(loadPdfAction(data)),
    setRectangleY: (data: number) => dispatch(setRectangleYAction(data)),
    setRectangleX: (data: number) => dispatch(setRectangleXAction(data)),
    setRectangleRotate: (data: number) => dispatch(setRectangleRotateAction(data)),
    setRectangleWidth: (data: number) => dispatch(setRectangleWidthAction(data)),
    setRectangleHeight: (data: number) => dispatch(setRectangleHeightAction(data)),
    setRectangleColor: (data: string) => dispatch(setRectangleColorAction(data)),
    setRectangleOpacity: (data: number) => dispatch(setRectangleOpacityAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PdfInsertRectangle);