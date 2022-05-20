export declare const ActivityActions: {
    GetActivityAction: import("@ngrx/store").ActionCreator<"[Activity] Get Activity", () => import("@ngrx/store/src/models").TypedAction<"[Activity] Get Activity">>;
    GetActivitySuccessAction: import("@ngrx/store").ActionCreator<"[Activity] Get Activity success", (props: {
        Activity: any[];
    }) => {
        Activity: any[];
    } & import("@ngrx/store/src/models").TypedAction<"[Activity] Get Activity success">>;
    GetActivityFailureAction: import("@ngrx/store").ActionCreator<"[Activity] Get Activity failure", (props: {
        error: any;
    }) => {
        error: any;
    } & import("@ngrx/store/src/models").TypedAction<"[Activity] Get Activity failure">>;
    AddActivityAction: import("@ngrx/store").ActionCreator<"[Activity] Add Activity", (props: {
        activity: any;
    }) => {
        activity: any;
    } & import("@ngrx/store/src/models").TypedAction<"[Activity] Add Activity">>;
    AddActivitySuccessAction: import("@ngrx/store").ActionCreator<"[Activity] Add Activity Success", (props: {
        isAdded: any;
    }) => {
        isAdded: any;
    } & import("@ngrx/store/src/models").TypedAction<"[Activity] Add Activity Success">>;
    AddActivityFailureAction: import("@ngrx/store").ActionCreator<"[Activity] Add Activity Failure", (props: {
        error: any;
    }) => {
        error: any;
    } & import("@ngrx/store/src/models").TypedAction<"[Activity] Add Activity Failure">>;
};
