import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IStoreState} from "../../state/models";
import PdfDownload from "./PdfDownload";
import {testSelector} from "../../redux/selectors";
import {loadPdfAction} from "../../redux/actions";

const mapStateToProps = (state: IStoreState) => ({
    pdf: testSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    // select: () => dispatch(testAction("action")),
});

export default connect(mapStateToProps, mapDispatchToProps)(PdfDownload);