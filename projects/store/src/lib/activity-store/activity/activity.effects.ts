import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AdminsService } from 'api';
import { of } from 'rxjs';
import { filter, tap, exhaustMap, map, catchError } from 'rxjs/operators';
import { ActivityActions } from './activity.actions';

@Injectable()
export class ActivityEffects {

  getActivity$ = createEffect(() => this.actions$.pipe(
    ofType(ActivityActions.GetActivityAction),
    tap((action) => console.log('0000', { action })),
    exhaustMap(_ => this.AdminService.getActivity$().pipe(
      map(Activity => ActivityActions.GetActivitySuccessAction({ Activity })),
      catchError(error => of(ActivityActions.GetActivityFailureAction({ error }))
      )),

    )
  ));

  addActivity$ = createEffect(() => this.actions$.pipe(
    ofType(ActivityActions.AddActivityAction),
    exhaustMap(({ activity }) => this.AdminService.addNewActivity$(activity).pipe(
      map(isAdded => ActivityActions.AddActivitySuccessAction({ isAdded })),
      catchError(error => of(ActivityActions.AddActivityFailureAction({ error }))
      )),
    )
  ));

  constructor(
    private actions$: Actions,
    private AdminService: AdminsService,
  ) { }
}