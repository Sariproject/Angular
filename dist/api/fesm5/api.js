import { Injectable, ɵɵdefineInjectable, Component, NgModule, ɵɵinject } from '@angular/core';
import { __read, __assign, __extends } from 'tslib';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { HttpRequestModel } from 'type';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiService = /** @class */ (function () {
    function ApiService() {
    }
    ApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return []; };
    /** @nocollapse */ ApiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(); }, token: ApiService, providedIn: "root" });
    return ApiService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiComponent = /** @class */ (function () {
    function ApiComponent() {
    }
    /**
     * @return {?}
     */
    ApiComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ApiComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-api',
                    template: "\n    <p>\n      api works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    ApiComponent.ctorParameters = function () { return []; };
    return ApiComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ApiComponent],
                    imports: [],
                    exports: [ApiComponent]
                },] }
    ];
    return ApiModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http) {
        this.http = http;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ConfigurationService.prototype.initConfiguration = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var _this = this;
        return combineLatest(this.http.get(path + "/ipConfig.json"), this.http.get(path + "/settingsConfig.json")).pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            var _a;
            return _a = __read(response, 2), _this.ips = _a[0], _this.settingConfig = _a[1], response;
        })), tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return console.log(_this.ips, "lll"); }))).toPromise();
    };
    ConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ConfigurationService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ ConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(ɵɵinject(HttpClient)); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());
