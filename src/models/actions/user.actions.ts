// user.actions.ts
import { createAction, props } from '@ngrx/store';
import { User } from '../user.interface';

export const  login = createAction('[Auth] Login', props<{ user: User }>());

export const loadUser = createAction('[Auth] Load User');
export const logout = createAction('[Auth] Logout');
