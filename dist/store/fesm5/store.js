import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { createEffect, ofType, Actions, EffectsModule } from '@ngrx/effects';
import { createAction, props, createReducer, on, StoreModule as StoreModule$1, createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminsService } from 'api';
import { of } from 'rxjs';
import { tap, exhaustMap, map, catchError } from 'rxjs/operators';
import { __assign } from 'tslib';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/store.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StoreService = /** @class */ (function () {
    function StoreService() {
    }
    StoreService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StoreService.ctorParameters = function () { return []; };
    /** @nocollapse */ StoreService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StoreService_Factory() { return new StoreService(); }, token: StoreService, providedIn: "root" });
    return StoreService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/store.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StoreComponent = /** @class */ (function () {
    function StoreComponent() {
    }
    /**
     * @return {?}
     */
    StoreComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    StoreComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-store',
                    template: "\n    <p>\n      store works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    StoreComponent.ctorParameters = function () { return []; };
    return StoreComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/store.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [StoreComponent],
                    imports: [],
                    exports: [StoreComponent]
                },] }
    ];
    return StoreModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/talents-store/talents/talent.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TalentsActions = {
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
var TalentsEffects = /** @class */ (function () {
    function TalentsEffects(actions$, AdminService) {
        var _this = this;
        this.actions$ = actions$;
        this.AdminService = AdminService;
        this.getTalents$ = createEffect((/**
         * @return {?}
         */
        function () { return _this.actions$.pipe(ofType(TalentsActions.GetTalentsAction), tap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return console.log('ZZZZZZZZZZZZZZZZZZ', { action: action }); })), exhaustMap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return _this.AdminService.getTalents$().pipe(map((/**
         * @param {?} talents
         * @return {?}
         */
        function (talents) { return TalentsActions.GetTalentsSuccessAction({ talents: talents }); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(TalentsActions.GetTalentsFailureAction({ error: error })); }))); }))); }));
        this.addTalent$ = createEffect((/**
         * @return {?}
         */
        function () { return _this.actions$.pipe(ofType(TalentsActions.AddTalentsAction), exhaustMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var talent = _a.talent;
            return _this.AdminService.addNewTalent$(talent).pipe(map((/**
             * @param {?} isAdded
             * @return {?}
             */
            function (isAdded) { return TalentsActions.AddTalentsSuccessAction({ isAdded: isAdded }); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(TalentsActions.AddTalentsFailureAction({ error: error })); })));
        }))); }));
    }
    TalentsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TalentsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: AdminsService }
    ]; };
    return TalentsEffects;
}());
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
var TalentsState = /** @class */ (function () {
    function TalentsState() {
        this.talents = [];
    }
    return TalentsState;
}());
if (false) {
    /** @type {?} */
    TalentsState.prototype.talents;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/talents-store/talents/talent.reducer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
function (state, _a) {
    var talents = _a.talents;
    return (__assign({}, state, { talents: talents }));
}, ɵ1 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
function (state, _a) {
    var isAdded = _a.isAdded;
    return (__assign({}, state, { isAdded: isAdded }));
};
/** @type {?} */
var reducer = createReducer(new TalentsState(), on(TalentsActions.GetTalentsSuccessAction, (ɵ0)), on(TalentsActions.AddTalentsSuccessAction, (ɵ1)));
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
var TalentStoreModule = /** @class */ (function () {
    function TalentStoreModule() {
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
    return TalentStoreModule;
}());

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
var talentsFeatureSelector = createFeatureSelector('talents');
var ɵ0$1 = /**
 * @param {?} __0
 * @return {?}
 */
function (_a) {
    var talents = _a.talents;
    return talents;
};
/** @type {?} */
var talentsSelector = createSelector(talentsFeatureSelector, (ɵ0$1));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/activity-store/activity/activity.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ActivityActions = {
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
var ActivityEffects = /** @class */ (function () {
    function ActivityEffects(actions$, AdminService) {
        var _this = this;
        this.actions$ = actions$;
        this.AdminService = AdminService;
        this.getActivity$ = createEffect((/**
         * @return {?}
         */
        function () { return _this.actions$.pipe(ofType(ActivityActions.GetActivityAction), tap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return console.log('0000', { action: action }); })), exhaustMap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return _this.AdminService.getActivity$().pipe(map((/**
         * @param {?} Activity
         * @return {?}
         */
        function (Activity) { return ActivityActions.GetActivitySuccessAction({ Activity: Activity }); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(ActivityActions.GetActivityFailureAction({ error: error })); }))); }))); }));
        this.addActivity$ = createEffect((/**
         * @return {?}
         */
        function () { return _this.actions$.pipe(ofType(ActivityActions.AddActivityAction), exhaustMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var activity = _a.activity;
            return _this.AdminService.addNewActivity$(activity).pipe(map((/**
             * @param {?} isAdded
             * @return {?}
             */
            function (isAdded) { return ActivityActions.AddActivitySuccessAction({ isAdded: isAdded }); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(ActivityActions.AddActivityFailureAction({ error: error })); })));
        }))); }));
    }
    ActivityEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ActivityEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: AdminsService }
    ]; };
    return ActivityEffects;
}());
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
var ActivityState = /** @class */ (function () {
    function ActivityState() {
        this.Activity = [];
    }
    return ActivityState;
}());
if (false) {
    /** @type {?} */
    ActivityState.prototype.Activity;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/activity-store/activity/activity.reducer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0$2 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
function (state, _a) {
    var Activity = _a.Activity;
    return (__assign({}, state, { Activity: Activity }));
}, ɵ1$1 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
function (state, _a) {
    var isAdded = _a.isAdded;
    return (__assign({}, state, { isAdded: isAdded }));
};
/** @type {?} */
var reducer$1 = createReducer(new ActivityState(), on(ActivityActions.GetActivitySuccessAction, (ɵ0$2)), on(ActivityActions.AddActivitySuccessAction, (ɵ1$1)));
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
var ActivityStoreModule = /** @class */ (function () {
    function ActivityStoreModule() {
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
    return ActivityStoreModule;
}());

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
var ActivityFeatureSelector = createFeatureSelector('Activity');
var ɵ0$3 = /**
 * @param {?} __0
 * @return {?}
 */
function (_a) {
    var Activity = _a.Activity;
    return Activity;
};
/** @type {?} */
var ActivitySelector = createSelector(ActivityFeatureSelector, (ɵ0$3));

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
