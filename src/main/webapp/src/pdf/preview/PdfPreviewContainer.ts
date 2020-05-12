import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IStoreState} from "../../state/models";
import PdfPreview from "./PdfPreview";
import {pdfSelectedPageSelector, pdfSelector} from "../redux/selectors";
import {createStyles, Theme, withStyles} from "@material-ui/core";
import {selectPageAction} from "../redux/actions";

const styles = (theme: Theme) =>
    createStyles({
        page: {
            "& > canvas": {
                border: `1px solid ${theme.palette.primary.main}`,
            },
            margin: 5
        }
    })

const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
    selectedPage: pdfSelectedPageSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    selectPage: (index: number) => dispatch(selectPageAction(index)),

});

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(PdfPreview));