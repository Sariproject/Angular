import { createAction, props } from '@ngrx/store';


export const StudentsActions = {
    
    GetStudentsAction: createAction('[Students] Get Students'),
    GetStudentsSuccessAction: createAction('[Students] Get Students success', props<{  Students: any[] }>()),
    GetStudentsFailureAction: createAction('[Students] Get Students failure', props<{ error: any }>()),

    AddStudentsAction: createAction('[Students] Add Students', props<{ activity }>()),
    AddStudentsSuccessAction: createAction('[Students] Add Students Success', props<{ isAdded}>()),
    AddStudentsFailureAction: createAction('[Students] Add Students Failure', props<{ error: any }>()),

    AddTaskForStudent:createAction('[Students] Add Task For Student', props<{ tasks }>()),
    insertTaskForStudentSuccessAction: createAction('[Students] Add Students Success', props<{ isAdded}>()),
    insertTaskForStudentFailureAction: createAction('[Students] Add Students Failure', props<{ error: any }>()),

}
