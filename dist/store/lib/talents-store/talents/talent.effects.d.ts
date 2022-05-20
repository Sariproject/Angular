import { Actions } from '@ngrx/effects';
import { AdminsService } from 'api';
export declare class TalentsEffects {
    private actions$;
    private AdminService;
    getTalents$: import("rxjs").Observable<({
        talents: any[];
    } & import("@ngrx/store/src/models").TypedAction<"[Talents] Get Talents success">) | ({
        error: any;
    } & import("@ngrx/store/src/models").TypedAction<"[Talents] Get Talents failure">)> & import("@ngrx/effects").CreateEffectMetadata;
    addTalent$: import("rxjs").Observable<({
        isAdded: any;
    } & import("@ngrx/store/src/models").TypedAction<"[Talents] Add Talent Success">) | ({
        error: any;
    } & import("@ngrx/store/src/models").TypedAction<"[Talents] Add Talent Failure">)> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, AdminService: AdminsService);
}
