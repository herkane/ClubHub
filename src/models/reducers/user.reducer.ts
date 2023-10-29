import {User} from "../user.model";
import {createReducer, on} from "@ngrx/store";
import {loadUser, login, logout} from "../actions/user.actions";

export interface UserState {
  loggedIn: boolean;
  user: User | null;
}

export const initialState: UserState = {
  loggedIn: false,
  user: null
}

export const userReducer = createReducer(
  initialState,
  on(login, (state, {user}) => ({...state, loggedIn: true, user: user})),
  on(logout, (state) => ({...state, loggedIn: false, user: null})),
  on(loadUser, (state) => ({...state, loggedIn: true, user: JSON.parse(localStorage.getItem('user') ?? '{}')}))
);
