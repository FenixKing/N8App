import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    show: false
}

export const actionShow = createAction('SHOW');

export default createReducer(INITIAL_STATE, {
    [actionShow.type]: (state, action) => ({ ...state, show: action.payload })
})