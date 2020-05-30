import {IStoreState} from "../../../state/models";

export const formSelector = (state: IStoreState) => state.form;
export const formRemoveSelector = (state: IStoreState) => formSelector(state).remove;
export const formInsertSelector = (state: IStoreState) => formSelector(state).insert;
