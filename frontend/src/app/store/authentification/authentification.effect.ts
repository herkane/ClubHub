import {CandidatesService} from "../../../service/candidates.service";
import {Injectable} from "@angular/core";
import {createEffect, Actions, ofType} from "@ngrx/effects";

import {catchError, from, map, mergeMap, Observable, of, switchMap, withLatestFrom} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {
  LOAD_USER,
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS, LOGOUT_USER, LOGOUT_USER_FAIL, LOGOUT_USER_SUCCESS
} from "./authentification.action";
import {AuthentificationService} from "../../../service/auth/authentification.service";

@Injectable()
export class AuthentificationEffect {
  constructor(private AuthentificationService: AuthentificationService, private actions$: Actions) {
  }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOGIN_USER),
      switchMap((action) =>
        from(this.AuthentificationService.login(action.username, action.password,)).pipe(
          map((token) => LOGIN_USER_SUCCESS({ token: token })),
          catchError((error) => of(LOGIN_USER_FAIL({ error })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOGOUT_USER),
      switchMap((action) =>
        from(this.AuthentificationService.logout()).pipe(
          map((success) => LOGOUT_USER_SUCCESS({ success: "success" })),
          catchError((error) => of(LOGOUT_USER_FAIL({ error })))
        )
      )
    )
  );

  user$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_USER),
      switchMap((action) =>
        from(this.AuthentificationService.getUser()).pipe(
          map((user) => LOAD_USER_SUCCESS({ user: user })),
          catchError((error) => of(LOAD_USER_FAIL({ error })))
        )
      )
    )
  );
}
