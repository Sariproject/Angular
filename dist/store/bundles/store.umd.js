(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngrx/effects'), require('@ngrx/store'), require('api'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('store', ['exports', '@angular/core', '@ngrx/effects', '@ngrx/store', 'api', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global.store = {}, global.ng.core, global.effects, global.store, global.api, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, effects, store, api, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/store.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreService = /** @class */ (function () {
        function StoreService() {
        }
        StoreService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        StoreService.ctorParameters = function () { return []; };
        /** @nocollapse */ StoreService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function StoreService_Factory() { return new StoreService(); }, token: StoreService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
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
        GetTalentsAction: store.createAction('[Talents] Get Talents'),
        GetTalentsSuccessAction: store.createAction('[Talents] Get Talents success', store.props()),
        GetTalentsFailureAction: store.createAction('[Talents] Get Talents failure', store.props()),
        AddTalentsAction: store.createAction('[Talents] Add Talent', store.props()),
        AddTalentsSuccessAction: store.createAction('[Talents] Add Talent Success', store.props()),
        AddTalentsFailureAction: store.createAction('[Talents] Add Talent Failure', store.props()),
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
            this.getTalents$ = effects.createEffect((/**
             * @return {?}
             */
            function () { return _this.actions$.pipe(effects.ofType(TalentsActions.GetTalentsAction), operators.tap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return console.log('ZZZZZZZZZZZZZZZZZZ', { action: action }); })), operators.exhaustMap((/**
             * @param {?} _
             * @return {?}
             */
            function (_) { return _this.AdminService.getTalents$().pipe(operators.map((/**
             * @param {?} talents
             * @return {?}
             */
            function (talents) { return TalentsActions.GetTalentsSuccessAction({ talents: talents }); })), operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return rxjs.of(TalentsActions.GetTalentsFailureAction({ error: error })); }))); }))); }));
            this.addTalent$ = effects.createEffect((/**
             * @return {?}
             */
            function () { return _this.actions$.pipe(effects.ofType(TalentsActions.AddTalentsAction), operators.exhaustMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var talent = _a.talent;
                return _this.AdminService.addNewTalent$(talent).pipe(operators.map((/**
                 * @param {?} isAdded
                 * @return {?}
                 */
                function (isAdded) { return TalentsActions.AddTalentsSuccessAction({ isAdded: isAdded }); })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return rxjs.of(TalentsActions.AddTalentsFailureAction({ error: error })); })));
            }))); }));
        }
        TalentsEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TalentsEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: api.AdminsService }
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
    var reducer = store.createReducer(new TalentsState(), store.on(TalentsActions.GetTalentsSuccessAction, (ɵ0)), store.on(TalentsActions.AddTalentsSuccessAction, (ɵ1)));
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
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature('talents', TalentsReducer),
                            effects.EffectsModule.forFeature([TalentsEffects])
                        ],
                        exports: [store.StoreModule, effects.EffectsModule]
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
    var talentsFeatureSelector = store.createFeatureSelector('talents');
    var ɵ0$1 = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var talents = _a.talents;
        return talents;
    };
    /** @type {?} */
    var talentsSelector = store.createSelector(talentsFeatureSelector, (ɵ0$1));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/activity-store/activity/activity.actions.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ActivityActions = {
        GetActivityAction: store.createAction('[Activity] Get Activity'),
        GetActivitySuccessAction: store.createAction('[Activity] Get Activity success', store.props()),
        GetActivityFailureAction: store.createAction('[Activity] Get Activity failure', store.props()),
        AddActivityAction: store.createAction('[Activity] Add Activity', store.props()),
        AddActivitySuccessAction: store.createAction('[Activity] Add Activity Success', store.props()),
        AddActivityFailureAction: store.createAction('[Activity] Add Activity Failure', store.props()),
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
            this.getActivity$ = effects.createEffect((/**
             * @return {?}
             */
            function () { return _this.actions$.pipe(effects.ofType(ActivityActions.GetActivityAction), operators.tap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return console.log('0000', { action: action }); })), operators.exhaustMap((/**
             * @param {?} _
             * @return {?}
             */
            function (_) { return _this.AdminService.getActivity$().pipe(operators.map((/**
             * @param {?} Activity
             * @return {?}
             */
            function (Activity) { return ActivityActions.GetActivitySuccessAction({ Activity: Activity }); })), operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return rxjs.of(ActivityActions.GetActivityFailureAction({ error: error })); }))); }))); }));
            this.addActivity$ = effects.createEffect((/**
             * @return {?}
             */
            function () { return _this.actions$.pipe(effects.ofType(ActivityActions.AddActivityAction), operators.exhaustMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var activity = _a.activity;
                return _this.AdminService.addNewActivity$(activity).pipe(operators.map((/**
                 * @param {?} isAdded
                 * @return {?}
                 */
                function (isAdded) { return ActivityActions.AddActivitySuccessAction({ isAdded: isAdded }); })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return rxjs.of(ActivityActions.AddActivityFailureAction({ error: error })); })));
            }))); }));
        }
        ActivityEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ActivityEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: api.AdminsService }
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
    var reducer$1 = store.createReducer(new ActivityState(), store.on(ActivityActions.GetActivitySuccessAction, (ɵ0$2)), store.on(ActivityActions.AddActivitySuccessAction, (ɵ1$1)));
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
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature('Activity', ActivityReducer),
                            effects.EffectsModule.forFeature([ActivityEffects])
                        ],
                        exports: [store.StoreModule, effects.EffectsModule]
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
    var ActivityFeatureSelector = store.createFeatureSelector('Activity');
    var ɵ0$3 = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var Activity = _a.Activity;
        return Activity;
    };
    /** @type {?} */
    var ActivitySelector = store.createSelector(ActivityFeatureSelector, (ɵ0$3));

    exports.ActivityActions = ActivityActions;
    exports.ActivitySelector = ActivitySelector;
    exports.ActivityStoreModule = ActivityStoreModule;
    exports.StoreComponent = StoreComponent;
    exports.StoreModule = StoreModule;
    exports.StoreService = StoreService;
    exports.TalentStoreModule = TalentStoreModule;
    exports.TalentsActions = TalentsActions;
    exports.talentsSelector = talentsSelector;
    exports.ɵa = TalentsReducer;
    exports.ɵb = TalentsState;
    exports.ɵc = TalentsEffects;
    exports.ɵd = ActivityReducer;
    exports.ɵe = ActivityState;
    exports.ɵf = ActivityEffects;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=store.umd.js.map
