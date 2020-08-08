import React, {PureComponent} from "react";
import {Toolbar, Typography, WithStyles} from "@material-ui/core";
import UndoIcon from '@material-ui/icons/Undo';
import IconButton from "@material-ui/core/IconButton";
import RedoIcon from '@material-ui/icons/Redo';

interface IVersionSelectorProps extends WithStyles {
    changeVersion: (index: number) => void;
}

export default class VersionSelector extends PureComponent<IVersionSelectorProps> {

    private changeVersion = (change: number) => (event: React.MouseEvent<any>) => {
        event.stopPropagation();
        this.props.changeVersion(change);
    }

    public render() {
        const {classes} = this.props;
        return (
            <div className={classes.center}>
                <IconButton color={"inherit"} onClick={this.changeVersion(-1)}>
                    <UndoIcon/>
                    <Typography variant="subtitle1">
                        Undo
                    </Typography>
                </IconButton>
                <IconButton color={"inherit"} onClick={this.changeVersion(1)}>
                    <Typography variant="subtitle1">
                        Redo
                    </Typography>
                    <RedoIcon/>
                </IconButton>
            </div>
        )
    }
}