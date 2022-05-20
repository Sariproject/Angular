import { createAction, props } from '@ngrx/store';


export const TalentsActions = {
    
    GetTalentsAction: createAction('[Talents] Get Talents'),
    GetTalentsSuccessAction: createAction('[Talents] Get Talents success', props<{  talents: any[] }>()),
    GetTalentsFailureAction: createAction('[Talents] Get Talents failure', props<{ error: any }>()),

    AddTalentsAction: createAction('[Talents] Add Talent', props<{ talent }>()),
    AddTalentsSuccessAction: createAction('[Talents] Add Talent Success', props<{ isAdded}>()),
    AddTalentsFailureAction: createAction('[Talents] Add Talent Failure', props<{ error: any }>()),

}
