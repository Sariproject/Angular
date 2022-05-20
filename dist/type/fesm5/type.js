import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { __read, __assign } from 'tslib';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/type.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TypeService = /** @class */ (function () {
    function TypeService() {
    }
    TypeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TypeService.ctorParameters = function () { return []; };
    /** @nocollapse */ TypeService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TypeService_Factory() { return new TypeService(); }, token: TypeService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HttpRequestModel, TypeComponent, TypeModule, TypeService, dateFormats, dateTimeFormats, timeFormats };
//# sourceMappingURL=type.js.map
