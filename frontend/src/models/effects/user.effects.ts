import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {AppState} from "../../app/app.state";
import {Store} from "@ngrx/store";
import {AuthService} from "../../app/auth/auth.service";
import {loadUser} from "../actions/user.actions";
import {from, map, switchMap} from "rxjs";


@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private authService: AuthService
  ) {}
}