if (false) {
    /** @type {?} */
    ConfigurationService.prototype.ips;
    /** @type {?} */
    ConfigurationService.prototype.settingConfig;
    /**
     * @type {?}
     * @private
     */
    ConfigurationService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/http-service.base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var HttpServiceBase = /** @class */ (function () {
    function HttpServiceBase(http, config) {
        this.http = http;
        this.config = config;
        this.index = 0;
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.get$ = /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        if (httpRequest.isText) {
            return this._get$(httpRequest);
        }
        return this.http.get(httpRequest.fullUrl, { params: __assign({}, httpRequest.fullParams) });
    };
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.delete$ = /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.delete(httpRequest.fullUrl, { params: __assign({}, httpRequest.fullParams) });
    };
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.post$ = /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        console.log(httpRequest);
        if (httpRequest.isText) {
            return this._post$(httpRequest);
        }
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { headers: httpRequest.headers, params: __assign({}, httpRequest.fullParams) });
    };
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.request$ = /**
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.request('GET', httpRequest.fullUrl, {
            params: __assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    };
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.requestPost$ = /**
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.request('POST', httpRequest.fullUrl, {
            body: __assign({}, httpRequest.body),
            params: __assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    };
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype._get$ = /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.get(httpRequest.fullUrl, { params: __assign({}, httpRequest.fullParams), responseType: 'text' });
    };
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype._post$ = /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { params: __assign({}, httpRequest.fullParams), responseType: 'text' });
    };
    HttpServiceBase.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpServiceBase.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigurationService }
    ]; };
    return HttpServiceBase;
}());
if (false) {
    /** @type {?} */
    HttpServiceBase.prototype.index;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/students.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StudentsService = /** @class */ (function (_super) {
    __extends(StudentsService, _super);
    function StudentsService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = "http://localhost:7900/student";
        return _this;
    }
    Object.defineProperty(StudentsService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "student/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    StudentsService.prototype.getStudentDetails$ = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentDetails',
            params: { id: id }
        }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    StudentsService.prototype.getStudentTasks$ = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentTasks',
            params: { id: id }
        }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    StudentsService.prototype.getStudentTalent$ = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentTalents',
            params: { id: id }
        }));
    };
    /**
     * @param {?} StudentId
     * @return {?}
     */
    StudentsService.prototype.getStudentbyStudentId$ = /**
     * @param {?} StudentId
     * @return {?}
     */
    function (StudentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentbyStudentId',
            params: { StudentId: StudentId }
        }));
    };
    /**
     * @param {?} StudentId
     * @return {?}
     */
    StudentsService.prototype.getYears$ = /**
     * @param {?} StudentId
     * @return {?}
     */
    function (StudentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getYears',
            params: { StudentId: StudentId }
        }));
    };
    /**
     * @param {?} TasksId
     * @return {?}
     */
    StudentsService.prototype.deleteTasks$ = /**
     * @param {?} TasksId
     * @return {?}
     */
    function (TasksId) {
        return this.delete$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteTasks',
            params: { TasksId: TasksId }
        }));
    };
    /**
     * @param {?} UpdateTasks
     * @return {?}
     */
    StudentsService.prototype.UpdateTasks$ = /**
     * @param {?} UpdateTasks
     * @return {?}
     */
    function (UpdateTasks) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'UpdateTasks',
            body: UpdateTasks
        }));
    };
    Object.defineProperty(StudentsService.prototype, "CurrentStudent", {
        get: /**
         * @return {?}
         */
        function () {
            console.log(this.config);
            return this.studentDetails;
        },
        enumerable: true,
        configurable: true
    });
    StudentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ StudentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StudentsService_Factory() { return new StudentsService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: StudentsService, providedIn: "root" });
    return StudentsService;
}(HttpServiceBase));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StudentsService.prototype.studentDetails;
    /** @type {?} */
    StudentsService.prototype.url;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/teachers.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TeachersService = /** @class */ (function (_super) {
    __extends(TeachersService, _super);
    function TeachersService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.students = [];
        return _this;
    }
    Object.defineProperty(TeachersService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "teacher/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    TeachersService.prototype.getTeacherDetails$ = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'teacherDetails',
            params: { id: id }
        }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TeachersService.prototype.getStudentsById$ = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'students',
            params: { id: id }
        }));
    };
    /**
     * @return {?}
     */
    TeachersService.prototype.getTalents$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'talent',
        }));
    };
    /**
     * @param {?} classes
     * @param {?} talentId
     * @return {?}
     */
    TeachersService.prototype.getOneTalentForClass$ = /**
     * @param {?} classes
     * @param {?} talentId
     * @return {?}
     */
    function (classes, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'talents',
            params: { classes: classes, talentId: talentId }
        }));
    };
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    TeachersService.prototype.addTalentForStudent$ = /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    function (firstName, LastName, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addTalent',
            params: { firstName: firstName, LastName: LastName, talentId: talentId }
        }));
    };
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talent
     * @param {?} details
     * @return {?}
     */
    TeachersService.prototype.updateMoreDetails$ = /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talent
     * @param {?} details
     * @return {?}
     */
    function (firstName, LastName, talent, details) {
        if (details == '') {
            details = 'null';
        }
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateMoreDetails',
            params: { firstName: firstName, LastName: LastName, talent: talent, details: details }
        }));
    };
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    TeachersService.prototype.deleteTalentForStudent$ = /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    function (firstName, LastName, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteTalent',
            params: { firstName: firstName, LastName: LastName, talentId: talentId }
        }));
    };
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @param {?} count
     * @return {?}
     */
    TeachersService.prototype.addAdviceForStudent$ = /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @param {?} count
     * @return {?}
     */
    function (firstName, LastName, talentId, count) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addAdvice',
            params: { firstName: firstName, LastName: LastName, talentId: talentId, count: count }
        }));
    };
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @param {?} count
     * @return {?}
     */
    TeachersService.prototype.updateAdviceForStudent$ = /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @param {?} count
     * @return {?}
     */
    function (firstName, LastName, talentId, count) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateAdvice',
            params: { firstName: firstName, LastName: LastName, talentId: talentId, count: count }
        }));
    };
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    TeachersService.prototype.deleteAdviceForStudent$ = /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    function (firstName, LastName, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteAdvice',
            params: { firstName: firstName, LastName: LastName, talentId: talentId }
        }));
    };
    /**
     * @param {?} nameTalent
     * @return {?}
     */
    TeachersService.prototype.addNewTalent$ = /**
     * @param {?} nameTalent
     * @return {?}
     */
    function (nameTalent) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertTalent',
            params: { nameTalent: nameTalent }
        }));
    };
    Object.defineProperty(TeachersService.prototype, "CurrentTeacher", {
        get: /**
         * @return {?}
         */
        function () {
            return this.teacherDetails;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeachersService.prototype, "CurrentStudents", {
        get: /**
         * @return {?}
         */
        function () {
            return this.students;
        },
        enumerable: true,
        configurable: true
    });
    TeachersService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ TeachersService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TeachersService_Factory() { return new TeachersService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: TeachersService, providedIn: "root" });
    return TeachersService;
}(HttpServiceBase));
if (false) {
    /** @type {?} */
    TeachersService.prototype.teacherDetails;
    /** @type {?} */
    TeachersService.prototype.students;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/admins.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AdminsService = /** @class */ (function (_super) {
    __extends(AdminsService, _super);
    function AdminsService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = { headers: new HttpHeaders({ Accept: 'application/json' }) };
        _this.url = "http://localhost:7900/admin";
        return _this;
    }
    Object.defineProperty(AdminsService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "admin/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AdminsService.prototype.getActivity$ = /**
     * @return {?}
     */
    function () {
        console.log("0000000000000000");
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'activityList',
        }));
    };
    /**
     * @return {?}
     */
    AdminsService.prototype.getTalents$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'talent',
        }));
    };
    /**
     * @return {?}
     */
    AdminsService.prototype.getYears$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'year',
        }));
    };
    /**
     * @param {?} classes
     * @return {?}
     */
    AdminsService.prototype.getStudentsByClass$ = /**
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentsByClass',
            params: { classes: classes }
        }));
    };
    /**
     * @param {?} newStudent
     * @return {?}
     */
    AdminsService.prototype.insertStudents$ = /**
     * @param {?} newStudent
     * @return {?}
     */
    function (newStudent) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertStudents',
            params: newStudent
        }));
    };
    /**
     * @return {?}
     */
    AdminsService.prototype.Search$ = /**
     * @return {?}
     */
    function () {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'Search',
        }));
    };
    /**
     * @param {?} letter
     * @return {?}
     */
    AdminsService.prototype.getStudentsForFilter = /**
     * @param {?} letter
     * @return {?}
     */
    function (letter) {
        return this.http.get(this.url + "/studentsList/" + letter);
    };
    /**
     * @param {?} form
     * @return {?}
     */
    AdminsService.prototype.insertTaskForStudent = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertTaskForStudent',
            params: form
        }));
    };
    /**
     * @param {?} nameTalent
     * @return {?}
     */
    AdminsService.prototype.addNewTalent$ = /**
     * @param {?} nameTalent
     * @return {?}
     */
    function (nameTalent) {
        console.log(nameTalent);
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertTalent',
            params: nameTalent
        }));
    };
    /**
     * @param {?} nameActivity
     * @return {?}
     */
    AdminsService.prototype.addNewActivity$ = /**
     * @param {?} nameActivity
     * @return {?}
     */
    function (nameActivity) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertActivity',
            params: nameActivity
        }));
    };
    /**
     * @return {?}
     */
    AdminsService.prototype.getDate$ = /**
     * @return {?}
     */
    function () {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getDate'
        }));
    };
    /**
     * @param {?} Date
     * @return {?}
     */
    AdminsService.prototype.insertDate = /**
     * @param {?} Date
     * @return {?}
     */
    function (Date) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertDate',
            body: { Date: Date }
        }));
    };
    /**
     * @return {?}
     */
    AdminsService.prototype.updateClass$ = /**
     * @return {?}
     */
    function () {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateClass'
        }));
    };
    /**
     * @param {?} fileToUpload
     * @return {?}
     */
    AdminsService.prototype.postFile$ = /**
     * @param {?} fileToUpload
     * @return {?}
     */
    function (fileToUpload) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'files',
            body: fileToUpload,
        }));
    };
    AdminsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ AdminsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AdminsService_Factory() { return new AdminsService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: AdminsService, providedIn: "root" });
    return AdminsService;
}(HttpServiceBase));
if (false) {
    /** @type {?} */
    AdminsService.prototype.options;
    /** @type {?} */
    AdminsService.prototype.url;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/connection.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConnectionService = /** @class */ (function (_super) {
    __extends(ConnectionService, _super);
    function ConnectionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ConnectionService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            console.log(this.config);
            return "" + this.config.ips.servicePath;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    ConnectionService.prototype.getTypeUser$ = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: id
        }));
    };
    ConnectionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ ConnectionService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConnectionService_Factory() { return new ConnectionService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: ConnectionService, providedIn: "root" });
    return ConnectionService;
}(HttpServiceBase));

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AdminsService, ApiComponent, ApiModule, ApiService, ConfigurationService, ConnectionService, StudentsService, TeachersService, HttpServiceBase as ɵa };
//# sourceMappingURL=api.js.map
