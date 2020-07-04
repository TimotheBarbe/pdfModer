import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import PdfLoader from "./PdfLoader";
import {IPdfInfo, IStoreState} from "../../state/models";
import {loadPdfAction} from "../redux/pdf/actions";
import {createStyles, Theme, withStyles} from "@material-ui/core";
import {pdfSelector} from "../redux/pdf/selectors";

const styles = (theme: Theme) =>
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
        }
    })

const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    load: (data: IPdfInfo) => dispatch(loadPdfAction(data)),
});

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(PdfLoader));