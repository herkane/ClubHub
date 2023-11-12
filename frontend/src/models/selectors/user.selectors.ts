import {createSelector} from "@ngrx/store";
import {UserState} from "../reducers/user.reducer";
import {AppState} from "../../app/app.state";


export const selectUser = (state: AppState) => state.user;
export const selectLoggedIn = createSelector(
  selectUser,
  (user: UserState) => user.loggedIn
)
