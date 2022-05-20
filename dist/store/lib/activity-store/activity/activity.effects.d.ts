import { Actions } from '@ngrx/effects';
import { AdminsService } from 'api';
export declare class ActivityEffects {
    private actions$;
    private AdminService;
    getActivity$: import("rxjs").Observable<({
        Activity: any[];
    } & import("@ngrx/store/src/models").TypedAction<"[Activity] Get Activity success">) | ({
        error: any;
    } & import("@ngrx/store/src/models").TypedAction<"[Activity] Get Activity failure">)> & import("@ngrx/effects").CreateEffectMetadata;
    addActivity$: import("rxjs").Observable<({
        isAdded: any;
    } & import("@ngrx/store/src/models").TypedAction<"[Activity] Add Activity Success">) | ({
        error: any;
    } & import("@ngrx/store/src/models").TypedAction<"[Activity] Add Activity Failure">)> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, AdminService: AdminsService);
}
