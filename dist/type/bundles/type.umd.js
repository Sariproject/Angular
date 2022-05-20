(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('type', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.type = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

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
     * Generated from: lib/type.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TypeService = /** @class */ (function () {
        function TypeService() {
        }
        TypeService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TypeService.ctorParameters = function () { return []; };
        /** @nocollapse */ TypeService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TypeService_Factory() { return new TypeService(); }, token: TypeService, providedIn: "root" });
        return TypeService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/type.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TypeComponent = /** @class */ (function () {
        function TypeComponent() {
        }
        /**
         * @return {?}
         */
        TypeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        TypeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-type',
                        template: "\n    <p>\n      type works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        TypeComponent.ctorParameters = function () { return []; };
        return TypeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/type.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TypeModule = /** @class */ (function () {
        function TypeModule() {
        }
        TypeModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TypeComponent],
                        imports: [],
                        exports: [TypeComponent]
                    },] }
        ];
        return TypeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/adviceForStudent.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function AdviceForStudent() { }
    if (false) {
        /** @type {?} */
        AdviceForStudent.prototype.name;
        /** @type {?} */
        AdviceForStudent.prototype.nameGroup;
        /** @type {?} */
        AdviceForStudent.prototype.type;
        /** @type {?} */
        AdviceForStudent.prototype.countAdvice;
        /** @type {?} */
        AdviceForStudent.prototype.whoAdvice;
        /** @type {?} */
        AdviceForStudent.prototype.moreDetails;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/teacherDetails.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function TeacherModel() { }
    if (false) {
        /** @type {?} */
        TeacherModel.prototype.teacherName;
        /** @type {?} */
        TeacherModel.prototype.Class;
        /** @type {?} */
        TeacherModel.prototype.Year;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/http-request.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpRequestModel = /** @class */ (function () {
        function HttpRequestModel(copy) {
            this.params = {};
            this.body = {};
            Object.assign(this, copy);
            this.params = Object.entries(this.params)
                .filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), val = _b[1];
                return val !== null;
            }))
                .filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), val = _b[1];
                return val !== undefined;
            }))
                .reduce((/**
             * @param {?} state
             * @param {?} __1
             * @return {?}
             */
            function (state, _a) {
                var _b;
                var _c = __read(_a, 2), key = _c[0], val = _c[1];
                return (__assign({}, state, (_b = {}, _b[key] = val, _b)));
            }), {});
            if (Array.isArray(this.body)) {
                return;
            }
            this.body = Object.entries(this.body)
                .filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), val = _b[1];
                return val !== null;
            }))
                .filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), val = _b[1];
                return val !== undefined;
            }))
                .reduce((/**
             * @param {?} state
             * @param {?} __1
             * @return {?}
             */
            function (state, _a) {
                var _b;
                var _c = __read(_a, 2), key = _c[0], val = _c[1];
                return (__assign({}, state, (_b = {}, _b[key] = val, _b)));
            }), {});
            this.body = Object.keys(this.body).length ? this.body : null;
        }
        Object.defineProperty(HttpRequestModel.prototype, "queryParams", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var result = this._queryParams(this.params);
                return /&/.test(result) ? "?" + result : '';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @param {?} params
         * @param {?=} prefix
         * @return {?}
         */
        HttpRequestModel.prototype._queryParams = /**
         * @private
         * @param {?} params
         * @param {?=} prefix
         * @return {?}
         */
        function (params, prefix) {
            var _this = this;
            if (prefix === void 0) { prefix = ''; }
            /** @type {?} */
            var result = Object.entries(params)
                .filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), value = _b[1];
                return typeof (value) !== 'object';
            }))
                .map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                return "" + prefix + key + "=" + decodeURIComponent(value);
            }))
                .join('&');
            return Object.entries(params)
                .filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), value = _b[1];
                return typeof (value) === 'object';
            }))
                .map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                return _this._queryParams(value, key + ".");
            }))
                .concat(result)
                .join('&');
        };
        Object.defineProperty(HttpRequestModel.prototype, "fullUrl", {
            get: /**
             * @return {?}
             */
            function () { return "" + this.url + this.action; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HttpRequestModel.prototype, "fullParams", {
            get: /**
             * @return {?}
             */
            function () {
                return this.params;
            },
            enumerable: true,
            configurable: true
        });
        return HttpRequestModel;
    }());
    if (false) {
        /** @type {?} */
        HttpRequestModel.prototype.component;
        /** @type {?} */
        HttpRequestModel.prototype.logMessage;
        /** @type {?} */
        HttpRequestModel.prototype.url;
        /** @type {?} */
        HttpRequestModel.prototype.action;
        /** @type {?} */
        HttpRequestModel.prototype.params;
        /** @type {?} */
        HttpRequestModel.prototype.body;
        /** @type {?} */
        HttpRequestModel.prototype.isText;
        /** @type {?} */
        HttpRequestModel.prototype.headers;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/ip-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IpConfig() { }
    if (false) {
        /** @type {?|undefined} */
        IpConfig.prototype.servicePath;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/settings.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SettingsConfig() { }
    if (false) {
        /** @type {?|undefined} */
        SettingsConfig.prototype.numEmployees;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/user.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function UserModel() { }
    if (false) {
        /** @type {?} */
        UserModel.prototype.nameRole;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/talents.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function TalentsModel() { }
    if (false) {
        /** @type {?} */
        TalentsModel.prototype.talentId;
        /** @type {?} */
        TalentsModel.prototype.nameTalent;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/student.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function StudentModel() { }
    if (false) {
        /** @type {?|undefined} */
        StudentModel.prototype.StudentId;
        /** @type {?} */
        StudentModel.prototype.name;
        /** @type {?} */
        StudentModel.prototype.Class;
        /** @type {?|undefined} */
        StudentModel.prototype.nameActivity;
        /** @type {?|undefined} */
        StudentModel.prototype.nameTalent;
        /** @type {?|undefined} */
        StudentModel.prototype.taskType;
        /** @type {?|undefined} */
        StudentModel.prototype.frame;
        /** @type {?|undefined} */
        StudentModel.prototype.year;
        /** @type {?|undefined} */
        StudentModel.prototype.yearId;
        /** @type {?|undefined} */
        StudentModel.prototype.hasTalent;
        /** @type {?|undefined} */
        StudentModel.prototype.moreDetails;
        /** @type {?|undefined} */
        StudentModel.prototype.countAdvice;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/newStudent.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function newStudentModel() { }
    if (false) {
        /** @type {?} */
        newStudentModel.prototype.lastName;
        /** @type {?} */
        newStudentModel.prototype.firstName;
        /** @type {?} */
        newStudentModel.prototype.class;
        /** @type {?} */
        newStudentModel.prototype.Id;
        /** @type {?} */
        newStudentModel.prototype.address;
        /** @type {?} */
        newStudentModel.prototype.phone;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/my-column.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function MyColumn() { }
    if (false) {
        /** @type {?} */
        MyColumn.prototype.name;
        /** @type {?} */
        MyColumn.prototype.header;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/date-formats.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var dateFormats = {
        DDMMYYYY: "DD/MM/YYYY",
        ddmmyy: "dd/mm/yy",
    };
    /** @enum {string} */
    var dateTimeFormats = {
        DDMMYYYYHHmm: "DD/MM/YYYY HH:mm",
        DDMMYYYYHHmmss: "DD/MM/YYYY HH:mm:ss",
        DDMMHmm: "DD/MM HH:mm",
    };
    /** @enum {string} */
    var timeFormats = {
        HHmm: "HH:mm",
        HHmmss: "HH:ss:mm",
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/newClass.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function newClassModel() { }
    if (false) {
        /** @type {?} */
        newClassModel.prototype.nameClass;
        /** @type {?} */
        newClassModel.prototype.numClass;
        /** @type {?} */
        newClassModel.prototype.countStudents;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/ResultSearch.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function resultSearchModel() { }
    if (false) {
        /** @type {?} */
        resultSearchModel.prototype.StudentId;
        /** @type {?} */
        resultSearchModel.prototype.Class;
        /** @type {?} */
        resultSearchModel.prototype.FirstName;
        /** @type {?} */
        resultSearchModel.prototype.LastName;
        /** @type {?} */
        resultSearchModel.prototype.Address;
        /** @type {?} */
        resultSearchModel.prototype.Phone;
        /** @type {?} */
        resultSearchModel.prototype.ArrayTalent;
        /** @type {?} */
        resultSearchModel.prototype.ArrayTasks;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/Activity.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ActivityModel() { }
    if (false) {
        /** @type {?} */
        ActivityModel.prototype.activityId;
        /** @type {?} */
        ActivityModel.prototype.nameActivity;
    }

    exports.HttpRequestModel = HttpRequestModel;
    exports.TypeComponent = TypeComponent;
    exports.TypeModule = TypeModule;
    exports.TypeService = TypeService;
    exports.dateFormats = dateFormats;
    exports.dateTimeFormats = dateTimeFormats;
    exports.timeFormats = timeFormats;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=type.umd.js.map
