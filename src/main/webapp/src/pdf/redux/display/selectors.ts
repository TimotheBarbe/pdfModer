import {IStoreState} from "../../../state/models";

export const displaySelector = (state: IStoreState) => state.display;
export const displayViewSelector = (state: IStoreState) => displaySelector(state).view;
