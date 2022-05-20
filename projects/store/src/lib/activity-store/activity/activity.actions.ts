import { createAction, props } from '@ngrx/store';


export const ActivityActions = {
    
    GetActivityAction: createAction('[Activity] Get Activity'),
    GetActivitySuccessAction: createAction('[Activity] Get Activity success', props<{  Activity: any[] }>()),
    GetActivityFailureAction: createAction('[Activity] Get Activity failure', props<{ error: any }>()),

    AddActivityAction: createAction('[Activity] Add Activity', props<{ activity }>()),
    AddActivitySuccessAction: createAction('[Activity] Add Activity Success', props<{ isAdded}>()),
    AddActivityFailureAction: createAction('[Activity] Add Activity Failure', props<{ error: any }>()),

}
