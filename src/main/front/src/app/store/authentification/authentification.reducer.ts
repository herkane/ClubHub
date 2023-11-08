import {createReducer, on} from '@ngrx/store';
import {
  LOAD_USER,
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS, LOGOUT_USER, LOGOUT_USER_FAIL, LOGOUT_USER_SUCCESS
} from "./authentification.action";
import {User} from "../../../models/shared.models";

export interface AuthState {
  token: string;
  isLoggedIn: boolean;
  authStatus: 'pending' | 'loading' | 'error' | 'success';
  authError: string;

  currentUser: User;
}

export const initialState: AuthState = {
  token: '',
  isLoggedIn: false,
  authStatus: 'pending',
  authError: '',

  currentUser: {} as User,
};

export const authentificationReducer = createReducer(
  initialState,
  //LOGIN
  on(LOGIN_USER, (state) => ({ ...state, authStatus: 'loading' })),
  on(LOGIN_USER_SUCCESS, (state, { token }) => ({
    ...state,
    token: token,
    isLoggedIn: true,
    authError: "",
    authStatus: 'success',
  })),
  on(LOGIN_USER_FAIL, (state, { error }) => ({
    ...state,
    isLoggedIn: false,
    authError: error,
    authStatus: 'error',
  })),
  //LOGOUT
  on(LOGOUT_USER, (state) => ({ ...state, authStatus: 'loading' })),
  on(LOGOUT_USER_SUCCESS, (state, { success }) => ({
    ...state,
    token: '',
    isLoggedIn: false,
    authError: "",
    authStatus: 'success',
  })),
  on(LOGOUT_USER_FAIL, (state, { error }) => ({
    ...state,
    token: '',
    isLoggedIn: false,
    authError: error,
    authStatus: 'error',
  })),
  // Current User
  on(LOAD_USER, (state) => ({ ...state, authStatus: 'loading' })),
  on(LOAD_USER_SUCCESS, (state, { user }) => ({
    ...state,
    currentUser: user,
    isLoggedIn: true,
    authStatus: 'success',
    authError: "",
  })),
  on(LOAD_USER_FAIL, (state, { error }) => ({
    ...state,
    currentUser: {} as User,
    isLoggedIn: false,
    authStatus: 'error',
    authError: error,
  })),
);
