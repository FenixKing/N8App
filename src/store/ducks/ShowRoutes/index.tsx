import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    showRoute: 1
}

export const actionShowRoutes = createAction('SHOW_ROUTES');

export default createReducer(INITIAL_STATE, {
    [actionShowRoutes.type]: (state, action) => ({ ...state, showRoute: action.payload })
})