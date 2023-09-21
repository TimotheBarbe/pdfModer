import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {ImageFormat, IPdfInfo, IStoreState} from "../../../state/models";
import {pdfSelector} from "../../redux/pdf/selectors";
import {loadPdfAction} from "../../redux/pdf/actions";
import PdfInsertImage from "./PdfInsertImage";
import {createStyles, Theme, withStyles} from "@material-ui/core";
import {
    formImageRotateSelector,
    formImageScaleSelector,
    formImageSelector,
    formImageXSelector,
    formImageYSelector
} from "../../redux/form/selectors";
import {
    setImageData,
    setImageFormat,
    setImageRotate,
    setImageScale,
    setImageX,
    setImageY
} from "../../redux/form/actions";

// Move to a better place ?
export const styles = (theme: Theme) =>
    createStyles({
        dropzone: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            borderWidth: "2px",
            borderRadius: "2px",
            borderColor: theme.palette.secondary.main,
            borderStyle: "dashed",
            backgroundColor: "#fafafa",
            color: theme.palette.secondary.main,
            outline: "none",
        },
        img: {
            height: "100%",
            width: "100%",
            display: "block",
        }
    })

const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
    image: formImageSelector(state),
    x: formImageXSelector(state),
    y: formImageYSelector(state),
    rotate: formImageRotateSelector(state),
    scale: formImageScaleSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    load: (data: IPdfInfo) => dispatch(loadPdfAction(data)),
    setImageData: (data: Uint8Array) => dispatch(setImageData(data)),
    setImageFormat: (data: ImageFormat) => dispatch(setImageFormat(data)),
    setImageX: (data: number) => dispatch(setImageX(data)),
    setImageY: (data: number) => dispatch(setImageY(data)),
    setImageRotate: (data: number) => dispatch(setImageRotate(data)),
    setImageScale: (data: number) => dispatch(setImageScale(data)),
});

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(PdfInsertImage));