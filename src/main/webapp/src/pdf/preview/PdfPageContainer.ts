import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IStoreState} from "../../state/models";
import {pdfSelectedPageSelector, pdfSelector} from "../redux/selectors";
import {createStyles, Theme, withStyles} from "@material-ui/core";
import PdfPage from "./PdfPage"
import {selectPageAction} from "../redux/actions";

const styles = (theme: Theme) =>
    createStyles({
        selected: {
            "& > canvas": {
                border: `1px solid ${theme.palette.primary.main}`,
            },
            margin: 5
        }
    })

const mapStateToProps = (state: IStoreState) => ({
    selectedPage: pdfSelectedPageSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    selectPage: (index: number) => dispatch(selectPageAction(index)),
});

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(PdfPage));