import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AdminsService} from 'api';
import { of } from 'rxjs';
import { filter, tap, exhaustMap, map, catchError } from 'rxjs/operators';
import { TalentsActions } from './talent.actions';

@Injectable()
export class TalentsEffects {

  getTalents$ = createEffect(() => this.actions$.pipe(
    ofType(TalentsActions.GetTalentsAction),
    tap((action)=>console.log('ZZZZZZZZZZZZZZZZZZ',{action})),
    exhaustMap( _ => this.AdminService.getTalents$().pipe(
        map(talents => TalentsActions.GetTalentsSuccessAction({ talents })),
        catchError(error => of(TalentsActions.GetTalentsFailureAction({ error }))
        )),

    )
));

addTalent$ = createEffect(() => this.actions$.pipe(
  ofType(TalentsActions.AddTalentsAction),
  exhaustMap( ({talent})  => this.AdminService.addNewTalent$(talent).pipe(                   
     map( isAdded => TalentsActions.AddTalentsSuccessAction({ isAdded })),
     catchError(error => of(TalentsActions.AddTalentsFailureAction({ error }))
     )),
 )
));

  constructor(
    private actions$: Actions,
    private AdminService: AdminsService,
  ) { }
}