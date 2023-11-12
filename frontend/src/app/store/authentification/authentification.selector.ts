import {createSelector} from '@ngrx/store';
import {AppState} from "../app-state";
import {AuthState} from "./authentification.reducer";

export const authState = (state: AppState) => state.authentification;
export const selectUser = createSelector(
  authState,
  (state: AuthState) => ({
    token: state.token,
    currentUser: state.currentUser,
    authStatus: state.authStatus,
    authError: state.authError,
    isLoggedIn: state.isLoggedIn
  })
);

export const isLoggedIn = createSelector(
  authState,
  (state: AuthState) => ({
    isLoggedIn: state.isLoggedIn
  })
);

