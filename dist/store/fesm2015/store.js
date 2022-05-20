import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { createEffect, ofType, Actions, EffectsModule } from '@ngrx/effects';
import { createAction, props, createReducer, on, StoreModule as StoreModule$1, createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminsService } from 'api';
import { of } from 'rxjs';
import { tap, exhaustMap, map, catchError } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/store.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreService {
    constructor() { }
}
StoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
StoreService.ctorParameters = () => [];
/** @nocollapse */ StoreService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StoreService_Factory() { return new StoreService(); }, token: StoreService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/store.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
StoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-store',
                template: `
    <p>
      store works!
    </p>
  `
            }] }
];
/** @nocollapse */
StoreComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/store.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreModule {
}
StoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StoreComponent],
                imports: [],
                exports: [StoreComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/talents-store/talents/talent.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TalentsActions = {
    GetTalentsAction: createAction('[Talents] Get Talents'),
    GetTalentsSuccessAction: createAction('[Talents] Get Talents success', props()),
    GetTalentsFailureAction: createAction('[Talents] Get Talents failure', props()),
    AddTalentsAction: createAction('[Talents] Add Talent', props()),
    AddTalentsSuccessAction: createAction('[Talents] Add Talent Success', props()),
    AddTalentsFailureAction: createAction('[Talents] Add Talent Failure', props()),
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/talents-store/talents/talent.effects.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TalentsEffects {
    /**
     * @param {?} actions$
     * @param {?} AdminService
     */
    constructor(actions$, AdminService) {
        this.actions$ = actions$;
        this.AdminService = AdminService;
        this.getTalents$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(TalentsActions.GetTalentsAction), tap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => console.log('ZZZZZZZZZZZZZZZZZZ', { action }))), exhaustMap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.AdminService.getTalents$().pipe(map((/**
         * @param {?} talents
         * @return {?}
         */
        talents => TalentsActions.GetTalentsSuccessAction({ talents }))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(TalentsActions.GetTalentsFailureAction({ error }))))))))));
        this.addTalent$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(TalentsActions.AddTalentsAction), exhaustMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ talent }) => this.AdminService.addNewTalent$(talent).pipe(map((/**
         * @param {?} isAdded
         * @return {?}
         */
        isAdded => TalentsActions.AddTalentsSuccessAction({ isAdded }))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(TalentsActions.AddTalentsFailureAction({ error }))))))))));
    }
}
TalentsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TalentsEffects.ctorParameters = () => [
    { type: Actions },
    { type: AdminsService }
];
if (false) {
    /** @type {?} */
    TalentsEffects.prototype.getTalents$;
    /** @type {?} */
    TalentsEffects.prototype.addTalent$;
    /**
     * @type {?}
     * @private
     */
    TalentsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    TalentsEffects.prototype.AdminService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/talents-store/talents/talent.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TalentsState {
    constructor() {
        this.talents = [];
    }
}
if (false) {
    /** @type {?} */
    TalentsState.prototype.talents;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/talents-store/talents/talent.reducer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
(state, { talents }) => (Object.assign({}, state, { talents })), ɵ1 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
(state, { isAdded }) => (Object.assign({}, state, { isAdded }));
/** @type {?} */
const reducer = createReducer(new TalentsState(), on(TalentsActions.GetTalentsSuccessAction, (ɵ0)), on(TalentsActions.AddTalentsSuccessAction, (ɵ1)));
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function TalentsReducer(state, action) {
    return reducer(state, action);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/talents-store/talent-store.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TalentStoreModule {
}
TalentStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule$1.forFeature('talents', TalentsReducer),
                    EffectsModule.forFeature([TalentsEffects])
                ],
                exports: [StoreModule$1, EffectsModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/talents-store/talent-store.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TalentStoreState() { }
if (false) {
    /** @type {?} */
    TalentStoreState.prototype.talents;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/talents-store/talents/talent.selectors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const talentsFeatureSelector = createFeatureSelector('talents');
const ɵ0$1 = /**
 * @param {?} __0
 * @return {?}
 */
({ talents }) => talents;
/** @type {?} */
const talentsSelector = createSelector(talentsFeatureSelector, (ɵ0$1));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/activity-store/activity/activity.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ActivityActions = {
    GetActivityAction: createAction('[Activity] Get Activity'),
    GetActivitySuccessAction: createAction('[Activity] Get Activity success', props()),
    GetActivityFailureAction: createAction('[Activity] Get Activity failure', props()),
    AddActivityAction: createAction('[Activity] Add Activity', props()),
    AddActivitySuccessAction: createAction('[Activity] Add Activity Success', props()),
    AddActivityFailureAction: createAction('[Activity] Add Activity Failure', props()),
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/activity-store/activity/activity.effects.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActivityEffects {
    /**
     * @param {?} actions$
     * @param {?} AdminService
     */
    constructor(actions$, AdminService) {
        this.actions$ = actions$;
        this.AdminService = AdminService;
        this.getActivity$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(ActivityActions.GetActivityAction), tap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => console.log('0000', { action }))), exhaustMap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.AdminService.getActivity$().pipe(map((/**
         * @param {?} Activity
         * @return {?}
         */
        Activity => ActivityActions.GetActivitySuccessAction({ Activity }))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(ActivityActions.GetActivityFailureAction({ error }))))))))));
        this.addActivity$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(ActivityActions.AddActivityAction), exhaustMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ activity }) => this.AdminService.addNewActivity$(activity).pipe(map((/**
         * @param {?} isAdded
         * @return {?}
         */
        isAdded => ActivityActions.AddActivitySuccessAction({ isAdded }))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(ActivityActions.AddActivityFailureAction({ error }))))))))));
    }
}
ActivityEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ActivityEffects.ctorParameters = () => [
    { type: Actions },
    { type: AdminsService }
];
if (false) {
    /** @type {?} */
    ActivityEffects.prototype.getActivity$;
    /** @type {?} */
    ActivityEffects.prototype.addActivity$;
    /**
     * @type {?}
     * @private
     */
    ActivityEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ActivityEffects.prototype.AdminService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/activity-store/activity/activity.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActivityState {
    constructor() {
        this.Activity = [];
    }
}
if (false) {
    /** @type {?} */
    ActivityState.prototype.Activity;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/activity-store/activity/activity.reducer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$2 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
(state, { Activity }) => (Object.assign({}, state, { Activity })), ɵ1$1 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
(state, { isAdded }) => (Object.assign({}, state, { isAdded }));
/** @type {?} */
const reducer$1 = createReducer(new ActivityState(), on(ActivityActions.GetActivitySuccessAction, (ɵ0$2)), on(ActivityActions.AddActivitySuccessAction, (ɵ1$1)));
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function ActivityReducer(state, action) {
    return reducer$1(state, action);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/activity-store/activity-store.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActivityStoreModule {
}
ActivityStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule$1.forFeature('Activity', ActivityReducer),
                    EffectsModule.forFeature([ActivityEffects])
                ],
                exports: [StoreModule$1, EffectsModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/activity-store/activity-store.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ActivityStoreState() { }
if (false) {
    /** @type {?} */
    ActivityStoreState.prototype.Activity;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/activity-store/activity/activity.selectors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ActivityFeatureSelector = createFeatureSelector('Activity');
const ɵ0$3 = /**
 * @param {?} __0
 * @return {?}
 */
({ Activity }) => Activity;
/** @type {?} */
const ActivitySelector = createSelector(ActivityFeatureSelector, (ɵ0$3));

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ActivityActions, ActivitySelector, ActivityStoreModule, StoreComponent, StoreModule, StoreService, TalentStoreModule, TalentsActions, talentsSelector, TalentsReducer as ɵa, TalentsState as ɵb, TalentsEffects as ɵc, ActivityReducer as ɵd, ActivityState as ɵe, ActivityEffects as ɵf };
//# sourceMappingURL=store.js.map
