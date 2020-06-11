import {IStoreState} from "../../../state/models";

export const formSelector = (state: IStoreState) => state.form;
export const formRemoveSelector = (state: IStoreState) => formSelector(state).remove;
export const formInsertSelector = (state: IStoreState) => formSelector(state).insert;

export const formTextOptionSelector = (state: IStoreState) => formSelector(state).textOption;
export const formTextXSelector = (state: IStoreState) => formTextOptionSelector(state).x;
export const formTextYSelector = (state: IStoreState) => formTextOptionSelector(state).y;
export const formTextRotateSelector = (state: IStoreState) => formTextOptionSelector(state).rotate;
export const formTextColorSelector = (state: IStoreState) => formTextOptionSelector(state).color;
export const formTextSizeSelector = (state: IStoreState) => formTextOptionSelector(state).size;
export const formTextSelector = (state: IStoreState) => formTextOptionSelector(state).text;
