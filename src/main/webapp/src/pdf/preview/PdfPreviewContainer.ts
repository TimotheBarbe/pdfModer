import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IStoreState} from "../../state/models";
import PdfPreview from "./PdfPreview";
import {pdfSelectedPageSelector, pdfSelector} from "../redux/pdf/selectors";
import {createStyles, Theme, withStyles} from "@material-ui/core";
import {selectPageAction} from "../redux/pdf/actions";

const styles = (theme: Theme) =>
    createStyles({
        content: {
            maxWidth: "100%",
            maxHeight: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "auto",
        }
    })


const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
    selectedPage: pdfSelectedPageSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    selectPage: (index: number) => dispatch(selectPageAction(index)),
});

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(PdfPreview));