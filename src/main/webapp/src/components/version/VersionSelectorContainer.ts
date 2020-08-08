import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IStoreState} from "../../state/models";
import VersionSelector from "./VersionSelector";
import {createStyles, Theme, withStyles} from "@material-ui/core";
import {changeVersion} from "../../pdf/redux/pdf/actions";

const styles = (theme: Theme) =>
    createStyles({
        center: {
            marginLeft: "auto",
            marginRight: "auto",
        }
    })

const mapStateToProps = (state: IStoreState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    changeVersion: (index: number) => dispatch(changeVersion(index)),
});

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(VersionSelector));