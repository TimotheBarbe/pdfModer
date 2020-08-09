import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IStoreState, View} from "../../state/models";
import ViewSelector from "./ViewSelector";
import {setDisplayViewAction} from "../../pdf/redux/display/actions";
import {displayViewSelector} from "../../pdf/redux/display/selectors";
import {createStyles, Theme, withStyles} from "@material-ui/core";

const styles = (theme: Theme) =>
    createStyles({
        group: {
            marginRight: 8,
        },
        text: {
            display: "inline-flex",
            marginRight: 5,
        },
    })

const mapStateToProps = (state: IStoreState) => ({
    view: displayViewSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    setView: (view: View) => dispatch(setDisplayViewAction(view)),
});

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(ViewSelector));