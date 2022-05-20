import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AdminsService } from 'api';
import { of } from 'rxjs';
import { filter, tap, exhaustMap, map, catchError } from 'rxjs/operators';
import { StudentsActions } from './students.actions';

@Injectable()
export class StudentsEffects {

  getStudents$ = createEffect(() => this.actions$.pipe(
    ofType(StudentsActions.GetStudentsAction),
    tap((action) => console.log('0000', { action })),
    exhaustMap(_ => this.AdminService.getStudentsByClass$('א2').pipe(
      map(Students => StudentsActions.GetStudentsSuccessAction({ Students })),
      catchError(error => of(StudentsActions.GetStudentsFailureAction({ error }))
      )),

    )
  ));
  AddTaskForStudent$ = createEffect(() => this.actions$.pipe(
    ofType(StudentsActions.GetStudentsAction),
    tap((action) => console.log('0000', { action })),
    exhaustMap(({ tasks }) => this.AdminService.getStudentsByClass$(tasks).pipe(
      map(Students => StudentsActions.GetStudentsSuccessAction({ Students })),
      catchError(error => of(StudentsActions.GetStudentsFailureAction({ error }))
      )),
    )
  ));

  constructor(
    private actions$: Actions,
    private AdminService: AdminsService,
  ) { }
}