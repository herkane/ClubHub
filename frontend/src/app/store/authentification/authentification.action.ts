import {Action, createAction, props} from "@ngrx/store";
import {User} from "../../../models/shared.models";
// Login
export const LOGIN_USER = createAction(
  '[User] Login User',
  props<{ username: string, password: string}>()
);
export const LOGIN_USER_SUCCESS = createAction(
  '[User] Login User Success',
  props<{ token: string }>()
);
export const LOGIN_USER_FAIL = createAction(
  '[User] Login User Fail',
  props<{ error: string }>()
);

// Logout
export const LOGOUT_USER = createAction(
  '[User] Logout User'
);
export const LOGOUT_USER_SUCCESS = createAction(
  '[User] Logout User Success',
  props<{ success: 'error' | 'success' }>()
);
export const LOGOUT_USER_FAIL = createAction(
  '[User] Logout User Fail',
  props<{ error: string }>()
);

export const LOAD_USER = createAction(
  '[User] Load User',
);
export const LOAD_USER_SUCCESS = createAction(
  '[User] Load User Success',
  props<{ user: User }>()
);
export const LOAD_USER_FAIL = createAction(
  '[User] Load User Fail',
  props<{ error: string }>()
);
