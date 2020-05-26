import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IPdfInfo, IStoreState} from "../../state/models";
import {pdfPageCountSelector, pdfSelectedPageSelector, pdfSelector} from "../redux/pdf/selectors";
import {createStyles, Theme, withStyles} from "@material-ui/core";
import PdfPage from "./PdfPage"
import {loadPdfAction, selectPageAction} from "../redux/pdf/actions";

const styles = (theme: Theme) =>
    createStyles({
        main: {
            border: `1px solid ${theme.palette.secondary.main}`,
            padding: 10,
            margin: 1,
        },
        selected: {
            border: `1px solid ${theme.palette.primary.main}`,
            padding: 10,
            margin: 1,
        },
        page: {
            "& > canvas": {
                border: `1px solid ${theme.palette.secondary.main}`,
            },
            margin: 5
        },
        top: {
            display: "flex",
            justifyContent: "space-between",
        },
        center: {
            flex: 1,
            textAlign: "center"
        }
    })

const mapStateToProps = (state: IStoreState) => ({
    selectedPage: pdfSelectedPageSelector(state),
    pageCount: pdfPageCountSelector(state),
    pdf: pdfSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    selectPage: (index: number) => dispatch(selectPageAction(index)),
    load: (data: IPdfInfo) => dispatch(loadPdfAction(data)),
});

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(PdfPage));