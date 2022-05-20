export declare const TalentsActions: {
    GetTalentsAction: import("@ngrx/store").ActionCreator<"[Talents] Get Talents", () => import("@ngrx/store/src/models").TypedAction<"[Talents] Get Talents">>;
    GetTalentsSuccessAction: import("@ngrx/store").ActionCreator<"[Talents] Get Talents success", (props: {
        talents: any[];
    }) => {
        talents: any[];
    } & import("@ngrx/store/src/models").TypedAction<"[Talents] Get Talents success">>;
    GetTalentsFailureAction: import("@ngrx/store").ActionCreator<"[Talents] Get Talents failure", (props: {
        error: any;
    }) => {
        error: any;
    } & import("@ngrx/store/src/models").TypedAction<"[Talents] Get Talents failure">>;
    AddTalentsAction: import("@ngrx/store").ActionCreator<"[Talents] Add Talent", (props: {
        talent: any;
    }) => {
        talent: any;
    } & import("@ngrx/store/src/models").TypedAction<"[Talents] Add Talent">>;
    AddTalentsSuccessAction: import("@ngrx/store").ActionCreator<"[Talents] Add Talent Success", (props: {
        isAdded: any;
    }) => {
        isAdded: any;
    } & import("@ngrx/store/src/models").TypedAction<"[Talents] Add Talent Success">>;
    AddTalentsFailureAction: import("@ngrx/store").ActionCreator<"[Talents] Add Talent Failure", (props: {
        error: any;
    }) => {
        error: any;
    } & import("@ngrx/store/src/models").TypedAction<"[Talents] Add Talent Failure">>;
};
